---
# This is the title of the article
title: Įvadas
# Set author
author: M.Gzegozevskis
# Set writing time
time: 2021-10-01
# A page can only have one category
category: Testing
# A page can have multiple tags
tag:
- Selenium
- Testavimas
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: MIT Licensed | Copyright © 2021-present M. Gzegozevskis
---

## Kas yra automatinis testavimas?

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ApgNg3-l-qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kaip ir pavadinimas sako automatizuoti testavimo procesą. 
Naudojantis įvairiais karkasais, bibliotekomis ir įrankiais galima
įgyvendinti automatinius testus. Pavyzdžiui turime internetinę svetainę
jai bus pritaikomas testas ir automatiškai suves informaciją į tekstinius laukelius
paspaus mygtuką ar bet kokią kitą užduotį, kuria žmogus rankiniu būdų gali praleisti
arba kiekvieną kartą kai reikia testo sugaištą laiko pasikartojančiais testais.
Taip pat testuotojas gali daugiau laiko testų rezultatų peržiūrai ir taisymui. 
Taip pat mašina ar kompiuteris painias užduotis išspręs greičiau taip sutaupydamas laiko
ir bus pateikti tikslesni rezultatai.

## Kodėl automatinis testavimas yra kritinis programinės įrangos kūrimo metu?

Įsivaizduokite jog pirmą darbo dieną kaip Quality Assurance (QA) specialistas jūs turite užtikrintį programos kokybę.
<hr>

Duota užduotis patrikrinti programą, kurioje reikia patikrinti 100 privalomų įvesties laukelių:

**Pirmoji diena**

- Atliekant testą rankiniu būdu, kad ir koks greitas specialistas būtumėte tai užims apie 10 minučių. 
- Paspaudūs Submit mygtuką gaunate klaidos pranešimą, kas reiškią jog aptikote programos **versija 1** neteisingą veikimą (BUG). 
Informuojate apie programos **versija 1** blogą veikimą ir apsidžiaugiate jog darbas buvo atliktas puikiai.
- Atliekate keletą papildomų testų ir surandate daugiau Bug Labai apsidžiaugiate ir tada pasijuntate jog pirmoji diena buvo produktyvi.

**Antroji diena**

- Sekančią dieną programinės įrangos, kūrėjai ištaiso problemas ir tada jūs privalote atnaujintai programinei įrangai **versija 2** atlikti tuos pačius veiksmus.
Valio testai sėkmingai įvykdyti, vartotojo patirtis užtikrinta.

**Trečioji diena**

Programinės įrangos kūrėjai išleidžia naują programos **versiją 3** su pridėtomis naujomis funkcijomis. 
Kad užtikrinti prieš tai buvusios programos **versijos 2** funkcijos vis dar veikia teisingai reikia patikrinti naudojant prieš tai
buvusį testą. Jokių problemų neaptinkate.

**Po mėnesio / kelių mėnesių**

Kurėjai išleidžia vis naujas versijas pvz. versija 4, 5, 6 ir t.t. Reiškia jog jūs privalote atlikti tą patį testą ir įterpti į įvesties laukelius reikšmes iš naujo. 
Taigi jus pasijausite išvargęs/-usi ir jūsų produktyvumas pradės svyruoti su galimybę jog praleisti tam tikras akivaizdžias problemas. 

Patikėkite tai dažnas scenarijus, kai QAs darbuotojai nėra pasirengę vėl ir vėl atlikti tą patį procesą "idealiai".
Šioje vieto ir atsiranda automatinis testavimas.

## Ar gali programinė įranga testuoti kitą programinę įrangą?

Taip. Štai kur ir yra esminis tikslas automatinio testavimo. Kai yra kalbama apie grįžtamąjį testų darymą, t.y. 
visiškai nenaudinga testus atlikti rankiniu būdu ko pasekoje turime beprasmišką resursų švaistymą. 
Vietoje to, kad tikėtis jog žmogus kartos tą patį procesą tokiu pat greičiu, tikslumu ir energija. 
Logiška būtu užprogramuoti/sukurti programą, kad mašina/kompiuteris atliktu šį pakartotiną procesą.

## Kurie testai privalo būti automatizuojami?

Prieš kurdami testavimo automatizavimo strategiją, pažiūrėkime, kurie testai yra labiausiai tinkami automatizavimui:

- **Regression Testing**: Regression suites are ever-increasing, and require the same variables to be filled numerous times to ensure that new features do not tamper with older functions. This can easily be automated.
- **Testing of complex functionalities**: Automate all tests requiring complex calculations, something prone to human error.
- **Smoke testing**: Run automated suites to verify the quality of major functionalities. This saves time by offering a quick analysis of whether a build requires more in-depth testing.
- **Data-driven testing**: Automate tests to validate functionalities that must be tested repeatedly with numerous data sets.
- **Performance testing**: Automate tests that monitor software performance under different circumstances. Doing this manually would be extremely painstaking and time-consuming.
- **Functional testing**: Every time a developer submits a PR, functional testing needs to be executed quickly and provide immediate feedback. This is impossible to achieve without automation, especially as organizations scale up.

## Pradedame su automatinių testų kūrimu.

Persiorientuojant iš rankinio testavimo niekados nesiekite 100% automatinio testavimo.
Net tarp testų, kuriuos galima automatizuoti, keiskite požiūrį, kad jūsų tikslas yra visiškai automatizuoti testus.
Užsibrėžkite realų tikslą. Pavyzdžiui, pradėkite nuo kelių testų automatizavimo. 
Aprašykite mažesnius testų atvejus (angl. test cases), kuriuos galima lengvai pakartotinai panaudoti būsimuose tos pačios programinės įrangos testams. 
Susiekite Test Cases su jiems atitinkamomis funkcijomis, kad būtų užtikrintas geresnis testų padengimas (angl. Coverage). 
Pažymėkite žymėmis Test Casus, kad kitos komandos galėtų aiškiai suprasti, ką automatizuoti, ir efektyviau sukurti ataskaitą (angl. Report).


