package main

import (
	"github.com/gin-gonic/gin"
	"html/template"
	"net/http"
)

func main() {
	r := gin.Default()

	// 自定义函数
	r.SetFuncMap(template.FuncMap{
		"safe": func(str string) template.HTML {
			return template.HTML(str)
		},
	})

	//静态文件
	r.Static("/static", "./static")

	//加载全部文件(正则)
	r.LoadHTMLGlob("templates/**/*")
	r.LoadHTMLGlob("templates/index.tmpl")
	//加载部分文件
	//r.LoadHTMLFiles("templates/posts/index.tmpl", "templates/users/index.tmpl")
	r.GET("/posts/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "posts/index.tmpl", gin.H{
			"title": "Posts",
		})
	})

	r.GET("/users/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "users/index.tmpl", gin.H{
			"title": "Users",
		})
	})

	r.GET("/safe/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "safe/index.tmpl", "<a href=\"https://baidu.com\">百度一下</a>")
	})

	//内容可以用map和struct上面的gin.H就是map,这里使用struct
	type person struct {
		Name      string
		Birthday  string
		dateBirth int
	}

	//会发现实际渲染出来的没有出生,因为dateBirth小驼峰在go中不被导出(json也不被序列化)
	zard := person{
		Name:      "蒲池幸子",
		Birthday:  "2月6日",
		dateBirth: 1967,
	}

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", zard)
	})

	_ = r.Run(":9090")
}
