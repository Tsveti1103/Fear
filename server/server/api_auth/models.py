from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser, UserManager
from django.core.validators import MinLengthValidator
from django.db import models
from django.contrib.auth.models import AbstractUser


class AppUser(AbstractBaseUser, PermissionsMixin):
    USERNAME_MAX_LENGTH = 30
    USERNAME_MIN_LENGTH = 3
    username = models.CharField(
        max_length=USERNAME_MAX_LENGTH,
        unique=True,
        error_messages={
            'unique': ("A user with that username already exists."),
        },
        validators=[MinLengthValidator(USERNAME_MIN_LENGTH)]
    )
    email = models.EmailField(
    )
    is_staff = models.BooleanField(
        default=False,
    )
    is_active = models.BooleanField(
        default=True,
    )
    date_joined = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.username

    objects = UserManager()
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
