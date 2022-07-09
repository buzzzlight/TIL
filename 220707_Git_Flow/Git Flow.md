## Git Flow, Branch

Git을 활용하여 협업하는 흐름으로 branch를 활용하는 전략을 의미한다

Git 작업을 할 때는 항상 `$ git status` 를 생활화 하자

![img](https://nvie.com/img/git-model@2x.png)

[이미지출처](https://nvie.com/posts/a-successful-git-branching-model/)

| Branch                        | 주요 특징                                                    | 예시                                                |
| ----------------------------- | ------------------------------------------------------------ | --------------------------------------------------- |
| master (main)                 | 배포 가능한 상태의 코드                                      | LOL 클라이언트 라이브 버전                          |
| develop (main)                | feature branch로 나뉘어지거나, 발생된 버그 수정 등 개발 진행 <br />개발 이후 release branch로 갈라짐 | 다음 패치를 위한 개발 (9.24)                        |
| feature branches (supporting) | 기능별 개발 브랜치(topic branch) <br />기능이 반영되거나 드랍되는 경우 삭제 | 개발 시 기능별 예) 신규챔피언 세나, 드래곤 업데이트 |
| release branches (supporting) | 개발 완료 이후 QA, Test 등을 통해 얻어진 다음 배포 전 이루어져야할 minor bug fix 반영 | 9.24a, 9.24b ...                                    |
| hotfixes (supporting)         | 긴급하게 반영 해야하는 bug fix <br />release branch는 다음 버전을 위한 것이라면 hotfix branch는 현재 버전을 위한 것 | 긴급 패치를 위한 작업                               |

### Branch 기본 명령어

독립적인 버전을 만들어나가기 위해서 branch가 필요함

- `$ git branch` : branch 조회
- `$ git branch 브랜치이름` : branch 생성
- `$ git checkout 브랜치이름` : branch가 변경됨 (이동)
- `$ git merge 브랜치이름` : branch 병합
- `$ git branch -d 브랜치이름` : branch 삭제
- `$ git checkout -b 브랜치이름` : branch 생성 + 이동
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

### Branch merge

각 branch에서 작업을 한 이후 이력(버전, 커밋)을 합치기 위해서는 일반적으로 merge 명령어를 사용한다.

병합을 진행 할 때 서로 다른 커밋에서 동일한 파일을 수정한 경우, 충돌(conflict) 발생 가능 -> 이 경우 반드시 직접 수정해야함

첫번째 커밋을 하면 root-commit이라고 뜬다

- fast-foward (혼자 작업, 조원 프리라이딩)
  - 기존 master 브랜치에 변경사항이 없어 단순히 앞으로 이동
- merge commit
  - 기존 master 브랜치에 변경사항이 있어 병합 커밋 발생
  - master branch -> feature branch -> commit -> master branch -> merge



### Github Flow 기본 원칙

Github Flow는 Github에서 제안하는 브랜치 전략으로 다음과 같은 기본 원칙을 가지고 있음

1. master branch는 반드시 배포 가능한 상태여야 한다.
2. feature branch는 각 기능의 의도를 알 수 있도록 작성한다.
3. Commit message는 매우 중요하며, 명확하게 작성한다.
4. Pull Request를 통해 협업을 진행한다.
5. 변경사항을 반영하고 싶다면, master branch에 병합한다

- Feature Branch Workflow
  - Shared repository model (저장소의 소유권이 있는 경우)

- Forking Workflow
  - Fork & Pull model (저장소의 소유권이 없는 경우)

Fork 퍼가기-> Create a new fork -> Pull request(기여하기)

