from django.urls import path

from book import views

app_name = 'book'

urlpatterns = [
    path("", views.post_list, name="post_list"),
    path("<int:pk>", views.post_detail, name="post_detail"),
    path("new/", views.post_new, name="post_new"),
    path("<int:pk>/edit/", views.post_edit, name="post_edit"),
    path("<int:post_pk>/comment/new/", views.comment_new, name="comment_new"),
    path("<int:post_pk>/comment/<int:pk>/edit/", views.comment_edit, name="comment_edit"),
]
