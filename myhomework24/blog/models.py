from django.db import models
from django.db.models import CASCADE


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Shop(TimestampedModel):
    name = models.CharField(max_length=50, db_index=True)
    telephone = models.CharField(max_length=15)
    description = models.TextField(blank=True)
    tag_set = models.ManyToManyField("Tag", blank=True)
    category = models.ForeignKey("Category", on_delete=CASCADE)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["name"]


class Category(TimestampedModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["name"]


class Tag(TimestampedModel):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["name"]


class Review(TimestampedModel):
    shop = models.ForeignKey(Shop, on_delete=CASCADE)
    author_name = models.CharField(max_length=20)
    message = models.TextField()
