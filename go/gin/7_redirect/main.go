package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.LoadHTMLFiles("index.html", "router.html")

	//HTTP 重定向很容易。 内部、外部重定向均支持。
	r.GET("/home", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	r.GET("/", func(c *gin.Context) {
		c.Redirect(http.StatusFound, "/home")
	})

	//路由重定向，使用HandleContext
	r.GET("/router", func(c *gin.Context) {
		c.Request.URL.Path = "/route"
		r.HandleContext(c)
	})

	r.GET("/route", func(context *gin.Context) {
		context.HTML(http.StatusOK, "router.html", nil)
	})

	_ = r.Run(":9090")
}
