from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from delicious.models import Shop


def shop_list(request: HttpRequest) -> HttpResponse:
    qs = Shop.objects.all()
    # template_name = "delicious/shop_list.html"
    context_data = {
        "shop_list": qs,
    }
    return render(request, "delicious/shop_list.html", context_data)


def shop_detail(request: HttpRequest, pk: int) -> HttpResponse:
    shop = Shop.objects.get(pk=pk)
    #template_name = "delicious/shop_detail.html"
    context_data = {
        "shop": shop,
    }
    return render(request, "delicious/shop_detail.html", context_data)