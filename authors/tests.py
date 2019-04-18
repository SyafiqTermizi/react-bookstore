from django.test import TestCase

from .models import Author


class TestAuthor(TestCase):

    def test_str(self):
        # calling author's __str__ method should return author's name
        a = Author.objects.create(name='test', age=45)
        self.assertEqual(a.__str__(), a.name)
