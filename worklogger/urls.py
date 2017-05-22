from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from worklog.views import HomePage

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, settings.MEDIA_ROOT)

urlpatterns += [
    url(r'', HomePage.as_view(), name='home'),
]