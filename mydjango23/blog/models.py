import tablib
from django.core.validators import RegexValidator
from django.db import models
from django.db.models import CASCADE
from django.urls import reverse


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(TimestampedModel):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["name"]


class Post(TimestampedModel):
    category = models.ForeignKey("Category", on_delete=CASCADE)
    title = models.CharField(max_length=200, db_index=True)
    content = models.TextField()
    photo = models.ImageField(upload_to="blog/post/%Y/%m/%d")
    tag_set = models.ManyToManyField("Tag", blank=True)
    status = models.CharField(
        max_length=1,
        choices=[
            ("D", 'Draft'),  # DB 저장값, Label
            ('P', 'Published'),
        ],
        db_index=True,
        default='D',
    )

    def __str__(self):
        return self.title

    # post detail 주소 문자열을 반환
    def get_absolute_url(self) -> str:
        return reverse("blog:post_detail", args=[self.pk])

    @classmethod
    def get_tabular_data(cls, queryset, format="xlsx") -> bytes:
        dataset = tablib.Dataset()
        dataset.headers = ["id", "title", "created_at", "updated_at"]

        for post in queryset:
            dataset.append([
                post.id,
                post.title,
                # tzinfo 가 있는 datetime 객체는 tablib에서 변환이 현재 지원되지 않아
                # 문자열로 변환을 하겠습니다.
                post.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                post.updated_at.strftime("%Y-%m-%d %H:%M:%S"),
            ])
        return dataset.export(format)

    class Meta:
        ordering = ['-id']


class Comment(TimestampedModel):
    post = models.ForeignKey(Post, on_delete=CASCADE)
    message = models.TextField()

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-id']


class Tag(TimestampedModel):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]


class Subscriber(TimestampedModel):
    phone = models.CharField(
        max_length=15,
        validators=[
            RegexValidator(r'^\d{3,4}-?\d{3,4}-?\d{4}$')
        ])
