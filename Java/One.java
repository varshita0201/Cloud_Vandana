import java.util.*;
public class One{
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7};
        ArrayList<Integer> al=new ArrayList<>();
        for(int i:arr)
            al.add(i);
        Collections.shuffle(al);
        System.out.println(al);
    }
}