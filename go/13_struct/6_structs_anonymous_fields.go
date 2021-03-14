package main

import "fmt"

type innerS struct {
	in1 int
	in2 int
}

type outerS struct {
	b      int
	c      float32
	in1    int
	int    // 匿名字段
	innerS //匿名字段
}

func main() {
	outer := new(outerS)
	outer.b = 6
	outer.c = 7.5
	//这里使用的int,可以看出一个类型的匿名字段只能使用一次
	outer.int = 60
	outer.in1 = 5
	outer.in2 = 10

	fmt.Printf("outer.b is: %d\n", outer.b)
	fmt.Printf("outer.c is: %f\n", outer.c)
	fmt.Printf("outer.int is: %d\n", outer.int)
	fmt.Printf("outer.in1 is: %d\n", outer.in1)
	fmt.Printf("outer.in2 is: %d\n", outer.in2)

	// 使用结构体字面量
	outer2 := outerS{6, 7.5, 50, 60, innerS{5, 10}}
	fmt.Println("outer2 is:", outer2)
	//查看深层的
	fmt.Println("outer2.innerS.in1", outer2.innerS.in1)
	//外不没用同名的字段
	fmt.Println(outer2.in2)
	//当内部和外部有相同的类型和名字的字段,取得外部的
	fmt.Println(outer2.in1)

}
