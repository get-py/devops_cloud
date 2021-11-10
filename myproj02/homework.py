# 숫자퀴즈
# 랜덤 숫자를 맞춰보세요.

# hint: random.randint를 통해 1 이상 100 이하의 랜덤수를 만든다

# 유저에게 10회의 기회를 줍니다.
# 그 숫자를 정확히 맞췄다면 몇 번 만에 맞췄는지 출력
# 입력한 숫자가 랜덤수보다 작다면 "더 큰 수를 입력해주새요." 라고 출력
# 입력한 숫자가 랜덤수보다 크다면 "더 작은 수를 입력해주세요" 라고 출력
# 횟수를 초과했다면 "다음 기회에..."라고 출력

import random

numbers = (range(1, 100 + 1), 1)


counter = 0
line = input("1 이상 100 이하의 숫자를 맞춰보세요.")
for number in numbers:
    number = str(number)
    if number > line:
        print("더 큰 수를 입력해주세요.")
        counter += 1
        line = input(">>> ")
    if number < line:
        print("더 작은 수를 입력해주세요.")
        counter += 1
        line = input(">>> ")
    if number == line:
        print(f"{counter}번 만에 맞췄습니다.")
        counter += 1

if counter > 10:
    print("다음 기회에...")


"""분당 타이핑 속도를 알려주도록 개선해보세요."""
