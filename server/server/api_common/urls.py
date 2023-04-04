from django.urls import path

from server.api_common.views import ContactUsApiView

urlpatterns = (
    path('contactus', ContactUsApiView.as_view(), name="contactus"),
)
