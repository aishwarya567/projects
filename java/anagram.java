import java.util.Arrays;
public class anagram{
    public static void main(String args[]){
        String str1 = " silent";
        String str2 = "listen";
        if (str1.length()==str2.length()){
            char[] ar1 = str1.toCharArray();
            Arrays.sort(ar1);
            System.out.println(Arrays.toString(ar1));
            char[] ar2 = str2.toCharArray();
            Arrays.sort(ar2);
            System.out.println(Arrays.toString(ar2));
            System.out.println(Arrays.equals(ar1,ar2));
            if (ar1.equals(ar2)){
                System.out.println("string are anagram");
            }
            else{
                System.out.println("not an anagram");
            }

        }
    }
    }
