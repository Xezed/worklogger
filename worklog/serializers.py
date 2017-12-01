from rest_framework import serializers

from worklog.models import LogEntry


class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = ('id', 'duration', 'project', 'remarks', 'date', 'late_log')

