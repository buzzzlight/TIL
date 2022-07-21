# 에러/예외 처리

## 디버깅

- 중점적으로 봐야할 부분

  - branches : 모든 조건이 원하는대로 동작하는지
  - for loops : 반복문에 진입하는지 , 원하는 횟수만큼 실행되는지
  - while loops : for loops 와 동일 , 종료조건이 제대로 동작하는지
  - function : 함수 호출시 , 함수 파라미터 , 함수 결과

- 디버깅 하는 방법

  - print 함수 활용
    - 특정 함수 결과, 반복/조건 결과 등 나눠서 생각, 코드를 bisection으로 나눠서 생각

  - 개발 환경(text editor, IDE)등에서 제공하는 기능 활용
    - breakpoint, 변수 조회 등

  - 뇌컴파일, 눈디버깅

  - Python 일 경우 Python tutor


## 에러(Error)

### 문법 에러 (Syntax Error)

- SyntaxError가 발생하면 코드가 실행되지 않음

- 파일이름, 줄번호, 캐럿(^) 을 통해 문제가 발생한 위치가 표현됨

- EOL (End of Line)

  ```python
  print('hello
  # File "<ipython-input-6-2a5f5c6b1414>", line 1
  # print('hello
  # 			  ^
  # SyntaxError: EOL while scanning string literal
  ```

- EOF (End of File)

  ```python
  print(
  # File "<ipython-input-4-424fbb3a34c5>", line 1
  # print(
  #	  ^
  # SyntaxError : unexpected EOF while parsing
  ```

- Invalid syntax

  ```python
  while
  # File "<ipython-input-7-ae84bbebe3ce>", line 1
  # while
  #		  ^
  # SyntaxError : invalid syntax
  ```

- assign to literal

  ```python
  5= 3
  # File "<ipython-input-28-9a762f2c796b>", line 1
  # 5 = 3
  # ^
  # SyntaxError: cannot assign to literal
  ```

## 예외(Exception)

- 실행 도중 예상치 못한 상황을 맞이하면 프로그램 실행을 멈춤
  - 문장이나 표현식이 문법적으로 올바르더라도 발생하는 에러

- 실행 중에 감지되는 에러들을 예외라고 부름
- 예외는 여러 타입으로 나타나고, 타입이 메세지의 일부로 출력됨
  - NameError, TypeError 등은 발생한 예외 타입의 종류

- 모든 내장 예외는 Exception Class를 상속받아 이뤄짐
- 사용자 정의 예외를 만들어 관리할 수 있음

### 에러 예시

- `ZeroDivisionError` : 0으로 나누고자 할 때 발생

  ```python
  10/0
  # ---------------
  # ZeroDivisionError Traceback (most recent call last)
  # --------> 1 10/0
  # ZeroDivisionError : division by zero
  ```

- `NameError` : namespace상에 이름이 없는 경우 (예를 들면 변수이름이 없을 때)

  ```python
  print(name_error)
  # ---------------
  # NameError Traceback (most recent call last)
  # --------> 1 name_error
  # NameError : name name_error ' is not defined
  ```

- `TypeError` : 타입(str, int ...) 불일치

  ```python
  1 + '1'
  # --------------
  # TypeError Traceback (most recent call last)
  # --------> 1 1 + '1'
  # TypeError : unsupported operand type(s) for +: 'int' and '
  ```

  ```python
  round('3.5')
  # -----------
  # TypeError Traceback (most recent call last)
  # --------> 1 round('3.5')
  # TypeError : type str doesn't define __round__ method
  ```

- `TypeError` : arguments 부족

  ```python
  divmod()
  # ------------
  # TypeError Traceback (most recent call last)
  # ----> 1 divmod()
  # TypeError: divmod expected 2 arguments, got 0
  ```

  ```python
  import random random.sample()
  # ---------
  # TypeError Traceback (most recent call last)
  # 1 import random
  # ----> 2 random.sample()
  # TypeError: sample() missing 2 required positional arguments: 'population' and 'k'
  ```

