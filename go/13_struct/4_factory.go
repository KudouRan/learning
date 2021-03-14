package main

import "fmt"

type file struct {
	fd   int    // 文件描述符
	name string // 文件名
}

func newFile(fd int, name string) *file {
	if fd < 0 {
		return nil
	}

	return &file{fd, name}
}

func main() {
	f := newFile(10, "./test.txt")
	fmt.Println(f)
}
