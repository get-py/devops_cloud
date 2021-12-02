from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


class Video(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    # TODO: 업로드 되는 파일이 비디오 파일인지 여부 검사
    video_file = models.FileField()
    thumbnail_file = models.ImageField()
    thumbnail_file_thumb = ImageSpecField(
        source='thumbnail_file',
        processors=[ResizeToFill(100, 50)],
        format='JPEG',
        options={'quality': 60},
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