- `TypeError` : argument 개수 초과

  ```python
  divmod(1, 2, 3)
  # ---------
  # TypeError Traceback (most recent call last)
  # ----> 1 divmod(1, 2, 3)
  # TypeError: divmod expected 2 arguments, got 3
  ```

  ```python
  import random
  random.sample(range(3), 1, 2)
  # --------
  # TypeError Traceback (most recent call last)
  # 1 import random
  # ----> 2 random.sample(range(3), 1, 2)
  # TypeError: sample() takes 3 positional arguments but 4 were given
  ```

- `ValueError` : 타입은 올바르나 값이 적절하지 않거나 없는 경우

  ```python
  int('3.5')
  # ------
  # ValueError Traceback (most recent call last)
  # ----> 1 int('3.5')
  # ValueError: invalid literal for int() with base 10: 
  '3.5'
  ```

  ```python
  range(3).index(6)
  # ------
  # ValueError Traceback (most recent call last)
  # ----> 1 range(3).index(6)
  # ValueError: 6 is not in range
  ```

- `IndexError` : 없는 인덱스를 호출할 때 발생하는 에러

  ```python
  empty_list = []
  empty_list[2]
  # ------
  # IndexError Traceback (most recent call last)
  # 1 empty\_list = \[\]
  # ----> 2 empty\_list\[2\]
  # IndexError: list index out of range
  ```

- `KeyError` : 딕셔너리 사용 시 키가 없어서 발생하는 에러

  ```python
  song = {'IU': '좋은날'}
  song['BTS']
  # ------ 
  # KeyError Traceback (most recent call last) 
  # 1 song = {'IU': '좋은날'} 
  # ----> 2 song\['BTS'\] 
  # KeyError: 'BTS'
  ```

- `ModuleNotFoundError` : 존재하지 않는 모듈을 import 하는 경우

  ```python
  import nonamed
  # ------ 
  # ModuleNotFoundError Traceback (most recent call last) 
  # ----> 1 import nonamed 
  # ModuleNotFoundError: No module named 'nonamed'
  ```

- `ImportError` : Module은 있으나 존재하지 않는 클래스/함수를 가져오는 경우

  ```python
  from random import samp
  # ------ 
  # ImportError Traceback (most recent call last) 
  # ----> 1 from random import samp 
  # ImportError: cannot import name 'samp' from 'random'
  ```

- `IndentationError` : Indentation이 적절하지 않은 경우 (들여쓰기, 띄어쓰기)

  ```python
  for i in range(3):
      print(i)
  # File "", line 2
  # print(i) 
  # ^ 
  # IndentationError: expected an indented block
  ```

- `KeyboardInterrupt` : 임의로 프로그램을 종료했을 때

  ```python
  while True:
  	continue
  # ------
  # KeyboardInterrupt Traceback (most recent call last)
  # <ipython-input-55-6a65cf439648> in <module>
  # 1 while True:
  # ----> 2 continue
  # KeyboardInterrupt:
  ```

### 예외처리

- try 문(statement) / except 절(clause)을 이용하여 예외처리를 할 수 있음
- try문
  - 오류가 발생할 가능성이 있는 코드를 실행
  - 예외가 발생되지 않으면 except 없이 실행 종료
- except문
  - 예외가 발생하면 except 절 실행
  - 예외 상황을 처리하는 코드를 받아서 적절한 조치를 취함

- else
  - try 문에서 예외가 발생하지 않으면 실행

- finally
  - 예외 발생 여부와 관계없이 항상 실행


### 예외 발생 시키기

- `raise` 를 통해 강제로 에러 발생 시키기

  ```python
  # raise <표현식> (메시지)
  
  raise
  # ------
  # RuntimeError Traceback (most recent call last)
  # --------> 1 raise
  # RuntimeError : No active exception to reraise
  ```

  