import pyautogui
import time

time.sleep(4)

im2 = pyautogui.screenshot()
pyautogui.screenshot('demo.png', region=(570, 0, 1369, 840))
