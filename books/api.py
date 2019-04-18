from rest_framework import routers

from .views import BookViewset

router = routers.SimpleRouter()
router.register(r'books', BookViewset)
urlpatterns = router.urls
