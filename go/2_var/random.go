package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	//生成10个int随机数
	for i := 0; i < 10; i++ {
		a := rand.Int()
		fmt.Printf("%d / ", a)
	}
	fmt.Println()

	//生成5个0到8的随机数(不包括8)
	for i := 0; i < 5; i++ {
		r := rand.Intn(8)
		fmt.Printf("%d / ", r)
	}
	fmt.Println()

	// 种子这里暂时不清楚
	timens := int64(time.Now().Nanosecond())
	rand.Seed(timens)
	//100以内的32位浮点数
	for i := 0; i < 10; i++ {
		fmt.Printf("%2.2f / ", 100*rand.Float32())
	}
}
