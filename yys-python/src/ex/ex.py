import time
import pyautogui

time.sleep(3)

cj = pyautogui.locateOnScreen("出击.png", grayscale=True)

print(cj)
