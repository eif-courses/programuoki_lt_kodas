---
# This is the icon of the page

# This is the title of the article
title: Metodai
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

Go programvimo kalboje nėra klasių tačiau yra alternatyva naudoti metodus, kurie yra analogiška struktūra go struct (tipo praplėtimui papildymui nauju funkcionalumu) žinomu kaip funkcija praplėsti funkcionalumą (angl. Extension function). Bazinė struktūra labai panaši į funkciją tik turi papildomą parametrą, kuris yra kaip įvesties tipas (angl. Receiver).

```go
func(reciver_pavadinimas Tipas) metodo_pavadinimas(parameterų sąrašas)(return_tipas){
// Sakiniai kodo blokas
}
```

Metodo pavyzdys su struktūros tipo receiver parametru:

```go
package main
import "fmt"
// Author struktūra
type author struct {
    name      string
    branch    string
    particles int
    salary    int
}
 
// metodas su receiver parametru author
func (a author) show() {
 
    fmt.Println("Author's Name: ", a.name)
    fmt.Println("Branch Name: ", a.branch)
    fmt.Println("Published articles: ", a.particles)
    fmt.Println("Salary: ", a.salary)
}
func main() {
    // inicijuojame author struktūrą
    res := author{
        name:      "Sona",
        branch:    "CSE",
        particles: 203,
        salary:    34000,
    }
 
    // iškviečiamas metodas panašiai kaip ir objektiniame programavime
    res.show()
}

```

Ekrane bus išvestas rezultatas:

```cmd
Author's Name:  Sona
Branch Name:  CSE
Published articles:  203
Salary:  34000
```
Metodo pavyzdys su įprasto tipo (int, float ar kt.) parametru: 
```go
package main
import "fmt"
 
// Tipo aprašymas tai yra tik int tipui suteikiamas kitas pavadinimas
// Kitu atveju gausime klaidą jeigu naudosime tiesiog int tipą
type data int
 
// Aprašomas metodas su įprastu tipu
func (d1 data) multiply(d2 data) data {
    return d1 * d2
}
/*
// Naudojant įprastą tipą int gausime programos klaidą
func(d1 int)multiply(d2 int)int{
   return d1 * d2
}
*/
func main() {
    value1 := data(23)
    value2 := data(20)
    res := value1.multiply(value2)
    fmt.Println("Final result: ", res)
}
```
Ekrana bus išvestas tekstas: 
```cmd 
Final result:  460
```
## Metodas su rodyklės tipo receiver parametru

Pavyzdys naudojant rodyklės tipo receiver parametrą:
```go
package main
import "fmt"
 
// autoriaus struktūra
type author struct {
    name      string
    branch    string
    particles int
}

// Metodo aprašymas su rodyklės author tipo receiver parametru
func (a *author) show(abranch string) {
    (*a).branch = abranch
}
 
func main() {
 
    // Initializing the values
    // of the author structure
    res := author{
        name:   "Sona",
        branch: "CSE",
    }
 
    fmt.Println("Author's name: ", res.name)
    fmt.Println("Branch Name(Before): ", res.branch)
 
    // Sukuriama rodyklė ir nurodoas author struktūros objekto egzemplioriaus adresas
    p := &res
 
    // Metodo iškvietimas
    p.show("ECE")
    fmt.Println("Author's name: ", res.name)
    fmt.Println("Branch Name(After): ", res.branch)
}
```
Ekrane bus išvestas rezultatas:
```cmd
Author's name:  Sona
Branch Name(Before):  CSE
Author's name:  Sona
Branch Name(After):  ECE
```
## Metodos priimantis rodyklės ir kaip reikšmė (angl. value) tipų parametrus

Pavyzdys naudojant rodyklės ir reikšmės tipo receiver parametrus:
```go
package main
import "fmt"
 
// Author struktūra
type author struct {
    name   string
    branch string
}
 
// Metodas su autoriaus tipo rodyklės receiver parametru
func (a *author) show_1(abranch string) {
    (*a).branch = abranch
}
 
// Metodas su autoriaus reikšmės tipo receiver parametru
func (a author) show_2() {
    a.name = "Gourav"
    fmt.Println("Author's name(Before) : ", a.name)
}
func main() {
 
    // Inicijuojame autoriaus struktūrą
    res := author{
        name:   "Sona",
        branch: "CSE",
    }
 
    fmt.Println("Branch Name(Before): ", res.branch)
 
    // Šį metodą galima vadinti rodyklės tipo metodas
    // Iškviečiamas metodas show_1 su papildomu parametru 
    res.show_1("ECE")
    fmt.Println("Branch Name(After): ", res.branch)
 
    // Šį metodą galima vadinti reikšmės tipo metodas
    // Iškviečiamas metodas show_2 be papildomo parametro
    (&res).show_2()
    fmt.Println("Author's name(After): ", res.name)
}
```
Ekranas bus išvestas rezultatas:
```cmd
Branch Name(Before):  CSE
Branch Name(After):  ECE
Author's name(Before) :  Gourav
Author's name(After):  Sona
```


