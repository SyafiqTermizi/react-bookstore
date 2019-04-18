from django.urls import path
from django.views.generic import TemplateView

app_name = 'authors'
urlpatterns = (
    path('', TemplateView.as_view(template_name='authors/list.html'), name='list'),
)
