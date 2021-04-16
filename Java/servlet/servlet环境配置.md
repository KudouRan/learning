

## 下载解压

![image-20210317225647170](servlet%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/image-20210317225647170.png)

版本9.0.44, zip版本,下载解压过程省略



## Java 版本

```bash
$ java -version
java version "11.0.10" 2021-01-19 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.10+8-LTS-162)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.10+8-LTS-162, mixed mode)
```

**需要设置JAVA_HOME才能用tomcat**



## Java依赖

直接javac编译servlet的java文件会找不到servlet包  

jdk11并不支持jre，想要使用依赖的jar必须添加环境变量c`lasspath`,并一一添加具体的jar包(分号分隔)

![image-20210317230009342](servlet%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/image-20210317230009342.png)