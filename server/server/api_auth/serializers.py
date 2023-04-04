from django.core import exceptions
from django.contrib.auth import get_user_model, password_validation
from rest_framework import serializers
from rest_framework.authtoken.models import Token

UserModel = get_user_model()


class CreateUserSerializer(serializers.ModelSerializer):
    token = ''
    id = ''

    class Meta:
        model = UserModel
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        # create user
        user = super().create(validated_data)
        self.id = user.id
        self.token = Token.objects.get_or_create(user=user)
        # Hashing the password
        user.set_password(user.password)
        # save user
        user.save()
        return user

    def validate(self, data):
        user = UserModel(**data)
        password = data.get('password')
        errors = {}
        try:
            password_validation.validate_password(password, user)
        except exceptions.ValidationError as e:
            errors['password'] = list(e.messages)
        if errors:
            raise serializers.ValidationError(errors)
        return super().validate(data)

    def to_representation(self, instance):
        # call user registration
        user_representation = super().to_representation(instance)
        # remove password from user representation
        user_representation.pop('password')
        user_representation['token'] = self.token[0].pk
        user_representation['user_id'] = self.id
        return user_representation


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('username', 'email')

    def validate_email(self, value):
        user = self.context['request'].user
        if UserModel.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError({"email": "This email is already in use."})
        return value

    def validate_username(self, value):
        user = self.context['request'].user
        if UserModel.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError({"username": "This username is already in use."})
        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user
        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.email = validated_data['email']
        instance.username = validated_data['username']
        instance.save()

        return instance


