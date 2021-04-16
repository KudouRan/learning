package main

import "fmt"

func main() {
	// [5]int 数组由长度(固定)和类型共同组成数组类型
	var arr1 [5]int
	var arr2 = [...]string{"北京", "上海", "深圳"}

	fmt.Println(arr2)

	for i := 0; i < len(arr1); i++ {
		arr1[i] = i * 2
	}

	for i := 0; i < len(arr1); i++ {
		fmt.Printf("Array at index %d is %d\n", i, arr1[i])
	}
}
