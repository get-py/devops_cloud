import pymysql

conn = None
cur = None

# 데이터 베이스 접속
conn = pymysql.connect(
    host="127.0.0.1", user="root", password="1234", db="sqlDB", charset="utf8"
)

# 커서
cur = conn.cursor()
sql = ""

# userTBL 회원 데이터 INSERT
userID = ""
name = ""
birthYear = ""
addr = ""
mobile1 = ""
mobile2 = ""
height = ""

while True:
    userID = input("사용자 ID ==> ")
    if userID == "":
        break
    name = input("사용자 이름 ==> ")
    birthYear = input("사용자 출생년도 ==> ")
    addr = input("사용자 주소 ==> ")
    mobile1 = input("휴대폰 앞자리 ==> ")
    mobile2 = input("휴대폰 뒤 8자리 ==> ")
    height = input("사용자 신장 ==> ")

    sql = (
        "INSERT INTO userTBL (userID, name, birthYear, addr, mobile1, mobile2, height, mDate) VALUES"
        "('"
        + userID
        + "', '"
        + name
        + "', "
        + birthYear
        + ", '"
        + addr
        + "', '"
        + mobile1
        + "', '"
        + mobile2
        + "', "
        + height
        + ", CURDATE())"
    )
    print(sql)
    cur.execute(sql)

conn.commit()
conn.close()
