from rest_framework import routers

from .views import AuthorViewset

router = routers.SimpleRouter()
router.register(r'authors', AuthorViewset)
urlpatterns = router.urls
