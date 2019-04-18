from rest_framework.viewsets import ModelViewSet
from django_filters import rest_framework as filters

from .models import Author
from .serializers import AuthorSerializer
from .filter import AuthorFilter


class AuthorViewset(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = AuthorFilter
