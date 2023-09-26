---
# This is the icon of the page
# This is the title of the article
title: Android OS
# Set author
author: M.Gžegoževskis
# Set writing time
date: 2023-09-21
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

Viena iš sričių [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programuotojų yra mobiliųjų aplikacijų kūrimas: telefonams, televizoriams, išmaniesiems laikrodžiams, automobiliams, projektoriams ir kitiems prietaisams. Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") yra viena iš pagrindinių įrankių šiom aplikacijoms kurti. Taip pat reikia atkreipti į rekomendacijas nes atsiranda nauji įrankiai ir [JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM") programavimo kalbos pvz: Kotlin programavimo kalba galima sakyti jau iš dalies pakeitė [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programavimo kalbą kuriant Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") aplikacijas. <iframe width="100%" height="400" src="https://www.youtube.com/embed/f1sPwDpU7mQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") jau ilgą laiką naudojama ir turi platų spektrą įvairiausių versijų sąrašą (žr. 9.1 pav.) kiekvienam iš šių versijų yra aprašytas [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API") ir pateikta detali dokumentacija, kurią rasite šiuo adresu: [https://developer.android.com/reference/packages](https://developer.android.com/reference/packages).

![android.png](https://github.com/eif-courses/moodle-java/blob/master/android.png?raw=true)

9\.1 pav. Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") versijų sąrašas

Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") galimybės, kurias programuotojas gali valdyti pasinaudojus siūlomais šios operacinės sistemos [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API"):

* **Storage** - Uses SQLite, a lightweight relational database, for data storage.
* **Connectivity** - Supports GSM/EDGE, IDEN, CDMA, EV-DO, UMTS, Bluetooth, Wi-Fi, LTE, and WiMAX.
* **Messaging** - Supports both SMS and MMS.
* **Web** **browser** - Based on the open source WebKit, together with Chrome's V8 JavaScript engine.
* **Media** **support** - Includes support for the following media: H.263, H.264, MPEG-4 SP, AMR, AMR-WB, AAC, HE-AAC, MP3, MIDI, Ogg Vorbis, WAV, JPEG, PNG, GIF, and BMP.
* **Hardware support** - Accelerometer Sensor, Camera, Digital Compass, Proximity Sensor, and GPS.
* **Multi-touch** - Supports multi-touch screens.
* **Multi-tasking** - Supports multi-tasking applications.
* **Tethering** - Supports sharing of Internet connections as a wired/wireless hotspot.
* kitos funkcijos priklausomai nuo prietaise įdiegtų sensorių.

Pradedantiesiems ieškoti medžiagos internete rekomenduojama pasinaudoti šia susisteminta medžiaga: [http://guides.codepath.com/android](http://guides.codepath.com/android) kur yra pateikiamos įvairiausios pamokos, šaltinių nuorodos, vaizdo medžiaga internete ir kt. Be abejo nereikia atsisakyti ir pasinaudoti oficialia Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") dokumentacija: [https://developer.android.com](https://developer.android.com/reference/packages), kur surasite visas reikiamas instrukcijas kaip pradėti kurti mobiliąsias programėles.

Pagrindiniai Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") sistemos komponentai su kuriais reikėtų susipažinti:

* AndroidManifest.xml dokumentas, kuriame yra aprašoma visos programos meta duomenys, pateikiamia prieiga prie sensorių ar kitų funkcijų: interneto prieiga, bluetooth, atminties kortele, GPS ir t.t. Kaip atrodo Manifest dokumentas yra pateiktas 9.2 paveikslėlye.

![Figure 5](https://i2.wp.com/www.techjini.com/wp-content/uploads/2017/02/Figure-5-1024x609.png?resize=1024%2C609)

9\.2 pav. AndroidManifest.xml dokumento pavyzdys

* **Views** - Vaizdai tai grafinės sąsajos elementai iš kurių yra sukonstruojama vartotojo grafinė sąsaja. Vaizdas gali būti: mygtukas, žymė, tekstinis laukelis ar kt. Vaizdai taip pat gali būti konteineriai, kurie sudaro hierarchiją iš vaizdų grafinė sąsajoje.

![Image result for android view](https://www.studytonight.com/android/images/android-view-types.jpg)

9\.3 pav Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") vaizdas (angl. View)

* **Activity -** Langas, kuriame yra atvaizduojama grafinė vartotojo sąsaja įprastai su vienu ar keliais vaizdais. Dažnai yra numatyta konkreti veikla pvz. Prisijungimo langas, Registracija, Meniu ar kt. (žr. 9.4 pav.).![](https://lh4.googleusercontent.com/YQ4y80j1dRuLdoglP7nwhzXqqOaLsmEew2jT1_iXVXxZ6ho4_vLZeOzfsS932A7maCy6hdjxue7M3shtqDcnldxyEXRwYTBoX4WE1aLJIi6cElZL4ygLav7Pr_DFYRHpxpxx3GdZq8I)

9\.4 pav. Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") Activity pavyzdžiai

* **Fragment -** Fragmentas tai kaip sub-activities, kuriuos galima perpanaudoti įvairių ekranų dydžių languose. Pavyzdžiui turime sąrašą daiktų su detalia informacija jeigu mobilaus telefono ekranas yra mažas mes galime įterpti fragmentą su daiktų sąrašu Activity A ir peržiūra detalesnio vaizdo įterpiame fragmentą į Activity B (žr. 9.5 pav.).

![android_activity_fragment](https://lh5.ggpht.com/-ZKO_-8cTh74/USZCkP_umWI/AAAAAAAAAb4/HMdTpWt2J2g/android_activity_fragment_thumb1.png?imgmax=800)

9\.5 pav. Fragmentų "Item List" ir "Item Details" pavyzdys

Jeigu turime aprašytą atskirą vaizdą skirtą dideliems ekranams pavyzdžiui planšetėms, tada tuos pačius fragmentus galime atvaziduoti viename Activity A (žr. 9.6 pav.).

![android_activity_fragment_tablet](https://lh6.ggpht.com/-ZKL8za5xQG4/USZCmhJBqjI/AAAAAAAAAcI/27DRd2impmY/android_activity_fragment_tablet_thu.png?imgmax=800) 9.6 pav. Fragmentai "Item List" ir "Item Details" atvaizduoti didesniame ekrane

* **Intents -** Perėjimai tarp vaizdų yra skirstomi į dvi kategorijas: Expicit Intent - yra valdomas programuotojo, kuris yra aprašomas ir valdomas programos lygmenyje galima perduoti duomenis į kitą activity ir pan. Implicit Intent - tai dažniausiai Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") komponentai servisai, kurie yra valdomi pačios [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS"), tokie kaip skambutis draugui, žemėlapio pozicija, atidaryti internetinę svetainę ir kt. (žr. 9.7 pav.).

![intentas.jpg](https://github.com/eif-courses/moodle-java/blob/master/intentas.jpg?raw=true)

9\.7 pav. Intent tipų palyginimas

* **Content** **providers** - turinio ar duomenų tiekėjai. Standartizuotas būdas aprašantis duomenis naudojant specifinę klasę taip įvedant lankstumo dalintis duomenimis naudojant sukurtus Content providers su kitomis aplikacijomis.

![provider.jpg](https://github.com/eif-courses/moodle-java/blob/master/provider.jpg?raw=true)

9\.8 pav. Content provider - turinio tiekėjas mechanizmas skirtas pasiekti duomenis iš įvairių šaltinių

* **Services -** Įvairiausios išorinės ar vidinės paslaugos. Kadangi didžioji dalis servisų kaip foniniai ar kito tipo skirti apsaugoti nuo pagrindinės gijos (angl. Main Thread) apkrovimo dėl sklandaus darbo. Galima sukurti ir savo asmeninius servisus, kur atlikti bet kokias užduotis: atsiųsti duomenis, telefono pranešimą ir kt. Pavyzdys kaip sukurti asmeninį foreground tipo servisą: [https://androidwave.com/foreground-service-android-example/](https://androidwave.com/foreground-service-android-example/).
* **SQLite** (Duomenų bazė)
* **Firebase** - Mobiliųjų aplikacijų serverinė dalis kaip servisas (MBaaS), apie šią platformą plačiau galite pasiskaityti šiuo adresu: [https://firebase.google.com/](https://firebase.google.com/).

Android projekto failų struktūra, kurios pakanka sukurti pirmąją Android mobilią programėlę (žr. 9.9 pav.).

![android-components-manifest-35-638.jpg](https://lh5.googleusercontent.com/oqSKIseBcpL-dLlWBCVK6GxSXYiCcYiiUGRYjt9Ggi0Xd8GrY5jsCR_kvBLX_Ra63NwFm7_dw_42H6dbMSUbUh0xF0GB6t49r9aowCnpE8t-trzqXhzK3RtkCZjvszKK6mKN1wIQsdM)

9\.9 pav. Android [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") projekto katalogų struktūra
