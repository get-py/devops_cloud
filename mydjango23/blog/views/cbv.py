# Class Based View(CBV)
#    - 뷰 함수를 만들어주는 클래스
from django.urls import reverse, reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from blog.forms import PostForm
from blog.models import Post

post_list = ListView.as_view(
    model=Post,
)

post_detail = DetailView.as_view(
    model=Post,
)


class PostCreatedView(CreateView):
    model = Post
    form_class = PostForm

post_new = PostCreatedView.as_view()



class PostUpdateView(UpdateView):
    model = Post
    form_class = PostForm

post_edit = PostUpdateView.as_view()


post_delete = DeleteView.as_view(
    model=Post,
    success_url=reverse_lazy('blog:post_list'),
)
