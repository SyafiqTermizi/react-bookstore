from rest_framework import serializers

from books.serializers import BookSerializer
from books.models import Book

from .models import Author


class AuthorSerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True)

    class Meta:
        model = Author
        fields = ('name', 'age', 'pk', 'books')

    def create(self, validated_data):
        books = validated_data.pop('books')
        author = Author.objects.create(**validated_data)
        for book in books:
            Book.objects.create(author=author, **book)
        return author
