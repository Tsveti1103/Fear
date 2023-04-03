from django.urls import path

from server.api_auth.views import RegisterApiView, LoginApiView, LogoutApiView, DeleteApiView

urlpatterns = (
    path('register/', RegisterApiView.as_view(), name='api register user'),
    path('login/', LoginApiView.as_view(), name='api login user'),
    path('logout/', LogoutApiView.as_view(), name='api logout user'),
    path('delete/<int:pk>', DeleteApiView.as_view(), name='api delete user'),
)