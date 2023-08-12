---
# This is the icon of the page

# This is the title of the article
title: Parametrizuoti tipai
# Set author
author: M.Gžegoževskis
# Set writing time
time: 2021-10-01
# A page can only have one category
category: Java
# A page can have multiple tags
tag:
- Programavimas
- Java
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: MIT Licensed | Copyright © 2021-present M. Gzegozevskis
---

Parametrizuoti tipai netik supaprastina programų šabloninių klasių, kūrimo, bet ir atveria galimybė rašyti universalesnį programinį kodą. Tarkim turite Java kolekciją į kurią norite talpinti tam tikro tipo objektus. Jeigu toje kolekcijoje atsiranda netinkamas elementas kompiliatorius nepraneša apie klaidą nes kolekcijoje galima talpinti bet kokio tipo Object elementus. 
Taigi iki 1.5 JDK naudojamas "raw" tipas sukeldavo begalė problemų konvertuojant objektą iš esamos kolekcijos JVM vykdymo metu gaunant klaidos pranešimą ClassCastException. Taip pat įvedus parametrizuotus tipus nuo 1.5 JDK atvertos šios galimybės:

- Įgalina naudoti tipizuotas kolekcijas.
- Sumažina klaidų kiekį, kurios atsirastų, vykdant nekontroliuojamą tipų konversiją.
- Galimybė sukurti parametrizuotus algoritmus, kurie veikia su įvairiais kolekcijų tipais.
- Modifikuojami, apsaugoti nuo tipų konversijos problemų, lengviau skaitomas programinis kodas.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/FAsYI31b1fQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nuo Java JDK 1.5 versijos atsirado generics, tam kad išspręstų pagrindinę problemą ClassCastException klaidą, kuri kildavo vykdymo metu (angl. runtime) ji buvo įprastinė dirbant su kolekcijų karkasu. Turint generics kompiliavimo metu yra tikrinami tipai ir apsaugoma nuo ClassCastException klaidos nes parametrizuoti tipai užtikrina tipų konversiją nes kuriant kolekciją į ją galima talpinti tik tam nurodyto tipo objektus. Visas kolekcijų karkasas buvo perrašytas dėl tipų apsaugos (type-safety) įvykstančių tipų konversijos metu.

~~~java
List list = new ArrayList();    
list.add("abc");    
list.add(new Integer(5)); 
// Kompiliatorius leidžia įdėti bet ką kas yra objektas    
// Gausime klaidos pranešimą dėl Integer tipo konversijos į String tipą    
// java.lang.ClassCastException: java.lang.Integer cannot be cast to java.lang.String    
for(Object obj : list){      
  // vykdymo metu bus sukelta ši išimtinė situacija ClassCastException      
  String str=(String) obj;    
}
~~~

ClassCastException išimtinės situacijos sprendimui pasitelkta parametrizuotais tipais. Žemiau yra pateikiamas generics taikymas.

~~~java
// java 1.7 JDK - List<String> list1 = new ArrayList<>();     
// atsirado diamond išraiška, pakanka kairėje pusėje nurodyti tipo argumentą.     
List<String> list1 = new ArrayList<String>();      
list1.add("abc");     
list1.add(new Integer(5)); // kompiliavimo klaida     
for (String str : list1) {     
  // nebereikia papildomai atlikti tipų konversijos, taip išvengiama ClassCastException
  String tekstas = str;  
} 
~~~

Privalumas dėl tipo konversijos turint generics nebereikia apie tai galvoti.

~~~java
// Įprastinis kolekcijos užpildymas naudojant iki 1.5 JDK 
List list = new ArrayList(); 
list.add("hello"); 
String s = (String) list.get(0); // Su galimybe įvykti klaidai ClassCastException 
// Atsiradus parametrizuotiems tipams nuo 1.5 JDK  
List<String> listas = new ArrayList<String>(); 
listas.add("hello"); 
String ss = listas.get(0); // nereikia rūpintis dėl tipų konversijos naudojant generics  
~~~

Sutartiniai parametrizuojamų tipų (angl. generics) žymėjimai:

