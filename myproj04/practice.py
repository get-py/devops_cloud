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
