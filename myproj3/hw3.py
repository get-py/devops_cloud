# 1이상 100미만 범위에서 3과 5의 공배수를 합을 출력하기
s = 0  # sum 보다는 acc, result 가 더 나은 변수

for number in range(1, 100):
    if number % 3 == 0:
        if number % 5 == 0:
            s += number

print(s)


number_list = []
for i in range(1, 100):
    if i % 3 == 0 and i % 5 == 0:  # if number % (3 * 5) == 0:
        number_list.append(i)
print(sum(number_list))
