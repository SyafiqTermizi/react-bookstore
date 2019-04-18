from factory.django import DjangoModelFactory
from factory import Faker, SubFactory, fuzzy

from authors.factory import AuthorFactory

from .models import Book


class BookFactory(DjangoModelFactory):
    title = Faker('sentence')
    synopsis = Faker('paragraph')
    genre = fuzzy.FuzzyInteger(1, 4)
    author = SubFactory(AuthorFactory)

    class Meta:
        model = Book