**E** - Element (used extensively by the Java Collections Framework).  
**K** - Key (Raktinis žodis).  
**N** - Number (Skaičius).  
**T** - Type (Tipas).  
**V** - Value (Reikšmė).  
**S,U,V** etc. - 2nd, 3rd, 4th types (Jeigu reikia papildomų).

Terminologija naudojant žodį tipas ir skirtumai. Susitarimo reikalas dėl tipo parametras (angl. type parameter) ir tipo argumentas (angl. type argument) pavadinimų:

Type argument - ```NamasGeneric<String> namas = new NamasGeneric<>(); // String yra tipo argumentas```

Type parameter - ```class NamasGeneric<T>{....} // T yra tipo parametras```

Įprastinis objekto/klasės Namas aprašymas.

~~~java
class Namas {   
  private Object objektas;   
  public Object getObjektas() {     
    return objektas;   
  }   
  public void setObjektas(Object objektas) {     
    this.objektas = objektas;   
  }
} 
~~~

Naudojant generics analogiškos klasės užrašas atrodytų taip.

~~~java
class NamasGeneric<T> { 
  // T - Kokį tipą perduosim tokio tipo klasė ir taps   
  private T t;   
  public T getT() {     
    return t;   
  }   
  public void setT(T t) {  
    this.t = t;   
  } 
} 
~~~

Taip pat viena iš pastabų rekomenduojama nesugrįžti atgal į praeitį jeigu yra aprašyta generics klasė, o naudojamas "raw type" aprašymas kas reiškia jog klasė tampa Object tipo ir vėl privalome atlikti tipo konversiją patys kas sukels JVM vykdymo metu klaidos pranešimą ClassCastException.

~~~java
NamasGeneric<String> type = new GenericsType<>(); // naudojant generics type.set("Hello"); 
// teisingas NamasGeneric type1 = new NamasGeneric(); 
// ankstesnis formatas taip pat leistinas type1.set("Hello"); 
// teisingas type1.set(10); // teisingas  
~~~

Generics klasės aprašymas neapibrėžtas (angl. unbounded) tipas. Tai toks tipas kai norime perduotą klasės parametrą priimti bet kokį nuorodos tipą.

~~~java
class Pair<K, V> {   
  private K key;   
  private V value;   
  public Pair(K key, V value) {
    this.key = key;     
    this.value = value;   
  }   
  public void setKey(K key) { 
    this.key = key; 
  }   
  public void setValue(V value) { 
    this.value = value; 
  }   
  public K getKey() { 
    return key; 
  }   
  public V getValue() { return value; 
  } 
} 
~~~

Generics metodas su neapibrėžtais tipo parametrais.

~~~java
public class Util {   
  public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
    return p1.getKey().equals(p2.getKey()) &&p1.getValue().equals(p2.getValue()); 
  }
}
// Sukurto generics metodo taikymas 
Pair<Integer, String> p1 = new Pair<>(1, "apple"); 
Pair<Integer, String> p2 = new Pair<>(2, "pear"); 
boolean same = Util.<Integer, String>compare(p1, p2); 
 
// Tą patį static metodą Util.compare(p1, p2) galima kviesti paprastai
// Kompiliatorius sutvarko likusį darbą įterpiant "Util.<Integer, String>.compare()"  
  
Pair<Integer, String> p1 = new Pair<>(1, "apple"); 
Pair<Integer, String> p2 = new Pair<>(2, "pear"); 
boolean same = Util.compare(p1, p2); 
~~~

Parametrizuotas tipas naudojant iš anksto numatytus tipus arba kitaip vadinamas apibrėžtasis (angl. bounded). Gali būti, kad norite apriboti tipus, kurie gali būti naudojami kaip tipo argumentai. Pavyzdžiui darbui su skaičiais veikiantis algoritmas ir metodas skaičiuojantis, bet kokių skaičių sumą. Savaime aišku jog norėsime, kad naudojantis šia klase ar generic tipo metodu norėsime, kad į jį būtų perduoti argumentai būtų skaitinio tipo. Įprastai aprašyti šiuos apribojimus yra naudojama raktinis žodis extends klasėms ir implements interfeisams, jeigu norime naudoti keletą interfeisų išvardinant naudojamas apersendo ženklas &.

