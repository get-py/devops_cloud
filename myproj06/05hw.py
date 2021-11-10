from collections import Counter
import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())


# 1. 멜론 top100 리스트에서 "곡명" / 단어수의 리스트를 만들어봅시다.
# dynarmite -> 1    이렇게 출력

# solve1
for song_dict in song_list:
    title: str = song_dict["title"]
    title_length = len(title)
    print(title, title_length)

# solve2
def get_title_for_song(song_dict):
    return song_dict["title"]


# for song_dict in song_list:
#     # 변환을 담당하는 함수
#     print(get_title_for_song(song_dict))

# title_list = list(map(get_title_for_song, song_list))
# print(title_list)

# for title in map(get_title_for_song, song_list):
#     print(title)


def get_title_and_length_for_song(song_dict):
    title: str = song_dict["title"]
    return [title, len(title)]


for title, length in map(get_title_and_length_for_song, song_list):
    print(title, length)

# my_solve1
# def count_title_word(song_dict):
#     count_word = song_dict["title"].split()
#     count_word = len(count_word)
#     print(song_dict["title"], "->", count_word)


# for song_dict in map(count_title_word, song_list):
#     pass


# def sort_fn(song_dict):
#     return song_dict["title"]


# count_word = song_list["title"].split()
# count_word = len(count_word)
# print(song_list["title"], "->", count_word)


# for song_dict in map(count_word, song_list):
#     pass


###########################################################################
# 2. 멜론 top100 리스트에서 "곡명" 단어수로 top10 곡명 출력

# 3. "좋아요" 가장 많은 곡? 가장 적은 곡?


# for song_dict in song_list:
#     if song_dict["like"] == max:
#         print(song_dict["like"], song_dict["title"])

# for song_dict in max(song_list["like"]):
#     print(song_dict["like"])


# def sort_like(song_dict):
#     return song_dict["like"]


# song_likes = sort_like(song_list)

# print(song_likes)

# print max()

# 4. "곡명" 단어수가 가장 많은 곡? 가장 적은 곡?


# 5. "곡명" 글자수가 가장 많은 곡? 가장 적은 곡?

# 6. 리스트에 랭크된 가수는 총 몇 팀?

# 7. 2곡 이상 랭크된 가수는 몇 팀?

# 8. "방탄소년단"의 좋아요 총 합?
