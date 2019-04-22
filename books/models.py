from django.db import models

from authors.models import Author

GENRE = [
    (1, 'Fantasy'),
    (2, 'Science Fiction'),
    (3, 'Romance'),
    (4, 'Mystery'),
    (5, 'Dystopia')
]


class Book(models.Model):
    title = models.CharField(max_length=255)
    synopsis = models.TextField(blank=True)
    genre = models.SmallIntegerField(choices=GENRE)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='books'
    )
    created_by = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.title
