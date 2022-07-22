# 함수 (Function)

## 함수를 왜 사용할까

- Decomposition
  - 기능을 분해, 재사용 가능

- Abstraction
  - 복잡한 내용을 숨기고 기능에 집중하여 사용할 수 있음 (블랙박스)
  - 재사용성, 가독성, 생산성

## 함수의 정의

> 특정한 기능을 하는 코드의 조각(묶음), 특정 명령을 수행하는 코드를 매번 다시 작성하지 않고 필요 시 호출하여 사용

## 사용자 함수 (Custom Function)

- 구현되어 있는 함수가 없는 경우, 사용자가 직접 함수 작성 가능

```python
def name(parameters)
	#코드 내용
    return
```

### 함수 기본 구조

#### 선언과 호출

- 함수의 선언은 def 활용
- 들여쓰기를 통해 Function body 작성
  - Docstring은 함수 body 앞에 선택적으로 작성 가능
    - 작성 시에는 반드시 첫번째 문장에 문자열 ''' '''
- 함수는 parameter를 넘겨줄 수 있음
- 함수는 return을 통해 결과값 전달
- 함수는 함수명()으로 호출
  - parameter가 있는 경우 함수명(값)으로 호출

#### 함수의 결과값 (Output)

- return

  - 함수는 반드시 값 하나만 return 한다
    - 명시적인 return이 없는 경우에도 None 반환
  - 함수는 return과 동시에 실행 종료됨
  - 튜플 반환

  ```python
  def foo():
      return 1,2
  
  result = foo()
  print(result, type(result))
  
  ## (1,2) <class 'tuple'>
  ```

#### 함수의 입력 (Input)

- Parameter : 함수를 실행할 때 함수 내부에서 사용되는 식별자
- Argument : 함수를 호출 시 함수의 parameter를 통해 전달되는 값

```python
def function(ham): # parameter : ham
    return ham

function('spam') # argument : 'spam'
```

- 기본 값 지정 가능

```python
def add(x, y=0)
	return add
```

#### 함수의 범위 (scope)

- 함수는 코드 내부에 local scope을 생성하며 그 외의 공간인 global scope로 구분

- Name

#### 함수 응용

- `map(function, iterable)`

  - 순회 가능한 데이터구조(iterable)의 모든 요소에 함수 적용하고 그 결과를 map object로 반환

  ```python
  numbers = ['1', '2', '3']
  
  # 숫자로 바꿔 쓰기
  new_numbers = map(int, numbers)
  print(new_numbers)
  ```

  ```python
  # 직사각형의 넓이를 구하시오. 세로 = n 가로 = m
  # input 예시 = 10 20
  
  n, m = map(int, input().split())
  print(n*m)
  ```

  ```python
  def plus10(n):
      return n + 10
  
  numbers = [10, 20, 30]
  new_numbers = list(map(plus10, numbers))
  print(new_numbers)
  
  # [20, 30, 40]
  ```

- `statistics.pstdev()` : 표준편자 구하는 함수

## 참고자료

[파이썬 표준 라이브러리](https://docs.python.org/ko/3/library/index.html)

[파이썬 자습서](https://docs.python.org/ko/3/tutorial/index.html)

[PEP8 코드 작성 가이드](https://zerosheepmoo.github.io/pep8-in-korean/doc/whitespace-in-expressions-and-statements.html#%E1%84%83%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AB-%E1%84%80%E1%85%AF%E1%86%AB%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC)

