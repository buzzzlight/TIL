# 로그인에 대한 이해

## HTTP

- Hyper Text Transfer Protocol
- HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜(규칙, 규약)
- 웹(WWW)에서 이루어지는 모든 데이터 교환의 기초
- 클라이언트 - 서버 프로토콜이라고도 부름
- 요청과 응답

### HTTP의 특징

- 비연결지향 (connectionless)
  - 서버는 요청에 대한 응답을 보낸 후 연결을 끊음
  - 예를 들면 네이버 메인 페이지를 보고 있을 때, 우리는 네이버 서버에 연결되어 있는 것이 아니라 네이버 서버가 우리에게 메인 페이지를 응답하고 연결을 끊은 것
- 무상태 (stateless)
  - 연결을 끊는 순간 클라이언트와 서버 간의 통신이 끝나며 상태 정보가 유지되지 않음
  - 클라이언트와 서버가 주고받는 메세지들은 서로 완전히 독립적

## 로그인 상태 유지

- 서버와 클라이언트 간 지속적인 상태 유지를 위해 **쿠키**와 **세션**이 존재함

### 쿠키 (Cookie)

- 서버가 사용자의 웹 브라우저(클라이언트)에 전송하는 작은 데이터 조각
  - 브라우저는 쿠키를 로컬 KEY-VALUE의 데이터 형식으로 저장
  - 동일한 서버에 재요청 시 저장된 쿠키를 함께 전송
- 쿠키는 서로 다른 요청이 동일한 브라우저로부터 발생한 것인지 판단할 때 주로 사용됨
  - 상태가 없는(stateless) HTTP에서 상태 정보를 관리, 사용자는 로그인 상태를 유지할 수 있음
- 사용 예시![image-20221012174236806](C:\Users\brie.kim\Desktop\todayilearned\00_TIL\221012_로그인\cookie.assets\image-20221012174236806.png)

### 쿠키 사용 목적

- 세션 관리 (Session management)
  - 로그인, 아이디 자동완성, 공지 하루동안 보지않기, 팝업 체크, 장바구니 등 정보관리
- 개인화 (Personalization)
  - 사용자 선호, 테마 등 설정
- 트래킹 (Tracking)
  - 사용자 행동 기록 및 분석

### 세션 (Session)

- 사이트와 특정 브라우저 사이의 state(상태)를 유지시키는 것
- 클라이언트가 서버에 접속하면 서버가 특정 session id를 발급하고, 클라이언트는 session id를 쿠키에 저장
  - 클라이언트가 다시 동일한 서버에 접속하면 요청과 함께 session is가 저장된 쿠키를 서버에 전달
  - 쿠키는 요청 때마다 서버에 함께 전송되므로 서버에서 session id를 확인해 알맞은 로직을 처리
- session id는 세션을 구별하기 위해 필요하며, 쿠키에는 session id만 저장됨

### 쿠키 Lifetime

- Session cookie
  - 현재 세션(current session)이 종료되면 삭제됨
  - 브라우저 종료와 함께 세션이 삭제됨
- Persistent cookies
  - Expires 속성에 지정된 날짜 혹은 Max-Age 속성에 지정된 기간이 지나면 삭제됨

### Session in Django

- Django는 database-backed sessions 저장 방식을 기본 값으로 사용
  - session 정보는 Django DB의 django_session 테이블에 저장
  - 설정을 통해 다른 저장방식으로 변경 가능
  - https://docs.djangoproject.com/en/3.2/topics/http/sessions/
- Django는 특정 session id를 포함하는 쿠키를 사용해서 각각의 브라우저와 사이트가 연결된 session을 확인함