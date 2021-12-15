from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404

from book.forms import PostForm, CommentForm
from book.models import Post, Tag, Comment


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    return render(request, "book/post_list.html", {
        "post_list": qs,
    })


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = Post.objects.get(pk=pk)
    tag_list = post.tag_set.all()
    comment_list = post.comment_set.all()
    return render(request, "book/post_detail.html", {
        "post": post, "tag_list": tag_list, "comment_list": comment_list,
    })


def post_new(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            saved_post = form.save()
            return redirect("book:post_detail", saved_post.pk)
    else:
        form = PostForm
    return render(request, "book/post_form.html", {
        'form': form,
    })


def post_edit(request: HttpRequest, pk:int) -> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            saved_post = form.save()
            return redirect("book:post_detail", saved_post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, "book/post_form.html", {
        "form": form,
    })


def comment_new(request: HttpRequest, post_pk: int) -> HttpResponse:
    post = get_object_or_404(Post, pk = post_pk)

    if request.method == "POST":
        form = CommentForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()
            return redirect("book:post_detail", post_pk)
    else:
        form = CommentForm()
    return render(request, "book/comment_form.html", {
        "form": form,
    })


def comment_edit(request: HttpRequest, post_pk: int, comment_pk: int) -> HttpResponse:
    comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == "POST":
        form = CommentForm(request.POST, request.FILES, instance=comment)
        if form.is_valid():
            form.save()
            return redirect("book:post_detail", post_pk)
    else:
        form = CommentForm(instance=comment)
    return render(request, "book/comment_form.html", {
        "form": form,
    })







