from django.contrib import admin

from book.forms import PostForm, CommentForm
from book.models import Post, Tag, Comment, Category


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostForm


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    form = CommentForm


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass
