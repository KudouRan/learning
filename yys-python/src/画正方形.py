import pyautogui


def square(s, sx, sy):
    pyautogui.mouseDown(sx, sy)
    pyautogui.move(s)
    pyautogui.move(None, s)
    pyautogui.move(0 - s)
    pyautogui.move(None, 0 - s)
    pyautogui.mouseUp()


def drawing(side=10, x=400, y=640, smax=500):
    temp = side
    while side <= smax:
        square(side, x, y)
        side += temp * 2
        x -= temp
        y -= temp


drawing(40)
