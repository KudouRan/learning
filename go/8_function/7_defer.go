package main

import "fmt"

func main() {
	num := function1()
	fmt.Println("\n", num)
}

func function1() int {
	fmt.Printf("In function1 at the top\n")
	//这个会在最后执行
	defer function2()
	fmt.Printf("In function1 at the bottom!\n")
	return 1
}

func function2() {
	fmt.Printf("Function2: Deferred until the end of the calling function!")
}
