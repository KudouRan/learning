package main

import (
	"fmt"
)

func main() {

	fmt.Println("这是一个\t字符串(\\t被转义了)")
	fmt.Println(`这是啥子字符串哦
			,\t不会转义,甚至还能换行`)

	//拼接字符串
	fmt.Println("字符串a" + "字符串b")

	str := "hello world"
	str1 := "这是一句中文"
	fmt.Printf("字符串%s的长度是:%d\n", str, len(str))
	//返回ASCII码 h --> 104
	fmt.Println(str[0])
	fmt.Printf("%s", string(str[1]))
	fmt.Println()
	fmt.Println(str1[0])

}
