# CLI

> Command Line Interface

CLI 또는 명령어 인터페이스는 가상 터미널 또는 텍스트 터미널을 통해 

## 기본 인터페이스

- 컴퓨터 정보

- 디렉토리

- `$` 명령을 입력하는 곳

  - pwd (print working directory) : 현재 디렉토리 출력
  - cd (change directory) : 디렉토리 이동
    - `.`: 현재 디렉토리 `..`:상위 디렉토리
  - ls (list) : 목록
  - mkdir (make directory) : 디렉토리 생성
  - touch : 파일의 날짜와 시간을 수정 (0바이트 빈파일 생성)
  - rm (remove) : 파일 삭제
  - rm -r 폴더명 : 폴더 삭제
  - clear : 터미널 창 깨끗하게

  `ctrl + l `: 터미널 창 깨끗하게

  

# GUI

> Graphic User Interface



# Interface

TV의 리모컨 / 스마트폰 터치 같은 것. 조작을 하는 것

인터페이스가 다르다 = 터치안되는 모니터에 터치를 하면 작동 안되는 것



# Git

> 분산 버전 관리 시스템

리누스 토발즈가 만듦 리눅스 커널과 깃을 최초로 개발...

- 코드의 버전을 관리하는 도구
- 2005년 리눅스 커널을 위한 도구로 리누스 토르발스가 개발
- 컴퓨터 파일의 변경사항을 추적하고 여러명의 사용자들 간에 해당 파일들의 작업을 조율

## 버전관리

- 크로미움 (크롬 브라우저의 오픈소스)
  - 최신 버전의 용량 1.58GB
  - 현재까지 1,000,000여개의 커밋(버전) 20,000여개의 릴리즈
  - 모든 버전의 용량 약 25GB 하나의 폴더 -> 버전 관리를 해주는 Git 덕분 ..
- Google document 버전 관리

## 명령어

- git init 

  - 입력하면 깃으로 관리되기 시작 (저장소 만들어짐)


  - .git이라는 숨김폴더가 생성됨 (여기 모든 정보들이 기록됨)


### 버전 기록

- git add 파일명
  - working directory 상의 변경 내용을 staging area에 추가하기 위해 사용
  - untracked 상태의 파일을 staged로 변경
  - modified 상태의 파일을 staged로 변경

- git commit -m '커밋메세지'

  - staged 상태의 파일들을 커밋을 통해 버전으로 기록

  - SHA-1 해시를 사용하여 40자 길이의 체크섬을 생성하고, 이를 통해 고유한 커밋을 표기

  - 커밋 메세지는 변경사항을 나타낼 수 있도록 명확하게 작성해야

  - 커밋을 하려면 로그인을 해야함
    - git config --global user.email "email"
    - git config --global user.name "kdt-live"

방향키 위로 하면 전에 썼던거 그대로 나옴 (리눅스처럼)

### 버전 상태 확인 

- git status

  - 깃이 되고 있는지 조회

  - 커밋 안된 파일 조회 가능


- git log  

  - 깃 기록 보여줌

  - 현재 저장소에 기록된 커밋(버전)을 조회

  - 다양한 옵션을 통해 로그를 조회할 수 있음

  - git log -1 : 바로 전에 한 커밋 조회

  - git log --oneline : 한줄로 조회

  - git log -1 --oneline : 바로 전에 한 커밋 한줄로 조회




Working Directory (파일의 변경 사항) -> `add` -> Staging Area (버전으로 기록하기 위한 파일 변경사항의 목록) -> `commit` -> Repository(커밋(버전)들이 기록되는 곳)

Staging Area 가 필요한 이유 : 내가 버전으로 기록하기 위한 파일들을 모으기 위해...? 스테이징... 버전 업뎃 전 임시적인 공간... 스테이징 서버!..



Git은 파일을 modified, staged, committed으로 관리

- modified : 파일이 수정된 상태 (add 명령어를 통하여 staging area로)
- staged : 수정
- committed:



touch 파일 생성 -> 첫번째 통에 파일이 있음 (트래킹이 되고 있지 않은 파일) -> add 파일 -> 두번째 통에 있음 -> commit -> 버전 생성(3통)

git log -> 3통 조회