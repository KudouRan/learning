package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.New()

	r.LoadHTMLFiles("404.html")
	// 所有支持的类型
	r.Any("/any", func(c *gin.Context) {
		fmt.Println("请求的方法是", c.Request.Method)
		c.JSON(http.StatusOK, gin.H{"message": "ok"})
	})

	// 404
	r.NoRoute(func(c *gin.Context) {
		c.HTML(http.StatusNotFound, "404.html", nil)
	})

	// 路由组
	bookGroup := r.Group("/book")
	bookGroup.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "GET"})
	})
	bookGroup.POST("/", func(c *gin.Context) {
		c.JSON(201, gin.H{"message": "POST"})
	})
	bookGroup.DELETE("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "DELETE"})
	})
	bookGroup.PUT("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "PUT"})
	})

	// 更优雅的方式 虽然这个{}没有影响,但是缩进看起来更加舒服
	userGroup := r.Group("/user")
	{
		userGroup.GET("/", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "GET"})
		})
		userGroup.POST("/", func(c *gin.Context) {
			c.JSON(201, gin.H{"message": "POST"})
		})
		userGroup.DELETE("/", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "DELETE"})
		})
		userGroup.PUT("/", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "PUT"})
		})
	}

	// 路由组的嵌套
	aaaGroup := r.Group("/aaa")
	{
		aaaGroup.GET("/index", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "aaa"})
		})

		bbbGroup := aaaGroup.Group("/bbb")
		{
			bbbGroup.GET("/", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{"message": "aaa/bbb"})
			})
		}
	}

	_ = r.Run(":9090")
}
