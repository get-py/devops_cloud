# name, *rest = ["Tom", 10, "Seoul"]

# print(name)
# print(rest)

numbers = [1, 2, 3]
new_numbers = [
    10,
    20,
    30,
    *numbers,
    40,
    50,
    60 * numbers,
    70,
    80,
    90,
    *numbers,
]
print(new_numbers)


tom = {
    "name": "Tom",
    "age": 10,
    "region": "Seoul",
}

# 스티브는 탐과 age/region이 같음

steve = dict(tom, name="Steve")
print(steve)
