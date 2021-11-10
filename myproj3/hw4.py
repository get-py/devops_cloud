# 구구단 퀴즈 break 안 쓴 버전

for number in range(2, 10):
    for i in range(1, 10):
        if number >= i:  # if i <= number:      이게 더 가독성이 좋음
            print(f"{number} * {i} = {number * i}")
        else:
            pass


for number in range(2, 10):
    for i in range(1, 10):
        if number >= i:
            print(f"{number} * {i} = {number * i}")


for number in range(2, 10):
    for i in range(1, number + 1):
        print(f"{number} * {i} = {number * i}")
