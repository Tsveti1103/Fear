from rest_framework import generics as rest_generic_views, permissions, serializers
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
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

    # only authenticated users can view this
    # permission_classes = (
    #     permissions.IsAuthenticated,
    # )

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

# class ListCreatePlacesApiView(rest_generic_views.ListCreateAPIView):
#     queryset = Places.objects.all()
#     # add two serializers to this view
#     create_serializer_class = PlacesCreateSerializer
#     list_serializer_class = PlacesListSerializer
#     filter_names = ('name',)
#
#     # only authenticated users can view this
#     permission_classes = (
#         permissions.IsAuthenticated,
#     )
#
#     # use list_serializer_class or create_serializer_class
#     def get_serializer_class(self):
#         if self.request.method == 'GET':
#             return self.list_serializer_class
#         return self.create_serializer_class
#
#     def get_queryset(self):
#         queryset = self.queryset
#         queryset = queryset.filter(user=self.request.user)
#         # simple add filter to the queryset
#         # category_id = self.request.query_params.get('category', None)
#         # if category_id:
#         #     queryset = queryset.filter(category=category_id)
#         # return queryset
#         return self.__apply_filters_to_queryset(queryset)
#
#     def __apply_filters_to_queryset(self, queryset):
#         queryset_params = {}
#         for filter_name in self.filter_names:
#             filter_id = self.request.query_params.get(filter_name, None)
#             if filter_id:
#                 queryset_params[f'{filter_name}'] = filter_id
#
#         return queryset.filter(**queryset_params)
