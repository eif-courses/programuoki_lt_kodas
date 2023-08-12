---

# This is the title of the article
title: Dropdown elementų išrinkimas
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

### Dropdown elementų išrinkimas :fire:

Select klasė yra iš Selenium WebDriver įrankio pagal nutylėjimą. 
Taigi naudojantis šia klase labai patogu dirbti su dropdown elementų išrinkimu.
Pradžioje kaip ir įprastą panaudojame selektorių/lokatorių iš selenium ir 
perduodame parametrą nuskaitytą Webelementą Select klasės konstruktoriui.
```java
WebElement customDropDown = driver.findElement(By.id("countriesDropdown")); 
Select dropdown = new Select(customDropDown);
```
Toliau reikia pasirinkti tinkamą metodą pagal poreikį kaip išrinksime elementus iš Dropdown: 

1. selectByIndex – Pasirinkti pagal indeksą, kur pirmas elementas prasideda nuo 0.
```angular2html
dropdown.selectByIndex(5);
```
2. selectByValue - Pasirinkti pagal reikšmę, kur pagrindinis webelemento atributas yra 'value'.
```
dropdown.selectByValue("Testavimas su Selenium");
```
3. selectByVisibleText - Pasirinkti pagal matomą tekstą, kuris yra matomas.
```
dropdown.selectByVisibleText("Testavimas su Cucumber");
```


