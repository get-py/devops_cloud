from tkinter import *
from tkinter import messagebox

window = Tk()
window.title("입력관련 연습")

# 프레임: 영역을 나누기
# 엔트리: 입력상자(사용자에게 입력받는 <input type = text>)
# 리스트박스: 목록 (결과화면 여러개의 row 를 표현해야 할 때

# 프레임으로 upFrame, downFrame으로 나눠서 영역을 사용
upFrame = Frame(window)
upFrame.pack()

midFrame = Frame(window)
midFrame.pack()

downFrame = Frame(window)
downFrame.pack()

# 입력 상자를 upFrame에 배치
editBox = Entry(upFrame, width=10)
editBox.pack(padx=20, pady=20)

button = Button(midFrame, text="중간")
button.pack(padx=20, pady=20)

# 리스트박스는 downFrame에 배치
listBox = Listbox(downFrame)
listBox.pack()

# 리스트 박스에 값 입력
listBox.insert(END, "하나")
listBox.insert(END, "둘")
listBox.insert(END, "셋")

window.mainloop()


""" 1
window = Tk()
window.title("예린의 윈도우")
window.geometry("400x100")  # 넓이 * 높이
# window 고정 시키기
window.resizable(width=True, height=False)
# GUI 화면 코딩
"""

"""
# 라벨선언
label1 = Label(window, text="This is MariaDB를")
label2 = Label(window, text="열심히", font=("궁서체", 30), fg="blue")
label3 = Label(window, text="공부중입니다", bg="magenta", width=20, height=5, anchor=SE)
# 레이블이 올라갈 윈도우(=부모 윈도우), 출력될 글, 설정: font, fg=글자색, bg=배경색, anchor는 글자의 위치

# 위젯 적용
label1.pack()
label2.pack()
label3.pack()

"""

"""
window.title("버튼 이벤트 연습")

button1 = Button(window, text="여기 눌러요", command=clickButton)
button2 = Button(window, text="여기 눌러요", command=clickButton)
button3 = Button(window, text="여기 눌러요", command=clickButton)
button1.pack(side=TOP, padx=10, pady=10)
button2.pack(side=RIGHT, padx=10, pady=10)
button3.pack(side=RIGHT, padx=10, pady=10)
"""
