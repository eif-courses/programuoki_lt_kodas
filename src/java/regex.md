---
# This is the icon of the page

# This is the title of the article
title: Reguliariosios išraiškos
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
Reguliariosios išraiškos skirstomos į pagrindines 3 kategorijas skirtas:

Paieška konkrečios teksto eilutės (angl. Search Strings).

Atpažinti tam tikrą teksto fragmentą pagal šabloną (angl. Parse Strings).

Pakeisti teksto framgentą kitu (angl. Replace Strings).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/sUzdiwv_d6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Reguliarioji išraiška tai simbolis arba simbolių seka, kuri reprezentuoja žodį arba sakinį iš keletos žodžių. Reguliariosios išraiškos ir darbui su jomis klasės yra  randamos standtartiniame java JDK package pavadinimu: java.util.regex. Sintaksė kitokia nei yra įprastai naudojamos funkcijos darbui su teksto eilutėmis, bet paspartina visą procesą atliekant paieškai tekstui, modifikavimui ir validacijai. Pavyzdžiui norite užtikrinti jog įvestas el. pašto adresas turi simbolį @ ir pan.

String.matches(String regex) - šis metodas yra numatytas standartiniame Java tipo String klasėje. Jis grąžina true jeigu perduota reguliarioji išraiška atitinka tekste esantį simbolių sekos fragmentą. Šis metodas yra panašus į standartinį metodą equals(String str). Vienintelis skirtumas, kad reguliariosios išraiškos gali skirtis pvz. žodis pasibaigiantis galūne -as gali būti kintantis ir skirtis: labas, krabas, namas ir t.t., o equals tik atitikti konkretų simbolį ar simbolių seką pvz: equals(“labas”), tai bus tik šis konkretus žodis labas.

Palyginimas metodas **equals**(String s) prieš **matches**(Regex r) metodą.

**Užduotis**. Pavyzdžiui norime iš esamo sąrašo/masyvo String \[\] profesijos={“destytojas”, “dekanas“, “prodekanas“, “valytojas“}; atrinkti šios profesijos atstovus: destytojas, dekanas, o kiti mūsų nedomina.

*Realizacija naudojant equals(String s):*

~~~java
 static boolean arSiosProfesijos(String profesija){
   if(profesija.equals("dekanas"))
     return true;
   else 
     return profesija.equals("destytojas");
  }
~~~

*Realizacija naudojant matches(Regex r) sutrumpina kodą atliekant tą pačią užduotį:*

~~~java
  static boolean arSiosProfesijos2(String profesija) {
    return profesija.matches("dekanas|destytojas");
  }
~~~

##### **Laužtiniai skliausteliai \[ \]**

Šie skliausteliai reguliariosiose išraiškose suteikia galimybę simbolių įvairovei nurodytiems tarp laužtinių skliaustelių. Pavyzdžiui turime užduotį aptikti žodį “Studentas” ir “studentas” naudojantis equalsIgnoreCase metodas bus netinkamas ir reikės aprašyti keletą skirtingų if sąlygų. Naudojant reguliariasias išraiškas šią užduotį galima atlikti nesunkiai užtenka vienos kodo eilutės.

~~~java
static boolean arStudentas(String stud){  
  return stud.matches("[Ss]tudentas|[Dd]ekanas");
}
~~~

Laužtiniai skliaustai nėra apriboti dviem simboliais galima nurodyti ir intervalą tinkamų simbolių. Pavyzdžiui turime užduotį atrinkti žodžius kurie prasideda bet kokia mažaja raide nuo a iki z ir baigiasi “as”. Šią užduotį nesunkiai galime išspręsti naudojant reguliariasias išraiškas su raidžių intervalu.

~~~java
static boolean arZodis(String zodis){  
  return zodis.matches("[a-z]as");
}
~~~

Jeigu norime, kad būtų įtrauktos ir didžiosios raidės šią išraišką galetume aprašyti taip.

~~~java
static boolean arZodis(String zodis){  
  return zodis.matches("[a-zA-Z](as|AS)");
}
~~~

Pastaba jog negalima naudoti tokių išraiškų A-z, a-Z nes jūsų išraiška gali nesuveikti teisingai. Vietoj to naudokite a-z arba A-Z.

Sekantis pavyzdys, kuriame galime nurodyti ir simbolius iš intervalo pvz. 0-9 ir jeigu reikia galima padėti tarpo simbolį prieš skaičius ar po jų.

~~~java
static boolean arAtitinka(String zodis){  
  return zodis.matches("[ 0-9a-zA-Z]bcde");
}  
~~~

Šią išraišką galima peskaityti taip: Tarpo simbolis, tada bet koks simbolis iš intervalo nuo 0-9, tada mažoji ar didžioji raidė iš intervalo nuo a iki z ir galiausiai žodio pabaiga simboliais bcde. Pavyzdžiui žodis yra teisingas: “ 5Abcde“, o “5Abcde“ neteisingas nes nėra tarpo simbolio prieš skaičių.

**Reguliarioji išraiška Taškas (.)**

Pagrindinė paskirtis nurodyti, kad yra tinkamas bet koks simbolis. Žemiau pateiktas fragmentas būtų teisingas jeigu perduotume 8a5, 111, 0P2 ir t.t.

~~~java
static boolean metdodas(String zodis){  
  return zodis.matches("[0-9].[0-9]");
}
~~~

**Kartojimo operatoriai (angl. repetition operators)**
