package main

import "fmt"

func main() {
	fmt.Printf("Multiply 2 * 5 * 6 = %d\n", MultiPly3Nums(2, 5, 6))
	// var i1 int = MultiPly3Nums(2, 5, 6)
	// fmt.Printf("MultiPly 2 * 5 * 6 = %d\n", i1)
	b := 1

	DoSomething1(&b)
	DoSomething2(b)
}

//MultiPly3Nums wc
func MultiPly3Nums(a int, b int, c int) int {
	// var product int = a * b * c
	// return product
	return a * b * c
}

func DoSomething1(a *int) {
	b := a
	fmt.Println(b)
}

func DoSomething2(a int) {
	b := &a
	fmt.Println(b)
}
