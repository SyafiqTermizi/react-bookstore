from factory.django import DjangoModelFactory
from factory import Faker, fuzzy

from .models import Author


class AuthorFactory(DjangoModelFactory):
    name = Faker('name')
    age = fuzzy.FuzzyInteger(24, 69)

    class Meta:
        model = Author
