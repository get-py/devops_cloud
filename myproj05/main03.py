# def check_even_number(number):
#     return number % 2 == 0


# numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# for number in filter(check_even_number, numbers):
#     print(number)
from pprint import pprint
from typing import List
import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

##################################################################
print('"방탄소년단" 곡명만 출력하기')

# TODO
def filter_fn1(song_list):
    return song_list["artist"] == "방탄소년단"


for song_dict in filter(filter_fn1, song_list):
    print(song_dict["title"])


# TODO-1
new_song_list: List[dict] = []


def check_bts_song(song_dict):
    """
    BTS 노래라면 True를 반환합니다.
    """
    artist: str = song_dict["artist"]
    return artist == "방탄소년단"


for song_dict in song_list:
    if check_bts_song(song_dict):
        new_song_list.append(song_dict)

print(new_song_list)


# TODO - 2
new_song_list = list(filter(check_bts_song, song_list))
print(new_song_list)

# TODO2
title_list: List[str] = []

for song_dict in song_list:
    artist: str = song_dict["artist"]
    if artist == "방탄소년단":
        title: str = song_dict["title"]
        title_list.append(title)

print(title_list)


# TODO3
new_song_list: List[dict] = []

for song_dict in song_list:
    artist: str = song_dict["artist"]
    if artist == "방탄소년단":
        new_song_list.append(song_dict)

pprint(new_song_list)

##################################################################3
print('곡명에 "사랑"이 포함된 곡명만 출력하기')


def check_contains_love(song_dict):
    title: str = song_dict["title"]
    return "사랑" in title


for song_dict in filter(check_contains_love, song_list):
    print("{rank} {title}".format(**song_dict))


# # TODO
# def filter_fn2(song_list):
#     return "사랑" in song_list["title"]


# for song_dict in filter(filter_fn2, song_list):
#     print(song_dict["title"])


# # TODO2
# title_list: List[str] = []

# for song_dict in song_list:
#     title: str = song_dict["title"]
#     if "사랑" in title:
#         title_list.append(title)

# print(title_list)


#####################################################################
print('"좋아요" 수가 200,000 이상인 곡명 가나다 순으로 정렬')
# 1안) 필터링을 먼저하고 필터링된 결과에 대해서 곡명 오름차순 정렬 - good
# 2안) 곡명에 대한 오름차순 정렬을 먼저하고, 필터링


def check_above_200000(song_dict):
    like: int = song_dict["like"]
    return like >= 200000


for song_dict in filter(check_above_200000, song_list):
    print("{title} - {like}".format(**song_dict))


# # TODO
# def filter_fn3(song_list):
#     return song_list["like"] > 200_000


# for song_dict in filter(filter_fn3, song_list):
#     print(song_dict["title"])


# # TODO2

# title_list: List[str] = []

# for song_dict in song_list:
#     title: str = song_dict["title"]
#     like: int = song_dict["like"]
#     if like > 20_0000:
#         title_list.append(title)

# print(title_list)

######################################################################
print('"좋아요" 수가 200,000 이상인 곡에 대해서, 곡명 가나다 순으로 정렬')
# 1안) 필터링을 먼저 하고, 필터링된 결과에 대해서 곡명 오름차순 정렬 (!!!)
# 2안) 곡명에 대한 오름차순 정렬을 먼저하고, 필터링

# # TODO
# def filter_fn4(song_dict):
#     return song_dict["like"] > 200_000


# def sort_fn4(song_dict):
#     return song_dict["title"]


# new_song_list = filter(filter_fn4, song_list)  # list 타입은 아닙니다. filter 에 리스트 걸지 말라
# new_song_list = sorted(new_song_list, key=sort_fn4)  # 이렇게 연계해서 쓰면 성능이 수천수만배 좋아짐

# for song_dict in new_song_list:
#     print(song_dict["like"], song_dict["title"])
