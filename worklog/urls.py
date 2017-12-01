from rest_framework.routers import DefaultRouter

from .views import LogEntryViewSet


router = DefaultRouter()
router.register(r'', LogEntryViewSet, base_name='api')
urlpatterns = router.urls
