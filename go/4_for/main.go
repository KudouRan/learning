package main

import "fmt"

func gotoDemo() {
	for i := 0; i < 10; i++ {
		for j := 0; j < 10; j++ {
			if j == 2 {
				// 设置退出标签
				goto breakTag
			}
			fmt.Printf("%v-%v\n", i, j)
		}
	}
	return
	// 标签
breakTag:
	fmt.Println("结束for循环")
}

func main() {
	//标准的循环流程
	for i := 0; i < 3; i++ {
		fmt.Printf("%d ", i)
	}

	fmt.Println()

	//省略初始
	i := 2
	for ; i < 3; i++ {
		fmt.Printf("%d ", i)
	}

	fmt.Println()

	//类似于while循环
	for i > 0 {
		fmt.Printf("%d ", i)
		i-- //前面没说,go的递增递减需要单独一行
	}

	fmt.Println()
	gotoDemo()
}
