md = mark down
# 내장함수 filter


git 설치 - vs code - main - 나머지는 default
ssh-keygen 공개키(다른 서버) / 비밀키(local)



C:\Users\user> ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\user/.ssh/id_rsa):
Created directory 'C:\Users\user/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in C:\Users\user/.ssh/id_rsa.
Your public key has been saved in C:\Users\user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:urAS8jvH4V5iiUFccKMY2MbJUDgDS1kPwnc+DOjTNMw user@DESKTOP-GPUSQCR
The key's randomart image is:
+---[RSA 2048]----+
|BXO=+            |
|*OBEoo           |
|++B *.           |
| + . +           |
|  o   . S        |
|. .o.. .         |
| o.+=.o          |
|  +.+= .         |
|  .*o .          |
+----[SHA256]-----+

C:\Users\user> type C:\Users\user/.ssh/id_rsa.pub
명령 구문이 올바르지 않습니다.

C:\Users\user>type C:\Users\user\.ssh\id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDBBEV1wRA+1VCn0/mYjsJ7INBUyXDxwrN0Ww5+dlHW5qd615eYDBBaUM7z6fsmwwXyVK2QkQWXPpsT43B6rwZw4rpajr7XMEO1HnwrK9zqMLkpUkxfQKgzLGXOKFEa6vM4PnnSVrPIKJ0eLbZd/V/njpn0fWYqdBYYKo/fkkZlizSc/51d0pVhLovccCXGGVigm3wDkHDCG/VA11jzSQntHqWYw4FyBbe8nHs21tCa7+AIdUJWuZoJyXhoQyIFCNOuEZsWnIyIFbsKfZmRzlNv2+ghy1m9xdAPWF/tbt8N3Xm2QxGfSB7+MF6y84Fxj7echkAcIddBFd3DmG8cH/Zv user@DESKTOP-GPUSQCR

C:\Users\user>type C:\Users\user\.ssh\id_rsa.pub | clip

C:\Users\user> cd \

C:\> cd Dev

C:\Dev> git clone git@github.com:get-py/test_repo.git
Cloning into 'test_repo'...
The authenticity of host 'github.com (52.78.231.108)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
warning: You appear to have cloned an empty repository.

C:\Dev> git config --global user.name "Yerin Park"

C:\Dev> git config --global user.email "1472moment@gmail.com"

C:\Dev> cd test-repo
지정된 경로를 찾을 수 없습니다.

C:\Dev> cd test_repo

C:\Dev\test_repo> git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .vscode/
        README.md
        main01.py

nothing added to commit but untracked files present (use "git add" to track)

C:\Dev\test_repo> git add README.md main01.py

C:\Dev\test_repo> git commit
[main (root-commit) 09ea6c6] 첫 번째 커밋
 2 files changed, 10 insertions(+)
 create mode 100644 README.md
 create mode 100644 main01.py

C:\Dev\test_repo> git log
commit 09ea6c6274d4b8a23f43c8bd71832912c431959c (HEAD -> main)
Author: Yerin Park <1472moment@gmail.com>
Date:   Mon Nov 8 16:00:39 2021 +0900

    첫 번째 커밋

C:\Dev\test_repo> git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 420 bytes | 210.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:get-py/test_repo.git
 * [new branch]      main -> main

C:\Dev\test_repo> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .vscode/

no changes added to commit (use "git add" and/or "git commit -a")

C:\Dev\test_repo>git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .vscode/
        main02.py

no changes added to commit (use "git add" and/or "git commit -a")

C:\Dev\test_repo>git add README.md main02.py

C:\Dev\test_repo> git commit
[main 8679030] 세부 커리큘럼 추가
 2 files changed, 10 insertions(+), 1 deletion(-)
 create mode 100644 main02.py

C:\Dev\test_repo> git push origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 568 bytes | 568.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:get-py/test_repo.git
   09ea6c6..8679030  main -> main

C:\Dev\test_repo>


C:\Dev\test_repo> git rm main02.py
rm 'main02.py'

C:\Dev\test_repo> git commit
[main 94ad378] mai.02.py 삭제
 1 file changed, 1 deletion(-)
 delete mode 100644 main02.py

C:\Dev\test_repo> git push origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 229 bytes | 229.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:get-py/test_repo.git
   8679030..94ad378  main -> main