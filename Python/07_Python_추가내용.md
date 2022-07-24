# Python 추가 문법

### f-string

> 문자열에서 특정 부분만 바꾸고 나머지 부분은 같을 때, f-string 사용

```python
# 예를들어 달력이라고 했을때
print(2020년 1월)
print(2020년 2월)
print(2020년 3월)
...
print(2020년 11월)
print(2020년 12월)
# 이렇게 쓸 수도 있겠지만

# f-string 을 이용하여 아래와 같이 쓸 수 있음
month = 1
while month <= 12:
    print(f'2020년 {month}월')
    month = month + 1
```

### ord()

> 문자열을 아스키 코드값으로 변환하는 함수

### chr()

> 아스키코드를 문자열로 변환하는 함수

### end=""

> **print 여러줄 입력 시**
>
> 원래 end의 기본값은 \n 줄바꿈이어서 print 여러줄 하면 엔터 쳐서 입력됨 print(1, end='') 이렇게 해주면 줄바꿈 없이 출력됨

```python
print(1, 2, 3)
print(4, 5, 6)
# 1 2 3
# 4 5 6

print(1, 2, 3, end='')
print(4, 5, 6)
# 1 2 3 4 5 6
```

### sep=""

> sep의 기본값 역시 공백 이므로 sep='' 해주게 되면 공백없이 출력됨
>

```python
print(1, 2, 3)
# 1 2 3

print(1, 2, 3, sep='')
# 123
```

### .split()

> 한줄로 입력하면 공백을 기준으로 원소를 나눠서 리스트에 저장해줌

### divmod()

> 나누고 몫과 나머지를 튜플로 반환해줌

### map(fuction, iterable)

> 반복 가능한 것들의 모든 요소에 함수를 적용시키는 함수

```python
numbers = [1, 2, 5, 10, 3, 9, 12]
```

### List Comprehension

- 표현식과제어문을 통해 특정한 값을 가진 리스트를 간결하게 생성하는 방법
- `[<expression> for <변수> in <iterable>]`
- `[<expression> for <변수> in <iterable> if <조건식>]`

```python
# 1-3의 세제곱 결과가 담긴 리스트 만들기
cubic_list = []
for number in range(1, 4):
    cubic_list.append(number**3)
print(cubic_list)

# List comprehension
[number**3 for number in range(1, 4)]
```

```python
# 홀수 리스트 만들기
even_list = [i for i in range(10) if i % 2 == 0]
print(even_list)
```

### Dictionary Comprehension

- 표현식과 제어문을 통해 특정한 값을 가진 리스트를 간결하게 생성하는 방법
- `{key: value for <변수> in <iterable>}`
- `{key: value for <변수> in <iterable> if <조건식>}`

```python
# 1-3의 세제곱 결과가 담긴 리스트 만들기
cubic_dict = {}
for number in range(1, 4):
    cubic_dict[number] = number ** 3
print(cubic_dict)

# Dictionary Comprehension
{number: number**3 for number in range(1, 4)}
```

### `lambda` 함수

- 람다함수
  - `lambda[parameter]` : 표현식
  - 표현식을 계산한 결과값을 반환하는 함수로, 이름이 없는 함수여서 익명 함수라고도 불림
  
- 특징
  - return문을 가질 수 없음
  - 간편 조건문 외 조건문이나 반복문을 가질 수 없음

- 장점
  - 함수를 정의해서 사용하는 것보다 간결하게 사용 가능
  - def를 사용할 수 없는 곳에서도 사용 가능


### filter(function, iterable)

- 순회 가능한 데이터구조(iterable)의 모든 요소에 함수를 적용하고, 그 결과 True인 것들을 filter object로 반환 ===> map 함수 처럼!

```python
def odd(n):
    return n % 2
numbers = [1, 2, 3]
result = filter(odd, numbers)
print(result, type(result))
# <filter object at 0x10e4dfc10> <class 'filter'>

list(result) # 리스트 형변환을 통해 결과 직접 확인
# [1, 3] 
```

# 파이썬 모듈 추가내용

## Python Standard Library

- 파이썬에 기본적으로 설치된 모듈과 내장 함수
- [파이썬 표준 라이브러리](https://docs.python.org/ko/3/library/index.html)

## pip

> PyPI (Python Package Index)에 저장된 외부 패키지들을 설치하도록 도와주는 패키지 관리 시스템

### 패키지 활용 명령어

- 패키지 설치
  - 최신 버전 / 특정 버전 / 최소 버전을 명시하여 설치 할 수 있음
- 패키지 삭제
  - pip는 패키지를 업그레이드 하는 경우 과거 버전을 자동으로 삭제해줌
  - `pip uninstall SomePackage`
- 패키지 목록 및 특정 패키지 정보 조회
  - `pip list`
  - `pip show SomePackage`
- 패키지 freeze
  - `pip freeze`
  - 설치된 패키지의 비슷한 목록을 만들지만, pip install에서 활용되는 형식으로 출력
  - 해당하는 목록을 requirements.txt(관습)으로 만들어 관리함
- 패키지 관리하기
  - 아래 명령어들을 통해 패키지목록을 관리하고 설치할 수 있음
  - 일반적으로 패키지를 기록하는 파일의 이름은 requirements.txt로 정의
  - `pip freeze  > requirements.txt`
  - `pip install -r requirements.txt`

pip install requests, pip install tensorflow, pip install django ...

# 가상환경

- 파이썬 표준 라이브러리가 아닌 외부패키지와 모듈을 사용하는 경우 모두 pip를 통해 설치 해야함
- 복수의 프로젝트를 하는 경우 버전이 상이할 수 있음
- 이러한 경우 가상환경을 만들어 **프로젝트별로 독립적인 패키지 관리** 가능

### venv

- 가상환경을 만들고 관리하는데 사용되는 모듈 (python 3.5 부터)
- 특정 디렉토리에 가상 환경을 만들고 고유한 파이썬 패키지 집합을 가질 수 있음
  - 특정 폴더에 가상 환경이 있고 실행환경에서 가상환경을 활성화시켜 해당폴더에 있는 패키지를 관리/사용함

### 가상환경 생성

- `python -m venv <폴더명>`
- 가상환경을 생성하면, 해당 디렉토리에 별도의 파이썬 패키지가 설치됨

### 가상환경 활용

- 아래의 명령어들을 통해 가상환경을 활성화

  - <venv>는 가상환경을 포함하는 디렉토리의 이름

  | 플랫폼 | 셸              | 가상환경 활성화 명령                   |
  | ------ | --------------- | -------------------------------------- |
  | POSIX  | bash/zsh        | `$ source <venv> /bin/activate`        |
  |        | fish            | `$ source <venv> /bin/activate.fish`   |
  |        | csh/tcsh        | `$ source <venv> /bin/activate.csh`    |
  |        | PowerShell Core | `$ <venv> /bin/Activate.ps1`           |
  | 윈도우 | cmd.exe         | `C:\> <venv> \Scripts\activate.bat`    |
  |        | PowerShell      | `PS C:\> <venv> \Scripts\Activate.ps1` |

- `deactivate`: 가상환경 비활성화