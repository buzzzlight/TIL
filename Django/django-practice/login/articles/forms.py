from django import forms
from .models import Articles


class ArticlesForm(forms.ModelForm):
    class Meta:
        model = Articles
        fields = [
            "title",
            "content",
            "movie_name",
            "image",
        ]
        labels = {
            "title": "리뷰 제목",
            "content": "리뷰 내용",
            "movie_name": "영화 이름",
        }
