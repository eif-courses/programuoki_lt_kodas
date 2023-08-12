---

# This is the title of the article
title: Web elementų išrinkimas
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

### Selenium lokatoriai (programiškai)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/-yD0ixVxmuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: info Kas yra WebDriver ir WebElement? 
- WebDriver - tai testinės aplinkos naršyklė su galimybę ją valdyti naudojant jai pritaikytus draiverius, kuriuos kuria ir viešai dalinasi naršyklių savininkai.
- WebElement - yra įprastas HTML DOM (Document Object Model) elementas pvz: Nuoroda, pavadinimas, įvesties laukas, blokas, mygtukas, paveikslėlis ir t.t.
- Pavyzdžiui naudojant metodus aprašytus Selenium įrankio galima išrinkti su Java kalba aprašytu sakiniu WebElement cheese = findElement(By.id("cheese)); gražina elementą pagal nurodytą id atributą.
:::

|Pagal našumą                 |           Lokatorius           |       Aprašymas      |
| :------------------------:  | :------------------------: | :-----------------------:| 
|<Badge text="vidutinis" type="warn"/>| class name                 | Ieškoti pagal tekstą aprašytą prie **class** atributo.<br/>WebElement cheese = driver.findElement(By.className("cheese")); |
|<Badge text="vidutinis" type="warn"/>| css selector               | Ieškoti pagal nurodytą CSS selektorių. Pasidomėti kas yra tas [CSS selektorius](https://www.w3schools.com/cssref/css_selectors.asp). <br/> WebElement pass= driver.findElement(By.cssSelector("input #pass")); | 
|<Badge text="geriausias" type="tip"/>| id                         | Ieškoti elementų pagal nurodytą id atributą, kadangi id yra unikalus tai patogiausias selektorius. <br/> WebElement username = driver.findElement(By.id("userName"));| 
|<Badge text="prastas" type="error"/>   | name                     | Ieškoti elementų pagal tekstą aprašytą prie **name** atributo. <br/>WebElement username = driver.findElement(By.name("email"));| 
|<Badge text="prastas" type="error"/>   | link text                  | Ieško įvestos frazės "tik matomų nuorodų" pagal jose esantį tekstą. <br/>WebElement vardas = driver.findElement(By.linkText("Marius"));| 
|<Badge text="prastas" type="error"/>   | partial link text          | Ieško pagal nurodytą tekstą "tik matomų nuorodų" ir radūs pateikia pirmą atitikusį elementą. <br/> WebElement here = driver.findElement(By.partialLinkText("here"));| 
|<Badge text="prastas" type="error"/>   | tag name                   | Ieškoti elementų pagal nurodytą žymės (angl. tag) vardą. pvz. div, p, h1, td, tr, footer ir t.t. <br/> WebElement username = driver.findElement(By.tagName("tr"));| 
|<Badge text="vidutinis" type="warn"/>| xpath                      | Ieškoti elementų pagal xpath išraišką plačiau [rasite čia](https://www.w3schools.com/xml/xpath_syntax.asp). <br/> WebElement bookName = driver.findElement(By.xpath("/bookstore/book[price>35.00]/title"));| 


### Tips on using selectors
In general, if HTML IDs are available, unique, and consistently predictable, they are the preferred method for locating an element on a page. They tend to work very quickly, and forego much processing that comes with complicated DOM traversals.

If unique IDs are unavailable, a well-written CSS selector is the preferred method of locating an element. XPath works as well as CSS selectors, but the syntax is complicated and frequently difficult to debug. Though XPath selectors are very flexible, they are typically not performance tested by browser vendors and tend to be quite slow.

::: info Nuoroda darbui su Selenium 4 "Relative locators"
Plačiau apie Selenium Relative locators rasite čia anglų kalba: [https://www.selenium.dev/documentation/webdriver/locating_elements/](https://www.selenium.dev/documentation/webdriver/locating_elements/)
:::
