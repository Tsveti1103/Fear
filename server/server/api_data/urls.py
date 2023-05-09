from django.urls import path

from server.api_data.views import ListAllPlacesApiView, CreatePlaceApiView, ListAnimalsPlacesApiView, \
    ListWaterPlacesApiView, ListHeightPlacesApiView, ListOtherPlacesApiView, DetailsPlaceApiView, DeletePlaceApiView, \
    EditPlaceApiView, AddLikeUnlikeView, ListUserCreatedPlacesApiView, ListUserLikedPlacesApiView, TopPlacesApiView

urlpatterns = (
    path('all', ListAllPlacesApiView.as_view(), name="all places"),
    path('create', CreatePlaceApiView.as_view(), name="create place"),
    path('animals', ListAnimalsPlacesApiView.as_view(), name="animals"),
    path('water', ListWaterPlacesApiView.as_view(), name="water"),
    path('height', ListHeightPlacesApiView.as_view(), name="height"),
    path('other', ListOtherPlacesApiView.as_view(), name="other"),
    path('details/<int:pk>', DetailsPlaceApiView.as_view(), name="details place"),
    path('delete/<int:pk>', DeletePlaceApiView.as_view(), name="delete place"),
    path('edit/<int:pk>', EditPlaceApiView.as_view(), name="edit place"),
    path('like/<int:pk>', AddLikeUnlikeView.as_view(), name="edit place"),
    path('userplaces', ListUserCreatedPlacesApiView.as_view(), name="user places"),
    path('userlikedplaces', ListUserLikedPlacesApiView.as_view(), name="user liked places"),
    path('topplaces', TopPlacesApiView.as_view(), name="top places"),
)
