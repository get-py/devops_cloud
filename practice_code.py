max_number = 1000
result_sum = 0

for i in range(max_number + 1):
    result_sum += i

print(result_sum)

max_number = 100
result_sum = 0

for i in range(max_number + 1):
    result_sum += i

print(result_sum)

##########################################################

"""main01.py"""
import random

number = random.randint(1, 100)

print(number)

if number % 2 == 0:
    print("짝수입니다.")

else:
    print("홀수입니다.")


"""main02.py"""
answer = input("12 + 23 = ")
answer = int(answer or 0)

if answer == 35:
    print("정답")

else:
    print("땡")


# bool 타입의 값이 아니더라도, bool 판단에 사용될 수 있습니다.
# 숫자 : 0 은 거짓, 0 이외의 모든 값은 True
# 문자열 : 빈 문자열은 거짓, else True
if 100:
    print("t")
else:
    print("f")

if 0:
    print("t")
else:
    print("f")

if "hello":
    print("t")
else:
    print("f")

if "":
    print("t")
else:
    print("f")


# In [3]: random.randint(1, 100)
# Out[3]: 29

# In [5]: random.choice(range(1, 10, 2))
# Out[5]: 9

# In [6]: random.sample(range(1,46),6)
# Out[6]: [21, 1, 42, 26, 44, 32]

"""main03.py"""
for i in range(10):
    print(i)


"""main05.py"""
number = 2
print(f"###{number}단###")
for i in range(1, 10):
    print(f"{number} * {i} ={number * i}")


"""main06.py"""


def gugudan(number):
    print(f"---{number}단---")
    for i in range(1, 10):
        print(f"{number} * {i} = {number * i}")


for number in range(2, 10):
    gugudan(number)

"""main07.py"""


def 부가세_계산(금액):
    부가세 = 금액 // 11
    return 부가세


부가세 = 부가세_계산(20000)
print(f"부가세 : {부가세}")

"""main08.py"""


def calculate_sum(max_number):
    accmulator = 0
    for i in range(1, max_number + 1):
        accmulator += i
    return accmulator


print(calculate_sum(100))

"""main09.py"""
import random
import time

animal_names = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
]

input("준비되셨으면, 엔터키를 입력해주세요.")

random.shuffle(animal_names)

begin_time = time.time()

ok_counter = 0

for random_name in animal_names[0:5]:
    print(random_name)
    line = input(">>> ")
    if random_name == line:
        ok_counter += 1
        print("정확합니다.")
    else:
        print("오타가 있어요.")

end_time = time.time()

print(f"{ok_counter}번 성공하셨습니다.")
print(f"총 {end_time - begin_time}초가 걸리셨어요.")


"""main10.py"""


def get_max_number(number_list):
    number = number_list[0]
    for current_number in number_list:
        if current_number > number:
            number = current_number
    return number


numbers = [17, 92, 18, 33, 58, 7, 33, 42]


def get_max_index(number_list):
    number = number_list[0]
    index = 0
    max_index = 0
    for index, current_number in enumerate(number_list):
        if current_number > number:
            number = current_number
            max_index = index
    return max_index


print(get_max_number(numbers))
print(get_max_index(numbers))


#################################################################

from random import randint

number = randint(1, 40)

if number < 10:
    print(1)
elif number < 20:
    print(10)
elif number < 30:
    print(20)
else:
    print("너무 큰 수")

print(f"숫자는 {number}입니다.")


for 숫자 in range(2, 10):
    print("---{}단---".format(숫자))
    for i in range(1, 10):
        계산결과 = 숫자 * i
        print

#################################################################


def get_word_count(s):
    return len(s.split())


print(get_word_count("우리는 파이썬을 즐겨요"))

#####################################################


def get_ch_count_except_space(s):
    count = 0
    for ch in s:
        if ch != " ":
            count += 1
    return count


print(get_ch_count_except_space("우리는 파이썬을 즐겨요"))

#####################################################


def get_rounded_number(number):
    return (number // 1000) * 1000


print(get_rounded_number(1234567))

#####################################################

list = [1, 2, 3]
tuple = (1, 2, 3)
set = {1, 2, 3}
dict = {"a": 1, "b": 2, "c": 3}

#####################################################

lambda x, y: x + y + 10

print((lambda x, y: x + y + 10)(1, 2))

#####################################################

import pytest
from main01 import get_word_count


@pytest.mark.parametrize(
    "sentence, expected",
    [
        ("우리는 파이썬을 즐겨요", 3),
        ("Python Family", 2),
    ],
)
def test_get_word_count(sentence, expected):
    assert get_word_count(sentence) == expected


#####################################################

s = "abcdefghijklmnopqrstuvwxyz"

print(s[0:3])
print(s[0:10:1])
print(s[0:10:2])
print(s[1:-2])
print(s[1:-1])
print(s[::-1])


####################################################

메뉴10 = [f"메뉴{i}" for i in range(1, 11)]

print(메뉴10[1])
print(메뉴10[3 : 3 + 4])
print(메뉴10[-3:])
print(메뉴10[::-1])


####################################################

"""list: 기차와 같아서 다른 칸을 추가하고 뺄 수 있다"""

names = ["Merry", "Ann"]

names.append("Jane")

print(names)

names.insert(2, "Diana")

print(names)


####################################################
