from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

import articles
from .forms import ArticlesForm, CommentForm
from .models import Articles, Comment
from django.contrib import messages

# Create your views here.
def index(request):
    articles = Articles.objects.order_by("-pk")
    context = {
        "articles" : articles,
    }
    return render(request, "articles/index.html", context)


def detail(request, pk):
    article = Articles.objects.get(pk=pk)
    comment_form = CommentForm()
    context = {
        'article': article,
        'comments': article.comment_set.all(),
        'comment_form' : comment_form,
    }
    return render(request, "articles/detail.html", context)


@login_required
def create(request):
    if request.method == "POST":
        form = ArticlesForm(request.POST, request.FILES)
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
            messages.success(request, '글 작성 완료')
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
        form = ArticlesForm(request.POST, request.FILES, instance=article)
        if request.POST.get("grade") == "":
            grade = 0
        else:
            grade = float(request.POST.get("grade"))
        if form.is_valid() and 0 <= grade <= 5:
            # article.title = form.data.get("title")
            # article.content = form.data.get("content")
            # article.movie_name = form.data.get("movie_name")
            # article.grade = grade
            # article.image = form.data.get("image")
            form.save()
            return redirect("articles:detail", pk)
    else:
        form = ArticlesForm(instance=article)
    context = {
        "form": form,
        # "grade": article.grade,
    }
    return render(request, "articles/create.html", context)


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


def comment_create(request, pk):
    if request.user.is_authenticated:
        article = Articles.objects.get(pk=pk)
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.article = article
            comment.user = request.user
            comment.save()
        return redirect('articles:detail', article.pk)
    return redirect('accounts:login')


def comment_delete(request, article_pk, comment_pk):
    if request.user.is_authenticated:
        comment = Comment.objects.get(pk=comment_pk)
        if request.user == comment.user:
            comment.delete()
    return redirect('articles:detail', article_pk)