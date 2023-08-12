---
# This is the icon of the page

# This is the title of the article
title: Projektų kūrimo įrankiai
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

Viena iš priežąsčių kodėl iš viso yra kalbama apie projekto valdymo įrankius labai paprasta. Šie įrankiai suteikia galimybę turėti scenarijaus failą, kuriame yra surašomos visos instrukcijos, kokios bibliotekų priklausomybės turi būti, kokias užduotis turime atlikti pavyzdžiui sukompiliuoti programą ir ją įvykdyti, suarchyvuoti programinį kodą ir išsiusti jo kopiją el. paštu, startuoti kokį nors servisą pvz. duomenų bazę ir pan. Projektų kūrimo ir valdymo įrankiai skirti palengvinti automatizuojant procesus, išsaugont projekto bibliotekų priklausomybių (angl. dependencies) konfigūraciją. Taip pat galimybė vykdyti įvairiausias užduotis, perpanaudoti esamus projekto šablonus, taip pasinaudojant esamais projekto programiniais kodais kuriant naujus. Pagrindiniai įrankiai, kuriuos apžvelgsime: ANT, Maven ir Gradle.

Gradle yra atvirojo kodo (angl. open-source) įrankis. Šis įrankis yra skirtas, kurti projektus ir juos automatizuoti, kuris yra labai lankstus ir spartus bei plačiai naudojamas įvairių garsių kompanijų. Gradle automatizavimo dokumentai arba scenarijai (angl. scripts) yra rašomi naudjant [Groovy ](http://groovy-lang.org/)[JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM") arba [Kotlin ](https://kotlinlang.org/)DSL kalbą. Kadangi šis įrankis yra labai galingas ir turintis daug galimybių, todėl jų visų išvardinti čia nėra tikslo. Rekomenduojama vadovautis pateikta oficialia Gradle įrankio dokumentacija ir pagal poreikį pasirinkti domininačią sritį, kuriant projekto automatizavimo scenarijus. Plačiau apie visas šio įrankio galimybes rasite šiuo adresu: [https://gradle.org/features/](https://gradle.org/features/).

* Labai lengvai konfigūruojamas - praplečiamas ar papildomas įvairiausiais pagrindiniais aspektais automatizuojant projektą.
* Greitas (angl. fast) — Gradle atlieka aprašytas scenarijais užduotis greitai perpanaudodamas prieš gautus atsakymus iš praeitų vykdytų užduočių, vykdant tik išvestį, kuri pasikeitė. Visos užduotis yra vykddomos kaip atskiri procesai arba išlygiagretintos.
* Galingas (angl. powerful) — Gradle yra oficialus įrankis skirtas Android Studio ir taip pat yra suderinamas su šiuolaikinėmis populiariausiomis kalbomis ir technologijomis (žr. 1 pav.).

![](https://github.com/eif-courses/moodle-java/blob/master/vvvvvv.jpg?raw=true)

1 pav. Suderinamos programavimo kalbos su Gradle

naujiems projektams su Gradle rekomenduojama peržiūrėti oficialios dokumentacijoje pateikiamas pamokas:

Atsisiųsti ir įdiegti Gradle įrankį: [atsisiųsti ir įdiegti Gradle](https://docs.gradle.org/current/userguide/installation.html#installing_gradle).

Įdiegūs šį įrankį rekomenduoja peržiūrėti pamoką pradedantiesiems, kuriant pirmą projektą: [Pradėti su gradle](https://gradle.org/guides/#getting-started).

Naudojantiems Maven įrankį rekomenduojama peržiūrėti vizualų palyginimą: [Gradle vs Maven comparison](https://gradle.org/maven-vs-gradle/) ir vadovautis pamoka kaip pereiti iš Maven į Gradle: [migrating from Maven to Gradle](https://guides.gradle.org/migrating-from-maven/).

**Naudotis egzistuojančiais Gradle "build".** Gradle įrankis yra palaikomas įvairiausių programavimo aplinkų: Android Studio, Eclipse, IntelliJ IDEA, Visual Studio 2017 ir XCode. Turint egzistuojančius Gradle build galima vykdyti naudojant komandinės eilutės komandas turint įdiegtą gradle įrankį ar turint Continous integration serverį, debesį ar bet kur yra įdiegtas gradle įrankis ir palaikantis komandinę eilutę. Komandinės eilutės komandas rasite čia: [komandinės eilutės sąsaja](https://docs.gradle.org/current/userguide/command_line_interface.html#command_line_interface). Gradle sukurtų scenarijų įrankis skirtas patikrinti ir optimizuoti, kad greičiau būtų sukurti ir paruošti projektai naudojant Gradle. Galima atlikti patikrą čia: [Gradle build scans](https://scans.gradle.com/), kur suprasite kaip jūsų sukurtas projektas atrodo, kokios problemos, spartos trūkumas ir kita naudinga informacija.

## Kur surasti pagalbą?

* Forumas — sparčiausias būdas sulaukti pagalbos kreipiantis į [Gradle Forum](https://discuss.gradle.org/ "Gradle help and discussion forums"). Nes ten yra pagrindinė Gradle bendruomenė, kuri pasiruošusi atsakyti į jums rūpimus klausimus.
* Mokymai internete — Nemokamas internetu paremtas Gradle mokymasis yra organizuojamas kiekvieną mėnesį. Štai čia galite užsiregistruoti: [training page](https://gradle.org/training/ "Gradle training schedule").
* Paslaugos įmonėms (angl. Enterprise Services) — Palaikymas ir mokymai gali būti įsigijami naudojant prenumeratas :[Gradle Enterprise](https://gradle.com/enterprise).
