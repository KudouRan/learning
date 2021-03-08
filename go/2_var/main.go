package main

import "fmt"

func main() {
	//基本格式
	var a int
	a = 1
	fmt.Printf("%d\n", a)

	//批量声明
	var (
		aa string
		bb int
		cc bool
		dd float32
	)
	fmt.Println(aa, bb, cc, dd)

	//变量初始化
	var name string = "catlair"
	//声明多个
	var age, height = 17, 19.9
	fmt.Printf("%s %d %f\n", name, age, height)
}
