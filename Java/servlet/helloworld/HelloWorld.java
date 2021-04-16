import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloWorld extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello world";
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // 设置响应头
        resp.setContentType("text/html");

        resp.getWriter().println("<h1>" + message + "</h2>");
    }

    public void destroy() { }
}
