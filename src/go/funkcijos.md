---
# This is the icon of the page

# This is the title of the article
title: Funkckijos
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

## Rezervuoti žodžiai (angl. Reserved Keywords) Go programavimo kalboje

Šių raktinių žodžių negalima naudoti aprašant kintamuosius, funkcijas, paketus ir kitas konstrukcijas.

|     -     |   -    |    -    |      -      |    -     |
|:---------:|:------:|:-------:|:-----------:|:--------:|
|  default  | defer  |  else   | fallthrough |   for    |
|   func    |   go   |  goto   |     if      |  import  |
| interface |  map   | package |    range    |  return  |
|  select   | struct | switch  |    type     |   var    |
|   break   |  case  |  chan   |    const    | continue |


## Kinamieji

Go kalboje kintamojo aprašymui galima naudoti keletą būdų tai galioja visiems numatytiems go kalbos tipams:

```go
package main

func main(){
    var skaicius int 
    var numeris = 5 
    skaitmuo := 10
} 
```

- Pirmas būdas```var skaicius int```, naudojamas jeigu noriu inicijuoti vėliau programos bloke kintamasis skaicius yra
  sveikas skaičius ir inicijuomas vėliau.
- Antras būdas```var numeris = 5```, Įprastas būdas aprašyti kintamąjį kai žinoma jo reikšmė iš karto nereikia
  papildomai nurodyti kintamojo tipo nes jis yra numatomas iš priskiriamos reikšmės kintamasis numeris yra sveikas
  skaičius ir inicijuojamas reikšme 5.
- Trečias būdas```skaitmuo := 10```, Trumpesnis būdas aprašyti kintamąjį kai žinoma jo reikšmė iš karto kintamasis
  skaitmuo yra sveikas skaičius ir inicijuojamas reikšme 10.

## Programavimo kalbos Go Tipai

### Realieji skaičiai (angl. Floating-point numbers):

**float32** (32-bit), **float64**    (64-bit):

```go
package main
 
import "fmt"
 
func main() {
    var x float32 = 5.00
    var y float32 = 2.25
    // bus float32 jeigu atliksime dalybos veiksmą
    z := x / y 
    // bus float64 nes pagal nutylėjimą naudoja float64
    e := 44.22
    // Galimi variantai priskirti reikšmę
    decimal := 3.15
    exponential := 12e18
    exponential2 := 3E10
    mixed := 13.16e12
}
```

### Sveikieji skaičiai

su prierašu u (unsigned) - reiškia skaičius be ženklo, o kitu atveju skaičius su ženklu. (angl. Integers): **int8** (
8-bit), **int16** (16-bit), **int32** (32-bit) arba sinonimas **rune**, **int64** (64-bit), **uint8** (8-bit) arba
sinonimas **byte**, **uint16** (16-bit), **uint32** (32-bit), **uint64** (64-bit), **int** (platform dependent (
priklauso nuo Operacinės sistemos yra 32 bit arba 64 bit)), **uint** (platform dependent (priklauso nuo Operacinės
sistemos yra 32 bit arba 64 bit)):

```go
package main

import "fmt"

func main() {
    var a int8 = 127  // nuo -128
    var b uint8 = 255
    var c int16 = 32767 // nuo -32768
    var d uint16 = 65535
    var e int32 = 2147483647  // nuo -2147483648
    var f uint32 = 4294967295
    var g int64 = 9223372036854775807 // nuo -9223372036854775808
    var h uint64 = 18446744073709551615
    var i int = 2147483647 // nuo -2147483648
    var j uint = 4294967295
    var r rune = 2147483647 // nuo -2147483648
    var s byte = 255 
}
```

### Kompleksiniai skaičiai

**complex64**    kompleksinis skaičius sudarytas iš float32 kaip realioji dalis ir menama dalis.
**complex128**    kompleksinis skaičius sudarytas iš float64 kaip realioji dalis ir menama dalis.
Darbui su kompleksiniais skaičiais yra numatytos standartinės bibliotekos funkcijos:

- **complex (a,b)** – sudaryti kompleksinį skaičių iš dviejų realiųjų (float32 ar float64) skaičių.
- **real()** – gauti realiąją kompleksinio skaičiaus dalį kaip float.
- **imag()** – gauti menamąją kompleksinio skaičiaus dalį kaip float.

```go
package main
import "fmt"
 
func main() {
   kompleksinis1 := complex(10, 11)
   // kompleksinio skaičiaus inicializavimas
   kompleksinis2 := 13 + 33i
   fmt.Println("kompleksinis1 yra: ", kompleksinis1)
   fmt.Println("kompleksinis2 yra: :", kompleksinis2)
   // realiosios dalies gavimas 
   realiojiDalis := real(kompleksinis1)
   fmt.Println("Realioji dalis skaičiaus kompleksinis1:", realiojiDalis)
   // menamosios dalies gavimas
   menamojiDalis := imag(kompleksinis2)
   fmt.Println("Menamoji dalis skaičiaus kompleksinis2:", menamojiDalis)
}
```

Ekrane bus išvestas tekstas:

```cmd
kompleksinis1 yra:  (10+11i)
kompleksinis2 yra: : (13+33i)
Realioji dalis skaičiaus kompleksinis1: 10
Menamoji dalis skaičiaus kompleksinis2: 33
```

### Teksas (angl. String) arba simbolių eilutės

```go
package main
 
import "fmt"
 
func main() {
    var zinute string
    tekstas := "Sveikas pasaulį!"
    var vardas string = "Marius"
    var pavarde string = "Kosmosas"
    // Tekstą galima apjungti naudojant (+) ženklą
    fmt.Println("Pilnas vardas : ", vardas + pavarde)
}
```

Ekrane bus išvestas tekstas:

```cmd
Pilnas vardas :  MariusKosmosas
```
### Bulio logikos tipo kintamieji (angl. Boolean)
Vienintelis tipas, kuris gali turėti ir įgyti tik dvi reikšmes: true arba false.

```go
package main

import "fmt"

func main() {
	var vardas bool
	fmt.Println(vardas)
	var pavarde bool = true
	fmt.Println(pavarde)
	palyginimas := vardas == pavarde
	fmt.Println(palyginimas)
}
```
Ekranas bus išvestas tekstas:
```cmd
false
true
false
```

## Konstantos

## Operacijos

## Funkcijos

## Įvedimas ir išvedimas

## Sąlygos sakiniai

## Ciklas for

## Kolekcijos

## Struktūros

## Interfeisai

## Paketai

## Testavimas

## Klaidų valdymas

## Failų skaitymas ir rašymas

## Web serverio kūrimas
