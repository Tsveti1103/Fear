from django.db import models


class ContactUs(models.Model):
    SUBJECT_MAX_LENGTH = 30
    email = models.EmailField(
    )

    subject = models.CharField(
        null=False,
        blank=False,
        max_length=SUBJECT_MAX_LENGTH
    )
    message = models.TextField(
        null=False,
        blank=False,
    )
    publication_date_and_time = models.DateTimeField(
        auto_now_add=True,
        blank=True,
        null=False,
    )

    is_checked_by_staff = models.BooleanField(default=False)

    def __str__(self):
        return self.subject
