from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth import get_user_model
from server.api_data.validators import OptionalSchemeURLValidator

UserModel = get_user_model()


class Places(models.Model):
    MAX_TITLE_LENGTH = 30
    CITY_MAX_LENGTH = 50
    MIN_LATITUDE_VALUE = -90
    MAX_LATITUDE_VALUE = 90
    MIN_LONGITUDE_VALUE = -180
    MAX_LONGITUDE_VALUE = 180
    title = models.CharField(
        max_length=MAX_TITLE_LENGTH,
        null=False,
        blank=False,
        unique=True,
    )

    city = models.CharField(
        max_length=CITY_MAX_LENGTH,
    )

    description = models.TextField()

    latitude = models.FloatField(
        validators=[
            MinValueValidator(MIN_LATITUDE_VALUE),
            MaxValueValidator(MAX_LATITUDE_VALUE)
        ],
    )

    longitude = models.FloatField(
        validators=[
            MinValueValidator(MIN_LONGITUDE_VALUE),
            MaxValueValidator(MAX_LONGITUDE_VALUE)
        ],
    )

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
