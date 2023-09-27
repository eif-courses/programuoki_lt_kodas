---
# This is the icon of the page

# This is the title of the article
title: Operatoriai
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

## Veiksmams su įvairiais tipais yra numatyti operatoriai:

Pagrinde operatoriai yra tokie patys kaip ir kitose programavimo kalbose: 
  1. Matematiniai operatoriai: +, -, *, /, %, ++, --. Pavyzdys naudojant matematinius operatorius:
  ```go
  package main
  
  import "fmt"
  
  func main() {
      p:= 34
      q:= 20
      
      // Sudėties veiksmas
      result1:= p + q
      fmt.Printf("Result of p + q = %d", result1)
      
      // Atimties veiksmas
      result2:= p - q
      fmt.Printf("\nResult of p - q = %d", result2)
      
      // Daugybos veiksmas
      result3:= p * q
      fmt.Printf("\nResult of p * q = %d", result3)
      
      // Dalybos veiksmas
      result4:= p / q
      fmt.Printf("\nResult of p / q = %d", result4)
      
      // Liekanos skaičiavimas
      result5:= p % q
      fmt.Printf("\nResult of p %% q = %d", result5)
  }
  ```
  2. Loginiai operatoriai: &&, ||, !. Pavyzdys naudojant loginius operatorius:
  ```go
  package main
  
  import "fmt"
  
  func main() {
      var p int = 23
      var q int = 60
    
      if(p!=q && p<=q){ 
          fmt.Println("True")
      }
      if(p!=q || p<=q){ 
          fmt.Println("True")
      }
      if(!(p==q)){
          fmt.Println("True")
      }
  } 
  ```
  3. Palyginimo operatoriai: ==, !=, <, >, <=, >=. Pavyzdys nauodjant palyginimo operatorius:
  ```go
  package main
     
  import "fmt"
  
  func main() {
      p:= 34
      q:= 20
      
      // ‘=='(Lygu)
      result1:= p == q
      fmt.Println(result1)
      
      // ‘!='(Nelygu)
      result2:= p != q
      fmt.Println(result2)
      
      // ‘<‘(Mažiau nei)
      result3:= p < q
      fmt.Println(result3)
      
      // ‘>'(Daugiau nei)
      result4:= p > q
      fmt.Println(result4)
      
      // ‘>='(Daugiau arba lygu)
      result5:= p >= q
      fmt.Println(result5)
      
      // ‘<='(Mažiau arba lygu)
      result6:= p <= q
      fmt.Println(result6)
  }
  ```
  4. Bitų operacijos: &, |, ^, <<, >>, &=, |=, ^=, <<=, >>=. Pavyzdys naudojant bitų operatorius:
```go
package main
   
import "fmt"
   
func main() {
   p:= 34
   q:= 20
      
   // & (bitwise AND)
   result1:= p & q
   fmt.Printf("Result of p & q = %d", result1)
      
   // | (bitwise OR)
   result2:= p | q
   fmt.Printf("\nResult of p | q = %d", result2)
      
   // ^ (bitwise XOR)
   result3:= p ^ q
   fmt.Printf("\nResult of p ^ q = %d", result3)
      
   // << (left shift)
   result4:= p << 1
   fmt.Printf("\nResult of p << 1 = %d", result4)
      
   // >> (right shift)
   result5:= p >> 1
   fmt.Printf("\nResult of p >> 1 = %d", result5)
      
   // &^ (AND NOT)
   result6:= p &^ q
   fmt.Printf("\nResult of p &^ q = %d", result6)
} 
```
  5. Operatoriai priskiriantys reikšmę ir atliekantys aritmetinį, loginį ar bitų postumio veiksmus: =, +=, -=, *=, /=, %=, <<=, >>=, &=, ^=, |=. Pavyzdys su priskyrymo operatoriais:
```go
package main
    
import "fmt"
    
func main() {
   var p int = 45
   var q int = 50
       
   // “=”(Simple Assignment)
   p = q
   fmt.Println(p)
       
   // “+=”(Add Assignment)
    p += q
   fmt.Println(p)
       
   //“-=”(Subtract Assignment)
   p-=q
   fmt.Println(p)
       
   // “*=”(Multiply Assignment)
   p*= q
   fmt.Println(p)
       
   // “/=”(Division Assignment)
    p /= q
   fmt.Println(p)
      
    // “%=”(Modulus Assignment)
    p %= q
   fmt.Println(p)   
}
```
  6. Papildomi operatoriai:
- ```&```: Grąžina kintamojo adresą;
- ```*```: Šis ženklas nurodo jog tai yra rodyklė į kintamąjį; 
- ```<-```: Šis ženklas nurodo jog jis yra kaip gavėjas tai naudojamas su lygiagretumo biblioteka (angl. goroutines), kai reikia gauti reikšmę iš kanalo.
