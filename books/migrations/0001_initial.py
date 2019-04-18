# Generated by Django 3.0 on 2019-04-02 13:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('authors', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('synopsis', models.TextField(blank=True)),
                ('genre', models.SmallIntegerField(choices=[(1, 'Fantasy'), (2, 'Science Fiction'), (3, 'Romance'), (4, 'Mystery'), (5, 'Dystopia')])),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authors.Author')),
            ],
        ),
    ]