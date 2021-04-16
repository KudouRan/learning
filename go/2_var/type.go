package main

import "fmt"

//TZ 注释(他妈的)
type TZ int

func main() {
	var a, b TZ = 3, 4
	c := a + b
	fmt.Printf("c的值: %d", c) // 输出：c has the value: 7
}
