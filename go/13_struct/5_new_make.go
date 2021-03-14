package main

import "fmt"

type Foo map[string]string

type Bar struct {
	thingOne string
	thingTwo int
}

func main() {
	// OK
	y := new(Bar)
	(*y).thingOne = "hello" //这样可以
	(*y).thingTwo = 1
	y.thingOne = "hi" //这样可以

	fmt.Println(y.thingOne)
	fmt.Println((*y).thingOne)

	// // NOT OK
	// z := make(Bar) // 编译错误：cannot make type Bar
	// (*z).thingOne = "hello"
	// (*z).thingTwo = 1

	// OK
	x := make(Foo)
	x["x"] = "goodbye"
	x["y"] = "world"

	fmt.Println(x["x"])

	// NOT OK
	// u := new(Foo)
	// (*u)["x"] = "goodbye" // 运行时错误!! panic: assignment to entry in nil map
	// (*u)["y"] = "world"
}
