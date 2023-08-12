---
# This is the icon of the page

# This is the title of the article
title: Exception Handling
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
Programose pasitaiko klaidų arba išimtinių situacijų. Į klaidas reikia reaguoti ir jas apdoroti/ištaisyti jeigu įmanoma. Įvairiose programavimo sistemose bei kalbose naudojamos skirtingos klaidų apdorojimo priemonės.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/E4LERJkB-AU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Programavimo kalboje Java yra numatytas klaidų apdorojimo mechanizmas, kuris yra pateiktas 1.10 paveiklslėlyje.

![](https://github.com/eif-courses/moodle-java/blob/master/Exception%20arba%20isimtys%20Java.png?raw=true)

1\.10 pav. Java išimčių apdorojimo mechanizmas klasių hierarchija

Programavimo kalbos Java išimčių mechanizmas klasifikuojamas į 3 skirtingas klaidų rūšis:

1. **java.lang.Error** - atsakinga už sistemines klaidas tokias kaip OutOfMemmoryError, StackOverFlowError ir kitas, kurių mes valdyti negalime.
2. **java.lang.Exception** kontroliuojamos (anlg. checked) išimtininės situacijos, kurias dar galime apdoroti ir leisti toliau programai sėkmingai veikti. Šį tikslą galime pasiekti naudojant **try-catch** bloką.
3. **java.lang.RuntimeException** nekontroliuojamos (unchecked), situacijom, kurių mes negalime apdoroti, pavyzdžiui programavimo klaidos, nenorime jų gaudyti naudojant **try-catch** bloką, gausime klaidos pranešimą ir programa nuluš, kadangi, tai runtime klaida. Kodėl tokio tipo klaidų apdorojimas egzistuoja? Todėl, kad programuotojui būtų per sunku visur nurodyti try-catch pvz: Turime RuntimeException *ArithmeticException* jau esančią aprašyta kartu su bet kuria JDK įrankio versija. Turime paprastą aritmetinį veiksmą int i = 10 / 0; jeigu kiekvieną iš jų įdėtume į try-catch bloką tiek ir skaitomumas būtų prastas ir švaistytumė laiką rašant programinį kodą. Turint RuntimeException jeigu ši situacija įvyksta bus išvestas klaidos pranešimas ir programa nuluš.

Pagrindiniai raktiniai žodžiai reikalingi darbui su klaidų apdorojimo mechanizmu yra pateikti 10 lentelėje. Jie skirti sukurti savo asmenines klases išimtims apdoroti arba naudoti jau numatytas iš anksto, kurios yra pateikiamos su standartiniu JDK arba įvairiomis trečiųjų šalių bibliotekomis.

**9 lentelė.** Klaidų apdorojimo mechanizmo pagrindiniai raktiniai žodžiai

<table border=”1”><tr><th>Raktinis žodis</th> <th>Paaiškinimas</th> </tr><tr><td><strong>throw</strong></td>     <td>Dirbtinis išimties sukėlimas, norint tam tikroje situacijoje iškviesti išimtį. throw new Exception();</td></tr><tr> <td><strong>throws</strong></td> <td>Jeigu mes sukeliame dirbtines išimtis ir jų neapdorojame privalome prie metodo nurodyti throws Exception, kurią išimtį mes dirbtinai sukelsime. pvz.: void skaiciuoti() throws Exception {...}</td></tr><tr> <td><strong>try-catch</strong></td><td>Išimtinės situacijos apdorojimo blokas try, kuriame yra tikrinamos išimtinės situacijos ir jeigu ji “aptinkama” tada pereinama į catch bloką, kuriame yra apdorojama išimtinė situaciją pagal poreikį informuojant vartotoją arba registruojant log žurnale.</td> </tr><tr><td><strong>finnaly</strong></td> <td>Šis blokas naudojamas kartu su try-catch, kuris yra vykdomas nepriklausomai ar išimtinė situacija įvyko ar ne, dažnai naudojam resursų atlaisvinimui, pvz: dokumento uždarymui, duomenų bazės ryšio nutraukimui ir pan.</td></tr></table><br>

**Savo išimčių aprašymas, kam to reikia?**

* Daugelis pagal nutylėjimą apibrėžtų išimčių klasių: NullPointerException, ArrayOutOfBoundsException ir t.t., ne visada tenkina mūsų poreikius. Todėl kiekvieną iš projektuojamų sistemų aprašo savo išimčių klases.
* Kiekviena iš naujai apibrėžtų klaidų privalo turėti informatyvų pavadinimą ir baigtis žodžiu Exception, taip pat paveldėti iš tėvinės klasės Exception pvz: public class CourseException extends Exception {}.
* *CourseException* iš esmės nurodo, kuriai klasei priklauso ši išimtis, bet norint konkretizuoti savo klaidą galima papildomai nurodyti tikslesnį pavadinimą pvz: *CourseGroupInvalidFormatException.* Papildomai informacijai nurodyti naudoti konstruktoriaus parametrą message.

**Kaip sukurti savo išimties klasę kontroliuojamojo tipo?** Tereikia sukurti klasę, kuri paveldi Exception klasę ir sugalvoti metodą su išimtinę situacija. Žemiau pateikiamame kodo fragemnte yra sukurta išimtinė situacija kai kurso pavadinimas yra nenurodytas arba yra per trumpas ir pavadinta *KursoZodzioIlgisException*.

~~~java
class Kursas{
  private String pavadinimas;
  public Kursas(String pavadinimas) {
    this.pavadinimas = pavadinimas;
  }

  // Aprašomas metodas, kuriama gali įvykti išimtinė situacija
  public static Kursas surastiKursa(String pavadinimas) throws KursoZodzioIlgisException{
    if("".equals(pavadinimas)){
      throw new KursoZodzioIlgisException("Prašome nurodyti kursą.");
    }
    else if(pavadinimas.length() < 5){
      throw new KursoZodzioIlgisException("Kurso pavadinimas privalo būti nemažiau 5 simbolių ilgio.");
    }
    return new Kursas(pavadinimas);
  }

  @Override
  public String toString() {
    return "Kursas{" +
        "pavadinimas='" + pavadinimas + '\'' +
        '}';
  }
}
// Sukuriama klasė skirta apdoroti išimtinę situaciją susiijusia su kurso pavinimo ilgiu
class KursoZodzioIlgisException extends Exception {
  public KursoZodzioIlgisException(){}
  public KursoZodzioIlgisException(String message) {
    super(message);
  }
}
public class Main {
  public static void main(String[] args) {
    try {
      Kursas.surastiKursa("");
    }catch (KursoZodzioIlgisException e){
      e.printStackTrace();
    }
  }
}
~~~

Įvykdžius šį kodo fragmentą pateiktą dokumente *exceptions1.java* į ekraną bus išvestas klaidos pranešimas. Be abejo vietoj šio pranešimo galima apdorotį įvykūsią išimtinę situaciją ir išspręsti be programos nutraukimo.

~~~java
exception.klases.pavyzdys.KursoZodzioIlgisException: Prašome nurodyti kursą.
at exception.klases.pavyzdys.Kursas.surastiKursa(Main.java:12)
at exception.klases.pavyzdys.Main.main(Main.java:37)
~~~

Atitinkamai jeigu perduosime žodį pvz: Kursas.surastiKursa("java"); trumpesnį nei 5 simboliai gausime kitą klaidos pranešimą:

~~~java
exception.klases.pavyzdys.KursoZodzioIlgisException: Kurso pavadinimas privalo būti nemažiau 5 simbolių ilgio.
at exception.klases.pavyzdys.Kursas.surastiKursa(Main.java:15)
at exception.klases.pavyzdys.Main.main(Main.java:37)
~~~

Įvykdžius žemiau pateiktą programinį kodą pateikta dokumente *exceptions2.java* bus išvestas klaidos pranešimas, kadangi tai nekontroliuojama išimtinė situacija programa nuluš ir nieko padaryti jau nebegalėsime. Tokios klaidos dažnai yra registruojamos žurnaluose ir vėliau sprendžiamos jeigu tai yra gyvybiškai svarbu. Kartais kenkėjiškas kodas ar sukčiai nori įsibrauti ir pakeisti jūsų sąrašą papildomais skaičiukais ir panašiai. tuo atveju klaida nulauš kodą ir neleis vykti nelegaliems veiksmams. Pati programinė įranga neapdorojusi išimtinių atveju gali sau pakenkti veikti su nenumatytomis reikšmėmis ir pan.

~~~java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Kursas{
  private String pavadinimas;
  public Kursas(String pavadinimas) {
    this.pavadinimas = pavadinimas;
  }
  public String getPavadinimas() {
    return pavadinimas;
  }
}
// Sąrašas perpildytas priskiriamas prie nekontroliuojamų klaidų
class SarasasPerpildytasException extends RuntimeException{
  public SarasasPerpildytasException() {}
  public SarasasPerpildytasException(String message) {
    super(message);
  }
}
public class Main {
  public static void main(String[] args) {
    List<Kursas> kursai =
        new ArrayList<>(Collections.nCopies(100,
            new Kursas("Java"))); // Užpildome sąrašą 100 kopijų sąrašo elementų
    uzpildytiKursuSarasa(kursai); // Bandome perduoti 100 sąrašą viršijantį limitą 10 < 100.
  }
  // Testinis metodas sukurtai nekontroliuojamai išimčiai perdavūs didesnį sąrašą nei numatyta
  private static void uzpildytiKursuSarasa(List<Kursas> kursai) {
    if(kursai.size() > 10){
      throw new SarasasPerpildytasException("Atsiprašome jūs viršijote leistiną kursų kiekį.");
    }
  }
}
~~~

~~~java
Exception in thread "main" uncheckedEXception.SarasasPerpildytasException: Atsiprašome jūs viršijote leistiną kursų kiekį.
at uncheckedEXception.Main.uzpildytiKursuSarasa(Main.java:33)
at uncheckedEXception.Main.main(Main.java:28)
~~~

Pavyzdys kai galime gaudyti daugiau nei vieną išimtį. Žiūrėti į kodo fragemntą pateiktą *exceptions3.java. Šis fragmentas galioja su JDK 1.7 versija, naujesnėse JDK versijose atsirado paprastesnis būdas užrašyti keletą išimčių.*

~~~java
//PASTABA! Klasės nurodytos catch bloke privalo būti išdėstytos nuo žemiausios pagal hierarchiją iki aukščiausios.
List<Kursas> kursai = new ArrayList<>(Collections.nCopies(100, new Kursas("C++")));
try {
   Kursas.surastiKursa("java");
   uzpildytiKursuSarasa(kursai);
}
catch (KursoZodzioIlgisException e){e.printStackTrace();}
catch (SarasasPerpildytasException ee){ee.printStackTrace();}
~~~

Prieš tai buvo minėta jog nuo JDK 1.8 atsirado paprastesnis būdas užrašyti keletą išimtinių situacijų viename catch bloke. Šį užrašymo būdą rasite žemiau pateiktame kodo fragmente *exceptions4.java*.

~~~java
//PASTABA! Klasės nurodytos catch bloke privalo būti išdėstytos nuo žemiausios pagal hierarchiją iki aukščiausios.
List<Kursas> kursai = new ArrayList<>(Collections.nCopies(100, new Kursas("C++")));
try {
   Kursas.surastiKursa("java");
   uzpildytiKursuSarasa(kursai);
}
catch (KursoZodzioIlgisException | SarasasPerpildytasException ee){
   ee.printStackTrace();
}
~~~

**Išimties aprašymas naudojant klaidos kodų lentelę/sąrašą.** Dažnai praverčia sudarytos kodų/trumpinių klaidų lentelės taip parasčiau galima sudaryti dokumentaciją arba sugrupuoti klaidas ir atitinkamai pagal klaidos perduotą tekstą į ją sureguoti atitinkamai. Žemiau yra pateikiamas pavyzdys exceptions5.java dokumente kaip susikurti savo asmeninę klaidų kodų lentelę programiškai.

~~~java
class KursuKlaiduSablonasException extends Exception {
   private static final long serialVersionUID = 4664456874499611218L;
   private String klaidosKodas = "Nežinoma klaida";
   public KursuKlaiduSablonasException(String zinute, String klaidosKodas) {
     super(zinute);
     this.klaidosKodas = klaidosKodas;
   }
   public String gautiKlaidosKoda() {
     return klaidosKodas;
   }
 }
  public class Main {
    public static void main(String[] args) {
      try {
        klaiduKoduSablonas("");
      } catch (KursuKlaiduSablonasException e) {
        e.printStackTrace();
        System.err.println(e.gautiKlaidosKoda());
      }

    }
    // Išimties aprašymas naudojant klaidos kodų sąrašą
    public static void tikrintiKokiaKlaidaIvykoPagalKlaiduLentele(KursuKlaiduSablonasException e) throws KursuKlaiduSablonasException {
      switch (e.gautiKlaidosKoda()){
        case "TUSCIAS_SABLONAS_KLAIDA":
          System.out.println("Privalote nurodyti šabloną: {minimum 1 simbolis}."); throw e;
        case "SKAICIUS_NELEISTINAS_KLAIDA":
          System.out.println("Skaiciaus nurodyti negalima."); throw e;
        case "SKAICIU_RAIDZIU_KOMBINACIJA_KLAIDA":
          System.out.println("Skaiciai ir raides negali buti kartu kombinuojamos."); break;
        default:
          System.out.println("Nezinoma klaida kurios apdoroti negalima"+e.getMessage());
          e.printStackTrace();
        }
    }
    public static void klaiduKoduSablonas(String pattern) throws KursuKlaiduSablonasException{
      try{
        if("".equals(pattern)) {
          throw new KursuKlaiduSablonasException("Tuščias šablobas", "TUSCIAS_SABLONAS_KLAIDA");
        }
        else {
          throw new KursuKlaiduSablonasException("Skaicius yra neleistinas", "SKAICIUS_NELEISTINAS_KLAIDA");
        }
      }catch (KursuKlaiduSablonasException e){
        tikrintiKokiaKlaidaIvykoPagalKlaiduLentele(e);
      }
    }
  }
~~~

Įvykdžius exceptions5.java dokumentą bus išvestas pranešimas apie klaidą ir pateikiamas klaidos kodas esant poreikiui:

~~~java
Privalote nurodyti šabloną: {minimum 1 simbolis}.
exception.klases.pavyzdys.PaskutinisExceptionSUERROR.KursuKlaiduSablonasException: Tuščias šablobas
at exception.klases.pavyzdys.PaskutinisExceptionSUERROR.Main.klaiduKoduSablonas(Main.java:43)
at exception.klases.pavyzdys.PaskutinisExceptionSUERROR.Main.main(Main.java:19)
TUSCIAS_SABLONAS_KLAIDA
~~~

**Išimčių apdorojimo mechanizmo geriausios praktikos:**

1. **Patartina naudoti specifines klaidų klases.** Kurios būtų informatyvios, kadangi Java kalboje yra labai daug išimčių klasių, kurios išsiskaido į poklases, patartina naudoti klasę artimiausią jūsų išimčiai atitinkančią, kad būtų lengvesnis derinimo rėžimas (debugging).
2. **Kuo greičiau sukelti išimtinę situaciją.** Metodas kuriame yra gaudoma išimtis privalo būti aprašoma, kuo anksčiau try bloke.
3. **Informuoti vartotoja apie įvykūsią klaidą.** Kartais kurėjai išimtines situacijas gaudant jas registruoja žurnale (angl. log) ir apie jas neinfromuoja vartotojo. Visos klaidos privalo būti gaudomos tik tada kai mes galime jas apdoroti catch bloke.
4. **Resursų atlaisvinimas.**

   ~~~java
   // Resursų atlaisvinimas nuo JDK 1.7+ versijos.
   try (BufferedReader br = new BufferedReader(new FileReader(path))) {
     return br.readLine();
   }
   //  Resursų atlaisvinimas ankstesnėse nei JDK 1.7 versijose.
   try {
     return br.readLine();
   } finally {
     if (br != null) br.close();
   }
   ~~~
5. **Registruoti įvykusias išimtines situacijas.** Visada privalome kaupti išimčių informaciją, taip pat privalome vartotoją informuoti aiškia žinute ką jam reikėtų atlikti, taip negalime palikti tuščių catch blokų nes derinimo rėžimo metu nesuprasime kokios išimtinės situacijos įvyko ir kas už tai atsakingas.
6. **Naudoti atnaujintą kodą.** Nuo Java 1.7 versijos patartina naudoti vieną bloką, kuriame yra aprašomos kelios klaidos taip supaprastinant kodo skaitomumą.
7. **Naudoti savo sukurtas klaidų klases su kodų lentelėmis.** Visada geriau numatyti klaidų apdorojimo strategiją vietoj keletos išimčių gaudymo. Mes galime aprašyti išimties klasę, kuri apdoroja klaidų kodus (error code) taigi programa, kuri naudojasi šia klase galės perduoti šiuos klaidų kodus. Taip pat gera idėja sukurti Utility metodą, kuris apdoroja skirtingas klaidas ir panaudoti jį.
8. **Pasirinkti tinkamus katalogų ir klasių pavadinimus.** Prie kiekvienos klasės skirtos išimčiai aprašyti gale pavadinimo pridėti prierašą: Exception, RuntimeException. Taip pat išlaikyti package vardus pvz: kaip Java JDK IOException visoms IO operacijoms.
9. **Elgtis atsakingai su Exception naudojimu.** Vengti situacijų kada išimtys yra neprivalomos geriau jų nenaudoti, jeigu pakanka kintamojo boolean, kuris gali gražinti būseną apie sėkmingą, nesėkmingą operaciją. Šis būdas naudingas kai nenorime, kad programa užstrigtu kai ji nustoja veikti. Vienas iš pavyzdžių mes nenorime kad mum iškviestų išimtį kai bandome jungtis ir nepavyksta prisijungti, užtenka kad gražintu būseną 0 arba 1.
10. **Dokumentuoti naudoti Java Docs komentarus.** Naudoti javadocs **@throws**, kur detaliai aprašoma informacija apie išimtis, kurios yra sukeliamos naudojant šį metodą. Tai yra labai naudinga kai jūs pateikiate detalią dokumentaciją kitoms aplikacijoms paprasčiau naudotis.
