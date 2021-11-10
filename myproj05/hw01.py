# 숫자퀴즈
# 랜덤 숫자를 맞춰보세요.

# hint: random.randint를 통해 1 이상 100 이하의 랜덤수를 만든다

# 유저에게 10회의 기회를 줍니다.
# 그 숫자를 정확히 맞췄다면 몇 번 만에 맞췄는지 출력
# 입력한 숫자가 랜덤수보다 작다면 "더 큰 수를 입력해주새요." 라고 출력
# 입력한 숫자가 랜덤수보다 크다면 "더 작은 수를 입력해주세요" 라고 출력
# 횟수를 초과했다면 "다음 기회에..."라고 출력


from random import randint

number = randint(1, 100)

for retry in range(1, 11):
    line = input(f"[{retry}] Try gess number : ")
    try:
        answer = int(line.strip())  # strip() 좌우의 space 제거
    except ValueError:
        print("잘못된 값을 입력하셨습니다.")
        continue

    if answer == number:
        print(f"{retry}회 시도에 성공")
        break
    elif answer < number:
        print("더 큰 수를 입력해주세요.")
    else:  # elif answer > number:
        print("더 작은 수를 입력해주세요.")
else:
    print("다음 기회에...")
