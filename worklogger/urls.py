from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

from worklog.views import HomePage, LogEntryViewSet

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^auth/registration/', include('rest_auth.registration.urls')),
    url(r'^auth/', include('rest_auth.urls')),
    # url(r'^api-token-auth/', obtain_jwt_token),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

router = DefaultRouter()
router.register(r'entries', LogEntryViewSet, base_name='api')
urlpatterns += router.urls

# urlpatterns += [
#     url(r'', HomePage.as_view(), name='home'),
# ]