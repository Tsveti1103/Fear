from django.contrib import admin

from server.api_data.models import Places


@admin.register(Places)
class PlacesAdmin(admin.ModelAdmin):
    pass
