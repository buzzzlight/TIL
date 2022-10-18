from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import ArticlesForm
from .models import Articles

# Create your views here.
def index(request):
    articles = Articles.objects.order_by("-pk")
    context = {
        "articles" : articles,
    }
    return render(request, "articles/index.html", context)


def detail(request, pk):
    article = Articles.objects.get(pk=pk)
    context = {
        "article": article,
    }
    return render(request, "articles/detail.html", context)


@login_required
def create(request):
    if request.method == "POST":
        form = ArticlesForm(request.POST, request.FILES)
        print(request.FILES)
        # if request.POST.get("grade") == "":
        #     grade = 0
        # else:
        #     grade = float(request.POST.get("grade")) and 0 <= grade <= 5:
        if form.is_valid():
            # Articles.objects.create(
            #     title=form.data.get("title"),
            #     content=form.data.get("content"),
            #     movie_name=form.data.get("movie_name"),
            #     grade=grade,
            #     user=request.user,
            # )
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect("articles:index")
    else:
        form = ArticlesForm()
    context = {
        "form": form,
    }
    return render(request, "articles/create.html", context)


@login_required
def update(request, pk):
    article = Articles.objects.get(pk=pk)

    if request.user != article.user:
        return redirect("articles:index")

    if request.method == "POST":
        form = ArticlesForm(request.POST, instance=article)
        if request.POST.get("grade") == "":
            grade = 0
        else:
            grade = float(request.POST.get("grade"))
        if form.is_valid() and 0 <= grade <= 5:
            article.title = form.data.get("title")
            article.content = form.data.get("content")
            article.movie_name = form.data.get("movie_name")
            article.grade = grade
            article.save()
            return redirect("articles:detail", pk)
    else:
        form = ArticlesForm(instance=article)
    context = {
        "form": form,
        "grade": article.grade,
    }
    return render(request, "articles/update.html", context)


@login_required
def delete(request, pk):
    article = Articles.objects.get(pk=pk)

    if request.user != article.user:
        return redirect("articles:index")

    if request.method == "POST":
        if request.user == article.user:
            article.delete()
            return redirect("articles:index")
    else:
        return redirect("articles:detail", pk)
