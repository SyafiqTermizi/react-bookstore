from rest_framework.viewsets import ModelViewSet
from django_filters import rest_framework as filters

from .models import Book
from .serializers import BookSerializer
from .filter import BookFilter


class BookViewset(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = BookFilter
