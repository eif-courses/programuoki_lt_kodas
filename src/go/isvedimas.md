---
# This is the icon of the page

# This is the title of the article
title: Įvestis ir išvestis
# Set author
author: M.Gzegozevskis
# Set writing time
date: 2023-09-26
# A page can only have one category
category: Go programavimo kalba
# A page can have multiple tags
tag:
  - Go
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: MIT Licensed | Copyright © 2021-present M. Gzegozevskis
---

## Darbui su teksto išvedimu į ekraną naudojamas fmt paketas

Trys pagrindinės funkcijos su teksto išvedimui į ekraną:
- fmt.Print(), spausdiname vienoje eilutėje
- fmt.Println(), spausdiname vienoje eilutėje ir pereiname į kitą
- fmt.Printf(), spausdiname ir galime naudoti formatavimo žymes išvedant tekstą

```go
  Pavyzdys 1. ekrane išvedamas tekstas vienoje eilutėje
  
  fmt.Print("Hello, ")
  fmt.Print("World!")
  // Ekrane išves vienoje eilutėje: Hello World!
  
  Pavyzdys 2. Kintamųjų spausdinimas
  
  name := "John" 
  fmt.Print(name) // išves į ekraną John
  
  Pavyzdys 3. ekrane spausiname kelias reikšmes iš karto
  
  name := "John" 
  fmt.Print("Name: ", name) // išves į ekraną    Name: John
  
  Pavyzdys 4. ekrane spausdiname kelias reikšmes iš karto iš naujos eilutės
  
  currentSalary := 50000
  fmt.Println("Hello")
  fmt.Println("World!")
  fmt.Println("Current Salary:", currentSalary)
  // Ekrane bus išvestas tekstas
  Hello
  World!
  Current Salary: 50000 
  
  Pavyzdys 5. ekrane spausdiname tekstą naudojant formatavimo žymes
  
  currentAge := 21 
  fmt.Printf("Age = %d", currentAge)  
  // Ekrane bus išvestas tekstas Age = 21
  // %d reiškia sveikąjį skaičių į kurio vietą bus įrašytas parametras currentAge   
```
Daugiau žymių arba parametrų tipų: 
- integer %d
- float	%g
- string %s
- bool	%t

Pavyzdys float reikšmės išvedimui naudojame %g:
```go
package main
import "fmt"

func main() {
  var number annualSalary = 65000.5
  fmt.Printf("Annual Salary: %g", annualSalary)
}
```
Ekranas bus išvestas rezultatas:
```cmd
Annual Salary:  65000.5
```
Pavyzdys naudojant kelis parametrus %s ir %d:
```go
package main
import "fmt"

func main() {
  var name = "John"
  age := 23
  fmt.Printf("%s is %d years old.", name, age)
}
```
Ekrane bus išvestas rezultatas:
```cmd
John is 23 years old.
```
