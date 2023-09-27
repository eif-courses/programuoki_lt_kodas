---
# This is the icon of the page

# This is the title of the article
title: Ciklai
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


### Range pagalbinis žodys darbas su sąrašais ir žodynu (angl. Map)

```go
package main

import "fmt"

func main() {
   /* create a slice */
   numbers := []int{0,1,2,3,4,5,6,7,8} 
   
   /* print the numbers */
   for i:= range numbers {
      fmt.Println("Slice item",i,"is",numbers[i])
   }
   
   /* create a map*/
   countryCapitalMap := map[string] string {"France":"Paris","Italy":"Rome","Japan":"Tokyo"}
   
   /* print map using keys*/
   for country := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",countryCapitalMap[country])
   }
   
   /* print map using key-value*/
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

