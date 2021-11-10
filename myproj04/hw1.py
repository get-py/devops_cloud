#01
In [34]: for song in song_list:
    ...:     if "방탄소년단" == song["artist"]:
    ...:         print(song["title"])
    ...:
Dynamite
Life Goes On
내 방을 여행하는 법
Blue & Grey
작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)
잠시
봄날
Stay
병
ON


#02
In [33]: for song in song_list:
    ...:     if "가을" in song["title"]:
    ...:         print(song["title"])
    ...:
가을밤에 든 생각
가을 타나 봐



#03
In [48]: over_20000_like=0

In [49]: for song in song_list:
    ...:     if song["like"] > 20000:
    ...:         over_20000_like += 1
    ...:
    ...:
    ...:

In [50]: over_20000_like
Out[50]: 94



#04
In [63]: artist_song_dict = {}

In [64]: for song in song_list:
    ...:     if song["artist"] in artist_song_dict:
    ...:         artist_song_dict[song["artist"]] += 1
    ...:     else:
    ...:         artist_song_dict[song["artist"]] = 1
    ...:

In [65]: artist_song_dict
Out[65]:
{'방탄소년단': 10,
 '미란이': 1,
 '임창정': 3,
 '장범준': 2,
 'BLACKPINK': 4,
 '산들': 1,
 '환불원정대': 1,