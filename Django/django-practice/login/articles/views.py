from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST, require_safe
import articles
from .forms import ArticlesForm, CommentForm
from .models import Articles, Comment
from django.contrib import messages
from django.http import JsonResponse

# Create your views here.
def index(request):
    articles = Articles.objects.order_by("-pk")
    context = {
        "articles" : articles,
    }
    return render(request, "articles/index.html", context)


def detail(request, pk):
    # article = Articles.objects.get(pk=pk)
    article = get_object_or_404(Articles, pk=pk)
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
            article = form.save(commit=False)
            article.user = request.user
            article.save()
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
        # (1) 아무말 없이 메인화면으로 보내기
        # return redirect("articles:index")
        # (2) flash message 활용
        # messages.warning(request, '작성자만 수정할 수 있어요!')
        # return redirect('articles.detail', article.pk)
        # (3) 403 에러메세지 보내기
        from django.http import HttpResponseForbidden
        return HttpResponseForbidden()
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

@login_required
def comment_create(request, pk):
    if request.user.is_authenticated:
        article = get_object_or_404(Articles, pk=pk)
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.article = article
            comment.user = request.user
            comment.save()
            return redirect('articles:detail', pk)
    return redirect('accounts:login')


@login_required
def comment_delete(request, article_pk, comment_pk):
    if request.user.is_authenticated:
        comment = Comment.objects.get(pk=comment_pk)
        if request.user == comment.user:
            comment.delete()
    return redirect('articles:detail', article_pk)


@login_required
def comment_update(request, article_pk, comment_pk):
    if request.user.is_authenticated:
        comment = Comment.objects.get(pk=comment_pk)
        comment_form = CommentForm(instance=comment)
        if request.method == "POST":
            update_form = CommentForm(request.POST, instance=comment)
            if request.user == comment.user:
                update_form.save()
                return redirect('articles:detail', article_pk)
    return redirect('accounts:login')


@login_required
def like(request, pk):
    article = Articles.objects.get(pk=pk)
    if article.like_users.filter(id=request.user.id).exists():
    # if request.user in article.like_users.all():
        article.like_users.remove(request.user)
        is_liked = False
    else:
        article.like_users.add(request.user)
        is_liked = True
    context = {
        'isLiked': is_liked,
        'likeCount': article.like_users.count()
    }
    return JsonResponse(context)