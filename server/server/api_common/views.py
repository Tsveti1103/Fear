from rest_framework import generics as rest_generic_views

from server.api_common.models import ContactUs
from server.api_common.serializers import ContactUsCreateSerializer


class ContactUsApiView(rest_generic_views.CreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsCreateSerializer

