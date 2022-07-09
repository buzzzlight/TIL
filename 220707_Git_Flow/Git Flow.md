- `$ git checkout 해시값` : 특정 커밋 전으로 돌아가기

  - 커밋한 모든 내용은 다시 되돌릴 수 있음

  - 커밋하지 않은 모든 내용은 되돌리지 못함
  - git log로 확인 후 원하는 해시값 입력

- `$ git clone 깃허브URL` : 다른사람의 저장소에서 가져오기
  - 원격저장소 이름의 폴더가 생성 됨
  - ZIP파일로 받을 경우, 최신 버전의 파일만 저장됨 (git 없음)

클론으로 받아온 저장소 업뎃된거 받을때 git pull !

클론으로 받아온 저장소는 다운로드 전용으로 표시해놓는게 좋다. (commit 방지)

✍🏻 **한 줄 요약 : Clone은 저장소를 받아오는 것, Pull은 Commit을 받아오는 것**



## Git Flow, Branch

Git을 활용하여 협업하는 흐름으로 branch를 활용하는 전략을 의미한다

Git 작업을 할 때는 항상 `$ git status` 를 생활화 하자

![img](https://nvie.com/img/git-model@2x.png)

[이미지출처](https://nvie.com/posts/a-successful-git-branching-model/)



### Branch 기본 명령어

독립적인 버전을 만들어나가기 위해서 branch가 필요함

- `$ git branch` : branch 조회
- `$ git branch 브랜치이름` : branch 생성
- `$ git checkout 브랜치이름` : branch가 변경됨 (이동)
- `$ git merge 브랜치이름` : branch 병합
- `$ git branch -d 브랜치이름` : branch 삭제
- `$ git checkout -b 브랜치이름` : branch 생성 + 이동

### Branch merge

각 branch에서 작업을 한 이후 이력(버전, 커밋)을 합치기 위해서는 일반적으로 merge 명령어를 사용한다



첫번째 커밋을 하면 이거시 root-commit이라고 뜬다



상황 1. fast-foward (혼자 작업, 조원 프리라이딩)

-홈 화면을 만든다. (home.txt)

fast-forward는 feature



master branch -> feature branch -> commit -> master branch -> merge



### Github Flow 기본 원칙

Github Flow는 Github에서 

1. 
2.  
3.  
4.  
5. 



Feature Branch Workflow

Shared repository model (저장소의 소유권이 있는 경우)



Forking Workflow

Fork & Pull model (저장소의 소유권이 없는 경우)



Fork 퍼가기

Create a new fork



Pull request

기여하기

