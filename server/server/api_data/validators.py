from django.core import validators


class OptionalSchemeURLValidator(validators.URLValidator):
    def __call__(self, value):
        if '://' not in value:
            value = 'https://' + value
        super(OptionalSchemeURLValidator, self).__call__(value)
