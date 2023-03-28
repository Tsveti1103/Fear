from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.api_data.models import Places

UserModel = get_user_model()


class PlacesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = ('id', 'title', 'description', 'image', 'user')


class PlacesDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = '__all__'


class PlacesCreateSerializer(serializers.ModelSerializer):
    # image_url = serializers.ImageField(required=False)

    class Meta:
        model = Places
        exclude = ('id', 'user')

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class PlacesEditSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Places
        exclude = ('id', 'user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
