from collections import Counter
from typing import List
import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

new_song_list = []

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
    print("{title} / {value}".format(**song_dict))
