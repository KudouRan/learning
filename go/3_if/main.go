package main

import "fmt"

func main() {
	//go中的 if/else等必须和{在同一行
	if 10 < 5 {
		fmt.Println("10小于5")
	} else if 10 < 8 {
		fmt.Println("10小于8")
	} else {
		fmt.Println("上面的条件都没有满足")
	}

	//这里的score的作用域在if范围内
	if score := 65; score >= 90 {
		fmt.Println("A")
	} else {
		fmt.Println("不是A")
	}

}
