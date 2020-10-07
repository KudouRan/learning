import pyautogui
import math

width, height = pyautogui.size()

r = 250

o_x = width / 2
o_y = height / 2

pi = 3.1415926

for i in range(1):
    for angle in range(0, 360):
        X = o_x + r * math.sin(angle * pi / 180)
        Y = o_y + r * math.cos(angle * pi / 180)

        pyautogui.moveTo(X, Y)
        pyautogui.mouseDown()

    pyautogui.mouseUp()