~~~java
public static <T extends Comparable<T>> int compare(T t1, T t2){ 
  return t1.compareTo(t2); 
} 
~~~

Skirtumas nuo neapibrėžtų tipų, jeigu perduosime kitą tipą gausime kompiliatoriaus pranešimą apie netinkamą perduotą tipą. Norint aprašyti apibrėžtuosius tipus su keletą skirtingų tipų tai yra labai paprasta bet tai reiškia jog tipas turės tenkinti visus išvardinto skliausteliuose ````"<..>"``` nurodytus tipus, kitu atveju negalėsime naudoti nei metodų nei klasės kaip generic.

~~~java
class A { /* ... */ } 
interface B { /* ... */ } 
interface C { /* ... */ } // Galima nurodyti ribas, kelis skirtingus tipus, kuriuos norite leisti naudoti. 
class D <T extends A & B & C> { /* ... */ } // Klasė A privalo būti pirmas parametras. 
class D <T extends B & A & C> { /* ... */ }  // Kompiliavimo klaida 
~~~

Taip pat turint generics yra papildomas terminas wildcard yra šis klaustuko ženklas ```<?>``` aprašomas nežinomas tipas. Skirtas tipo argumentų apribojimams kokio tipo argumentus galima perduoti pavyzdžiui į generic kolekciją, kaip lokalaus kintamojo apribojima ir kt. Žemiau pateikta sintaksė yra neleistina ir toks wildcard naudojimas klasės lygmenyje draudžiamas:

~~~java
1. class A<?>{}  
2. class A<? extends Number>{}  
3. new ArrayList<?>();  
4. ArrayList<?> al5=new ArrayList<?>();  
5. ArrayList<? extends Number> al9=new ArrayList<?>();  
~~~

Toliau pateikiamas sąrašas su pavyzdžiais yra leistinas užrašymo būdas:

~~~java
1. ArrayList<?> al=new ArrayList<String>();  
2. ArrayList<?> al2=new ArrayList();  
3. ArrayList<? extends Runnable> al3=new ArrayList();  
4. ArrayList<? super Runnable> al4=new ArrayList();  
5. ArrayList<? super Runnable> al5=new ArrayList<Object>();  
6. ArrayList<? super Runnable> al6=new ArrayList<Runnable>();  
7. ArrayList<? extends Runnable> al7=new ArrayList<Runnable>();  
8. ArrayList<? extends Runnable> al8=new ArrayList<Thread>();  
9. ArrayList<? extends Object> al9=new ArrayList<Double>(); 
~~~

Norint apriboti kolekciją, kuriai perduoti galėtume naudoti tik skaičius reikia naudoti upper-bounded iš viršaus aprėžta wildcard, tai reiškia jeigu naudosime žodį ```List<?extends Number>``` į sąrašą galėsime perduoti Number klasę ir visas jos vaikines klases: Integer, Double, Short ir t.t.

~~~java
public static double sumOfList(List<? extends Number> list) {   
  double s = 0.0;    
  for (Number n : list)        
    s += n.doubleValue();    
  return s; 
} 
// upper bounded wildcard Number klasė ir kitos vaikinės 
List<Integer> li = Arrays.asList(1, 2, 3); 
System.out.println("sum = " + sumOfList(li)); 
List<Double> ld = Arrays.asList(1.2, 2.3, 3.5); 
System.out.println("sum = " + sumOfList(ld)); 
~~~

Neapibrėžtas arba nežinomas (angl. unknown type) yra aprašomas naudojant wildcard žymenį 
```<?>
```
Kartais pasitaiko situaciją, kai klasė yra generic tipo ir turinti tipo parametrą T, o kai kurie metodai nuo jo yra nepriklausomi tuo atveju ir naudojami wildcard'ai. norint naudoti neapibrėžtą tiesiog nurodome šį simbolį ```<?>```.

~~~java
public static void printList(List<?> list) {   
  for(Object elem: list)     
    System.out.print(elem + " ");     
  System.out.println(); 
} 
List<Integer> li = Arrays.asList(1, 2, 3); 
List<String> ls = Arrays.asList("one", "two", "three"); 
printList(li); 
printList(ls); 
~~~

Tam tikrais atvejais prireikia apriboti tipus pagal hierarchiją nes turint kolekciją pvz: ```List<Integer>``` griežtai apriboja galimybę nurodyti kitą tipą išskyrus Integer. Turint wildcard papildomai galime pakeisti situaciją pavyzdžiui leisdami į kolekciją perduotį Integer, Number ir Object potipius iš apačios į viršų programiškai aprašyti galime ```List<? super Integer>```.

~~~java
import java.util.ArrayList;
import java.util.List; 
// Turint lower bound wildcard metodas tampa lankstesnis
// galima perduoti ir vaikines klases
class LowerBoundWildcard{  
  public static void main(String[] args) {
    List<Number> sh = new ArrayList<>();
    List<Integer> in = new ArrayList<>(); 
    List<Object> ob = new ArrayList<>();    
    sh.add(5);    
    in.add(99);    
    ob.add(new Object());    
    addNumbers(sh);    
    addNumbers(in);    
    addNumbers(ob);  
  }  
  private static void addNumbers(List<? super Integer> list){    
    for (Object o : list) {      
      System.out.println(o);    
    }  
  }
}
~~~

Turint skirtingas kolekcijas esant poreikiui nukopijuoti ar priskirti kitos kolekcijos nuorodą naudojant wildcard taip pat yra potipiai, kuriuos galima nurodyti pavyzdžiui:

~~~java
List<? extends Integer> intList = new ArrayList<>();
List<? extends Number>  numList = intList;  // Galimas aprašymas. 
List<? extends Integer> yra potipis List<? extends Number>
~~~

Kaip naudoti generic klases paveldint kitą generic klasę? Paprasta taisyklė jeigu paveldima klasė turi generic parametrą pvz. E tai paveldinčioji klasė privalo turėti parametrą E.

~~~java
interface MyList<E,T> extends List<E>{} 
~~~

Naudont interfeisą ```MyList<E, T>``` galima perduoti bet kokio tipo parametrus pvz: ```List<String>, MyList<String, Object>, MyList<String, Integer>``` ir t.t.

Neleistini veiksmai naudojant generics kolekcijas:

~~~java
List<Number> numbers = new ArrayList<Integer>(); // neatitinka tipas
~~~

Negalime sukurti generic masyvo:

~~~java
List[] array = new ArrayList[10];
~~~

Java kompiliatorius turi įgyvendintą mechanizmą vadinamą tipo išvalymas ir sutvarkymas (angl. type erasure). Kompiliuojant programą visos generic klasės, kintamieji, metodai yra sutvarkomi taip, kad galutinis bytecode būtų vykdomas kaip ir įprasta. Ten kur reikia yra atliekama tipo konversija ir panašiai. Viskuo pasirūpina kompiliatorius todėl mums sukti galvos nereikia. Žemiau bus pateikta keletas pavyzdžių kaip yra atliekamas type erasure.

Pavyzdys Nr. 1 generic klasė su apibrėžtu (angl. bounded) tipu:

~~~java
class Test<T extends Comparable<T>> {  
  private T data;  
  private Test<T> next;  
  public Test(T d, Test<T> n) {
    this.data = d;    
    this.next = n;  
  }  
  public T getData() { 
    return this.data;  
  }
}
~~~

Po atlikto type erasure esančio Pavyzdys Nr. 1 rezultatas

~~~java
public class Test {  
  private Comparable data;  
  private Test next;  
  public Node(Comparable d, Test n) {   
    this.data = d;    
    this.next = n;  
  }  
  public Comparable getData() { 
    return data;  
  }
}
~~~

Pavyzdys Nr. 2 generic klasė su neapibrėžtu (angl. unbounded) tipu:

~~~java
class Node<T> {  
  // kompiliatorius T pakeičia į Object  
  private T data;  
  private Node<T> next;  
  public Node(T data, Node<T> next) {    
    this.data = data;    
    this.next = next;  
  }  
  public T getData() {  
    return data;  
  }
}
~~~

Po atlikto type erasure esančio Pavyzdys Nr. 2 rezultatas

~~~java
class Node {   
  private Object data;  
  private Node next;  
  public Node(Object data, Node next) {
    this.data = data; 
    this.next = next;  
  }  
  public Object getData() {   
    return data;  
  }
}
~~~

Pavyzdys Nr. 3 generic metodas su neapibrėžtu (angl. unbounded) tipu:

~~~java
public static <T> int count(T[] anArray, T elem) {  
  int cnt = 0;  
  for (T e : anArray)    
    if (e.equals(elem))      
      ++cnt;  
  return cnt;
}
~~~

Po atlikto type erasure esančio Pavyzdys Nr. 3 rezultatas

~~~java
// Kompiliatorius išvalo unbounded tipą jį pakeičia į Object  
public static int count(Object[] anArray, Object elem) {    
  int cnt = 0;    
  for (Object e : anArray)
    if (e.equals(elem))        
      ++cnt;    
  return cnt;  
}
~~~

Pavyzdys Nr. 4 generic metodas su apibrėžtu (angl. bounded) tipu:

~~~java
class Shape { /* ... */ }
class Circle extends Shape { /* ... */ }
class Rectangle extends Shape { /* ... */ }
~~~

Galime realizuoti universalų generic metodą draw(), kuris pieštų skirtingas figūras:

~~~java
public static <T extends Shape> void draw(T shape) {...}
~~~

Po atlikto type erasure esančio Pavyzdys Nr. 4 rezultatas

// Kompiliatorius pakeičia T tipą į Shape tipą.

~~~java
public static void draw(Shape shape) { /* ... */ }
~~~

Keletas parametrizuotų tipų generic apribojimų:

### Apribojimas Nr. 1. 
Negalima sukurti klasės egzempliorių jeigu argumentai yra baziniai duomenų tipų primityvai (int, float, double ir kt.).
~~~java
Pair<int, char> p = new Pair<>(8, 'a');  // kompiliavimo klaida
~~~

Šiai problemai spręsti siūloma naudoti Java Wrapper klases pvz: Integer ir Character, kadangi generic dirba tik su reference type parametrais.

~~~java
Pair<Integer, Character> p = new Pair<>(8, 'a');
~~~

### Apbribojimas Nr. 2. 
Negalima sukurti generics tipo parametro pvz. ```<E>``` egzemplioriaus su raktiniu žodžiu new.

~~~java
public static <E> void append(List<E> list) {  
  E elem = new E(); // kompiliavimo klaida  
  list.add(elem);
}
~~~

Aplinkinis kelias (workaround), parametras, kuriamas naudojant Java reflection API.

~~~java
public static <E> void append(List<E> list, Class<E> cls) throws Exception {  
  E elem = cls.newInstance(); // Viskas tvarkoje  
  list.add(elem);
}
~~~

Pasinaudojus aplinkeliu ir sukūrus generic parametro egzempliorių metodą append() panaudoti galėsime taip:

~~~java
List<String> ls = new ArrayList<>();
append(ls, String.class); // Turime sukurtą E egzempliorių pasinaudojus aplinkeliu
~~~

### Apribojimas Nr. 3. 
Negalima aprašyti static laukų, kurių tipai yra generic klasių tipų parametrai (T, E, ar kt.).

~~~java
class MobileDevice<T> {  
  private static T os; // NEGALIMA !!! DRAUDŽIAMA!!!
}
//  Jeigu static laukas būtų leidžiamas, tada susiklostytų tokia situacija:
MobileDevice<Smartphone> phone = new MobileDevice<>();
MobileDevice<Pager> pager = new MobileDevice<>();
MobileDevice<TabletPC> pc = new MobileDevice<>();
~~~
Kuris tipas būtų pagrindinis phone, pager ar pc ??? Dėl šios priežąsties negalima turėti static laukų.

### Daugiau apribojimų. 
Rasite oficialioje programavimo kalbos Java svetainėje: [Oracle](https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html).
