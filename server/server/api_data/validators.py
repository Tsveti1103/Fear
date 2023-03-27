import regex as re
from django.core.exceptions import ValidationError
from django.core import validators


def only_letters_validator(value, message):
    for symbol in value:
        if not symbol.isalpha():
            raise ValidationError(message)


class OptionalSchemeURLValidator(validators.URLValidator):
    def __call__(self, value):
        if '://' not in value:
            value = 'http://' + value
        super(OptionalSchemeURLValidator, self).__call__(value)
