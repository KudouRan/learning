package main

import "fmt"

func main() {
	// s := "\u00ff\u754c"
	s := "就这"
	for i, c := range s {
		fmt.Printf("%d:%c ", i, c)
	}
}
