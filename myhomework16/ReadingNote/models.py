from django.db import models


class Books(models.Model):
    title = models.CharField(max_length=100)
    insight = models.TextField()
    cover = models.IntegerField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    recommendation = models.BooleanField()