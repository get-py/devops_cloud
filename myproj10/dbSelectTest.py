## 15.3 파이썬과 MySQL 연동
import pymysql

conn = None
cur = None

# 데이터 베이스 접속
conn = pymysql.connect(
    host="127.0.0.1", user="root", password="1234", db="sqlDB", charset="utf8"
)

# 커서
cur = conn.cursor()

# SELECT 쿼리에서 NULL 처리
sql = (
    "SELECT userID, name, birthYear, addr, IFNULL(CONCAT(mobile1, '-', mobile2), '-') AS mobile, "
    "IFNULL(height, 0) AS height,"
    "IFNULL(mDate, '-') AS mDAte "
    "FROM userTBL"
)
# print(sql) -- 쿼리 실행해서 밑에서 복사 -> Heidi SQL 에서 붙여넣기
cur.execute(sql)
print("회원ID     회원명     출생년도    주소      연락처     키   가입일")
print("------------------------------------------------------------")

while True:
    row = cur.fetchone()
    if row == None:
        break
    userID = row[0]
    name = row[1]
    birthYear = row[2]
    addr = row[3]
    mobile = row[4]
    height = row[5]
    mDate = row[6]

    print(
        "%5s %7s %9d %7s %10s %d %5s"
        % (userID, name, birthYear, addr, mobile, height, mDate)
    )
conn.close()
