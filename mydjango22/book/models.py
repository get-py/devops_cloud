from django.db import models
from django.db.models import CASCADE


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimestampedModel):
    category = models.ForeignKey("Category", on_delete=CASCADE)
    author_name = models.CharField(max_length=20, db_index=True)
    title = models.CharField(max_length=100, db_index=True)
    photo = models.ImageField(blank=True, upload_to="book/post/%Y/%m/%d")
    content = models.TextField()
    tag_set = models.ManyToManyField("Tag", blank=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ["-id"]
        verbose_name = "포스팅"
        verbose_name_plural = "포스팅 목록"


class Tag(TimestampedModel):
    name = models.CharField(max_length=100, unique=True, blank=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "태그"
        verbose_name_plural = "태그 목록"
        ordering = ["name"]


class Comment(TimestampedModel):
    author_name = models.CharField(max_length=20)
    message = models.TextField()
    post = models.ForeignKey("Post", on_delete=CASCADE)

    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"
        ordering = ["-id"]


class Category(TimestampedModel):
    name = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "카테고리"
        verbose_name_plural = "카테고리 목록"
        ordering = ["name"]