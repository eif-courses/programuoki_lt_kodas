---
# This is the icon of the page

# This is the title of the article
title: Sąrašas ir žodynas
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

## Masyvas arba sąrašas (angl. Array)
Fiksuoto dydžio duomenų struktūra sąrašas:
```go
package main

import "fmt"

func main() {
   // sukuriamas sąrašas iš float32 tipo reikšmių
   var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0} 
   // sukuriamas sąrašas iš float32 tipo reikšmių neprivaloma [] nurodyti dydį
   // inicijavimo metu bus automatiškai nustatomas dydis iš {} pateiktų elementų skaičiaus
   var balance2 = []float32{1000.0, 2.0, 3.4, 7.0, 50.0}
   // Penktam sąrašo elementui priskiriame 50.0 
   // nes kreipiames pagal indeksą 4 (skaičiuojame nuo 0)
   balance[4] = 50.0
    
   var n [10]int /* n is an array of 10 integers */
   var i,j int

   /* initialize elements of array n to 0 */         
   for i = 0; i < 10; i++ {
      n[i] = i + 100 /* set element at location i to i + 100 */
   }
   
   /* output each array element's value */
   for j = 0; j < 10; j++ {
      fmt.Printf("Element[%d] = %d\n", j, n[j] )
   }
}
```
Ekrane bus išvestas tekstas:
```cmd
    Element[0] = 100
    Element[1] = 101
    Element[2] = 102
    Element[3] = 103
    Element[4] = 104
    Element[5] = 105
    Element[6] = 106
    Element[7] = 107
    Element[8] = 108
    Element[9] = 109
```
Darbui su daugiau dimensijų (galima turėti n-dimensijų) sąrašais sekantis tipas yra dvimatis sąrašas:
```go
package main

import "fmt"

func main() {
   /* Sąrašas su 5 eilutėmis ir 2 stulpeliais */
   var a = [5][2]int{ 
       {0,0}, 
       {1,2}, 
       {2,4}, 
       {3,6},
       {4,8}
   }
   var i, j int

   /* Bus išvedamos visos sąrašo reikšmės pagal indeksą */
   for  i = 0; i < 5; i++ {
      for j = 0; j < 2; j++ {
         fmt.Printf("a[%d][%d] = %d\n", i,j, a[i][j] )
      }
   }
}
```
Ekrane bus išvestas rezultatas:
```cmd 
    a[0][0]: 0
    a[0][1]: 0
    a[1][0]: 1
    a[1][1]: 2
    a[2][0]: 2
    a[2][1]: 4
    a[3][0]: 3
    a[3][1]: 6
    a[4][0]: 4
    a[4][1]: 8
```


### Žodynas (angl. Dictionary arba Map)

Sukurti žodyną naudojame žodį **make**. Pavyzdys kaip aprašomas žodynas:
```go
package main

import "fmt"

func main() {
   var countryCapitalMap map[string]string
   /* create a map*/
   countryCapitalMap = make(map[string]string)
   
   /* insert key-value pairs in the map*/
   countryCapitalMap["France"] = "Paris"
   countryCapitalMap["Italy"] = "Rome"
   countryCapitalMap["Japan"] = "Tokyo"
   countryCapitalMap["India"] = "New Delhi"
   
   /* print map using keys*/
   for country := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",countryCapitalMap[country])
   }
   
   /* test if entry is present in the map or not*/
   capital, ok := countryCapitalMap["United States"]
   
   /* if ok is true, entry is present otherwise entry is absent*/
   if(ok){
      fmt.Println("Capital of United States is", capital)  
   } else {
      fmt.Println("Capital of United States is not present") 
   }
}

```
Ekrane bus išvestas tekstas: 
```cmd
    Capital of India is New Delhi
    Capital of France is Paris
    Capital of Italy is Rome
    Capital of Japan is Tokyo
    Capital of United States is not present
```
Kaip pašalinti iš žodyno elementą naudojant **delete()** funkciją ir kitas inicijavimo būdas pateiktas pavyzdyje:
```go
package main

import "fmt"

func main() {   
   /* create a map*/
   countryCapitalMap := map[string] string {"France":"Paris","Italy":"Rome","Japan":"Tokyo","India":"New Delhi"}
   
   fmt.Println("Original map")   
   
   /* print map */
   for country := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",countryCapitalMap[country])
   }
   
   /* delete an entry */
   delete(countryCapitalMap,"France");
   fmt.Println("Entry for France is deleted")  
   
   fmt.Println("Updated map")   
   
   /* print map */
   for country := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",countryCapitalMap[country])
   }
}
```
Ekrane bus išvedamas rezultatas: 
```cmd
    Original Map
    Capital of France is Paris
    Capital of Italy is Rome
    Capital of Japan is Tokyo
    Capital of India is New Delhi
    Entry for France is deleted
    Updated Map
    Capital of India is New Delhi
    Capital of Italy is Rome
    Capital of Japan is Tokyo
```

