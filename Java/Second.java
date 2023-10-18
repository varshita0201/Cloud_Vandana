import java.util.*;
public class Second {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str=sc.next();
        System.out.println(toInteger(str));
    }
    public static int toInteger(String str){
        int ans=0;
        HashMap<Character,Integer> hm=new HashMap<>();
        hm.put('I',1);  
        hm.put('V',5);  
        hm.put('X',10);  
        hm.put('L',50);  
        hm.put('C',100);  
        hm.put('D',500);  
        hm.put('M',1000);
        str = str.replace("IV","IIII");  
        str = str.replace("IX","VIIII");  
        str = str.replace("XL","XXXX");  
        str = str.replace("XC","LXXXX");  
        str = str.replace("CD","CCCC");  
        str = str.replace("CM","DCCCC");  
        for(int i=0;i<str.length();i++){
            ans+=hm.get(str.charAt(i));
        }

        return ans;
    }
}
