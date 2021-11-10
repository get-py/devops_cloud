def gugudan(number):  # shift+tab 내어쓰기
    # number = 2
    print(f"###{number}단 ###")
    for i in range(1, 10):
        print(f"{number} * {i} = {number * i}")


# gugudan(2)
# gugudan(3)
# gugudan(4)
# gugudan(5)
# gugudan(6)
# gugudan(7)
# gugudan(8)
# gugudan(9)     #``` backtick 세번 쓰면 코드 보내기 가능`

"""
for i in range(2, 10):
    gugudan(i)
"""

for number in range(2, 10):
    gugudan(number)

"""
함수의 구성요소

- 함수의 이름 : 1개
- 함수의 인자(argument) : 0개 이상
- 함수의 반환값(return value) : 1개
"""
