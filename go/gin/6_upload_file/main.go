package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.StaticFile("/", "./index.html")

	// 处理multipart forms提交文件时默认的内存限制是32 MiB
	// 可以通过下面的方式修改
	// r.MaxMultipartMemory = 8 << 20  // 8 MiB

	r.POST("/single", func(c *gin.Context) {
		file, err := c.FormFile("s_file")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
				"code":    -1,
			})
			return
		}

		fmt.Println(file.Filename)
		dst := fmt.Sprintf("./upload/%s", file.Filename)
		err = c.SaveUploadedFile(file, dst)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
				"code":    -2,
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("%s upload", file.Filename),
		})
	})

	r.POST("/multi", func(c *gin.Context) {
		form, _ := c.MultipartForm()
		files := form.File["file"]

		for index, file := range files {
			fmt.Println(file.Filename, index)
			dst := fmt.Sprintf("./upload/%s", file.Filename)
			_ = c.SaveUploadedFile(file, dst)
		}

		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("%d files uploaded!", len(files)),
		})
	})

	_ = r.Run(":9090")
}
