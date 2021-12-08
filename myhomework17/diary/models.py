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

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = '포스트'
        verbose_name_plural = '포스팅 목록'


class Tag(TimestampedModel):
    name = models.CharField(max_length=200, db_index=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = '태그'
        verbose_name_plural = "태그 목록"


class Comment(TimestampedModel):
    author_name = models.CharField(max_length=20)
    message = models.TextField()
    post = models.ForeignKey(Post, on_delete=CASCADE)

    class Meta:
        verbose_name = '댓글'
        verbose_name_plural = '댓글 목록'
