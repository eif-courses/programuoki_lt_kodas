---
# This is the icon of the page

# This is the title of the article
title: Įvestis ir išvestis
# Set author
author: M.Gzegozevskis
# Set writing time
date: 2023-10-02
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

## Darbui su įvedimu iš klaviatūros naudojamas fmt paketas

Trys pagrindinės funkcijos teksto įvedimui iš klaviatūros:
- fmt.Scan(), nuskaitomas žodis
- fmt.Scanln(), nuskaitoma eilutė
- fmt.Scanf(), nuskaitome su formatu

Pavyzdys naudojant scan funkciją:
```go
package main
import "fmt"

func main() {
  var name string

  // nuskaitoma reikšmė vardas
  fmt.Print("Enter your name: ")
  fmt.Scan(&name)

  fmt.Printf("Name: %s", name)
}
```
Ekrane bus išvestas tekstas:
```go
Enter your name: Rosie
Name: Rosie
```
Įvedūs visą sakinį su keliais žodžiais, ekrane su Scan() funkcija bus išvestas tik pirmas žodis:
```go
package main
import "fmt"

func main() {
  var language string
  // nuskaitoma reikšmė vardas
  fmt.Print("Enter your favorite language: ")
  fmt.Scan(&language)
  fmt.Printf("Favorite Language: %s", language)
}
```
Ekrane bus išvestas tekstas:
```cmd
Enter your favorite language: Go Programming
Favorite Language: Go
```
Jeigu reikia skaityti keletą žodžių galime naudoti tą pačią Scan() funkciją:
```go
package main
import "fmt"

func main() {

  var name string
  var age int
    
  // Nuskaitomas vardas ir amžius 
  // galima įvesti po vieną arba iš karto abu name ir age kintamuosius atskiriant tarpu
  fmt.Println("Enter your name and age:")
  fmt.Scan(&name, &age)
  fmt.Printf("Name: %s\nAge: %d", name, age)
} 
```
Ekranas bus išvestas tekstas perkelaint skaičių į naują eilutę jeigu spausime enter mygtuką po pirmo įvesto simbolio:
```cmd
Enter your name and age:
Maria
27
Name: Maria
Age: 27
```
Jeigu įvedimo metu mes nurodysime abi reikšmes tada ekrane bus išvestas tekstas:
```cmd
Enter your name and age:
Maria 27
Name: Maria
Age: 27
```
Jeigu reikia, kad būtų skaitoma visa eilutė, tada galima naudoti Scanln() funkciją:
```go
package main
import "fmt"

func main() {
  var name string
  var age int
  
  fmt.Println("Enter your name and age:")
  fmt.Scanln(&name, &age)
  fmt.Printf("Name: %s\nAge: %d", name, age)
}
```
Ekrane bus išvestas tekstas jeigu spausime enter mygtuką po pirmo įvesto simbolio:
```cmd
Enter your name and age:
Maria
Name: Maria
Age: 0
```
Kad išvengti šio efekto galima naudoti Scanln() funkciją ir įvesti visą sakinį atskiriant žodžius tarpais. Ekrane bus išvestas tekstas:
```cmd
Enter your name and age:
Maria 27
Name: Maria
Age: 27
```
Scanf() funkcija naudojama nuskaityti įvestį su formatu. Pavyzdys:
```go
package main
import "fmt"

func main() {
  var name string
  var age int

  // nuskaitomas vardas ir amžius nurodant formatą
  fmt.Println("Enter your name and age:")
  fmt.Scanf("%s %d", &name, &age) 
  fmt.Printf("Name: %s\nAge: %d", name, age)
}
```
Ekrane bus išvedamas tekstas su papildomai nurodytu formatu %s(tekstas), %d (sveikas skaičius) kokio tipo reikšmės yra naudojamos įvesčiai:
```cmd
Enter your name and age:
Maria 27
Name: Maria
Age: 27
```
Pagrindinės formatų žymės:
- integer	%d
- float	%g
- string	%s
- bool	%t
Pavyzdys su formatu naudojant kelis parametrus %g ir %t:
```go
package main
import "fmt"

func main() {
  var temperature float32
  var sunny bool

  // nuskaitomas float tipas
  fmt.Println("Enter the current temperature:")
  fmt.Scanf("%g", &temperature)

  // nuskaitomas bool tipas
  fmt.Println("Is the day sunny?")
  fmt.Scanf("%t", &sunny)
  fmt.Printf("Current temperature: %g\nIs the day Sunny? %t", temperature, sunny)
}
```
Ekrane bus išvestas tekstas:
```cmd
Enter the current temperature:
31.2
Is the day sunny?
true
Current temperature: 31.2
Is the day Sunny? true
```
