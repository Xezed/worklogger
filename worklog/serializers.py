from rest_framework import serializers

from worklog.models import LogEntry


class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = ('duration', 'project', 'remarks', 'date', 'late_log')

