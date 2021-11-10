# 1.
"""
문자열을 인자로 받아, 단어수를 반환하는 함수를 작성하세요.
예) "우리는 파이썬을 즐겨요"를 인자로 받아, 3을 반환
힌트) "파이썬 자동화".split()
"""

"""me"""


# def get_word_count(s):
#     word = s.split()
#     result = "word".count()
#     return result


# print(get_word_count("우리는 파이썬을 즐겨요"))


"""prof"""


def get_word_count(s):
    return len(s.split())


print(get_word_count("우리는 파이썬을 즐겨요"))


# 2. # " " ==  "_"
"""
문자열을 인자로 받아, 공백을 제외한 글자수를 반환하는 함수를 작성하세요.
예) "우리는 파이썬을 즐겨요"를 인자로 받아, 10을 반환
힌트) 문자열은 순회가능한 객체
"""


def get_ch_count_except_space(s):
    count = 0
    for ch in s:
        if ch != " ":
            count += 1
    return count


print(get_ch_count_except_space("우리는 파이썬을 즐겨요"))


# 3.
"""
자연수를 인자로 받아, 천단위 절사한 값을 리턴하는 함수를 작성하세요.
예) 정수 1234567을 인자로 받아, 1234000을 반환
"""
"""me"""
# def 천까지정리(number):
#     s = number // 1000
#     resurlt = s * 10000
#     return resurlt


# print(천까지정리(1234567))


"""prof"""


def get_rounded_number(number):  # 올림 round up / 내림 round off / 반올림 round
    return (number // 1000) * 1000  # 함수는 가장 작게, 하나의 일만 할 수 있도록!


print(get_rounded_number(1234567))
