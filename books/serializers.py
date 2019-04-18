from rest_framework import serializers

from .models import Book


class BookSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.name', read_only=True)

    class Meta:
        model = Book
        fields = ('title', 'synopsis', 'genre', 'author', 'pk')
