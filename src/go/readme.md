---
# This is the icon of the page

# This is the title of the article
title: Įvadas
# Set author
author: M.Gzegozevskis
# Set writing time
date: 2023-09-26
# A page can only have one category
category: Go
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

## Programavimo kalba Go

### 

::: info Pasirengimas darbui su programavimo kalba Go
Atsiųsti ir įdiegti Go programavimo kalbos SDK (angl. Software Development Kit): https://go.dev/
:::

::: note Komandinės eilutės komandų sąrašas
Įdiegūs Go SDK į pasirinktą OS sistemą (Windows, Linux, Mac OS).
Patikrintike ar sėkmingai įdiegėte Go SDK atvėrę komandinę eilutę įvesdami komandą:
```cmd
go version
```
jeigu pranešimas teigiamas į ekraną bus išvesta Go programavimo kalbos versija ir papildoma informacija pvz:
```cmd
go version go1.21.1 windows/amd64
```
Sekantis žingsnis sukurti pirmąjį projektą ir programą. Naudojant komandinę eilutę tai galite atlikti įvedę komandų rinkinį: 
```cmd 
mkdir programa
cd programa
go mod init programa
```

Įvykdžius komandą **mkdir programa** bus sukuriamas naujas katalogas pavadinimu```programa```. Tada įvedama sekanti komanda **cd programa**, kurią įvykdžius pereiname į katalogą pavadinimu ```programa```. Įvykdžius **go mod init programa** komandą ekrane bus išvestas pranešimas apie sėkmingai sukurtą modulį:
```cmd 
go: creating new go.mod: module programa
```
Sukurti sveikas pasaulį programą pakanka sukurti naują failą pavadinimu **main.go** komandinėje eilutėje įvedant:
```cmd 
"package programa" > main.go
```
Einamajame kataloge bus sukurtas failas main.go į kurį bus įrašytas tekstas package progrma, tai reiškia jog šis failas priklauso šiam katalogui. 
Sekantis žingsnis atidaryti failą main.go su pasirinktu tekstiniu redaktoriu pvz. nano, notepad, vscode ar kt. Ir jame suvesti programinį kodą:
```go 
// Pagrindinės programos failas visada yra pažymimas
// kaip main katalogas ir turi main funkciją kaip startinį 
// programos failą, kur yra pradedamas darbas 
package main

// Standartinė biblioteka darbui su: 
// įvedimo iš klaviatūros 
// išvedimo į ekraną funkcijomis
import "fmt" 

func main() {
    // Funkcija skirta išvesti tekstą į ekraną.
	fmt.Println("Sveikas pasaulį!") 
}
```
Sekantis veiksmas pasirinkti tekstinį redaktorių arba programavimo aplinką ir atidaryti sukurtą katalogą ```programa```.
### Programavimo aplinkos pasirinkimas
Pasirinkti programavimo aplinką:
- Studentams galima aplikuoti nemokamai: https://www.jetbrains.com/go/
- VSCode nemokamas teksto redaktorius: https://code.visualstudio.com/,
  papildomai reikia įdiegti Go papildinius (angl. plugins) ir parengti darbui: https://www.youtube.com/watch?v=1MXIGYrMk80


:::
















  
