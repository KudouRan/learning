package main

import (
	"catlair/demo/structPack"
	"fmt"
)

type ExpStruct structPack.ExpStruct

func main() {
	struct1 := new(ExpStruct)
	struct1.Mi1 = 10
	struct1.Mf1 = 16.

	fmt.Printf("Mi1 = %d\n", struct1.Mi1)
	fmt.Printf("Mf1 = %f\n", struct1.Mf1)

	struct2 := Demo(struct1)

	struct1.SaveDemo()
	struct2.SaveDemo()
}

// 直接写structPack.ExpStruct报错
func (exp *ExpStruct) SaveDemo() {
	fmt.Println(exp)
}
