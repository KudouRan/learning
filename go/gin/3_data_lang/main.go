package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/testdata/protoexample"
	"net/http"
)

func main() {
	r := gin.Default()

	// json 使用map
	r.GET("/json", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{"message": "hello"})
	})

	// json 使用结构体
	r.GET("/json2", func(context *gin.Context) {
		type person struct {
			Name   string  // 一般传给前端的字段都需要首字母小写,但是go中导出/被序列化的必须要大写
			Age    int8    `json:"age"` // 这样就能让json序列化时转换成小写
			height float32 // 这个首字母小写会被忽略
		}

		myInfo := person{
			Name:   "catlair",
			Age:    18,
			height: 2.4,
		}

		context.JSON(http.StatusOK, myInfo)
	})

	// xml 使用map
	r.GET("xml", func(context *gin.Context) {
		context.XML(http.StatusOK, gin.H{"message": "yinx"})
	})

	// xml 结构体
	r.GET("xml2", func(context *gin.Context) {

		//使用xml必须要具名的结构体
		type person struct {
			Name    string `xml:"name"` //同样的别名方法
			Sex     bool
			message string //同样是不被导出的
		}

		myInfo := person{
			Name:    "catlair",
			Sex:     false,
			message: "123",
		}

		context.XML(http.StatusOK, myInfo)
	})

	// YAML
	r.GET("yaml.yaml", func(context *gin.Context) {
		context.YAML(http.StatusOK, gin.H{"message": "ok", "code": http.StatusOK})
	})

	// protobuf
	r.GET("protobuf.proto", func(context *gin.Context) {
		reps := []int64{int64(1), int64(2)}
		label := "test"

		data := &protoexample.Test{
			Label: &label,
			Reps:  reps,
		}

		context.ProtoBuf(http.StatusOK, data)
	})

	_ = r.Run(":9090")
}
