---
# This is the icon of the page

# This is the title of the article
title: Kolekcijų karkasas
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


### Kolekcijų karkasas arba duomenų struktūros 
Kolekcija - tai duomenų saugykla (panaudojimo prasme). Kolekcija – tai atitinkamą kolekcijos interfeisą (sąsają) įdiegiančios klasės objektas (programavimo prasme). Kolekcija – tai dinaminis masyvas: gali "augti" tiek, kiek reikia (apimtis neribojama); gali mažėti iki tuščios. Kolekcija gali talpinti įvairių tipų objektus (tik objektus!). Pagal ideologiją panašu C++ naudojamą Standard Template Library (STL).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/waAhXFW_kwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Kolekcijų privalumai
- Supaprastina programavimo procesą, kadangi yra pateikiamos dažniausiai naudojamos duomenų struktūros ir algoritmai, kurių nereikia realizuoti atskirai.
- Paspartina naudojamų duomenų struktūrų ir algoritmų darbą, kadangi sukurtas karkasas yra gerai suprojektuotas.
- Suteikia sąveiką tarp nesusijusių API’s, sukuriant bendrą kalbą kolekcijoms perduoti pirmyn ir atgal.

Kolekcijų karkaso klasių hierarchija (žr. 1.8 pav.) nuo JDK 1.5 kadangi buvo perrašytas naudojant generics tipus, taip apsaugant nuo pagrindinės problemos ClassCastException. 1.8 paveikslėlyje pateiktas supaprastintoss kolekcijų karkaso hierarchijos vaizdas išėmus tarpines abstrakčias klases, kurias galima surasti oficialiojoje dokumentacijoje. Programuotojui užtenka žinoti kokios duomenų struktūros ir kokie interfeisai sudaro šį kolekcijų karkasą. Detalesnį sąrašą peržiūrėti reikia tuo atveju jeigu norime sukurti savo asmenines kolekcijas.

