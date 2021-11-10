from collections import Counter
from typing import List
import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

# 문제
# artist 글자수가 3글자 이상인 곡에 대해서(filtering)
# 좋아요 수와 제목글자수의 곱을 출력해보세요.(mapping)
# 1) for/if로 구현
new_song_list: List[dict] = []


for song_dict in song_list:
    artist: str = song_dict["artist"]
    if len(artist) >= 3:
        value: int = song_dict["like"] * len(song_dict["title"])
        new_song_list.append(dict(song_dict, value=value))
        # new_song_list.append({
        #     "title": song_dict["title"]
        #     "artist"
        # }

for song_dict in new_song_list:
    print("{title} / {value}".format(**song_dict)


# 2) filter/map 위주로 구현







# 3) my solution
def artist_over_3(song_dict):
    artist_lenth = len(song_dict["artist"])
    return artist_lenth >= 3


for song_dict in song_list:
    if artist_over_3(song_dict):
        title_lenth = len(song_dict["title"])
        like_multiply_title = song_dict["like"] * title_lenth
    else:
        pass

    print(like_multiply_title)
