from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.api_data.models import Places

UserModel = get_user_model()


class PlacesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = ('id', 'title', 'description', 'image', 'user', 'likes')


class PlacesDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = '__all__'


class PlacesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        exclude = ('id', 'user')
        validators = [
            serializers.UniqueTogetherValidator(
                queryset=model.objects.all(),
                fields=('longitude', 'latitude'),
                message="There is already a place at these coordinates."
            )
        ]

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class ShortUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id',)


class LikesSerializer(serializers.ModelSerializer):
    likes = ShortUserSerializer(many=True, required=False)
    image = serializers.ImageField(required=False)

    class Meta:
        model = Places
        fields = '__all__'


class PlacesEditSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Places
        exclude = ('id', 'user', 'likes',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
