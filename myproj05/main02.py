import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())


# def 정렬기준값을_만들어줄_함수(song_dict):
#     return song_dict["like"]


# # 정렬을 하려면, 각 값들에 대한 대소비교가 가능해야 한다
# # 10 < 100   '가' < '나'    possible
# # {"A" : 1} < {"B" : 2}    impossible
# sorted_song_list = sorted(song_list, reverse=True, key=정렬기준값을_만들어줄_함수)

# for song_dict in sorted_song_list:
#     print("[{like}], {title}, {artist}".format(**song_dict))


#######################################################################################3
# 상위 top 10


def 정렬기준값을_만들어줄_함수(song_dict):
    return song_dict["like"]


sorted_song_list = sorted(song_list, reverse=True, key=정렬기준값을_만들어줄_함수)

for song_dict in sorted_song_list[0:10]:
    print("[{like}], {title}, {artist}".format(**song_dict))
