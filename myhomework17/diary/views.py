from django.shortcuts import render

from django.http import HttpRequest, HttpResponse

from diary.models import Post


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    return render(request,
                  'diary/post_list.html',
                  {'post_list': qs})
