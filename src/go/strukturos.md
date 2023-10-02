---
# This is the icon of the page

# This is the title of the article
title: Struktūros
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

## Struktūros dar žinomos kaip įrašas
Duomenims saugoti vietoje įprastų kintamųjų naudojimo yra numatyta struct žodis sukurti įraša kuriama bus saugoma daugiau nei vienas laukas
Pavyzdžiui norint saugoti adresą galima sukurti struktūrą kuri saugos visus adresui reikalingus duomenis:
```go
 type Address struct {
      name string 
      street string
      city string
      state string
      Pincode int
}
```
Supaprastintas variantas tos pačios adreso struktūros:
```go
type Address struct {
    name, street, city, state string
    Pincode int
}
```
Programoje struktūros kintamieji naudojami kaip įprasti kintamieji:
```go
var adresas Address
```
Pavyzdys naudojant struktūrą:
```go
package main
 
import "fmt"
 
// Defining a struct type
type Address struct {
    Name    string
    city    string
    Pincode int
}
 
func main() {
 
    // Declaring a variable of a `struct` type
    // All the struct fields are initialized
    // with their zero value
    var a Address
    fmt.Println(a)
 
    // Declaring and initializing a
    // struct using a struct literal
    a1 := Address{"Akshay", "Dehradun", 3623572}
 
    fmt.Println("Address1: ", a1)
 
    // Naming fields while
    // initializing a struct
    a2 := Address{Name: "Anikaa", city: "Ballia",
                                 Pincode: 277001}
 
    fmt.Println("Address2: ", a2)
 
    // Uninitialized fields are set to
    // their corresponding zero-value
    a3 := Address{Name: "Delhi"}
    fmt.Println("Address3: ", a3)
}
```
Ekrane bus išvestas rezultatas:
```cmd
{  0}
Address1:  {Akshay Dehradun 3623572}
Address2:  {Anikaa Ballia 277001}
Address3:  {Delhi  0}
```
Kaip pasiekti struktūros laukus įprastai naudojamas taškas:
```go
package main
 
import "fmt"
 
// defining the struct
type Car struct {
    Name, Model, Color string
    WeightInKg         float64
}
 
// Main Function
func main() {
    c := Car{Name: "Ferrari", Model: "GTC4",
            Color: "Red", WeightInKg: 1920}
 
    // Accessing struct fields
    // using the dot operator
    fmt.Println("Car Name: ", c.Name)
    fmt.Println("Car Color: ", c.Color)
 
    // Assigning a new value
    // to a struct field
    c.Color = "Black"
     
    // Displaying the result
    fmt.Println("Car: ", c)
}
```
Ekrane bus išvestas tekstas:
```cmd
Car Name:  Ferrari
Car Color:  Red
Car:  {Ferrari GTC4 Black 1920}
```
Rodyklės į struktūras naudojamos pavyzdžiui:
```go
package main
 
import "fmt"
 
// defining a structure
type Employee struct {
    firstName, lastName string
    age, salary int
}
 
func main() {
 
    // passing the address of struct variable
    // emp8 is a pointer to the Employee struct
    emp8 := &Employee{"Sam", "Anderson", 55, 6000}
 
    // (*emp8).firstName is the syntax to access
    // the firstName field of the emp8 struct
    fmt.Println("First Name:", (*emp8).firstName)
    fmt.Println("Age:", (*emp8).age)
}
```
Supaprastinti rodyklės naudojimą galima naudojant tašką vietoje (*emp8).firstName naudosime emp8.firstName:
```go
package main
 
import "fmt"
 
// Defining a structure
type Employee struct {
    firstName, lastName string
    age, salary         int
}
 
// Main Function
func main() {
 
    // taking pointer to struct
    emp8 := &Employee{"Sam", "Anderson", 55, 6000}
 
    // emp8.firstName is used to access
    // the field firstName
    fmt.Println("First Name: ", emp8.firstName)
    fmt.Println("Age: ", emp8.age)
}
```
## Vidinės struktūros (Nested Structures)
Aprašomos kaip įprastai struktūra, bet esminis skirtumas jog viena struktūra priklausoma nuo kitos pavyzdžiui:
```go
type struct_name_1 struct{
  // Fields
} 
type struct_name_2 struct{
  variable_name  struct_name_1
}
```
Pavyzdys 1. naudojant vidinę struktūrą:
```go
package main
 
import "fmt"
 
// Creating structure
type Author struct {
    name   string
    branch string
    year   int
}
 
// Creating nested structure
type HR struct {
 
    // structure as a field
    details Author
}
 
func main() {
 
    // Initializing the fields
    // of the structure
    result := HR{
     
        details: Author{"Sona", "ECE", 2013},
    }
 
    // Display the values
    fmt.Println("\nDetails of Author")
    fmt.Println(result)
}
```
Ekrane bus išvestas rezultatas:
```cmd
Details of Author
{{Sona ECE 2013}}
```
Pavyzdys 2. naudojant vidinę struktūrą:
```go
package main
 
import "fmt"
 
// Creating structure
type Student struct {
    name   string
    branch string
    year   int
}
 
// Creating nested structure
type Teacher struct {
    name    string
    subject string
    exp     int
    details Student
}
 
func main() {
 
    // Initializing the fields
    // of the structure
    result := Teacher{
        name:    "Suman",
        subject: "Java",
        exp:     5,
        details: Student{"Bongo", "CSE", 2},
    }
 
    // Display the values
    fmt.Println("Details of the Teacher")
    fmt.Println("Teacher's name: ", result.name)
    fmt.Println("Subject: ", result.subject)
    fmt.Println("Experience: ", result.exp)
 
    fmt.Println("\nDetails of Student")
    fmt.Println("Student's name: ", result.details.name)
    fmt.Println("Student's branch name: ", result.details.branch)
    fmt.Println("Year: ", result.details.year)
}
```
Ekrane bus išvestas rezultatas:
```cmd
Details of the Teacher
Teacher's name:  Suman
Subject:  Java
Experience:  5

Details of Student
Student's name:  Bongo
Student's branch name:  CSE
Year:  2
```
Pavyzdys 3. naudojant vidinę struktūrą:
```go
package main
 
import (
    "fmt"
)
 
type Address struct {
    Street     string
    City       string
    State      string
    PostalCode string
}
 
type Person struct {
    FirstName string
    LastName  string
    Age       int
    Address   Address
}
 
func main() {
    p := Person{
        FirstName: "John",
        LastName:  "Doe",
        Age:       30,
        Address: Address{
            Street:     "123 Main St",
            City:       "Anytown",
            State:      "CA",
            PostalCode: "12345",
        },
    }
 
    fmt.Println(p.FirstName, p.LastName)
    fmt.Println("Age:", p.Age)
    fmt.Println("Address:")
    fmt.Println("Street:", p.Address.Street)
    fmt.Println("City:", p.Address.City)
    fmt.Println("State:", p.Address.State)
    fmt.Println("Postal Code:", p.Address.PostalCode)
}
```
Ekrane bus išvestas rezultatas:
```cmd
John Doe
Age: 30
Address:
Street: 123 Main St
City: Anytown
State: CA
Postal Code: 12345
```
Anoniminės struktūros:
```go
variable_name := struct{
// fields
}{// Field_values}
```
Pavyzdys 1. naudojant anoniminę struktūrą:
```go
package main
  
import "fmt"
  
// Main function
func main() {
  
    // Creating and initializing
    // the anonymous structure
    Element := struct {
        name      string
        branch    string
        language  string
        Particles int
    }{
        name:      "Pikachu",
        branch:    "ECE",
        language:  "C++",
        Particles: 498,
    }
  
    // Display the anonymous structure
    fmt.Println(Element)
}
```
Ekrane bus išvestas rezultatas:
```cmd
{Pikachu ECE C++ 498}
```
## Anoniminiai laukai struktūrose

Pavyzdžiai kaip atrodo struktūros:
```go
type strukturos_vardas struct{
    int
    bool
    float64
}
type duomenys struct{
    int
    int
}
type studentas struct{
 vardas int
 kaina int
 string
}

```
Pavyzdys 1. naudojant anoniminius laukus struktūrose:
```go
package main
  
import "fmt"
  
// Creating a structure
// with anonymous fields
type studentas struct {
    int
    string
    float64
}
func main() {  
    // reikšmių priskyrimas anoniminiams laukams
    petras := studentas{987114, "Petras", 30.99}
  
    // Atvaizduoti studento struktūros duomenis
    fmt.Println("Studento id : ", petras.int)
    fmt.Println("Studento vardas : ", petras.string)
    fmt.Println("Kurso kaina : ", petras.float64)
}
```
Ekranas bus išvestas rezultatas:
```cmd
Studento id :  987114
Studento vardas :  Petras
Kurso kaina :  30.99
```
