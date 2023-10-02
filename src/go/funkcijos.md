---
# This is the icon of the page

# This is the title of the article
title: Funkcijos
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

## Funkcijos

Go programavimo kalboje funkcija yra aprašoma naudojant raktažodį `func`. Funkcijos aprašymas atrodo taip: 
```cmd
func funkcijos_vardas(Parametru-sarasas)(Grąžinama_reikšmė){
    // funkcijos kūnas
}
```
**Pavyzdys 1.** nauodjant funkciją:
```go
package main
import "fmt"
 
// area() is used to find the
// area of the rectangle
// area() function two parameters,
// i.e, length and width
func area(length, width int)int{
     
    Ar := length * width
    return Ar
}
 
// Main function
func main() {
   
   // Display the area of the rectangle
   // with method calling
   fmt.Printf("Area of rectangle is : %d", area(12, 10))
}
```
Ekrane bus atvaizduotas rezultatas:
```cmd
Area of rectangle is : 120
```
Pavyzdys 2. Funkcijos aprašymas su parametrais:
```go
package main
  
import "fmt"
  
// function which swap values
func swap(a, b int)int{
 
    var o int
    o= a
    a=b
    b=o
    
   return o
}
  
// Main function
func main() {
 var p int = 10
 var q int = 20
  fmt.Printf("p = %d and q = %d", p, q)
  
 // call by values
 swap(p, q)
   fmt.Printf("\np = %d and q = %d",p, q)
}
```
Ekranas bus atvaizduotas rezultatas:
```cmd
p = 10 and q = 20
p = 10 and q = 20
```
Pavyzdys 3. Funkcijos aprašymas su parametrais kai norime pakeisti perduodamą reikšmę kaip adresą:
```go
package main
  
import "fmt"
  
// function which swap values
func swap(a, b *int)int{
    var o int
    o = *a
    *a = *b
    *b = o
     
   return o
}
  
// Main function
func main() {
 
 var p int = 10
 var q int = 20
 fmt.Printf("p = %d and q = %d", p, q)
  
 // call by reference
 swap(&p, &q)
   fmt.Printf("\np = %d and q = %d",p, q)
}
```
Ekranas bus atvaizduotas rezultatas:
```cmd
p = 10 and q = 20
p = 10 and q = 20
```
