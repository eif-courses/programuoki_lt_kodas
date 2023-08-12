---
# This is the icon of the page

# This is the title of the article
title: Testavimas JUnit
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

Vienetų testai (angl. Unit tests) - tai programinės įrangos testai, kuriuos programuotojai parašė naudodamiesi programavimo kalba ir jie turėtų būti parašyti izoliuotiems komponentams ir taip pat suteikti galimybę juos pakartotinai įvykdyti. Unit testai yra automatizuoti programų testai, tikrinantys kodo vienetus atskirai vieną nuo kito. Kiekvienas kodo vienetas (t.y. funkcija, klasė, metodas) turi savo testą ar kelis testus.

**Testavimo nauda.** E. W. Dijkstra yra pasakęs, kad testai gali įrodyti programos klaidingumą, bet negali įrodyti jos teisingumo. Ar tai reiškia, kad testų rašyti neapsimoka? Ne. Testai padeda įsitikinti, kad keisdami programą jos netyčia nesugadinome. Testų rašymas dažnai sugauna žioplas klaidas, kurias padaro pavargęs programuotojas. Iš kitos pusės reikia jausti saiką -- jei funkcija tokia triviali, kad joje tikrai klaidų būti negali, nėra prasmės rašyti jai testo -- geriau tą sutaupytą laiką sunaudoti rašant testą sudėtingai funkcijai.

