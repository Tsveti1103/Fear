from django.contrib import admin

from server.api_common.models import ContactUs


@admin.register(ContactUs)
class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('subject', 'email', 'is_checked_by_staff')
