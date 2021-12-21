name = "박예린"  # 새로운 변수 선언
name = "Merryno"  # 변겅

number = 10

if number % 2 == 0:
    print("짝수")
else:
    print("홀수")


for i in range(1, 11):
    print(i)


for i in range(1, 11, 2):
    print(i)


# 함수

def mysum(x, y):
    return x+y

mysum2 = lambda x, y: x + y


def mysum5(x, y, *args):
    return x + y + sum(args)


print(mysum(1, 2, 3, 4, 5))