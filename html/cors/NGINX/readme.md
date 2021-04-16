```
http {
    server {
        listen       80;
        server_name  localhost;
        root  html;

        location /prod-api/ {
            proxy_pass http://localhost:8080/;
        }
    }
}
```
