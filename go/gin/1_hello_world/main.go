package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"html": "<h1>hello world</h1>",
		})
	})
	err := r.Run(":9090")
	if err != nil {
		fmt.Printf("启动出现错误%v\n", err)
	}
}
