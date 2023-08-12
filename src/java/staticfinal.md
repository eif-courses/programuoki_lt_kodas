---
# This is the icon of the page

# This is the title of the article
title: Static ir Final
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

**Static ir local tipų kintamųjų palyginimas.** Statiniai kintamieji naudojami tuo atveju, kai jums nėra svarbu turėti klasės egzempliorių t.y. kai jūs norite turėti kintamąjį bendrą visiems klasės egzemplioriams, taip yra sutaupoma atmintis, bet ši atmintis yra išskiriama ir naudojama visą programos vykdymo metu, žr. Į žemiau pateiktą programinį kodą. Dešinėje pusėjė yra pateikta klasė Skaiciuokle, kurioje yra du statiniai kintamieji: bendras ir kiekObjektuSukureme, taip pat pateikta funkcija sumuoti(), kuri didina reikšmę sumuodama 10 prie lokalus ir bendras kintamųjų, taip pat pateiktas konstruktorius Skaiciuokle(), kuriame yra didinama reikšmė vienetu kiekObjektuSukureme.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/baIgY72e_lg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Konstantos apibrėžimas [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalboje: public static final int KONSTANTA; žemiau pateiktame kodo fragmente matome static int bendras; ir int lokalus; kintamojo reikšmės pokytį kviečiant funkciją sk1.sumuoti() ir sk2.sumuoti(), kadangi statiniai kintamieji neturi priklausomybės nuo klasės egzempliorių, jiems yra išskiriama atmintis tik vienam egzemplioriui, kuris yra bendras = sk1.sumuoti() + sk2.sumuoti() = 20;. Naudojant lokalius kintamuosius, kiekvienam klasės egzemplioriui atmintyje yra išskiriama vieta, todėl lokalus = sk1.sumuoti() = 10; ir lokalus = sk2.sumuoti() = 10. O kam skirtas statinis kintamasis kiekObjektuSukureme ir kodėl jo reikšmė yra lygi 2? Kaip reikėtų elgtis jeigu norėtume paskaičiuoti kiek objektų sukūrėme naudojant lokalų kintamąjį?

~~~java
public class Skaiciuokle{
  static int bendras;
  int lokalus;
  static int kiekObjektuSukureme;
  
  public Skaiciuokle(){
    kiekObjektuSukureme++;
  }
  public void sumuoti(){
    bendras+=10;
    lokalus+=10;
  }
  public int getBendras(){
     System.out.println("Bendras: "+bendras);
    return bendras;
  }
  public int getLokalus(){
     System.out.println("Lokalus: "+lokalus);
    return bendras;
  }
}
public class Main{
  public static void main(String [] args){
    Skaiciuokle sk = new Skaiciuokle();
    Skaiciuokle sk2 = new Skaiciuokle();
    sk.sumuoti();
    sk2.sumuoti();
    sk.getBendras(); // REIKŠMĖ bendras 20
    sk.getLokalus(); // REIKŠMĖ lokalus 10
    sk.getKiekObjektuSukureme(); // kiekObjektuSukureme = 2
  }
}
~~~

Prieš tai pateikto kodo fragmentą galima iliustruoti (žr. 1.6 pav.). Kadangi statinis kintamasis yra bendras atmintyje todėl nėra prasmės kurti atskirus to tipo objekto egzempliorius pvz: sk ir sk2 nes mes galime tiesiogiai pasiekti naudojant klasės pavadinimą Skaiciuokle nes jai ir priklausys šis static int bendras; kintamasis. Lokalaus atveju kiekvienas egzempliorius įgyja unikalią nuorodą (vietą atmintyje) kur išsaugo savo kopiją int lokalus ir atitinkamai priklauso tik jam.

![](https://github.com/eif-courses/moodle-java/blob/master/statinisVSlokalus.jpg?raw=true)

1\.6 pav. Statinio ir lokalaus kintamojo atvaizdavimas atmintyje.

**Skirtumas tarp statinio ir nestatinio medodų.** Pagrindinis skirtumas toks jog statinis metodas priklauso tik tai klasei, kurioje jis yra apibrėžtas. Paveldėjus bet, kurią klasę, kurioje yra statinių metodų, visi metodai su raktiniu žodžiu static nebus paveldimi. Nereikia kurti klasės objekto / egzemplioriaus, kad jį įvykdyti užtenka nurodyti klasės vardą ir metodo pavadinimą pvz: pieš tai turėjome klasę Skaiciuokle, kurioje apibrėžtas metodas:

~~~java
public static void skaiciuotiSuma(int a, int b){
   System.err.println("Suma"+a+b);
}
~~~

Statinių metodų vykdymas kaip ir įprastinės klasės, nurodant nuorodą (Klasės_pav.metodas arba Klasės_pav.kintamasis). Skirtumas toks jog statiniai metodai neturi klasės egzempliorių, todėl jums pakanka nurodyti klasės pavadinimą ir kreipinį į norimą metodą pvz: Skaiciuokle.skaiciuotiSuma(20, 45). Kaip matome žemiau pateiktas kodo fragmentas, kuriame matome, kad įprastinio metodo iškvietimas yra galimas tik tuo atveju, kai yra sukuriamas objektas / klasės egzempliorius Skaiciuokle sk = new Skaiciuokle(); tik tada mes galyme vykdyti sk.sumuoti();

~~~java
public class Main{
  public static void main(String [] args){
    
    Skaiciuokle.skaiciuotiSuma(20, 45); // A + B REZULTATAS = 65
    
    Skaiciuokle sk = new Skaiciuokle();
    Skaiciuokle sk2 = new Skaiciuokle();
    sk.sumuoti();
    sk2.sumuoti();
    .....
  }
}
~~~

Taip pat reikėtų žinoti jog static metodai gali vykdyti tik statinius kintamuosius ir metodus. Pateiktas kodo fragmentas iš klasės Skaiciuokle ir static metodo pakeltiKvadratuSuma() realizacija, kuriame negalime iškviesti nestatinių (angl. non-static) metodų ir kintamųjų, priešingai su nestatiniais (angl. non-static) metodais, kuriuose galima vykdyti static ir non-static metodus. Norint iškviesti nestatinį metodą ar kintamąjį yra tik vienas būdas sukurti klasės objektą / egzempliorių, tada galėsite naudoti lokalius metodus ir kintamuosius.

~~~java
public class Skaiciuokle{
  static int bendras;
  int lokalus;
  public static void skaiciuotiSuma(int a, int b){
    System.err.println("Suma: "+(a+b));
  }
  public int getBendras(){
     System.err.println("Bendras: "+bendras);
    return bendras;
  }
  public static void pakeltiKvadratuSuma(){
    Skaiciuokle sk = new Skaiciuokle();
    skaiciuokle.getBendras();
    skaiciuotiSuma(20, 45);
  }
}
~~~

Statinis blokas vietoje statinio konstruktoriaus. Kaikurios iš programavimo kalbų turi statinius konstruktorius pvz: C#, kadangi [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalboje šis veiksmas nėra leistinas, todėl kad vaikinės klasės negali paveldėti static konstruktorių arba metodų, šiai problemai spręsti yra naudojami statiniai blokai, žemiau pateiktas pavyzdys kaip yra aprašomas statinis blokas, taip pat reikia žinoti jog šis blokas yra įkraunamas į atmintį ir bus įvykdomas visada pirmas tada kai tik bus sukurtas klasės objektas, kurioje yra apibrėžtas šis statinis blokas.

~~~java
public class Skaiciuokle{
  static{
    System.out.println("Statinis blokas įvykdytas");
  }
  public static final int KONSTANTA 59545;
  static int bendras;
  int lokalus;
  static int kiekObjektuSukureme;
  public Skaiciuokle (){
    kiekobjektuSukureme++;
    System.out.println("Konstruktorius egzempliorių skaičius"+ kiekObjektuSukureme):
  }
}
~~~

Statinių blokų naudojimas yra reikalingas tuo atveju kai jus norite pakeisti statinių kintamųjų reikšmes pagal nutylėjimą (angl. default values). Šis static blokas yra įvykdomas tada kai pvz: turime klasę Skaiciuokle yra įkraunama į atmintį, pavyzdžiui bus sukuriamas naujas objektas Skaiciuokle skaiciuokle = new Skaiciuokle(); static blokas bus įvykdomas pirmas prieš konstruktorių vykdymą, žvelgiant į pavyzdį visada bus išspausdinimas tekstas „Statinis blokas įvykdytas“, tada tik bus pereinama prie konstruktoriaus vykdymo. Statiniai blokai yra įvykdomi tik vieną kartą kai [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") virtuali mašina įkrauna klasę į atmintį, lyginant su konstruktoriumi, kuris yra vykdomas kiekvieną kartą kai yra sukuriamas klasės egzempliorius. Kiekviena klasė gali turėti ir keletą statinių blokų, kurių seka priklauso nuo eiliškumo kaip juos surašysite, [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") virtuali mašina įkrauna į atmintį apjungus juos tarpusavyje kaip vieną statinį bloką. Šie blokai taip pat vadinami inicijavimo blokai (angl. initialization blocks).

~~~java
public class Skaiciuokle{
  static{
    System.out.println("Statinis 1-blokas įvykdytas");
  }
    static{
    System.out.println("Statinis 2-blokas įvykdytas");
  }
  static{
    System.out.println("Statinis 3-blokas įvykdytas");
  }
}
~~~

**Statinis importavimas ir taikymas.** Statinis importavimas yra naudojamas tuo atveju kai, norime naudoti statinius narius: metodus, kintamuosius, konstantas, nenurodant klasės pavadinimo tiesiog kviečiant nuorodant konkretų pavadinimą kaip žemiau pateiktame pavyzdyje matome statinius narius importuotus iš klasės Skaiciuokle.

~~~java
import static static_modifikatorius.Skaiciuokle.*;
import static static_modifikatorius.Skaiciuokle.kiekObjektuSukureme;
import static static_modifikatorius.Skaiciuokle.skaičiuotiSuma;

public class StatinisImportavimas{
  void skaiciuoti () {
    System.out.println("Statinis importas: "+KONSTANTA);
    skaičiuotiSuma(99, 99);
    kiekObjektuSukureme += 10;
  }
}
~~~

Pasiekti visus statinius narius iš klasės Klases_pav:

**import static** package-pavadinimas.Klases_pav.\*;

Pasiekti konkretų nurodytą statinį kintamąjį:

**import static** package-pavadinimas.statinis-kintamasis;

Pasiekti konkretų nurodytą statinį metodą:

**import static** package-pavadinimas.statinis-metodas;

Vienas iš pavyzdžių būtų Math klasė skirta matematiniams skaičiavimams kadangi rašant tam tikro pobūdžio programas gali prireikti šio statinio importavimo dėl dažno matematinių funkcijų naudojimo, kad nerikėtų kartoti klasės vardo (žr. 1.7 pav.). Bet reikia atsiminti, kad jūsų kodo skaitomumas gali pasidaryti sudėtingesnis kai naudosite **import static.**

![8 pav. Statinio importavimo palyginimas pavyzdys ](https://github.com/eif-courses/moodle-java/blob/master/staticImport.jpg?raw=true)

1\.7 pav. Statinio importavimo palyginimas pavyzdys

Taigi reikėtu atkreipti dėmesį į tai ar tikrai verta jums naudoti **import static**, priklausomai nuo kreipinių skaičiaus į klasėje realizuotus klasės narius, su kuriais dirbsime.

**Static tipo klasės struktūra**. [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programavimo kalboje yra tik vieno tipo static klasės, jos vadinamos vidinėmis (angl. Inner). Žemiau esančiame kodo fragmente galite matyti jos realizacija:

~~~java
public class Pagrindine {
  int id = 50;
  void spausdinti (){
    // Objekto kurimas kitose klasėse
    // jeigu leisime pasiekti iš išorés
    Pagrindine.Vidine vidine = new Pagrindine.Vidine();
    vidine.grazinti id();
    // Tik tuo atveju kai yra kviečiame Tevyněje klaséje
    Vidine v = new Vidine();
    v.grazinti_id();
  }
  static class Vidine{
    int id = 90;
    public int grazinti_id() {return id;}
                        
  }
}
~~~

Pagrindine klasė turinti id lauką, kurio negalės pasiekti vidinė klasė, kadangi kaip ir įprasta static metodų aprašyme vidinėm klasėm galioja tos pačios taisyklės, kad negalite pasiekti Pagrindine klasės narių, kurie yra nestatiniai neturint klasės objekto egzemplioriaus.

**Static tipo klasės taikymas kuriant Singleton klasę.** Singleton klasės tikslas yra kontroliuoti objekto sukūrimą, apriboti objektų skaičių iki vieno klasės egzemplioriaus. Singleton klasės dažnai naudojamos kontroliuoti resursus prisijungimui prie duomenų bazės, resursų kontrolė. Kadangi Singleton klasė turi tik viena egzempliorių, taigi kiekvienas objekto laukas bus įvykdomas vieną kartą kaip ir static lauko atveju.

~~~java
public class SingletonKlase{

  private SingletonKlase(){}
  public static SingletonKlase getInstance(){
    return SingletonKlaseHolder.INSTANCE;
  }
  private static class SingletonKlaseHolder (
    private static final SingletonKlase INSTANCE = new SingletonKlase();
  }
}
~~~

Pavyzdžiui, jus turite licencija vienam prisijungimui prie duomenų bazės, Singleton klasė užtikrins tai, kad tikrai būtų atliktas vienas prisijungimas vienu metu.
