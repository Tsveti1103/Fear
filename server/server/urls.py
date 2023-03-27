from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('server.api_common.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('places/', include('server.api_data.urls')),
    path('user/', include('server.api_auth.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
