# Namespace

>  개체를 구분할 수 있는 범위

## URL namespace

- URL namespace를 사용하면 서로 다른 앱에서 동일한 URL 이름을 사용하는 경우에도 이름이 지정된 URL을 고유하게 사용할 수 있음
- app_name attribute를 작성해 URL namespace 설정

```python
# articles/urls.py

app_name = 'articles'
urlpatterns = [
  path('index/', views.index, name='index')
]
```

- app_name을 지정한 이후에는 url 태그에서 반드시 app_name:url_name 형태로만 사용해야함. 그렇지 않으면 NoReverceMatch 에러 발생
- `:` 연산자를 사용하여 지정

```python
# URL tag 변화
{% url 'index' %} ===> {% url 'articles:index' %}
```

## Template namespace

- Django는 기본적으로 app_name/templates/ 경로에 있는 templates 파일들만 찾을 수 있으며, settings.py의 INSTALLED_APPS에 작성한 app 순서로 template을 검색 후 렌더링 함
- 아래 값이 해당 경로를 활성화 하고 있음

```python
# settings.py

TEMPLATES = [
    {
        ...,
        'APP_DIRS': True,
        ...
    },
]
```

### 디렉토리 생성을 통해 물리적인 namespace 구분

- Django templates 폴더 안에 app과 같은 이름의 폴더를 생성하여 사용한다.

- 폴더 생성 후 변경된 경로로 수정

```python
# articles/views.py

return render(request, 'articles/index.html')
# index.html ===> articles/index.html
```

### Template namespace의 필요성

- 단일 앱으로만 이루어진 프로젝트라면 상관 없겠지만, 여러 앱이 있을 땐 같은 이름의 템플릿 파일이 존재할 가능성이 크므로 나눠주는 것이 좋다

## Naming URL patterns

- 링크에 URL을 직접 작성하는 것이 아니라 "path()" 함수의 name인자를 정의해서 사용
- DTL의 Tag 중 하나인 URL태그를 사용해서 "path()" 함수에 작성한 name을 사용할 수 있음
- 이를 통해 URL 설정에 정의된 특정한 경로들의 의존성을 제거할 수 있음
- Django는 URL에 이름을 지정하는 방법을 제공함으로써 view 함수와 템플릿에서 특정 주소를 쉽게 참조할 수 있도록 도움

```python
# articles/urls.py

urlpatterns = [
	path('index/', views.index, name='index'),
	path('greeting/', views.greeting, name='greeting'),
	path('dinner/', views.dinner, name='dinner'),
	path('throw/', views.throw, name='throw'),
	path('catch/', views.catch, name='catch'),
]
```

### Naming URL patterns의 필요성

- 코드 재사용성
- 만약 'index/'의 문자열 주소를 'new-index/'로 바꿔야 하는 상황이라면, 'index/' 주소를 사용했던 모든 곳을 찾아서 변경해야하는 번거로움이 발생함

### Built-in tag "url"

```python
{% url 'articles:index' %}
```

- 주어진 URL 패턴 이름 및 선택적 매개 변수와 일치하는 절대 경로 주소를 반환
- 템플릿에 URL을 하드코딩 하지 않고도 DRY 원칙을 위반하지 않으면서 링크를 출력하는 방법

### url 태그 출력 확인하기

- 개발자 도구를 통해 url 태그가 URL 패턴 이름과 일치하는 절대 경로 주소를 반환하는지 확인해보기

### DRY 원칙

- Don't Repeat Yourself
- 더 품질 좋은 코드를 작성하기 위해서알고 따르면 좋은 소프트웨어 원칙들 중 하나로 "소스코드에서 동일한 코드를반복하지 말자" 라는 의미
- 동일한 코드가 반복된다는 것은 잠재적인 버그의 위협을 증가시키고 반복되는 코드를 변경해야 하는 경우, 반복되는 모든 코드를 찾아서 수정해야함
- 이는 프로젝트 규모가 커질수록 애플리케이션의 유지보수 비용이 커짐

# Django의 설계 철학 (Templates System)

1. 표현(templates)과 로직(view)을 분리
   - 템플릿 시스템은 표현을 제어하는 도구이자 표현에 관련된 로직일 뿐
   - 즉 템플릿 시스템은 이러한 기본 목표를 넘어서는 기능을 지원하지 말아야함
2. 중복을 배제
   - 대다수의 동적 웹사이트는 공통 heacer, footer, navbar 같은 사이트 공통 디자인을 가짐
   - Django 템플릿 시스템은 이러한 요소를 한 곳에 저장하기 쉽게 하여 중복코드를 없애야함
   - 템플릿 상속의 기초가 되는 철학

## Framework의 성격

- 독선적 (Opinionated) 약속이 많은
  - 독선적인 프레임워크들은 어떤 특정 작업을 다루는 '올바른 방법'에 대한 분명한 의견(규약)을 가지고 있음
  - 대체로 특정 문제내에서 빠른 개발방법을 제시
  - 어떤 작업에 대한 올바른 방법이란 보통 잘 알려져 있고 문서화가 잘 되어있기 때문
  - 하지만 주요 상황을 벗어난 문제에 대해서는 그리 유연하지 못한 해결책을 제시할 수 있음
- 관용적 (Unopinionated)
  - 관용적인 프레임워크들은 구성요소를 한데 붙여서 해결해야 한다거나 심지어 어떤 도구를 써야 한다는 올바른 방법에 대한 제약이 거의 없음
  - 이는 개발자들이 특정 작업을 완수하는데 가장 적절한 도구들을 이용할 수 있는 자유도가 높음
  - 하지만 개발자 스스로가 그 도구들을 찾아야한다는 수고가 필요함


## Django Framework의 성격

- '다소 독선적'
  - 양쪽 모두에게 최선의 결과를 준다고 강조
- 결국 하고자 하는 말은 현대 개발에 있어서는 가장 중요한 것들 중 하나는 '생산성'
- 프레임워크는 우리가 하는 개발을 방해하기 위해 규칙, 제약을 만들어 놓은 것이 아님
- 우리가 온전히 만들고자 하는 것에만 집중할 수 있게 도와주는 것
- "수레바퀴를 다시 만들지 말라"
