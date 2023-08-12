---
# This is the icon of the page

# This is the title of the article
title: Įvadas
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

Java – bendrosios paskirties, objektiškai orientuota programavimo kalba, kurią 1991 m. sukurė Džeimsas Goslingas ir kiti „Sun Microsystems“ inžinieriai, o 2010 m. ją įsigijo Oracle korporacija. Apie Javą oficialiai paskelbta 1995 metų gegužės 23 d., o išleista tų pačių metų lapkritį. Java (pradžioje vadinta Oak) kalbos pirminis tikslas buvo pakeisti C++ kalbą. Javos aplikacijos yra kompiliuojamos į baitkodą, kuris gali būti paleidžiamas bet kokioje Javos virtualiojoje mašinoje ([JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM")), nepriklausomai nuo kompiuterio architektūros.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/kzGFXxhTRiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

CPU arba Procesorius – loginis įtaisas, apdirbantis duomenų srautą, atsakingas už įrenginių bei programų komandų analizavimą bei vykdymą. Jis dažnai vadinamas "kompiuterio smegenimis". Operatyvioje atmintyje RAM yra programos ir duomenys, kuriuos reikia apdoroti. Veiksmus atlieka interpretatorius (procesorius), kuris ima iš eilės mašinines komandas, jas atpažįsta ir kreipiasi į komandoje nurodytą elementarią operaciją. Kompiuterinė programa – tai instrukcijų rinkinys, kurios turi būti įvykdytos kompiuterio. Programai įvykdyti yra naudojama pati elementariausia kalba, tai yra mašininė kalba, kiekvienas skirtingo tipo kompiuteris turi savo kalbą. Procesorius gali vykdyti ir kito tipo kalbas, bet su sąlyga jog ši kalba bus transliuojama į mašininę kalbą.

JVM mašininė kalba turi paprastas instrukcijas, kurios gali būti vykdomos tiesiogiai kompiuterio procesoriaus.  
Daugelis programų yra parašytos aukšto lygmens programavimo kalbų: JAVA, Pascal, arba C++. Programa parašyta aukšto lygmens programavimo kalbų negali būti vykdoma tiesiogiai, bet kurio tipo kompiuterio. Visų pirmą reikėtų bet kurią aukšto lygmens kalbą transliuoti į mašininę kalbą. Šis veiksmas yra altiekamas naudojant programą vadinama kompiliatoriumi (angl. Compiler). Kompiliatorius transliuoja aukšto lygmens kalbos programą į mašinės kalbos programa, kuri gali būti įvykdyta būtent to tipo kompiuterio, kuri suprantą šią kalbą, jeigu programą norime įvykdyti kito tipo kompiuteryje ši programa turi būti retransliuota naudojant kitą kompiliatorių skirtą pagal kompiuterio mašininę kalbą. Alternatyvus būdas aukšto lygmems programavimo kalbų programų kompiliavimui. Vietoje kompiliatoriaus kuris iš karto transliuoja visą programą, naudoti interpretatorių, kuris transliuoja instrukcijas. Prieš pradedant vykdyti programą, interpretatorius paleidžia ciklą, kuris nuskaito vieną programos instrukciją, tada nusprendžia, ką reikia atlikti su šia instrukcija ir tada įvykdo atitinkamą mašininės kalbos komandą. Java projektuotojai pasirinko būdą apjungti kompiliatorių ir interpretatorių. Programos parašytos Java kalba yra kompiliuojamos į mašininę kalbą kompiuteriams, kuri iš tikrųjų neegzistuoja. Ši kalba yra skirta „virtualiam“ kompiuteriui, žinomam kaip Java Virtual Machine arba JVM. JVM skirta mašininė kalba yra vadinama Java bytecode. Taigi skirtumas nuo kompiliuojamųjų kalbų yra toks jog Java bytecode gali būti vykdomas bet kurioja kitoje platformoje (žr. 1.1 pav.), kurioje yra reikalinga Java virtuali mašina, kuri interpretuoja Java bytecode. Kiekvienam skirtingam kompiuteriui yra reikalingas tam tikrai platformai skirtas Java bytecode interpretatorius. Kai kompiuteris turi Java bytecode interpretatorių, jis galį įvykdyti bet kurią Java bytecode programą. Ir ta pačią programą gali įvykdyti, bet kuriame kitame prietaise/kompiuteryje, kuriame yra įdiegtas Java bytecode interpretatorius. Tai yra pagrindinis Java privalumas, kad ta pati sukompiluota programa gali būti paleista skirtingo tipo kompiuteriuose.

![1.1. pav. Transliavimo procesas](https://lh5.googleusercontent.com/ntzcn9o8qnBWwxPoWvCN1cSl5vptkbbeqdxYsXglLIHuPhBKXHYO-Esb4CelTTCuNhE-NyRS9-gjnyRMbtqedXuC8ABsE8_4oTx8mn5UV-W_njo81Om2H6RwapG_N-00g1mfbY9WUIo "1.1. pav. Transliavimo procesas")

1\.1 pav. Transliavimo procesas

Kadangi kompiliuojamos kalbos yra žymiai greitesnės, nei interpretuojamos, kurios yra skirtos būtent konkrečiai platformai. Java naudoja JIT kompiliatorių, kuris transliuoja Java bytecode į „native code“ mašininę kalbą, kol programa yra vykdoma (žr. 1.2 pav.).

![1.2. pav. JIT kompiliavimo procesas](http://www.cs.sit.kmutt.ac.th/blog/wp-content/uploads/2015/03/2.png "1.2. pav. JIT kompiliavimo procesas")

1\.2 pav. JIT kompiliavimo procesas

Java programavimo kalboje dažnai yra sutinkami šie terminai: JDK, JRE, JVM, kaip jie yra susiiję tarpusavyje. JDK tai kūrėjo įrankių rinkinys leidžiantis sukompiliuoti, derinti, vykdyti, kurti Java programas, kuris ir yra visi trys viename (JDK, JRE, JVM) (žr. 1.3 pav.). JRE išimtis tame jog vartotojas turintis šį paketą gali paleisti bet kokią Java programą atitinkančią Java JRE versiją norimos paleisti programos, bet negali kurti programinės įrangos neįdiegūs JDK.

![Java Development Kit](http://codingfox.com/wp-content/uploads/2014/11/jdk.png)

1\.3 pav. Programavimo kalbos Java JDK schema

Susipažinti su Java rekomenduojama peržiūrėti šią nuorodą: [https://github.com/eif-courses/spring/blob/master/Advanced-java.pdf](https://github.com/eif-courses/spring/blob/master/Advanced-java.pdf) kur yra pateikti pavyzdžiai ir pagrindinės konstrukcijos rašant programinį kodą.

Kiekviena programavimo kalba turi kūrėjo įrankius ir platformą, kurioje yra apstu įvairiausios paskirties bibliotekų. Taip pat Java JDK bibliotekų rinkinį galima vadinti JAVA karkasu (angl. framework). Visų pateikiamų įrankių (žr. 1.4 pav.) išmokti nereikia bet susipažinti reikėtų bent jau paskirtį ir kaip surasti poreikiui esant. Dažniausiai programuotojai ieško informacijos pateikiamoje oficialioje įstaigos prižiūrinčios programavimo kalbą dokumentacijoje.

![5 pav. JAVA JDK bibliotekų sąrašas grafiškai](https://lh5.googleusercontent.com/axJZfYYUFoUZhQx2M5NCEc8qNPLyQRXFl5q1QQfcMI5nSyIzaf9WrB3Q2ZuWYEduT6B9Gw2QLSGaRiFkQKzqH3kYtgVznxvJdzS-PQ-EmrNwJ-ztjt5yJ61kNhDrm7r_S8hVHBucSWo "5 pav. JAVA JDK bibliotekų sąrašas grafiškai")

1\.4 pav. JAVA JDK bibliotekų sąrašas grafiškai

Kiekviena kalba turi grupę žodžių rezervuotą kompiliatoriaus panaudojimui. Šie *raktiniai žodžiai* negali būti naudojami kaip identifikatoriai jūsų programos. 1 lentelėje išvardinti raktiniai žodžiai rezervuoti Java kompiliatoriui. Pažymėti su žvaigždute žodžiai yra rezervuoti ateičiai. Kai kurie, tokie kaip konstanta, yra rezervuoti, kad programos kodo ir komentarų skaitymas neklaidintų programuotojo. Juos Java kalbos kūrėjai ateityje gali irgi įprasminti.

**1 lentelė.** Java kalbos rezervuoti raktiniai žodžiai

![Img](//a.storyblok.com/f/67518/412x338/ee827a3d84/annotation-2019-10-27-091848.jpg)

Taip pat Java programavimo kalboje yra numatyti pasiekiamumo operatoriai (žr. 2 lentelę). Viena iš priežąsčių kodėl jų reikia nes Java yra OOP kalba ir norint uždrausti objektams matyti tam tikrą turinį yra taikomi pasiekiamumo modifikatoriai (angl. access modifiers).

**2 lentelė.** Objektų/Java Klasių pasiekiamumo modifikatoriai

![Related image](https://www.programcreek.com/wp-content/uploads/2011/11/access-level.png)

Susipažinti su sintakse reikėtų susipažinti su Java kalboje esančiais duomenų tipais, kurie pateikiami schematiškai lengvai įsimenami (žr. 1.5 pav.).

![](https://lh4.googleusercontent.com/nQs6aGYlPL19Mto5gTXxlEbAgyrLFKWKB11tOKvyJMZnfObuoRn7sd2mRUgC_sN7cqS3WnWHQBpj-FOpWtbbA0MbIg0VXeuMrxWiWzY5oqibLBlC4ICVJOYshnsHQgaxnL3SZRFedQE)

1\.5 pav. Java kalbos pagrindiniai duomenų tipai

<iframe width="100%" height="400" src="https://www.youtube.com/embed/2flq5BO_8hM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Operacijos su skaičiais patenka į dvi kategorijos: *unarinės* operacijos, kurios dirba į vienu kintamuoju ir *binarinės* operacijos, dirbančios du dviem skaičiais. Toliau binarinius operatorius galime skirstyti į grąžinančius skaitinį rezultatą ir palyginimo operatorius, grąžinančius loginę reikšmę. Operacijos rezultatas visuomet bus to paties tipo kaip didžiausio operando tipas. Tarkime sudedame du skaičius - vienas *short* , kitas *long* tipo. Sudėties rezultatas bus *long*. 3 lentelėje aprašyti analogiški atvejai su kitais pirminiais tipais. Atkreipkite dėmesį, kad mažiausiais operacijų su sveikaisiais skaičiais grįžties rezultatas yra *int*. Pradžioje paanalizuosime unarines operacijas.

**3 lentelė.** Operacijų rezultatai

![Img](//a.storyblok.com/f/67518/337x389/32e789ef26/eeeeee.jpg)

Unarinės operacijos reikalauja vieno operando - parametro. Operacija atliekama ir rezultatas patalpinamas operande. Rezultato tipas bus visuomet tas pats kaip ir pradinio tipo, nes čia nėra galimybės prarasti tikslumą arba dydį. 4-7 lentelėje išvardinti Java unariniai operatoriai.

**4 lentelė.** Unariniai operatoriai

![Img](//a.storyblok.com/f/67518/517x171/bce8552929/ffffff.jpg)

*Binariniai* operatoriai naudoja du operandus, atlieka veiksmą ir grąžina rezultatą. Rezultatas turi tą patį tipą kaip didžiausias operandas. Sudėdami *byte* ir *int* gausime rezultatą *int* tipo. Operacijų rezultatas neįtakoja kintamųjų (operandų) reikšmes. Binarinės operacijos skaidomos į dvi grupes: pirmoji grąžina rezultate skaičiaus reikšmę, o antroji - loginę reikšmę. 5 lentelėje išvardintos binarinės operacijos, kurios grąžina skaičių.

**5 lentelė.** Binarinės skaičiavimo operacijos  
![Img](//a.storyblok.com/f/67518/352x362/a3ac8091ec/rrrrrrr.jpg)

Santykio operatoriai lygina dviejų skaitinių operandų reikšmes ir grąžina loginę palyginimo rezultato reikšmę. 6 lentelėje aprašyti galimi Javos palyginimo operatoriai.

**6 lentelė.** Binarinės skaičiavimo operacijos

![Img](//a.storyblok.com/f/67518/290x199/800897ec41/qqqqqqqqq.jpg)

Loginės operacijos yra labai panašios į skaičių palyginamo operacijas. Visos loginės operacijos grąžina loginę reikšmę: *true* arba *false*. 7 lentelėje pateiktas loginių operacijų sąrašas.

**7 lentelė.** Loginės operacijos

![Img](//a.storyblok.com/f/67518/382x308/8306c68856/xxxxxxxxx.jpg)

Operacijos su Java objektais palaikomos tokios operacijos: =, ==, != ir *instanceof* . Pavyzdžiui sudėti du objektus negalima, nes bendru atveju neaišku koks turėtų būti šios operacijos turinys. Vienintelė išimtis yra eilučių atveju; tuomet ši operacija reiškia eilučių apjungimą.

Priskyrimo operatorius (=) naudojamas priskirti objekto rodyklę nurodytam kintamajam. Tai nesukuria objekto kopijos. Taip yra gaunamas kintamasis kitu vardu, tačiau jis yra tik sinonimas nuorodos, kurioje yra saugojamas objektas. Kai visi kintamieji neteks savo galiojimo lauko, objektas atlaisvinamas. Pasižiūrėkime į pavyzdį:

~~~java
foo test = new foo(); 
foo test2 = null; 
test2 = test;
~~~

Šis kodas iliustruoja objektų priskyrimą. Pirma eilutė sukuria naują foo egzempliorių. Antra eilutė test2 objektui priskirią specialiąją tuščio objekto reikšmę. Kreipimasis į test2 dabar būtų negalimas ir gautume *nullPointerException* klaidos pranešimą. Paskutinis operatorius sutapatina test ir test2. Dabar jau abudu kintamuosius galima naudoti, tačiau jie nereiškia skirtingus objektus, nes new foo() buvo panaudotas tik vieną kartą.

Objektai palaiko dvi palyginimo operacijas: *lygus* operaciją (==) ir *nelygus* operaciją (!=). Šios operacijos tikrina ar objektų kintamieji yra nuorodos į tą pačią atminties vietą. Du objektai turintys nuorodų kintamuosius į skirtinas vietas atmintyje bus visuomet nelygūs nepriklausomai nuo to ar visi jų metodai ir kintamieji yra vienodi ar ne. Pateiksime tokios situacijos pavyzdį:

~~~java
foo testas = new foo();
foo test2 = new foo();
foo test3 = testas;
~~~

Naudojant šiuos priskyrimus, mes galime su nurodytais kintamaisiais sukurti lygybės santykių lentelę. 4-11 lentelė iliustruoja kokie objektai yra lygūs ir kokie - ne.

**8 lentelė.** Objektų palyginimas tarpusavyje

![Img](//a.storyblok.com/f/67518/193x120/a9ef7dbea9/cccccccccccccccccc.jpg)

\*\*\*instanceof  \*\*\*( *egzemplioriaus tipo* ) operatorius naudojamas nustatyti objekto tipą. Pavyzdžiui norime nustatyti ar mūsų int skaicius; yra Integer tipo. Programiškai patikrinti galima:
~~~java 
if(skaicius instanceof Integer) {
}
~~~


## Page structure

This page should contain:

- Back to top button
- Route navigation
- Comments
- Footer
