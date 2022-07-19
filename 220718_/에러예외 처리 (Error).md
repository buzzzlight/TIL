# 에러/예외 처리 (Error)

## 디버깅

- print 함수 활용
  - 특정 함수 결과, 반복/조건 결과 등 나눠서 생각, 코드를 bisection으로 나눠서 생각
- 개발 환경(text editor, IDE)등에서 제공하는 기능 활용
  - breakpoint, 변수 조회 등
- 뇌컴파일, 눈디버깅
- Python 일 경우 Python tutor

## 에러

### 문법 에러 (Syntax Error)

- SyntaxError가 발생하면 코드가 실행되지 않음
- SyntaxError: Invalid syntax
- SyntaxError: cannot assign to literal

### 에러 예시

- ZeroDivisionError : 0으로 나누고자 할 때 발생
- NameError : namespace상에 이름이 없는 경우 (변수이름이 없다든가)
- TypeError : 타입(str, int ...) 불일치
- KeyError : 딕셔너리 사용 시 키가 없어서 발생하는 에러
- ModuleNotFoundError : 존재하지 않는 모듈을 import 하는 경우
- ImportError : Module은 있으나 존재하지 않는 클래스/함수를 가져오는 경우
- IndentationError : Indentation이 적절하지 않은 경우 (들여쓰기, 띄어쓰기)

## 예외(Exception)

- 실행 도중 예상치 못한 상황을 맞이하면 프로그램 실행을 멈춤

### 예외처리

- try 문(statement) / except 절(clause)을 이용하여 예외처리를 할 수 있음
- try문
  - 오류가 발생할 가능성이 있는 코드를 실행
  - 예외

### 예외 발생 시키기

- `raise` 를 통해 강제로 에러 발생 시키기