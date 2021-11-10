def calculate_sum(max_number):
    accmulator = 0  # 누적할 변수
    for i in range(1, max_number + 1):
        accmulator += i
    return accmulator


print(calculate_sum(100))

# return - print set
# no return - no print

"""
t.onkeypress(turn_right, "Right")

t.listen()
t.mainloop()
"""

"""
unit14 X
eval - 절대 안 씀, 아주 위험함
14-1 실습 X

"""

"""
unit15 - 타자연습 하기
In [1]: names = ["cat", "dog", "fox", "monkey", "mouse", "panda", "frog",
   ...:  "snake", "wolf"]

In [2]: for i in range(1, 5):
   ...:     print(i)
   ...:
1
2
3
4

In [3]: for i in [1, 2, 3, 4]:
   ...:     print(i)
   ...:
1
2
3
4

In [4]: names
Out[4]: ['cat', 'dog', 'fox', 'monkey', 'mouse', 'panda', 'frog', 'snake', 'wolf']

In [5]: import random

In [6]: random.choice(range(1, 10))
Out[6]: 9

In [7]: random.choice(names)
Out[7]: 'fox'
"""
