---
# This is the icon of the page

# This is the title of the article
title: Sąlygos sakiniai
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

## Veiksmų šakojimas (angl. Branching)

Veiksmų šakojimas yra vienas iš pagrindinių programavimo konstrukicjų. Veiksmų šakojimas leidžia programai atlikti skirtingus veiksmus priklausomai nuo tam tikrų sąlygų. Veiksmų šakojimas yra realizuojamas naudojant sąlygos sakinį (angl. conditional statement).

Pagrindė **if** sakinio struktūra yra tokia:
```go
if condition {
  // Sakiniai, kurie bus vykdomi jeigu sąlyga bus tenkinama
}
```
Papildomai galima turėti ir **else** sakinius kai sąlyga nėra tenkinama:
```go 
if condition {
    // Sakiniai, kurie bus vykdomi jeigu sąlyga bus tenkinama
} else {
    // Sakiniai, kurie bus vykdomi jeigu sąlyga nebus tenkinama
}
```
Sudėtingesnės sąlygos sudarymui gali būti naudojami vaikiniai **if** sakiniai, kurie priklauso nuo išoriško **if** sakinio. Pavyzdžiui:
```go
if tevine_salyga {
   // Sakinys ir vaikine_salyga bus vykdomi jeigu tevine_salyga bus tenkinama
   if vaikine_salyga {
      // Sakinys bus vykdomas jeigu vaikine_salyga bus tenkinama
   }
}
```
Jeigu turime variantišką sąlygą, kurioje yra daugiau nei vienas variantas, galime naudoti **else if** sakinį. Pavyzdžiui:
```go
if salyga_1 {
    // šis blokas bus vykdomas kai salyga_1 bus tenkinama
} else if salyga_2 {
    // šis blokas bus vykdomas kai salyga_2 bus tenkinama
}
else if salyga_3 {
    // šis blokas bus vykdomas kai salyga_3 bus tenkinama
}
.
.
. else {
    // šis blokas bus vykdomas kai nei viena salyga nebus tenkinama
}
```

Dažnai programavimo kalbose yra naudojamas **switch** sakinys vietoje **else if** konstrukcijų, kuris leidžia programai atlikti skirtingus veiksmus priklausomai nuo kintamojo reikšmės. Pavyzdžiui:
Pirmasis switch sakinio struktūros pavyzdys naudojant išraiškas:
```go
switch optstatement; optexpression{
case expression1: Statement..
case expression2: Statement..
...
default: Statement..
}
```
**Pavyzdys 1.** naudojant įprastą switch sakinio struktūrą:
```go
package main
  
import "fmt"
  
func main() {
      
    // Switch statement with both 
    // optional statement, i.e, day:=4
    // and expression, i.e, day
    switch day:=4; day{
       case 1:
       fmt.Println("Monday")
       case 2:
       fmt.Println("Tuesday")
       case 3:
       fmt.Println("Wednesday")
       case 4:
       fmt.Println("Thursday")
       case 5:
       fmt.Println("Friday")
       case 6:
       fmt.Println("Saturday")
       case 7:
       fmt.Println("Sunday")
       default: 
       fmt.Println("Invalid")
   }
}
```
Ekrane bus išvestas rezultatas:
```cmd
Thursday
```
**Pavyzdys 2.** naudojant switch sakinį su išraiškomis:
```go
package main
  
import "fmt"
  
func main() {
    var value int = 2
      
    // Switch statement without an     
    // optional statement and 
    // expression
   switch {
       case value == 1:
       fmt.Println("Hello")
       case value == 2:
       fmt.Println("Bonjour")
       case value == 3:
       fmt.Println("Namstay")
       default: 
       fmt.Println("Invalid")
   }
  
}
```
Ekranas bus išvestas rezultatas:
```cmd
Bonjour
```
**Pavyzdys 3.** naudojant switch sakinį su išraiškomis:
```go
package main
  
import "fmt"
  
func main() {
    var value string = "five"
    // Switch statement without default statement
    // Multiple values in case statement
   switch value {
       case "one":
       fmt.Println("C#")
       case "two", "three":
       fmt.Println("Go")
       case "four", "five", "six":
       fmt.Println("Java")
   }  
}
```

Antrasis switch sakinio struktūros pavyzdys naudojant tipų atpažinimui:
```go
switch optstatement; typeswitchexpression{
case typelist 1: Statement..
case typelist 2: Statement..
...
default: Statement..
}
```
Pavyzdys 4. naudojant switch sakinį su tipų atpažinimu:
```go
package main
  
import "fmt"
  
func main() {
    var value interface{}
    switch q:= value.(type) {
       case bool:
       fmt.Println("value is of boolean type")
       case float64:
       fmt.Println("value is of float64 type")
       case int:
       fmt.Println("value is of int type")
       default:
       fmt.Printf("value is of type: %T", q)
   }
}
```
Ekrane bus išvestas rezultatas:
```cmd
value is of type: <nil>
```
