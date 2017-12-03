from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import TemplateView
from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from rest_framework.permissions import IsAuthenticated, AllowAny

from worklog.models import LogEntry
from worklog.serializers import LogEntrySerializer


class HomePage(TemplateView):
    template_name = 'dist/index.html'


class LogEntryViewSet(viewsets.ModelViewSet):
    serializer_class = LogEntrySerializer
    permission_classes = [AllowAny]
    filter_backends = [SearchFilter]
    search_fields = ['date']

    def get_queryset(self):
        # return LogEntry.objects.filter(user=self.request.user)
        return LogEntry.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
