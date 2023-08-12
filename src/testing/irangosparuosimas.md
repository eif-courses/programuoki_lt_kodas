---

# This is the title of the article
title: Įrankių paruošimas darbui
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

# Automatinio testavimo programinės įrangos diegimo žingsniai

### IntelliJ IDEA diegimas ir reikiamų bibliotekų prijungimas darbui su Selenium ir Cucumber

<iframe width="100%" height="400" src="https://www.youtube.com/embed/oqjtBHaG0d0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Atsisiųsti programinę įrangą skirtą Java programavimo kalbai:
[IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
Įrašykite savo kompiuteryje atsiųstą IntelliJ IDEA programinę įrangą [Windows OS diegimo instrukcija](https://youtu.be/kzGFXxhTRiY).
Kitose operacinėse sistemose procesas yra labai panašus.

Paleidūs projektą sukurti Maven Java tipo projektą ir pasirinkti Project SDK Java versiją nuo 1.8 iki 11 versijos. 
Nukopijuoti kodo fragmentą, kuris yra pateiktas žemiau ir 
Maven ```POM.xml``` failą įdėkite šį tekstą tarp žymių (angl. tags) ``` <project> </project>```. 

```xml  
 <dependencies>
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.0.0-rc-1</version>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-java</artifactId>
            <version>6.11.0</version>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>6.11.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-simple</artifactId>
            <version>2.0.0-alpha5</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>io.github.prashant-ramcharan</groupId>
            <artifactId>courgette-jvm</artifactId>
            <version>5.12.0</version>
        </dependency>
        <dependency>
            <groupId>org.hamcrest</groupId>
            <artifactId>hamcrest</artifactId>
            <version>2.2</version>
            <scope>test</scope>
        </dependency>

    </dependencies>
```

## Prijungtų bibliotekų oficialūs adresai ir paaiškinimai

Jeigu nuspręstumėte panaudoti kitą projektų kūrimo ir valdymo sistemą pvz. Gradle, Ivy, Buildr ar kt. 
Apačioje rasite visas reikiamas nuorodas svetainės tab'ę.

### 2. Selenium diegimas
Pagrindinės bibliotekos darbui su Selenium įrankių Java aplinkoje.

<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.0.0-rc-1</version>
</dependency>
```
</CodeGroupItem>


<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java
```
</CodeGroupItem>


</CodeGroup>

### 3. Cucumber diegimas
Karkasas skirtas darbui su progravimo kalba JAVA ir papildomom bibliotekom Selenium ir JUnit. 
Įgalina naudoti Gherkin tipo failus su plėtiniu pvz. Hello.feature, kur yra aprašomi testavimo scenarijai (Test Cases).

<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <version>6.11.0</version>
</dependency>
```
</CodeGroupItem>

<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/io.cucumber/cucumber-java
```
</CodeGroupItem>


</CodeGroup>


Kartais yra reikalinga pagrindinė karkaso biblioteka pvz. jeigu nuspręstumėte, kurti savo karkasą.
Dažnai ši priklausomybė yra automatiškai įdėta į pvz. **cucumber-java**, bet jeigu nutiktu taip,
kad gaunate klaidos pranešimą jog kai kurios klasės neveikia tada tiesiog pridėkite šį dependency.

<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-core</artifactId>
    <version>6.11.0</version>
</dependency>
```
</CodeGroupItem>




<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/io.cucumber/cucumber-core
```
</CodeGroupItem>


</CodeGroup>



<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-junit</artifactId>
    <version>6.11.0</version>
    <scope>test</scope>
</dependency>
```
</CodeGroupItem>




<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/io.cucumber/cucumber-junit
```
</CodeGroupItem>


</CodeGroup>


Hamcrest biblioteka mažiau skirtingų assert sakinių suspaprastinta sintaksė. 
Palengvinimas ir patobulinimas JUnit bibliotekos skirtos vienetų testams rašyti.
Palyginimui Hamcrest VS JUnit: 
```java

@Test
public void shouldGetTaxRate() throws Exception {
	BigDecimal actual = TaxCalculator.DEFAULT_TAX_RATE;
	//JUnit assert
	assertTrue(actual.compareTo(BigDecimal.valueOf(20)) < 0);
	assertEquals(BigDecimal.valueOf(18), actual);

	//Hamcrest matcher
	assertThat(actual, closeTo(BigDecimal.valueOf(18), BigDecimal.valueOf(0)));
	assertThat(actual, comparesEqualTo(BigDecimal.valueOf(18.000)));
	assertThat(actual, is(lessThan(BigDecimal.valueOf(20))));
}

```

<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>org.hamcrest</groupId>
    <artifactId>hamcrest</artifactId>
    <version>2.2</version>
    <scope>test</scope>
</dependency>
```
</CodeGroupItem>



<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/org.hamcrest/hamcrest
```
</CodeGroupItem>


</CodeGroup>



(Multi-threaded | Parallel Cucumber-JVM | Parallelize your Java Cucumber tests on a feature level or on a scenario level.)
Jeigu norime lygiagreciai paleisti testus, galime naudoti šią biblioteką

<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>io.github.prashant-ramcharan</groupId>
    <artifactId>courgette-jvm</artifactId>
    <version>5.12.0</version>
</dependency>
```
</CodeGroupItem>


<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/io.github.prashant-ramcharan/courgette-jvm
```
</CodeGroupItem>


</CodeGroup>

::: warning
Kartais dėl slf4j-simple bibliotekos neturėjimo galite gauti klaidos pranešimą.
Kas neleis jums dirbti su automatinio testavimo įranga.
:::

<CodeGroup>
<CodeGroupItem title="maven">
```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>2.0.0-alpha5</version>
    <scope>test</scope>
</dependency>
```
</CodeGroupItem>




<CodeGroupItem title="svetainės adresas">
```xml
https://mvnrepository.com/artifact/org.slf4j/slf4j-simple
```
</CodeGroupItem>

</CodeGroup>


### 4. WebDriveriai internetinėms svetainėms testuoti
Atsisiunčiam draiverius priklausomai kokią naršyklę naudosime automatiniams testams:
- Firefox:
[https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)
- Chrome (pagal versiją):
- Safari
- Opera
- Headless

### Plačiau apie cucumber karkasą oficiali svetainė
https://cucumber.io/docs/guides/browser-automation/


#### Automatinio testavimo pavyzdiniai projektai su įdėtomis bibliotekomis:

[https://github.com/prashant-ramcharan/courgette-jvm](https://github.com/prashant-ramcharan/courgette-jvm)

Daugiau bus pridėta ateityje....


