# pip install flask
# pip install pillow

from PIL import Image

im = Image.open("static/sky.jpg")
im.thumbnail((800, 600))
im.save("static/sky.jpg")
