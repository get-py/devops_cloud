answer = input("12 + 23 = ")  # prompt 안내메세지

# answer를 가지고 계산할 목적이라면,
# answer 값 변환은 최대한 빠르게 수행하는 게 좋습니다.
answer = int(answer or 0)  # 0을 쓰면 엔터를 입력해도 땡이라고 나옴

if answer == 35:
    print("정답")

else:
    print("땡")

"""
C:\Dev\myproj02> python main02.py
12 + 23 = 35
정답

C:\Dev\myproj02> python main02.py
12 + 23 = 13
땡
"""

"""
bool 타입의 값이 아니더라도, bool 판단에 사용될 수 있습니다.
숫자 : 0 은 거짓, 0 이외의 모든 값은 True
문자열 : 빈 문자열은 거짓, else True

if 100:
    print("t")
else:
    print("f")
"""
if 100:  # t
    print("t")
else:
    print("f")

# if 0:                          #f
#     print("t")
# # else:
# #     print("f")

# if "HELLO":                    #t
#     print("t")
# else:
#     print("f")

if "":  # f
    print("t")
else:
    print("f")

"""
In [1]: import random

In [2]: random.randint(1, 100)
Out[2]: 30

In [3]: random.randint(1, 100)
Out[3]: 88

In [4]:

In [4]: random.choice(range(1, 10, 2))
Out[4]: 5

In [5]: random.choice(range(1, 10, 2))
Out[5]: 1

In [6]: random.sample(range(1,46), 6)
Out[6]: [1, 39, 7, 17, 29, 23]
"""


"""
거의 for만 사용
for 목록에서 값을 하나씩 꺼내옴, 꺼낼 거 없을 때까지 꺼내옴
while 조건이 
"""
