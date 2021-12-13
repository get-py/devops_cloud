from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404

# /shop/new/
from shop.forms import ShopForm
from shop.models import Shop, Category, Tag


def shop_list(request: HttpRequest) -> HttpResponse:
    category_qs = Category.objects.all()
    qs = Shop.objects.all()
    category_id: str = request.GET.get("category_id", "")
    if category_id:
        qs = qs.filter(category__pk=category_id)

    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(name__icontains=query)


    return render(request, "shop/shop_list.html", {
        "category_list": category_qs,
        "shop_list": qs,
    })


def shop_detail(request: HttpRequest, pk: int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)
    return render(request, "shop/shop_detail.html", {
        "shop": shop,
    })


def shop_new(request: HttpRequest) -> HttpResponse:
    # raise NotImplementedError("구현 예정")      # 아직 구현 안 했다고 보여줌

    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES)
        if form.is_valid():
            saved_post = form.save()

            tag_list = []
            tags = form.cleaned_data.get("tags", "")
            for word in tags.split(","):
                tag_name = word.strip()
                tag, __ = Tag.objects.get_or_create(name=tag_name)
                tag_list.append(tag)
            saved_post.tag_set.clear() # 간단구현을 위해 clear 호출
            saved_post.tag_set.add(*tag_list)
            return redirect("shop:shop_detail", saved_post.pk)
    else:
        form = ShopForm()
    return render(request, 'shop/shop_form.html', {
        'form': form,
    })


