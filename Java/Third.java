import java.util.*;
public class Third {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str=sc.nextLine();
        String s=str.replaceAll("[^a-zA-Z]","");
        String s1=s.toLowerCase();
        HashSet<Character> hs=new HashSet<>();
        for(int i=0;i<s1.length();i++)
            hs.add(s1.charAt(i));
        System.out.println(hs.size()==26 ? "Panagram" :"Not a Panagram");
      
    }
}
