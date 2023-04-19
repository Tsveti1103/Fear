from rest_framework import generics as rest_generic_views, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from server.api_data.models import Places
from server.api_data.serializers import PlacesCreateSerializer, PlacesListSerializer, PlacesDetailsSerializer, \
    PlacesEditSerializer, LikesSerializer


class CreatePlaceApiView(rest_generic_views.CreateAPIView):
    queryset = Places.objects.all()
    serializer_class = PlacesCreateSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (
        permissions.IsAuthenticated,
    )


class DeletePlaceApiView(rest_generic_views.DestroyAPIView):
    queryset = Places.objects.all()


class EditPlaceApiView(rest_generic_views.UpdateAPIView):
    queryset = Places.objects.all()
    serializer_class = PlacesEditSerializer
    parser_classes = (MultiPartParser, FormParser)


class AddLikeUnlikeView(rest_generic_views.UpdateAPIView):
    queryset = Places.objects.all()
    serializer_class = LikesSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request, *args, **kwargs):
        pk = kwargs['pk']
        place = Places.objects.get(pk=pk)
        if place.likes.filter(pk=request.user.pk).exists():
            place.likes.remove(request.user)
        else:
            place.likes.add(request.user)
        return self.update(request, *args, **kwargs)


class DetailsPlaceApiView(rest_generic_views.RetrieveAPIView):
    queryset = Places.objects.all()
    serializer_class = PlacesDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.order_by('-id')
        return queryset


class ListAllPlacesApiView(rest_generic_views.ListAPIView):
    queryset = Places.objects.all()
    serializer_class = PlacesListSerializer

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.order_by('-id')
        return queryset


class ListAnimalsPlacesApiView(ListAllPlacesApiView):
    queryset = Places.objects.filter(fear_animals=True)


class ListWaterPlacesApiView(ListAllPlacesApiView):
    queryset = Places.objects.filter(fear_water=True)


class ListHeightPlacesApiView(ListAllPlacesApiView):
    queryset = Places.objects.filter(fear_height=True)


class ListOtherPlacesApiView(ListAllPlacesApiView):
    queryset = Places.objects.filter(fear_other=True)


class ListUserCreatedPlacesApiView(ListAllPlacesApiView):
    queryset = Places.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(user=self.request.user.pk)
        return queryset


class ListUserLikedPlacesApiView(ListAllPlacesApiView):
    queryset = Places.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        user = self.request.user.pk
        queryset = queryset.filter(likes__in=[user])
        return queryset
