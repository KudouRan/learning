// 1. 条件是转换的数据类型必须是兼容的。
// 2. 格式：(type)value type是要强制类型转换后的数据类型

public class QiangZhiZhuanHuan {
    public static void main(String[] args) {
        int i1 = 128;
        byte b = (byte) i1;
        System.out.println("int类型128强制类型转换为byte后的值等于" + b);
    }
}

// 隐含强制类型转换
// 1. 整数的默认类型是 int。
// 2. 浮点型不存在这种情况，因为在定义 float 类型时必须在数字后面跟上 F 或者 f。