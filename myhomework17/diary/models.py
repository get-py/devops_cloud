from django.db import models
from django.db.models import CASCADE


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimestampedModel):
    author_name = models.CharField(max_length=20)
    title = models.CharField(max_length=200, db_index=True)
    content = models.TextField()
    photo = models.ImageField(upload_to='diary/post/%Y/%m/%d')
    tag_set = models.ManyToManyField('Tag', blank=True)


class Tag(TimestampedModel):
    name = models.CharField(max_length=200, db_index=True)


class Comment(TimestampedModel):
    author_name = models.CharField(max_length=20)
    message = models.TextField()
    post = models.ForeignKey(Post, on_delete=CASCADE)
