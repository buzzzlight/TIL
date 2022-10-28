from django import forms
from .models import Articles, Comment


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


class CommentForm(forms.ModelForm):
    content = forms.CharField(
        label="",
        widget=forms.TextInput(attrs={
            "placeholder": "댓글을 작성해주세요.",
        })
    )
    class Meta:
        model = Comment 
        fields = ['content',]