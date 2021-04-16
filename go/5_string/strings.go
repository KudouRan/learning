package main

import (
	"fmt"
	"strings"
)

func main() {
	str1 := "This is hello world string"

	//是否有前缀
	fmt.Println(strings.HasPrefix(str1, "This"))
	//是否有后缀
	fmt.Println(strings.HasSuffix(str1, "string"))

	//查找字符串索引
	fmt.Println(strings.Index(str1, "i"))
	fmt.Println(strings.LastIndex(str1, "i"))
	//没有就会返回-1
	fmt.Println(strings.LastIndex(str1, "MMMM"))

	//替换字符串,最后参数为-1则全部替换
	str2 := strings.Replace(str1, "i", "I", 2)
	fmt.Println(str2)

	//分隔字符串
	fmt.Println(strings.Fields(str1)[0])
	strSplit := strings.Split(str1, "i")
	fmt.Println(strSplit)

	fmt.Println(strings.Join(strSplit, "添加"))
}
