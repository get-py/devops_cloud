s = "안녕하세요."

idx = 0
for ch in s:
    print(ch)

for idx, ch in enumerate(s):
    print(idx, ch)

"""
안
녕
하
세
요
.
0 안
1 녕
2 하
3 세
4 요
5 .
"""