### Slice (angl. Slice) Lanksti masyvo versija
Slice tai lanksti masyvo versija su papildomis funkcijomis (append, copy, len, cap) darbui su sąrašu.
Slice dydžiui nustatyti naudojamos funkcijos len() - sąrašo dydis ir cap() - sąrašo talpa.

```go
package main

import "fmt"

func main() {
    var numbers []int // neapibrėžtas slice dydis grąžins nil 
    numbers == []int{0,0,0,0,0} // sukuriamas slice su 5 elementais
    numbers = make([]int,5,5) // sukuriamas slice su 5 elementais ir 5 vietomis   
    var numbers = make([]int,3,5) // sukuriamas slice su 3 elementais ir 5 vietomis
    printSlice(numbers)
}
func printSlice(x []int){
    fmt.Printf("sąrašo dydis=%d, talpa=%d, slice=%v\n",len(x),cap(x),x)
}
```
Ekrane atvaizduos:
```cmd 
len = 3 cap = 5 slice = [0 0 0]
```
Išrinkti dominantį poaibį (dominantį intervalą) iš masyvo pavyzdžiai:
```go
package main

import "fmt"

func main() {
   /* create a slice */
   numbers := []int{0,1,2,3,4,5,6,7,8}   
   printSlice(numbers)
   
   /* print the original slice */
   fmt.Println("numbers ==", numbers)
   
   /* print the sub slice starting from index 1(included) to index 4(excluded)*/
   fmt.Println("numbers[1:4] ==", numbers[1:4])
   
   /* missing lower bound implies 0*/
   fmt.Println("numbers[:3] ==", numbers[:3])
   
   /* missing upper bound implies len(s)*/
   fmt.Println("numbers[4:] ==", numbers[4:])
   
   numbers1 := make([]int,0,5)
   printSlice(numbers1)
   
   /* print the sub slice starting from index 0(included) to index 2(excluded) */
   number2 := numbers[:2]
   printSlice(number2)
   
   /* print the sub slice starting from index 2(included) to index 5(excluded) */
   number3 := numbers[2:5]
   printSlice(number3)
   
}
func printSlice(x []int){
   fmt.Printf("len = %d cap = %d slice = %v\n", len(x), cap(x),x)
}
```
Ekrane atvaizduos:
```cmd
    len = 9 cap = 9 slice = [0 1 2 3 4 5 6 7 8]
    numbers == [0 1 2 3 4 5 6 7 8]
    numbers[1:4] == [1 2 3]
    numbers[:3] == [0 1 2]
    numbers[4:] == [4 5 6 7 8]
    len = 0 cap = 5 slice = []
    len = 2 cap = 9  slice = [0 1]
    len = 3 cap = 7 slice = [2 3 4]
```
Append ir Copy funkcijų naudojimas su Slice:
```go
package main

import "fmt"

func main() {
   var numbers []int
   printSlice(numbers)
   
   /* append allows nil slice */
   numbers = append(numbers, 0)
   printSlice(numbers)
   
   /* add one element to slice*/
   numbers = append(numbers, 1)
   printSlice(numbers)
   
   /* add more than one element at a time*/
   numbers = append(numbers, 2,3,4)
   printSlice(numbers)
   
   /* create a slice numbers1 with double the capacity of earlier slice*/
   numbers1 := make([]int, len(numbers), (cap(numbers))*2)
   
   /* copy content of numbers to numbers1 */
   copy(numbers1,numbers)
   printSlice(numbers1)   
}
func printSlice(x []int){
   fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}
```
Ekrane atvaizduos rezultatą:
```cmd
    len = 0 cap = 0 slice = []
    len = 1 cap = 2 slice = [0]
    len = 2 cap = 2 slice = [0 1]
    len = 5 cap = 8 slice = [0 1 2 3 4]
    len = 5 cap = 16 slice = [0 1 2 3 4]
```

