# 1이상 100미만 범위에서 3과 5의 공배수를 모두 출력하기 (공배수 : 2개 이상의 자연수의 공통인 배수)


for number in range(1, 100):
    if number % 3 == 0:
        if number % 5 == 0:
            print(number)


for i in range(1, 100):
    if i % 3 == 0 and i % 5 == 0:
        print(i)

for i in range(15, 100, 15):
    print(i)
