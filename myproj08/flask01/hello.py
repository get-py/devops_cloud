from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


"""in cmd
> set FLASK_APP=hello
> flask run
"""


@app.route("/profile")
def profile():
    # DB access
    like_foods = [
        "민초",
        "마라탕",
        "버블티",
        "슈바인하겐",
        "갈릭버터새우",
    ]
    return render_template("profile.html", like_foods=like_foods)


@app.route("/posts")
def post_list():
    return render_template("post_list.html")
