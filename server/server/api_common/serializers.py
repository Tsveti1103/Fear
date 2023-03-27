from rest_framework import serializers

from server.api_common.models import ContactUs


class ContactUsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        exclude = ('id',)
