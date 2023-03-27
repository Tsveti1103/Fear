
from django.db import models
from django.contrib.auth import get_user_model
from server.api_data.validators import OptionalSchemeURLValidator

UserModel = get_user_model()


class Places(models.Model):
    MAX_NAME_LENGTH = 15
    CITY_MAX_LENGTH = 50

    title = models.CharField(
        max_length=MAX_NAME_LENGTH,
        null=False,
        blank=False,
        unique=True,
    )

    city = models.CharField(
        max_length=CITY_MAX_LENGTH,
    )

    description = models.TextField()

    latitude = models.FloatField()

    longitude = models.FloatField()

    website = models.URLField(
        validators=[OptionalSchemeURLValidator]
    )

    image = models.ImageField(
        upload_to='places',
    )

    cost_free = models.BooleanField(
        default=False,
    )
    fear_water = models.BooleanField(
        default=False,
    )
    fear_height = models.BooleanField(
        default=False,
    )
    fear_animals = models.BooleanField(
        default=False,
    )
    fear_other = models.BooleanField(
        default=False,
    )
    user = models.ForeignKey(
        UserModel,
        on_delete=models.SET_NULL,
        null=True,
    )

    def __str__(self):
        return self.title

    class Meta:
        unique_together = ['longitude', 'latitude']

    def unique_error_message(self, model_class, unique_check):
        if model_class == type(self) and unique_check == ('longitude', 'latitude'):
            return 'There is already a place at these coordinates'
        else:
            return super(Places, self).unique_error_message(model_class, unique_check)