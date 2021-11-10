# windows terminal 설치
"""
cd 
dir
python
mkdir 
code .    ..
   현재  상위

> 
<
>=
<=
== 같으냐
!> 다르냐 
"""


# 파이썬 8강

number = 10
score = 4.3
name = "Yerin"  # boolen 참 거짓 구분

is_ok = True
is_ok = False

"""
In [1]: 2 > 0
Out[1]: True

In [2]: 3 > 0
Out[2]: True

In [3]: 3 >= 0
Out[3]: True

In [4]: 3 <= 0
Out[4]: False

In [5]: number = 10

In [6]: number % 2
Out[6]: 0

In [7]: number % 2 == 0
Out[7]: True

In [8]: number % 2 != 0
Out[8]: False

In [9]: "10" > "9"
Out[9]: False

In [10]: "1000" > "9"
Out[10]: False


오름차순 정렬: 작은 게 제일 앞
내림차순 정렬: 큰 게 제일 앞

In [11]: names = ["김승아", "나현일", "박예린"]

In [12]: sorted(names)
Out[12]: ['김승아', '나현일', '박예린']

In [13]: "김승아" < "나현일"
Out[13]: True

In [14]: "10" < "9"     같은 위치의 글자끼리 비교
Out[14]: True
"""


"""
파일 확장자 열어놓기
"""


"""
if와 boolen은 같이 움직임
: 빼먹지 말기 
"""

import random

number = random.randint(1, 100)  # 1 이상 100 이하
# number = 10

print(number)

# if number % 2 == 0:
#     print("짝수입니다.")

# if number % 2 != 0:
#     print("홀수입니다.")

"""else = if 가 있어야 사용 가능, 앞선 조건이 거짓이라면
ctrl + /  주석 문법"""

if number % 2 == 0:
    print("짝수입니다.")

else:  # 이게 더 좋은 코드
    print("홀수입니다.")
