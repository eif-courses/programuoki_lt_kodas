---
# This is the icon of the page

# This is the title of the article
title: Ciklas
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

## Veiksmų kartojimas ciklais (angl. Looping)
Programavimo kalba Go turi tik vieną raktinį žodį **for** aprašyti ciklui.
Ciklo struktūra yra tokia **initialization** (pradinė reikšmė); **condition** (sąlyga); **post** (veiksmas po įvykdytos ciklo iteracijos).
```go
for initialization; condition; post{
       // sakiniai, kurie bus kartojami....
}
```
Pavyzdys naudojant for ciklą:
```go
package main
  
import "fmt"

func main() { 
    // for ciklas 
    // ciklas pradedamas nuo i = 0 
    // vykdys iki kol sąlyga i < 4 bus tenkinama
    // reikšmė po įvykdytos ciklo iteracijos i++
    for i := 0; i < 4; i++ {
      fmt.Printf("Sveikas pasauli!\n")  
    }
}
```
Ekrane bus išvestas rezultatas:
```cmd
Sveikas pasauli!
Sveikas pasauli!
Sveikas pasauli!
Sveikas pasauli!
```
Begalinis ciklas (angl. Infinite Loop) yra ciklas, kuris niekada nesibaigia. Pavyzdžiui:
```go
package main
  
import "fmt"

func main() {
    // Begalinis ciklas
    for {
      fmt.Printf("Labas!\n")  
    }    
}
```
Analogiškai vietoje įprasto **while** ciklo naudojama for ciklo struktūra:
```go
for condition {
    // sakiniai..
}
```
Pavyzdys naudojant for ciklą:
```go
package main
  
import "fmt"

func main() {  
    // while ciklo analogas
    // for ciklas bus vykdomas iki kol sąlyga i < 3 bus tenkinama 
    i:= 0
    for i < 3 {
       i += 2
    }
    fmt.Println(i) 
}
```
Ciklas for naudojamas su range pagalbiniu žodžiu (angl. keyword):
```go
for i, j:= range adresas{
   // sakiniai...
}
```
Pavyzdys naudojant for ciklą su range:
```go
package main
  
import "fmt"

func main() {      
    adresas:= []string{"eif.viko.lt", "viko.lt", "programuoki.lt"} 
    // i ir j saugo sąrašo indeksą ir reikšmę
    for i, j:= range adresas {
       fmt.Println(i, j) 
    }   
}
```
Ekrane bus išvestas rezultatas:
```cmd
    0 eif.viko.lt
    1 viko.lt
    2 programuoki.lt
```
For loop naudojamas darbui su simbolių eilutėmis (angl. String) pavyzdys:
```cmd
for index, chr:= range str {
     // Sakiniai...
}
```
Pavyzdys su for ciklu ir simbolių eilute:
```go
package main
  
import "fmt"

func main() {
    // Skaitomi žodžio "Krabas" simboliai pažingsniui
    for indeksas, simbolis:= range "Krabas" {
       fmt.Printf("Simbolio %s indeksas yra %d\n", simbolis, indeksas) 
    }
}
```
Ekrane bus išvestas rezultatas:
```cmd
    Simbolio K indeksas yra 0
    Simbolio r indeksas yra 1
    Simbolio a indeksas yra 2
    Simbolio b indeksas yra 3
    Simbolio a indeksas yra 4
    Simbolio s indeksas yra 5
```
Ciklas for skirtas skaityti žodynui (angl. Map) struktūra:
```go
for key, value := range map { 
     // Statement.. 
}
```
Pavyzdys naudojant range skaityti žodynui:
```go
package main
  
import "fmt"
func main() {
    // žodyno naudojimas
    zodynas := map[string]string{
        "cat":"Katė",
        "dog":"Šuo",
        "water":"Vanduo",
    }
    for key, value:= range zodynas {
       fmt.Println(key, value) 
    }   
}
```
Ekrane bus išvestas rezultatas: 
```cmd
water Vanduo
cat Katė
dog Šuo
```
Lygiagrečiam programavimui (angl. Concurrency) naudojamas for ciklas su range skaityti kanalui (angl. Channel):
```go
for item := range Channel { 
     // Sakiniai...
}
```
Pavyzdys skaityti kanalui:
```go
package main
  
import "fmt"
 
func main() {
    // naujo kanalo sukūrimas kur bus int reikšmės
    kanalas := make(chan int)
    go func(){
        kanalas <- 100
        kanalas <- 1000
       kanalas <- 10000
       kanalas <- 100000
       close(kanalas)
    }()
    for i:= range kanalas {
       fmt.Println(i) 
    }
}
```
Ekrane bus išvestas rezultatas:
```cmd
    100
    1000
    10000
    100000
```

Papildomi pavyzdžiai su for ciklu naudojant range:
```go
package main

import "fmt"

func main() {
   /* sukuriamas Slice */
   numbers := []int{0,1,2,3,4,5,6,7,8} 
   
   /* atspausdinti skaičių sąrašą */
   for i:= range numbers {
      fmt.Println("Slice item",i,"is",numbers[i])
   }
   
   /* sukurti žodyną */
   countryCapitalMap := map[string] string {"France":"Paris","Italy":"Rome","Japan":"Tokyo"}
   
   /* atspausdinti žodyną naudojant raktą */
   for country := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",countryCapitalMap[country])
   }
   
   /* spausdinti žodyną naudojant porą raktas,reikšmė */
   for country,capital := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",capital)
   }
}
```
Ekrane bus išvedamas tekstas: 

```cmd 
    Slice item 0 is 0
    Slice item 1 is 1
    Slice item 2 is 2
    Slice item 3 is 3
    Slice item 4 is 4
    Slice item 5 is 5
    Slice item 6 is 6
    Slice item 7 is 7
    Slice item 8 is 8
    Capital of France is Paris
    Capital of Italy is Rome
    Capital of Japan is Tokyo
    Capital of France is Paris
    Capital of Italy is Rome
    Capital of Japan is Tokyo
```

