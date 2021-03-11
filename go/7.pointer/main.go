package main

import "fmt"

func main() {
	var a int = 123

	//使用&取得地址
	//地址用16进制表示
	//例如 0xc000014088
	fmt.Println(&a)
	//格式化使用%p
	fmt.Printf("使用指针%p\n", &a)

	var intP *int

	intP = &a

	fmt.Println(intP)
	//打印指针的地址(狗头)
	fmt.Println(&intP)

	//在书写表达式类似 var p *type 时，
	//切记在 * 号和指针名称间留有一个空格，因为 - var p*type 是语法正确的，
	//但是在更复杂的表达式中，它容易被误认为是一个乘法表达式！

	//通过指针修改a
	*intP = 234
	fmt.Println(a)
}
