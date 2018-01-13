
/**
 * 
 */
public class HongBao {
    public static void main(String[] args) {

    }

    public static int[] divide(double money, int n) {
        int fen = (int) (100 * money);
        if (fen < n || n < 1) {
            System.out.print("");
            throw new IllegalArgumentException("");
        }
        int[] a = new int[n];
        return a;
    }
}