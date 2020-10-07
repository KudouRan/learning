public class Variable {
    static int allClick = 818; // 类变量(静态属性)
    String str = "这是实例变量"; // 实例变量

    public void method() {
        int a = 12;
        System.out.println("局部变量" + a);
        System.out.println("实例变量:" + str);
    }

    public static void main(String[] args) {
        Variable var = new Variable();
        System.out.println("全称使用类变量:" + Variable.allClick); // 使用类变量
        System.out.println("直接名字使用" + allClick);// 使用类变量
        System.out.println("实例变量(静态方法中使用):" + var.str); // 使用实例变量
        var.method(); // 使用局部变量
    }
}