Programavimo kalboje [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") yra numatytas karkasas rašyti vienetų testus naudojan JUnit biblioteką. Šis karkasas yra sukurtas šių autorių: Erich Gamma ir Kent Beck. Šis Unit testų karkasas yra viešai prieinamas visiems. Todėl kitos programavimo kalbos turi savo asmeniškas Unit test bibliotekas naudojančios šių autorių sukurtą programinį kodo branduolį savo realizacijai. Papildomai galima peržiūrėti paveikslėlį, kuriame matome įvairių kalbų Unit testų bibliotekas.

![](https://lh6.googleusercontent.com/xTicpsRpwcIe08DIsnQboUy94UI5GEQygzdQgN3tQXsHoYrDMs_PlLNykFxL_Z7pMWFcjaQffBAGyRTgMY5uQH65ykzObuctH90mLoo_hPIkImqgZ_W5sW_1CKv1MMEkvIwoBsCCOig)

Plačiau apie JUNIT 5 ar senesnę versiją rasite oficialią dokumentaciją: [https://junit.org/junit5/](https://junit.org/junit5/).

Rašant Unit testus verta atsižvelgti į keletą rekomendacijų:

* Aprašant Unit testą pasirinkti naming convention metodams.
* Negalima naudoti loginių sakinių pvz: IF, SWITCH ar kt.
* VIENAS TESTAS VIENAS ASSERT METODAS. (Jeigu panašūs pavadinimai pridėti skaičių 1..n prie metodo pavadinimo, bet vistiek kurti atskirą metodą, kad lengviau būtų surasti, kur įvyko klaida).
* Daugelis IDE leidžia paleisti testą su CODE COVERAGE (rodo kiek procentaliai testų yra padengusių production kodą) jeigu yra 90-100% kas yra labai gerai, bet dažniausiai tai yra keistas reiškinys, kadangi aklai pasitikėti negalime, reikia papildomo etapo TEST REVIEW, kuriam galima naudoti specialius įrankius papildomam testavimui.
* Jeigu yra kuriamas objekto instance daugiau nei vieną kartą, kuris bus naudojamas keliuose skirtinguose assertuose tada galime įkelti į init(){...} metodą.
* Jeigu turite kokį nors pagalbinį objektą jį privalote pavadinti pvz:
* FakeStudentClass ar kokį nors kitą, kad būtų aiškų, kad ši klasė yra skirta testavimui.
* PASTABA! NAUDOJANT TDD -> TESTO LOGIKA NEGALI SUTAPTI SU PRODUCTION KODU.

Taip pat reikėtų atkreipti dėmesį rašant testus ir naudojant assert metodus naudoti tik aiškius skaičius t.y. jeigu reikia aprašyti atskirą kintamąjį kaip konstantą su kuo aiškesniu pavadinimu nusaknačių ką tas skaičius reiškia.

~~~java
Assert.assertEquals(1003, calc.Parse("-1")); // 1003 -> "magiškasis" skaičius pakeisti į konstanta būtų geriausias būdas.

int parseInt = calc.Parse(NEGATIVE_ILLEGAL_VALUE);

Assert.assertEquals(NEGATIVE_PARSE_RETURN_CODE, parseInt);
~~~

Atlikus pakeitimą iš skaičiaus 1003 jį aprašius kaip konstantą NEGATIVE_PARSE_RETURN_CODE šis tekstas nusako ką reiškia šis skaičius ir įvykus klaidai arba atliekant testus ir testui nepraėjus (angl. failed) daug paprasčiau bus surandama klaida ir ištaisoma nesvarstant kas čia per magiškas skaičius.

4\.2. Testavimo karkasai programinei įrangai kurti

Viena iš įdomesnių metodikų tai naudojant testų biblioteką rašyti programas. Šis būdas yra vadinamas "Test-Driven Development", kai pradžioje yra rašomi testai, o tik tada programinis kodas, priklausomai kokio rezultato tikimės.

**What is Test Driven Development (TDD)?**

TDD cycle defines:

1. Write a test
2. Make it run.
3. Change code to make it right i.e. Refactor.
4. Repeat process.

Some clarifications about TDD:

* TDD is neither about "Testing" nor about "Design".
* TDD does not mean "write some of the tests, then build a system that passes the tests.
* TDD does not mean "do lots of Testing."

Test-Driven development is a process of developing and running automated test before actual development of the application. Hence, TDD sometimes also called as Test First Development.

Separate the implementation from the test code Benefits: avoids accidentally packaging tests together with production binaries; many build tools expect tests to be in a certain source directory. Common practice is to have at least two source directories. Implementation code should be located in src/main/[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") and test code in src/test/[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java"). In bigger projects number of source directories can increase but the separation between implementation and tests should remain.

Place test classes in the same package as implementation Benefits: helps finding tests.  
Knowing that tests are in the same package as the code they test helps finding them faster. For example, examples in this article are in the package com.wordpress.technologyconversations.tddbestpractices. As stated in the previous practice, even though packages are the same, classes are in the separate source directories.

![](https://lh4.googleusercontent.com/gL1la2LbaEr5Ia5Y4HFXjawAnaqwxMpi-ZCE7wGMZldNHY_JVSTRoEZFs7-Dzvnkszsk4YnPLT2t5IlYufhYyv5LEfdT0tEy2mwKiv2hZJSv133y-MBuFiqCqL-qsbeFFUOf45xsHX4)

Name test classes in a similar fashion as classes they test

Benefits: helps finding tests.  
One commonly used practice is to name tests the same as implementation classes with suffix Test. If, for example, implementation class is StringCalculator, test class should be StringCalculatorTest.

To help locate methods that are tested, test classes can be split. For example, if StringCalculator has methods add and remove, there can be test classes StringCalculatorAddTest and StringCalculatorRemoveTest.

![](https://lh4.googleusercontent.com/9XwTL0gXoZDT2WxogMQNHaMpjueA2wbXUR9bQgNpMK99lRAiyiGsTzaErgATVphY1qD2ZBkyC8U7IJyiXxhlIuFHz3RXCtD8_uom5lRg0HjAgn8a-TuzMKI6q-kZ1tOLKUJIW7_6NPM)

Use descriptive names for test methods

There are many different ways to name test methods. Our prefered method is to name them using the Given/When/Then syntax used in BDD scenarios. Given describes (pre)conditions, When describes actions and Then describes the expected outcome. If some test does not have preconditions (usually set using @Before and @BeforeClass annotations), Given can be skipped.

An example of BDD format for naming test methods would be:

~~~java
@Test

public final void whenSemicolonDelimiterIsSpecifiedThenItIsUsedToSeparateNumbers() {

  Assert.assertEquals(3+6+15, StringCalculator.add("//;n3;6;15"));

}
~~~

Do NOT rely only on comments to provide information about test objective

Comments do not appear when tests are executed from your favorite IDE nor do they appear in reports generated by CI or build tools. In the example screenshot, both failed tests have the same code inside. The only difference is in the name of the method. Test1 does not give much info regarding the failure. Method name sudeti_jeiguSkaiciusYraTeigiamas_grazintiDviejuSkaiciuSuma is much more descriptive and provides information even without going deeper into the log or the test code.

![](https://lh3.googleusercontent.com/kqaRzl-MmRSmTSOmURCWMm1ckl2drbvIYeDbc5xje7na66ZOp8Cs62F8GaBL0KK7ez4tf5gWw0jiQhEZBz9eWDl2gKCRv8-NjsHo3WNq7QC55tjnRDFlQJDPstIPgIypC7U6muRbvI0)

Kadangi automatiniai testai gali būti taikomi ir ne tik programinei įrangai kurti bet ir pavyzdžiui patikrinti ar korektiškai veikia sukurta Web svetainė. Vienas iš populiariausių bibliotekų yra Selenium. Kadangi TDD arba BDD pavadinimų reikalavimai yra tokie, kad aprašomo testo pavadinimas yra labai ilgas. Kad išvengti ilgų rašliavų papildomai yra sukurtas scenarijų rašymui skirtas karkasas padedantis surašyti žingsnius, kuris atitinka 1 metodą su konkrečiu aprašu ir yra automatiškai sugeneruojamas belieka aprašyti logiką. Toliau bus pateiktas pavyzdys, kuriame yra naudojama 3 bibliotekos/karkasai.

Selenium - pajungti testinę interneto naršyklę, kurioje naudosime šį automatinį testą imituodami įvairius mygtuko paspaudimus ir teksto įvedimus programiškai. Cucumber yra kombinuojamas su Gherkin ir skirtas rašyti BDD scenarijams. Gherkin karkasas leidžia aprašyti scenarijų žmogus, kuris neturi programavimo žinių taip pat gali suformuoti šį dokumentą ir pagal tai programuotojas įgyvendins tik tai kas yra parašyta.

Failo pavadinimas naudojant Gherkin: **cucumber.feature**;

~~~java
Feature: search Wikipedia

Scenario: direct search article

Given Enter search term 'Cucumber'

When Do search

Then Single result is shown for 'Cucumber'
~~~

Be Gherkin karkaso privalėtumėme laikytis testo metodų pavadinimo sudarymo:

MethodName_StateUnderTest_ExpectedBehavior: There are arguments against this strategy that if method names change as part of code refactoring than test name like this should also change or it becomes difficult to comprehend at a later stage. Following are some of the example:

* isAdult_AgeLessThan18_False
* withdrawMoney_InvalidAccount_ExceptionThrown
* admitStudent_MissingMandatoryFields_FailToAdmit

MethodName_ExpectedBehavior_StateUnderTest: Slightly tweeked from above, but a section of developers also recommend using this naming technique. This technique also has disadvantage that if method names get changed, it becomes difficult to comprehend at a later stage. Following is how tests in first example would read like if named using this technique:

* isAdult_False_AgeLessThan18
* withdrawMoney_ThrowsException_IfAccountIsInvalid
* admitStudent_FailToAdmit_IfMandatoryFieldsAreMissing

test\[Feature being tested\]: This one makes it easy to read the test as the feature to be tested is written as part of test name. Although, there are arguments that the “test” prefix is redundant. However, some sections of developer love to use this technique. Following is how the above tests would read like if named using this technique:

* testIsNotAnAdultIfAgeLessThan18
* testFailToWithdrawMoneyIfAccountIsInvalid
* testStudentIsNotAdmittedIfMandatoryFieldsAreMissing

Feature to be tested: Many suggests that it is better to simply write the feature to be tested because one is anyway using annotations to identify method as test methods. It is also recommended for the reason that it makes unit tests as alternate form of documentation and avoid code smells. Following is how tests in first example would read like if named using this technique:

* IsNotAnAdultIfAgeLessThan18
* FailToWithdrawMoneyIfAccountIsInvalid
* StudentIsNotAdmittedIfMandatoryFieldsAreMissing

Should_ExpectedBehavior_When_StateUnderTest: This technique is also used by many as it makes it easy to read the tests. Following is how tests in first example would read like if named using this technique:

* Should_ThrowException_When_AgeLessThan18
* Should_FailToWithdrawMoney_ForInvalidAccount
* Should_FailToAdmit_IfMandatoryFieldsAreMissin

When_StateUnderTest_Expect_ExpectedBehavior: Following is how tests in first example would read like if named using this technique:

* When_AgeLessThan18_Expect_isAdultAsFalse
* When_InvalidAccount_Expect_WithdrawMoneyToFail
* When_MandatoryFieldsAreMissing_Expect_StudentAdmissionToFail

Given_Preconditions_When_StateUnderTest_Then_ExpectedBehavior: This approach is based on naming convention developed as part of Behavior-Driven Development (BDD). The idea is to break down the tests into three part such that one could come up with preconditions, state under test and expected behavior to be written in above format. Following is how tests in first example would read like if named using this technique:

* Given_UserIsAuthenticated_When_InvalidAccountNumberIsUsedToWithdrawMoney_Then_TransactionsWillFail

Prieš rašant programinį kodą rašant automatinius testus reikėtų papildomai atsisiųsti draiverį, priklausomai su kuria naršykle dirbsite. Testo klasėje nurodyti draiverį, kurį naudosite:

Driveriai turi atitikti naršyklės versiją, pvz: ChromeDriver V61 - reikia 2.29v.

~~~java
@Before

public void before() {

System.setProperty("webdriver.chrome.driver","chromedriver.exe");

  driver = new ChromeDriver();

  driver.navigate().to("http://en.wikipedia.org");

}
~~~

Pavyzdys Nr 1: [https://www.tutorialspoint.com/cucumber/cucumber_annotations.htm](https://www.tutorialspoint.com/cucumber/cucumber_annotations.htm);

Pavyzdys Nr 2: [http://automationrhapsody.com/introduction-to-cucumber-and-bdd-with-examples/](http://automationrhapsody.com/introduction-to-cucumber-and-bdd-with-examples/);

Web driver FireFox:[https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)

Web driver ChromeDriver: [https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)
