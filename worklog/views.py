from django.views.generic.base import TemplateView
from rest_framework import viewsets

from worklog.models import LogEntry
from worklog.serializers import LogEntrySerializer


class HomePage(TemplateView):
    template_name = 'angular/index.html'


class LogEntryViewSet(viewsets.ModelViewSet):
    serializer_class = LogEntrySerializer

    def get_queryset(self):
        return LogEntry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)