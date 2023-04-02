from django.urls import path

from server.api_data.views import ListAllPlacesApiView, CreatePlaceApiView, ListAnimalsPlacesApiView, \
    ListWaterPlacesApiView, ListHeightPlacesApiView, ListOtherPlacesApiView, DetailsPlaceApiView, DeletePlaceApiView, \
    EditPlaceApiView, AddLikeUnlikeView

urlpatterns = (
    path('all/', ListAllPlacesApiView.as_view(), name="all places"),
    path('create/', CreatePlaceApiView.as_view(), name="create place"),
    path('animals/', ListAnimalsPlacesApiView.as_view(), name="animals"),
    path('water/', ListWaterPlacesApiView.as_view(), name="water"),
    path('height/', ListHeightPlacesApiView.as_view(), name="height"),
    path('other/', ListOtherPlacesApiView.as_view(), name="other"),
    path('details/<int:pk>', DetailsPlaceApiView.as_view(), name="details place"),
    path('delete/<int:pk>', DeletePlaceApiView.as_view(), name="delete place"),
    path('edit/<int:pk>', EditPlaceApiView.as_view(), name="edit place"),
    path('like/<int:pk>', AddLikeUnlikeView.as_view(), name="edit place"),
)
