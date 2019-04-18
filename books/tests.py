from django.test import TestCase

from authors.models import Author

from .models import Book


class TestBook(TestCase):

    def test_str(self):
        # calling Book __str__ method should return book's title
        a = Author.objects.create(name='test', age=45)
        b = Book.objects.create(title='test', genre=1, author=a)
        self.assertEqual(b.__str__(), b.title)
