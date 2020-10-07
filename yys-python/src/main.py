import pyautogui
# 获取当前窗口大小
screenWidth, screenHeight = pyautogui.size()
print("当前屏幕分辨率:", screenHeight, screenWidth)

# 获取鼠标位置
currentMouseX, currentMouseY = pyautogui.position()
print("横坐标:", currentMouseX, "纵坐标:", currentMouseY)

# 鼠标绝对运动
# pyautogui.moveTo(110, 120)

# 点击
# pyautogui.click()
# pyautogui.doubleClick(110, 220)

# 鼠标相对移动
# pyautogui.move(None, 100, 0.2,)
# pyautogui.move(-300)
