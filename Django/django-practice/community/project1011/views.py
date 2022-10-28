from django.shortcuts import render
from articles.models import Articles

def main(request):
    articles = Articles.objects.order_by('-pk')
    context = {
        "articles": articles,
    }
    return render(request, "main.html", context)