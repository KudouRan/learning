package main

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	// querystring
	r.GET("query", func(c *gin.Context) {
		name := c.DefaultQuery("name", "默认值")
		c.JSON(http.StatusOK, gin.H{"name": name})
	})

	// path
	r.GET("path/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, gin.H{"id": id})
	})

	// json
	r.POST("json", func(context *gin.Context) {
		// 从c.Request.Body读取
		data, _ := context.GetRawData()
		var m map[string]interface{}
		// 解析JSON
		_ = json.Unmarshal(data, &m)
		m["a"] = 123
		context.JSON(http.StatusOK, m)
	})

	// form
	r.POST("post", func(c *gin.Context) {
		// DefaultPostForm取不到值时会返回指定的默认值
		//username := c.DefaultPostForm("username", "catlair")
		username := c.PostForm("username")
		address := c.PostForm("address")
		// 返回json
		c.JSON(http.StatusOK, gin.H{
			"message":  "ok",
			"code":     http.StatusOK,
			"username": username,
			"address":  address,
		})
	})

	_ = r.Run(":9090")
}
