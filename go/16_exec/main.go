package main

import (
	"log"
	"os/exec"
)

func main() {
	cmd := exec.Command("docker", "start", "bili-test-local")

	if err := cmd.Start(); err != nil { // 运行命令
		log.Fatal(err)
	}
}
