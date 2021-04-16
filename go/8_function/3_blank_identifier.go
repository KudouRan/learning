package main

import "fmt"

func main() {
	//忽略中间的6
	i1, _, f1 := threeValues()
	fmt.Printf("The int: %d, the float: %f \n", i1, f1)
}

func threeValues() (int, int, float32) {
	return 5, 6, 7.5
}
