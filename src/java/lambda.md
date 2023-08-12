---
# This is the icon of the page

# This is the title of the article
title: Lambda išraiškos
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

Lambda išraiškos (angl. lambda expressions) atsirado nuo [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") 1.8 versijos. Šis atnaujinimas įvedė į programavimo kalbą [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") naujų vėjų. Tai vienas iš didžiausių pokyčių per pastaruosius metus, kai 1.5 [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") buvo pasiūlytas [generic](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=44&displayformat=dictionary "Terminų ir santrumpų žodynas: generic") tipas tai buvo vienas iš didžiausių pokyčių, kuris pakeitė kodo rašymo stilių. Taip pat dalis karkasų buvo perrašytų naudojant Lambda išraiškas, kad išvengtų vykdymo metu įvykstančių klaidų pvz. ClassCastException, kuri įvykdavo dėl kolekcijoje esančio elemento tipo konversijos. Kodėl Lambda išraiškos yra naudojamos?

* Įgalina naudoti funkcinį programavimą (angl. functional programming).
* Palengvina kodo skaitomumą, sumažina kodo kiekį.
* Sukurti [APIs](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: APIs") ir bibliotekos yra aiškesnės struktūros, todėl yra žymiai lengviau jais pasinaudoti (angl. Easy-to-use).
* Darbas su kolekcijomis (angl. Collections) tampa žymiai paprastesnis tiek kodo aiškumo prasme, tiek sukurtaisiais metodais skirtais išlygiagretinti programos vykdymą skirtą kompiuteriui turinčiam daugiau nei vieną branduolį.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/nBkeIW4kp9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kodo struktūra naudojant [Java JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=29&displayformat=dictionary "DUK - Dažnai užduodami klausimai: JAVA JDK") 1.7 versiją, kada dar nebuvo lambda išraiškų.

~~~java
public class Greeter { 
  public void greet(){ 
    System.out.println("Hello world!"); 
 }
 public static void main(String[] args) {    
   Greeter greeter = new Greeter(); 
   greeter.greet(); 
 }
}
~~~

Turint 1.7 [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") versiją metodui perduoti parametrą kaip funkciją su skirtinga elgsena yra įmanomas naudojant interfeisus. Kaip tai atrodytų programiškai? Privalome modifikuoti klasę Greeter taip:

1. Sukurti interfeisą pvz: Greeting ir jame vieną metodą perform();

2. Kiekvienai naujai elgsenai privalote sukurti klasę ir joje įgyvendinti metodą perform() iš interfeiso Greeting.

Atlikus Greeter klasės greet() metodo modifikacija, kuriam perduosime norimą interfeiso egzempliorių ("funkciją") kaip metodo parametrą.

~~~java
public void greet(Greeting greeting){ 
  greeting.perform(); 
}
public interface Greeting { // Interfeisas Greeting 
  void perform(); // Interfeiso metodas perform();
}
public class HelloWorld implements Greeting{ // Interfeiso panaudojimas
  @Override
  public void perform() { // Metodo realizacija
    System.out.println("Sveikas pasauli!!!"); 
  }
}

// Greeter klasė po atliktos modifikacijos

public class Greeter {
  public void greet(Greeting greeting){
    greeting.perform();
  }
  public static void main(String[] args) {
    Greeter greeter = new Greeter();
    HelloWorld helloWorld = new HelloWorld();
    greeter.greet(helloWorld);
  }
}
~~~

Kas yra Lambda? Anoniminė (izoliuota) vidinė funkcija. Bevardė funkcija be pasikartojančio (angl. boilerplate) kodo. Tenkina funkcinio interfeiso savoką. Interfeisas, kuris turi tik vieną abstraktų metodą. Lambda bendru atveju: ```<parametrų_sąrašas> -> <funkcijos_kūnas>. () - parametrų sąrašas, ->``` už strėlytės vykdomi sakiniai esantys aprašomos funkcijos bloke. Lambda išraiškos funkcijos kūnas gali būti sudarytas iš vieno sakinio arba kelių sakinių.

Jeigu naudojame vieną sakinį lambda išraišką galime aprašyti taip:

~~~java
 Funkcinis_Interfeisas egzempliorius = () -> System.out.println("Sveikas pasauli!!!");
~~~

Jeigu naudojame kelis sakinius lambda išraišką galime aprašyti taip:

~~~java
Funkcinis_Interfeisas egzempliorius = () ->{
     System.out.println("Sveikas pasauli!!!");
     System.out.println("Aš jau naudoju lambda išraiškas");
}
~~~

Pavyzdžiui turime interfeisą Greeting:

~~~java
interface Greeting{
  void perform();
}
~~~

tada lambda išraišką galime aprašyti taip:

~~~java
Greeting greeting = () -> System.out.println("Sveikas pasauli!!!");
// Sukurtas greeting egzempliorius. Panaudojus jį iškviečiame metodą perform(); kaip ir įprasta:
greeting.perform();
~~~

tada bus įvykdoma Lambda išraiška ir į ekraną išvedamas tekstas "Sveikas pasauli!!!"

Lambda supaprastina panaudojimą lyginant su [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") 1.7 versija, kur papildomai privaloma aprašyti atskiras klases ir jose aprašyti metodo logiką. Kiekvienai skirtingai funkcijai privalome sukurti atskirą įprastinę klasę arba anoniminę klasę. Turint Lambda viskas daug supaprastėjo pakanka turėti funkcinį interfeisą ir vietoj klasių kūrimo pakanka kurti Lambda išraiškas ir jas panaudoti pagal poreikį. Taip pat vienas iš esminių pliusų jog Lambda išraiškos iš dalies įgalino funkcinį programavimą. Šiam tikslui pasiekti buvo sukurtas [java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java").util.Function.\*; karkasas ([API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API")) skirta darbui su funkciniais interfeisas. Kad kiekvienai situacijai nekurti individualaus interfeiso siūloma naudoti esamuosius:

- ```Function<T, R>``` priima parametrą T, grąžina rezultatą R.

~~~java
Funtion<Integer, String> funkcija = i-> "Įvedėte" + i;
~~~

- ```BiFunction<T, U, R>``` priima parametrus T ir U, grąžina rezultatą R.

~~~java
BiFuntion<Integer, Integer, String> duParametraiFunkcija = (a, b) -> "Suma:" + (a + b);
~~~

- ```Consumer<T>``` priima parametrą T, grąžina rezultatą void

~~~java
Consumer vykdytojas = i -> Sysyem.out.print(i); 
~~~

- ```Supplier<T>``` nieko priima, grąžina rezultatą T

~~~java
Supplier isduodantysis = () -> Math.Random();
~~~

```Predicate<T>``` priima parametrą T, grąžina rezultatą boolean

~~~java
Predicate<Integer> predikatas = i -> i % 2 == 0;
~~~

Daugiau interfeisų rasite čią: [https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html](https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html).

Sukurti funkcinį interfeisą yra labai paprasta, nes tai yra paprasčiausias [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") interfeisas turintis nedaugiau nei vieną abstraktų metodą pvz:

~~~java
// generic interfeisas su 2 parametrais
// T - perduodamas parametras
// R - parametras skirtas rezultatui grąžinti
@FunctionalInterface
interface Funkcija<T, R>{
  // abstraktus metodas priimantis vieną parametrą T
  // ir gražinantis rezultą R
  R pateikti(T t); 
}
// Sukurto funkcinio interfeiso panaudojimas
Funkcija<String, Integer> funkcija = (parametras) -> {
  return parametras.length();
};
// Sutrumpintas būdas jeigu Lambda išraiška yra vieno sakinio     
Funkcija<String, Integer> funkcija = parametras -> parametras.length(); 
~~~

Anotacija **@FunctionalInterface** privalote pažymėti interfeisą tuo atveju jeigu norite būti užtikrinti, kad jūsų interfeisas turės tik vieną abstraktų metodą ko ir reikia, kad tai būtų funkcinis interfeisas. Papildomai aprašomai funkcinio interfeiso klasėje galite turėti: default, static ir private metodus nuo [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") 1.8+. Visi interfeisai iš ankstesnių versijų nei [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") 1.8, kurie turi vieną abstraktų interfeisą gali būti naudojanti rašant Lambda išraiškas.

Geroji praktika yra naudoti Lambda išraiškas tik vieno sakinio. Kodėl privalome tai daryti, o todėl jog Lambda skirta supaprastinti kodo skaitomumą ir lengvą kodo derinimą įvykus klaidai reaguoti į ją. Panašiai kaip ir UNIT testai, rekomenduojama rašyti tik vieną assert metodą.

### Java metodo nuoroda

[Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") suteikia naują galimybę nuo [JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=31&displayformat=dictionary "Terminų ir santrumpų žodynas: JDK") 1.8 vadinamą metodo nuorodą. Tai kompaktiška išraiška ir lengvai pakeičiama egzistuojanti Lambda išraiška į metodo nuorodą. Dažnai metodo nuoroda supaprastina skaitomumą, prieš mokinantis Lambda išraiškas rekomenduojama gerai susipažinti kaip veikia ir kaip aprašomos Lambda išraiškos, o tik tada pereiti į dar paprastesnį aprašymo būdą tai naudoti metodo nuorodą. Daugelis modernių programavimo IDE pateikia siūlymus supaprastinti kodą ir pakeisti esamas Lambda išraiškas į metodo nuorodas. Metodų nuorodos yra skirstomos į tris skirtingas kategorijas:

1. Nuoroda į statinį metodą. Sintaksė: ```<KlasėKurYraMetodas>::<statinio_metodo_pavadinimas>(pvz. MethodReference::saySomething)```:

~~~java
interface Sayable{  
    void say();  
}  
public class MethodReference {  
    public static void saySomething(){  
        System.out.println("Hello, this is static method.");  
    }  
    public static void main(String[] args) {  
        // Nuoroda į statinį metodą 
        Sayable sayable = MethodReference::saySomething;  
        // Iškviečiamas interfeiso metodas 
        sayable.say();  
    }  
}  
~~~

2. Nuoroda į metodą naudojant klasės egzempliorių/objektą. Sintaksė: egzemplioriusKurYraAprašytasMetodas::egzemplioriausMetodas (pvz. **methodReference::saySomething**):

~~~java
interface Sayable{  
    void say();  
}  
public class InstanceMethodReference {  
    public void saySomething(){  
        System.out.println("Hello, this is non-static method.");  
    }  
    public static void main(String[] args) {  
        InstanceMethodReference methodReference = new InstanceMethodReference(); // Kuriamas objektas  
           // Nuoroda iš nestatinio metodo naudojant objekto nuorodą 
            Sayable sayable = methodReference::saySomething;  
            // Iškviečiamas interfeiso metodas
            sayable.say();  
            // Nuoroda iš nestatinio metodo naudojant anoniminį objekto egzempliorių   
            Sayable sayable2 = new InstanceMethodReference()::saySomething; // Galima naudoti ir anoniminį klasės egzempliorių  
            // Iškviečiamas interfeiso metodas  
            sayable2.say();  
    }  
} 
~~~

3. Nuorodą į kontruktorių. Sintaksė: KlasėsPavadinimas::new (pvz. **Message::new**):

~~~java
essageable{  
    Message getMessage(String msg);  
}  
class Message{  
    Message(String msg){  
        System.out.print(msg);  
    }  
}  
public class ConstructorReference {  
    public static void main(String[] args) {  
        Messageable hello = Message::new;  
        hello.getMessage("Laba diena");  
    }  
} 
~~~

**Palyginimas tarp [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") 7 ir [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") 8 įvedūs Lambda išraiškas**

Įprastinis grafinės sąsajos komponento interfeiso įvykio interfeiso aprašymas vietoj anoniminės klasės naudojama Lambda išraiška supaprastina kodo skaitomumą:

~~~java
//Java 7
ActionListener al = new ActionListener() {
  @Override 
  public void actionPerformed(ActionEvent e) {
    System.out.println(e.getActionCommand());
  }
};
//Java 8
ActionListener al8 = e -> System.out.println(e.getActionCommand());
~~~

Teksto išvedimas į ekraną:

~~~java
List list = Arrays.asList("Labas", "Viso gero");
//Java 7
for(String s : list) {
  System.out.println(s);
}
//Java 8
list.forEach(System.out::println);
~~~

Pavyzdys rušiuoti tekstui:

~~~java
//Java 7
Collections.sort(list, new Comparator() { 
    @Override
    public int compare(String s1, String s2) {
        return s1.length() - s2.length();             
    }
});
//Java 8
Collections.sort(list, (s1, s2) -> s1.length()-s2.length()); 
// arba naudoti metodo nuoroda ir nuo JDK 1.8 versijos
// įvestą interfeiso Comparator metodą comparingInt
list.sort(Comparator.comparingInt(String::length)); 
~~~

Rūšiuoti tekstą pagal du parametrus naudojant savo sukurtą klasę Person:

~~~java
public class Person {
  String firstName;
  String lastName;
  public String getFirstName() {
    return firstName;
  }
  public String getLastName() {
    return lastName;
  }
}
// Java 7
Collections.sort(list, new Comparator() {
  @Override
  public int compare(Person p1, Person p2) {
    int n = p1.getLastName().compareTo(p2.getLastName());
    if (n == 0) {
      return p1.getFirstName().compareTo(p2.getFirstName());
    }
  return n;
  }
});
//Java 8 naudojant metodo nuorodą
list.sort(Comparator.comparing(Person::getLastName).thenComparing(Person::getFirstName));  
~~~
