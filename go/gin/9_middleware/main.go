package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"time"
)

// StatCost 是一个统计耗时请求耗时的中间件
func StatCost() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		c.Set("name", "小王子") // 可以通过c.Set在请求上下文中设置值，后续的处理函数能够取到该值
		// 调用该请求的剩余处理程序
		c.Next()
		// 不调用该请求的剩余处理程序
		// c.Abort()
		// 计算耗时
		cost := time.Since(start)
		log.Println(cost)
	}
}

func main() {
	// 新建一个不含默认中间件的路由
	r := gin.New()
	// 注册一个全局中间件
	r.Use(StatCost())

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"code": 200})
	})

	//  路由上单独的中间件
	r.GET("/demo", func(c *gin.Context) {
		fmt.Println("中间件运行")
		fmt.Println(c.Request.URL)
	}, func(c *gin.Context) {
		c.JSON(200, gin.H{"code": 200})
	})

	// 路由组中用法相同

	/**
	gin默认中间件
	gin.Default()默认使用了Logger和Recovery中间件，其中：

	Logger中间件将日志写入gin.DefaultWriter，即使配置了GIN_MODE=release。
	Recovery中间件会recover任何panic。如果有panic的话，会写入500响应码。
	如果不想使用上面两个默认的中间件，可以使用gin.New()新建一个没有任何默认中间件的路由。

	gin中间件中使用goroutine
	当在中间件或handler中启动新的goroutine时，不能使用原始的上下文（c *gin.Context），必须使用其只读副本（c.Copy()）。
	*/

	_ = r.Run(":9090")
}
