from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from blog.forms import ShopForm
from blog.models import Shop

shop_list = ListView.as_view(
    model=Shop,
)

shop_detail = DetailView.as_view(
    model=Shop,
)

shop_new = CreateView.as_view(
    model=Shop,
    form_class=ShopForm,

    success_url=reverse_lazy("blog:shop_list"),
)

shop_edit = UpdateView.as_view(
    model=Shop,
    form_class=ShopForm,

    success_url=reverse_lazy("blog:shop_list")
)

shop_delete = DeleteView.as_view(
    model=Shop,

    success_url=reverse_lazy("blog:shop_list")
)