![Collections interfeisas Java.png](https://github.com/eif-courses/moodle-java/blob/master/Collections%20interfeisas%20Java.png?raw=true)

1.8 pav. Kolekcijų karkasas

Kolekcijų karkasas neturi kai kurių klasių pavyzdžiui duomenų struktūros map šios duomenų struktūros interfeisas yra sukurtas atskirai nuo kolekcijų karkaso (žr. 1.9 pav.).

![Map interfeisas Java.png](https://github.com/eif-courses/moodle-java/blob/master/Map%20interfeisas%20Java.png?raw=true)

1.9 pav. Map interfeiso hierarchija

<iframe width="100%" height="400" src="https://www.youtube.com/embed/0DARrcpyLsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ši duomenų struktūra sudaryta iš rakto (angl. key) - K ir reikšmės (angl. value) - V. Tai nusako rakto ir reikšmės saugojimą atmintyje pagal. kurių porą yra patogu užrašyti duomenis turinčius didelius teksto fragmentus. Turint tokią duomenų struktūrą yra daug paprasčiau atlikti paiešką pagal raktinį žodį. Realaus gyvenimo pavyzdys tai facebook #-hashtag pagal, kuriuos yra surandami ir atvaizduojami visi paskelbti straipsniai su paminėtu raktiniu žodžiu.

### Comparable ir Comparator interfeisų skirtumas ir paskirtis.

Kadangi kolekcijų karkasas yra objektų rinkiniai su kuriais įprastai yra naudojami pagrindiniai metodai, kurie yra aprašyti klasėse: Arrays arba Collections, taip pat galima turėti ir filtrus norint išrinkti informaciją iš esamų rinkinių. Skirtumas tarp šių dviejų interfeisų:
- Comparable interfeisas yra skirtas duomenų rūšiavimui viena išdėstymo tvarka, o Comparator interfeisas gali būti naudojamas duomenų rinkinius rūšiuoti keliomis skirtingomis kryptimis.
- Naudoti Comparable interfeisą reikia jį reikia įgyvendinti, kur naudojant Comparator nereikia atlikti jokių pakeitimų.
- Comparable interfeisas yra įgyvendintas java.lang klasių kataloge, Comparator yra kitame java.util kataloge.
- Nereikia jokio kodo pakeitimų kliento kodo pusėje naudojant Comparable Arrays.sort() arba Collections.sort() metodus, kurie automatiškai naudoja compareTo() metodus prisitaikant prie tos klasės tipo. Naudojant Comparator klientas privalo aprašyti metodą compare().


Pavyzdžiui turime įprastą sandėlį, kuriame yra sudėtos įvairios dėžės skirtingų tipų/rūšių: Auksinė, Celofaninė, Sidabrinė, Medinė ir kt. 
Užduotis surūšiuoti sandėlyje esančias dėžes pagal svorį didėjimo tvarka. 
Tada programiškai reikėtų aprašyti taip: sukurti kolekciją ```java ArrayList<Deze>```, joje patalpinti dėžės tipo objektus, aprašyti metodą compare() pagal kokį filtrą rūšiuosime dėžes, šiam tikslui pasiekti naudosime Comparator interfeisą kaip anoniminę klasę:




```java

class Deze {
  private String tipas;
  private int svoris;
  public Deze(String tipas, int svoris) {
    this.tipas = tipas;
    this.svoris = svoris;
  }
  public String getTipas() {
    return tipas;
  }
  public int getSvoris() {
    return svoris;
  }
  @Override
  public String toString() {
    return "Deze{" +
        "tipas='" + tipas + '\'' +
        ", svoris=" + svoris +
        '}';
  }
}
public class Main {
  public static void main(String[] args) {
    List<Deze> sandelys = new ArrayList<>();
    sandelys.add(new Deze("Auksinė", 111));
    sandelys.add(new Deze("Stiklinė", 599));
    sandelys.add(new Deze("Plastikinė", 33));
    sandelys.add(new Deze("Celofaninė", 11));
    sandelys.add(new Deze("Medinė", 68));
    // Comparator kaip anoniminė klasė iki 1.7 JDK be lambda išraiškų
    Comparator<Deze> pagalSvori = new Comparator<Deze>() {
      @Override
      public int compare(Deze o1, Deze o2) {
        return o1.getSvoris() - o2.getSvoris();
      }
    };
    // Comparator įvedūs lambda išraiškas nuo 1.8 analogiškai pagal didėjimo tvarką rūšiuoja elementus
    Comparator<Deze> pagalSvori2Budas = (o1, o2) -> o1.getSvoris() - o2.getSvoris();
    // Comparator įvestas naujas metodas nuo 1.8 JDK supaprastėjo užrašymas
    Comparator<Deze> pagalSvori3Budas = Comparator.comparingInt(Deze::getSvoris);

    // 2 būdai kaip rikiuoti sandelyje esančias dėžes pagal numatytą tvarką šiuo atveju didėjimo.
    // Comparator objektas yra paprasčiausias filtras
    sandelys.sort(pagalSvori);
    //analogiškai Collections.sort(sandelys, pagalSvori);
    System.out.println("Pagal dėžės svorį didėjimo tvarka:");
    for (Deze deze: sandelys)
      System.out.println(deze);

    // Filtras skirtas surikiuoti elementus pagal dėžės tipą didėjimo tvarka
    Comparator<Deze> dezesTipas = new Comparator<Deze>() {
      @Override
      public int compare(Deze e1, Deze e2) {
        return e1.getTipas().compareTo(e2.getTipas());
      }
    };
    sandelys.sort(dezesTipas);
    System.out.println("Pagal dėžės tipą didėjimo tvarka:");
    for (Deze deze: sandelys)
      System.out.println(deze);
  }
}

//Įvykdžius programinį kodą į ekraną išves dėžės svorį didėjimo tvarka:

Deze(tipas='Celofaninė', svoris=11);
Deze(tipas='Plastikinė', svoris=33);
Deze(tipas='Medinė', svoris=68);
Deze(tipas='Auksinė', svoris=111);
Deze(tipas='Stiklinė', svoris=599);

//Pastaba! compare() metodą galima aprašyti ir pagal individualų poreikį. Elementų tvarka taip pat gali būti didėjimo ar mažėjimo vėliau apžvelgsime kaip parašyti rūšiavima pagal 2 ir daugiau parametrų.Kaip veikia rūšiavimas labai paprastai jeigu rezultatas o1.getSvoris() - o2.getSvoris() yra lygus:

// 0 - reiškia jog abu elementai yra lygūs.
// 1 ir daugiau - reiškia jog elementas yra didesnis už lyginamą elementą.
// -1 ir mažiau - reiškia jog elementas yra mažesnis už lyginimą elemetą.

//Norint surikiuoti elementus pagal kitą parametrą t.y. objektą naudosime tą patį prieš tai pateiktą pavyzdį, kuriame buvo rikiuojamos dėžės esančios sandėlyje pagal svorį. Šį kartą tikiuosime pagal tos dėžės tipą. Kadangi parametras yra nuorodos (angl. reference) tipo return dalyje naudosime compareTo() metodą skirtą palyginti objektus tarpusavyje pagal dėžės tipą. 
// Įvykdžius programinį kodą su naujai parašytų filtru dezesTipas į ekraną bus išvestas dėžės tipas didėjimo tvarka:

Deze(tipas='Auksinė', svoris=111);
Deze(tipas='Celofaninė', svoris=11);
Deze(tipas='Medinė', svoris=68);
Deze(tipas='Plastikinė', svoris=33);
Deze(tipas='Stiklinė', svoris=599);

//Laikantis tvarkingo kodo rašymo norint turėtį filtrus pagal paskirtį reikėtų duotą filtrą aprašyti toje klasėje, kurios tipo duomenis ir rūšiuosime. 
//Pavyzdžiui turime situaciją realiame gyvenime turime sąrašus sudarytus iš asmenų su papildoma informacija. Programiškai reikia sukurti objektą Asmuo ir Main metodą, kuriame patikrinsime realizuotą programą. 
// Tikslas surūšiuoti asmenis pagal vardą, atlyginimą arba pagal abu laukus pagal atlyginimą ir pagal vardą.

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Asmuo{
  private String vardas;
  private double atlyginimas;

  public Asmuo(String vardas, double atlyginimas) {
    this.vardas = vardas;
    this.atlyginimas = atlyginimas;
  }

  public String getVardas() {
    return vardas;
  }

  public double getAtlyginimas() {
    return atlyginimas;
  }
  // Aprašomi įvairūs filtrai susiiję su Asmens klase nuo JDK 1.7
  public static Comparator<Asmuo> asmuoPagalVarda = new Comparator<Asmuo>() {
    @Override
    public int compare(Asmuo o1, Asmuo o2) {
      return o1.getVardas().compareTo(o2.getVardas());
    }
  };
  public static Comparator<Asmuo> asmuoPagalAtlyginima = new Comparator<Asmuo>() {
    @Override
    public int compare(Asmuo o1, Asmuo o2) {
      return (int)o1.getAtlyginimas() - (int)o2.getAtlyginimas();
    }
  };
  public static Comparator<Asmuo> pagalAtlyginimaIrVarda = new Comparator<Asmuo>() {
    @Override
    public int compare(Asmuo o1, Asmuo o2) {
      int flag = (int)o1.getAtlyginimas() - (int)o2.getAtlyginimas();
      if(flag == 0)
        flag = o1.getVardas().compareTo(o2.getVardas());
      return flag; // flag tai laikinasis kintamasis pagal, kurį pritaikome antrą filtrą pagal vardą
    }
  };
  @Override
  public String toString() {
    return "Asmuo{" +
        "vardas='" + vardas + '\'' +
        ", atlyginimas=" + atlyginimas +
        '}';
  }
}
public class Main {
  public static void main(String[] args) {
    List<Asmuo> asmenys = new ArrayList<>();
    asmenys.add(new Asmuo("Darius", 2200));
    asmenys.add(new Asmuo("Marius", 1500));
    asmenys.add(new Asmuo("Andrius", 1888));
    asmenys.add(new Asmuo("Tomas", 1500));
    asmenys.add(new Asmuo("Arnas", 1500));
    asmenys.add(new Asmuo("Tomas", 4444));

    // Sukurto filtro naudojant Comparator interfeisą filtras pagal asmens vardą
    asmenys.sort(Asmuo.asmuoPagalVarda);
    System.out.println("Asmuo pagal vardą didėjimo tvarka:");
    for (Asmuo asmuo : asmenys) {
      System.out.println(asmuo);
    }
    // Sukurto filtro naudojant Comparator interfeisą filtras pagal asmens atlyginimą
    asmenys.sort(Asmuo.asmuoPagalAtlyginima);
    System.out.println("Asmuo pagal atlyginimą didėjimo tvarka:");
    for (Asmuo asmuo : asmenys) {
      System.out.println(asmuo);
    }
    // Sukurto filtro naudojant Comparator interfeisą filtras pagal asmens atlyginimą ir pagal vardą
    asmenys.sort(Asmuo.pagalAtlyginimaIrVarda);
    System.out.println("Asmuo pagal atlyginimą ir pagal vardą didėjimo tvarka:");
    for (Asmuo asmuo : asmenys) {
      System.out.println(asmuo);
    }
  }
}

// REZULTATAS BUS IŠVESTAS EKRANĄ
Asmuo pagal vardą didėjimo tvarka:
Asmuo(vardas='Andrius', atlyginimas=1888.0);
Asmuo(vardas='Arnas', atlyginimas=1500.0);
Asmuo(vardas='Darius', atlyginimas=2200.0);
Asmuo(vardas='Marius', atlyginimas=1500.0);
Asmuo(vardas='Tomas', atlyginimas=1500.0);
Asmuo(vardas='Tomas', atlyginimas=4444.0);

Asmuo pagal atlyginimą didėjimo tvarka:
Asmuo(vardas='Arnas', atlyginimas=1500.0);
Asmuo(vardas='Marius', atlyginimas=1500.0);
Asmuo(vardas='Tomas', atlyginimas=1500.0);
Asmuo(vardas='Andrius', atlyginimas=1888.0);
Asmuo(vardas='Darius', atlyginimas=2200.0);
Asmuo(vardas='Tomas', atlyginimas=4444.0);

Asmuo pagal atlyginimą ir pagal vardą didėjimo tvarka:
Asmuo(vardas='Arnas', atlyginimas=1500.0);
Asmuo(vardas='Marius', atlyginimas=1500.0);
Asmuo(vardas='Tomas', atlyginimas=1500.0);
Asmuo(vardas='Andrius', atlyginimas=1888.0);
Asmuo(vardas='Darius', atlyginimas=2200.0);
Asmuo(vardas='Tomas', atlyginimas=4444.0);

// Comparable interfeisas yra ribotas jį galima rasti java.lang pakete. Kadangi vartotojas privalo aprašyti metodą compareTo() šiame metode galima aprašyti tik vienos sekos rūšiavimą pagal kažkurį objekto parametrą. 
// Žemiau bus pateiktas programinio kodas, kuriame bus rūšiuojami Studentai pagal amžių.

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Studentas implements Comparable<Studentas>{

  private String vardas;
  private int amzius;

  public Studentas(String vardas, int amzius) {
    this.vardas = vardas;
    this.amzius = amzius;
  }
  public String getVardas() {
    return vardas;
  }

  public int getAmzius() {
    return amzius;
  }
  // Aprašomas filtras rūšiavimui pagal amžių
  @Override
  public int compareTo(Studentas o) {
    if(amzius == o.amzius){
      return 0;
    }
    else if(amzius < o.amzius){
      return 1;
    }else{
      return -1;
    }
  }
  @Override
  public String toString() {
    return "Studentas{" +
        "vardas='" + vardas + '\'' +
        ", amzius='" + amzius + '\'' +
        '}';
  }
}
public class Main {
  public static void main(String[] args) {
    List<Studentas> studentai = new ArrayList<>();
    studentai.add(new Studentas("Jonas", 25));
    studentai.add(new Studentas("Ona", 18));
    studentai.add(new Studentas("Petras", 19));
    studentai.add(new Studentas("Kazimieras", 19));

    // Rūšiuojama pagal amžių naudojant Comparable interfeisą
    Collections.sort(studentai);
    System.out.println("Studentų sąrašas pagal amžių mažėjimo tvarka:");
    for (Studentas studentas : studentai) {
      System.out.println(studentas);
    }
  }
}

Į ekraną bus išvestas Studentų sąrašas pagal amžių mažėjimo tvarka:
Studentas(vardas='Jonas', amzius='25');
Studentas(vardas='Petras', amzius='19');
Studentas(vardas='Kazimieras', amzius='19');
Studentas(vardas='Ona', amzius='18');

```
Savarankiškai dar kartą peržiūrėkite pavyzdžius. Pabandykite sukurti savo asmeninį filtrą naudojant Comparator ar Comparable interfeisą.
