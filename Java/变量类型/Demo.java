public class Demo {
    static int allClicks = 100;
    String str = "hello world";

    public void pupAge() {
        int age = 0;
        System.out.println("小狗的年龄时:" + age);
        System.out.println("测试all:" + allClicks);
    }

    public static void main(final String[] args) {
        Demo test = new Demo();
        test.pupAge();
        allClicks++;
        test.pupAge();
        allClicks--;
        test.pupAge();
    }

}
