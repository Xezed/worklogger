import datetime
from django.contrib.auth.models import User
from django.db import models


class LogEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='entries')
    date = models.DateField()
    late_log = models.BooleanField(default=False)
    project = models.CharField(max_length=150)
    remarks = models.CharField(max_length=150)
    duration = models.DurationField()

    class Meta:
        verbose_name_plural = 'Log entries'

    def save(self, *args, **kwargs):
        if self.date < datetime.date.today():
            self.late_log = True
        super(LogEntry, self).save(*args, **kwargs)

    def __str__(self):
        return self.project