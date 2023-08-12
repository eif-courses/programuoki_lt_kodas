---
# This is the icon of the page

# This is the title of the article
title: Anotacija ir Javadocs
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

Skyrelyje yra apžvelgiamos anotacijos jų rūšys ir paskirtis. Taip pat pateikiami įvairūs pavyzdžiai su Anotacijomis bei [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") dokumentacijos rengimu.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/k9lqfp521eE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Anotacijų palyginimas su [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalbos įprastiniais komentarais.** Pagrindinis skirtumas jog komentarai yra tik pagalbinė priemonė pažymėti papildomą informaciją programinio kodo rašymo metu, bet įvykdžius programą jos vykdymo metu visi komentarai yra ignoruojami ir pašalinami. Skirtingai nei anotacijos (meta-duomenys), kurios įgalina galimybę pažymėti bet, kurią programinę dalį pvz: metodą, kintamajį, klasę ir kt. laukus ir suteikti tam tikrą funkcionalumą automatizuoti tam tikrą užduotį: Pavyzdžiui sugeneruoti naują turinį, sukonfigūruoti, aprašyti unikalų karkasą pvz. Web serviso metodų: get, post, put, delete ir kt. aprašymas, testų rašymo biblioteka yra paremta anotacijų naudojimų, kur metodai yra pažymimi anotacija **@test**.

Aprašant savo unikalias anotacijas anotacijas taip reikia anotuoti, priklausomai pagal, kuriamos anotacijos paskirtį. Nurodyti anotacijos paskirtį [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programavimo kalboje naudojama **@Retention** anotacija.

**Anotacija @Retention tipai:**

**RetentionPolicy.SOURCE** - nurodo jog anotacija bus įtraukta į programinį išeities tekstą (angl. source code) ir ignoruojama kompiliatoriaus.

**RetentionPolicy.CLASS** - nurodo jog anotacija bus naudojama kompiliatoriaus kompiliavimo metu, bet bus įgnoruojama [JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM").

**RetentionPolicy.RUNTIME** - nurodo jog anotacija bus apdorojama [JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM"), taigi šis anotacijos tipas gali būti taikomas programos vykdymo metu.

**Anotacijų paskirtis:**

Informacija kompiliatoriui - anotacijos gali būti kompiliatoriaus pagalbininkas nustatyti klaidas/problemas bei paslėpti įspėjamuosius pranešimus.

Kompiliavimo ir diegimo metu - programinės įrangos įrankiai gali apdoroti anotacijų informaciją ir sugeneruoti kodą pvz: XML dokumentus, [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") klases ir kitus dokumentus.

Vykdymo metu - kai kurios anotacijos yra apdorojamos [JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM") vykdymo metu.

**Kada nepatartina naudoti anotacijų:**

Kaip ir kiekvienas iš tvarkingo kodo rašymo taisyklių neužkišti savo programinio kodo anotacijomis jeigu tai nėra būtina. Ir nėra geresnių būdų pasiekti tam pačiam rezultatui.

Neapsunkinti programos, kadangi anotacijos yra tik meta-duomenys, kuriuos papildomai reikia apdoroti, o programinis kodas, kurį įprastai rašote yra reali programa.

Vengti situacijų, kai aprašote anotacijas nenaudoti informacijos, kuri yra jautri arba gyvybiškai svarbi ir be, kurios jūsų programa nustos veikti. Pavyzdžiui informacija susiijusi su duomenų bazės slaptažodžiais, aplikacijos konfigūracija ar kokio nors įrankio svarbi informacija ir pan.

Kaip sukurti savo anotacija reikia žinoti nedaug jeigu jau teko naudoti [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalbos raktinį žodį interface. Žemiau yra pateikiamas minimalus pavyzdys skirtas sukurti **@ManoAnotacija** unikalią anotaciją. Kaip ir įprasta reikia sukurti atskirą ManoAnotacija.[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") dokumentą ir jame pateiktį šį programinį kodą.

@Documented // Programos elementai, kurie yra pažymėti šia anotacija privalo būti dokumentuoti [JavaDoc](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=43&displayformat=dictionary "Terminų ir santrumpų žodynas: Javadoc").  
@Target(ElementType.METHOD) // Anotaciją galima naudoti tik ant metodų.  
@Inherited // Anotaciją bus paveldima t.y. jeigu klasė turės anotacija vaikinė klasės paveldės visas anotacijas iš tėvinės klasės.  
@Retention(RetentionPolicy.RUNTIME) // Bus naudojama vykdymo metu.

~~~java
@interface ManoAnotacija{ // Unikalios anotacijos aprašymas.
  int studentAge() default 18;
  String studentName();  
  String stuAddress();   
  String stuStream() default "CSE";
}
~~~

Panaudoti sukurtą anotaciją galėsite tik ant metodų, nes prieš tai nurodėme @Target(ElementType.METHOD).

~~~java
// Leistinas veiksmas.
@ManoAnotacija(studentName="Chaitanya", stuAddress="Agra, India")
void metodas(){....} 
// Neleistinas veiksmas. 
@ManoAnotacija(studentName="Chaitanya", stuAddress="Agra, India")
class Klase {...}
~~~

Naudojame aprašymą su reikšmėmis pagal nutylėjimą. Kaip matome pagal nutylėjimą nėra jokių apribojumų, šią anotaciją galimą nurodyti bet kur: ant klasės, metodo, kintamojo, metodo parametro ir t.t.

~~~java
@interface KitaAnotacija {
 int skaicius();
 String[] knygos();
}
@KitaAnotacija(skaicius=3, knygos={"C++", "Java"})
class Klase {...}
~~~

Prieš tai panagrinėjome keletą pavyzdžių, kurioje buvo minima **@Target** anotacija. Jeigu šios anotacijos nenurodome reiškia jog sukurta anotacija yra naudojama bet kur. Štai sarąšas kaip galima apriboti, kurioje vietoje leisime anotuoti:

~~~java
ElementType.METHOD
ElementType.PACKAGE
ElementType.PARAMETER
ElementType.TYPE
ElementType.ANNOTATION_TYPE
ElementType.CONSTRUCTOR
ElementType.LOCAL_VARIABLE
ElementType.FIELD
~~~

Keletas pavydžių kaip apriboti anotacijų naudojimą taikant **@Target** anotaciją.

~~~java
@Target({ElementType.METHOD})
@interface ManoAnotacijaMetodams{}
@Target({ElementType.METHOD, ElementType.TYPE, ElementType.CONSTRUCTOR})
@interface AnotacijaKeliemsTipams{} // Galima naudoti metodams, tipams, konstruktoriuose
~~~

Kaip objektiškai orientuotos kalbos neturės galimybės paveldėti. Štai ir anotacija @Inherited skirta [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") paveldėjimui, tai reišikia kai paveldėsite klasę paveldėsite ir visas @Inherited anotacijas.

~~~java
@Inherited
@interface PaveldekAnotacija {...}
@PaveldekAnotacija
class Tevine{...} // Tevine klasė, kuri yra anotuota paveldės klasė Vaikine. 
class Vaikine extends Tevine {...}
~~~

Kadangi anotacijas sukurti galime, bet kaip nuskaityti jas ir jų duomenis? Yra paprasčiausias būdas tai naudoji [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") Reflection [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API"). Pateiksime vieną iš galimų aprašymo būdų nuskaityti anotacijos duomenims. Tarkim sukuriame anotacija, kurią nuskaitysime [JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM") vykdymo metu.

~~~java
@Retention(RetentionPolicy.RUNTIME)
@interface Anotacija {
 String zinute();
 int reiksme();
}
~~~

Pavyzdys naudojant Reflection [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API") nuskaityti anotacijuos duomenis.

~~~java
class Meta {
  @Anotacija(zinute = "Laba diena", reiksme = 55)
  public static void metodas(String str, int i) {
    Meta ob = new Meta();
    try {
      Class c = ob.getClass();
      Method m = c.getMethod("metodas", String.class, int.class);
      Anotacija anno = m.getAnnotation(Anotacija.class);
      System.out.println(anno.zinute() + " " + anno.reiksme());
    } catch (NoSuchMethodException exc) {
        System.out.println("metodas nerastas");
    }
  }
  public static void main(String args[]) {
    metodas("test", 10);
  }
} // REZULTATAS : Laba diena 55 
~~~

Pavyzdys naudojant Reflection [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API") nuskaityti visas anotacijas, iš konkrečios klasės.

~~~java
 Method[] methods = Meta.class.getMethods();
    for (Method m : methods){
      if (m.isAnnotationPresent(Anotacija.class)){
        Anotacija ta = m.getAnnotation(Anotacija.class);
        System.out.println(ta.zinute() +" "+ ta.reiksme());
      }
    }
~~~

**Kas yra [Javadoc](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=43&displayformat=dictionary "Terminų ir santrumpų žodynas: Javadoc").** Turint anotacijų mechanizmą [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalboje tai yra vienas iš svarbių mechanizmų, kurio pagalba yra sukurtas įrankis skirtas programinio kodo dokumentacijai rengti. Žemiau bus išvardinti skirtumai su pavyzdžiais tarp įprasto [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") komentaro ir [Javadoc](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=43&displayformat=dictionary "Terminų ir santrumpų žodynas: Javadoc") dokumentacijos rengimo įrankio aprašymo programiniame kode. Vienos eilutės [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalbos komentaras

~~~java
/*
 * Įprastinis Java kalbos kelių eilučių komentaras
 */

/**
 * Čia yra Javadoc komentaras skirtas programinio kodo dokumentacijai rengti
 */

Pagrindinės anotacijos skirtos Javadoc dokumento rengimui: 
@param provides any useful description about a method’s parameter or input it should expect 
@return provides a description of what a method will or can return 
@see will generate a link similar to the {@link} tag, but more in the context of a reference and not inline 
@since specifies which version the class, field, or method was added to the project 
@version specifies the version of the software, commonly used with %I% and %G% macros 
@throws is used to further explain the cases the software would expect an exception 
@deprecated gives an explanation of why code was deprecated, when it may have been deprecated, and what the alternatives are
~~~

[Javadoc](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=43&displayformat=dictionary "Terminų ir santrumpų žodynas: Javadoc") pavyzdys kaip naudoti dokumentacijai rengti.

~~~java
/**
* Hero is the main entity we'll be using to . . .
*
* Please see the {@link com.baeldung.javadoc.Person} class for true identity
* @author Captain America
*
*/
public class SuperHero extends Person {
 /**
 * The public name of a hero that is common knowledge
 */
 private String heroName;
 /**
 * <p> simple description of the method...</p>
 * <a href="eif-courses.github.io">eif-course</a>
 * @param incomingDamage the amount of incoming damage
 * @return the amount of health hero has after attack
 * @see HERO-402
 * @since 1.0
 */
 public int successfullyAttacked(int incomingDamage) {
    // do things
    return 0;
 }
}
~~~
