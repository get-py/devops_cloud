# 기초 데이터로서 멜론 top100 리스트 구성하기

import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())
song_list

# print(song_list)


# 방탄소년단의 곡명만 출력하기
for song in song_list:
    if song["artist"] == "방탄소년단":
        print(song["title"])


# 곡명에 가을이 들어가는 곡명만 출력하기
for song in song_list:
    if "가을" in song["title"]:
        print(song["title"])

# 좋아요 수가 20만이 넘는 곡수는?
song_count = 0

for song in song_list:
    if song["like"] > 200000:
        song_count += 1
print(f"좋아요가 200,000이 넘는 곡은 {song_count}곡입니다.")

# 가수별 곡수를 출력하기 - 사전은 값이 없을 때 등록하는 문법과 값을 바꾸는 문법이 같다!!!!
# not in
artist_dict = {}
for song in song_list:
    artist: str = song["artist"]

    if artist not in artist_dict:
        artist_dict[artist] = 0
    artist_dict[artist] += 1

print(artist_dict)


#     artist_list.append(artist)

# print(artist_list)

# ["a", "b", "a"].count("a")


# +다른 접근
from collections import Counter

artist_list = []
for song in song_list:
    artist = song["artist"]
    artist_list.append(artist)

print(Counter(artist_list))

"""
In [12]: from collections import Counter

In [13]: Counter(["a", "b", "c", "a", "b", "a"])
Out[13]: Counter({'a': 3, 'b': 2, 'c': 1})

In [14]: counter = Counter(["a", "b", "c", "a", "b", "a"])

In [15]: counter["a"]
Out[15]: 3
"""
# 또 다른 접근 list comprehension

artist_list = [song["artist"] for song in song_list]

print(Counter(artist_list))


# fmt: on
counter = Counter(artist_list)

# for artist in counter:  # keys
#     print(artist)

# for song_count in counter.values():  # values
#     print(song_count)

# for artist in counter:
#     print(artist, counter[artist])

for artist, song_count in counter.items():
    print(artist, song_count)
