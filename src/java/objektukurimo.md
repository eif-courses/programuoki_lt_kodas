---
# This is the icon of the page

# This is the title of the article
title: Objektų kūrimo šablonai
# Set author
author: M.Gžegoževskis
# Set writing time
time: 2021-10-01
# A page can only have one category
category: Java
# A page can have multiple tags
tag:
- Programavimas
- Java
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: MIT Licensed | Copyright © 2021-present M. Gzegozevskis
---

Šie projektavimo šablonai: Factory Pattern, Abstract Factory Pattern, Singleton Pattern, Prototype Pattern, Builder Pattern yra skirti objektams sukurti.

## Factory šablonas
~~~java
// Factory design pattern (projektavimo šablonas skirtas
// nuslėpti objekto kūrimą naudojant getInstance metodą).

interface Shop {
void details();
}

class Maxima implements Shop{
@Override
public void details() {
System.out.println("Maxima prekybos centras");
}
}
class IKI implements Shop{
@Override
public void details() {
System.out.println("Iki prekybos centras.");
}
}
class Norfa implements Shop{
@Override
public void details() {
System.out.println("Norfa prekybos centras.");
}
}
class NezinomaParduotuve implements Shop{
@Override
public void details() {
System.out.println("Nežinomas prekybos centras.");
}
}
class ShopFactory{
public Shop getInstance(String obj){
switch (obj) {
case "Maxima":
return new Maxima();
case "IKI":
return new IKI();
case "Norfa":
return new Norfa();
default:
return new NezinomaParduotuve();
}
}
}

public class Main {
public static void main(String[] args) {
ShopFactory shopFactory = new ShopFactory();
Shop shop = shopFactory.getInstance("Maxima");
shop.details();
}
}
~~~
## Abstract Factory šablonas

~~~java
// AbstractFactory projektavimo šablonas
abstract class AbstractFactory {
abstract Printer getPrinter(String type);
abstract Shape getShape(String shape) ;
}
/* Implementacija AbstractFactory klasės.
Kaip matome privalome įgyvendinti visus abstrakčius metodus.
Priklausomai, kuri klasė paveldi AbstactFactory pasirenkame
tik tai klasei būdingus metodus ir juos perašome.
*/
class ShapeFactory extends AbstractFactory {

@Override
public Shape getShape(String shapeType){
if(shapeType == null){
return null;
}    
if(shapeType.equalsIgnoreCase("CIRCLE")){
return new Circle();
} else if(shapeType.equalsIgnoreCase("RECTANGLE")){
return new Rectangle();
} else if(shapeType.equalsIgnoreCase("SQUARE")){
return new Square();
}
return null;
}

@Override
Printer getPrinter(String type) {
return null;
}
}
class PrinterFactory extends AbstractFactory {

@Override
public Shape getShape(String shapeType){
return null;
}

@Override
Printer getPrinter(String type) {
if(type == null){
return null;
}    
if(type.equalsIgnoreCase("paper")){
return new PaperPrinter();
} else if(type.equalsIgnoreCase("web")){
return new WebPrinter();
} else if(type.equalsIgnoreCase("Screen")){
return new ScreenPrinter();
}
return null;
}
}
The following code shows how to use abstract factory pattern.

We are going to create shapes and Printers. For shapes, we would have circle, rectangle and square. For printers we will have paper Printer, Web Printer and screen Printer.

For shape we will create Shape interface, as follows

interface Shape {
void draw();
}

class Rectangle implements Shape {

@Override
public void draw() {
System.out.println("Inside Rectangle::draw() method.");
}
}
class Square implements Shape {

@Override
public void draw() {
System.out.println("Inside Square::draw() method.");
}
}
class Circle implements Shape {

@Override
public void draw() {
System.out.println("Inside Circle::draw() method.");
}
}
After that we create an interface for Printers.

interface Printer{
void print();
}
Then we create concrete classes implementing the Printer interface.

class PaperPrinter implements Printer{

@Override
public void print() {
System.out.println("paper");
}
}
class WebPrinter implements Printer{

@Override
public void print() {
System.out.println("web");
}
}
class ScreenPrinter implements Printer{

@Override
public void print() {
System.out.println("screen");
}
}


Create a Factory generator/producer class to get factories by passing an information such as Shape or Printer

class FactoryProducer {
public static AbstractFactory getFactory(String choice){
if(choice.equalsIgnoreCase("SHAPE")){
return new ShapeFactory();
} else if(choice.equalsIgnoreCase("Printer")){
return new PrinterFactory();
}
return null;
}
}
public class Main {
public static void main(String[] args) {
//get shape factory
AbstractFactory shapeFactory = FactoryProducer.getFactory("SHAPE");
//get an object of Shape Circle
Shape shape1 = shapeFactory.getShape("CIRCLE");
//call draw method of Shape Circle
shape1.draw();
//get an object of Shape Rectangle
Shape shape2 = shapeFactory.getShape("RECTANGLE");
//call draw method of Shape Rectangle
shape2.draw();
//get an object of Shape Square
Shape shape3 = shapeFactory.getShape("SQUARE");
//call draw method of Shape Square
shape3.draw();
//get printer factory
AbstractFactory printerFactory = FactoryProducer.getFactory("printer");

    Printer printer1 = printerFactory.getPrinter("Paper");
    printer1.print();
    Printer printer2 = printerFactory.getPrinter("Web");
    printer2.print();
    Printer printer3 = printerFactory.getPrinter("Screen");
    printer3.print();
}
}
~~~



## Singleton šablonas

~~~java

class MainWindow {
//create an object of MainWindow
private static MainWindow instance = new MainWindow();

//make the constructor private so that this class cannot be
//instantiated by other class
private MainWindow(){}

//Get the only object available
public static MainWindow getInstance(){
return instance;
}

public void showMessage(){
System.out.println("Hello World!");
}
}

public class Main {
public static void main(String[] args) {
//Get the only object available
MainWindow object = MainWindow.getInstance();

      //show the message
      object.showMessage();
}
}
~~~

## Prototype šablonas

~~~java

class ShapeProtoType{

private static Hashtable<String, Shape> shapeMap
= new Hashtable<String, Shape>();

public static Shape getShape(String shapeId) {
Shape cachedShape = shapeMap.get(shapeId);
return (Shape) cachedShape.clone();
}
public static void loadCache() {
Circle circle = new Circle();
circle.setId("1");
shapeMap.put(circle.getId(),circle);

      Square square = new Square();
      square.setId("2");
      shapeMap.put(square.getId(),square);

      Rectangle rectangle = new Rectangle();
      rectangle.setId("3");
      shapeMap.put(rectangle.getId(),rectangle);
}
}
public class Main{
public static void main(String[] args) {
ShapeProtoType.loadCache();

      Shape clonedShape = (Shape) ShapeProtoType.getShape("1");
      System.out.println("Shape : " + clonedShape.getType());    

      Shape clonedShape2 = (Shape) ShapeProtoType.getShape("2");
      System.out.println("Shape : " + clonedShape2.getType());    

      Shape clonedShape3 = (Shape) ShapeProtoType.getShape("3");
      System.out.println("Shape : " + clonedShape3.getType());    
}
}
~~~

## Builder šablonas

~~~java

// Design pattern Builder (projektavimo šablonas skirtas objektams kurti)

class Computer{

    private String name;
    private String os;
    private int ram;
    private String processor;
    private int powerSupply;

    @Override
    public String toString() {
        return "Computer{" + "name='" + name + '\'' + ", os='" + os + '\'' + ", ram=" + ram + ", processor='" + processor + '\'' + ", powerSupply=" + powerSupply + '}';
    }
    // Vidinė klasė Builder
    public static class Builder {

        private Computer computer = new Computer();

        public Builder name(String name){
            computer.name = name;
            return this;
        }
        public Builder os(String os){
            computer.os = os;
            return this;
        }
        public Builder ram(int ram){
            computer.ram = ram;
            return this;
        }
        public Builder processor(String processor){
            computer.processor = processor;
            return this;
        }
        public Builder powerSupply(int powerSupply){
            computer.powerSupply = powerSupply;
            return this;
        }

        public Computer build(){
            // Šiame metode atliekame tikrinimą pagal tam tikrus kriterijus.
            // Jeigu norite galite apbriboti nuo tuščių objekto laukų, priklausomai pagal poreikį.
            // Apribojimai nėra privalomi!!!
            if(computer.powerSupply == 0){
                System.out.println(computer+"\033[31m\033"+" - Atsiprašome bet kompiuteris be energijos bloko negali egzistuoti!"+"\033[0m");
            }
            else{
                System.out.println(computer+"\033[31;1m\033[0m, \033[32;1;2m"+" - Kompiuteris sėkmingai surinktas!!!"+"\033[0m");
                return computer;
            }
            return null;
        }

    }
}

public class Main {
public static void main(String[] args) {

        Computer dell = new Computer.Builder()
                .name("Dell Inspiron N7110")
                .os("Microsoft Windows")
                .processor("Intel CORE I7")
                .ram(16)
                .build();

        Computer lenovo = new Computer.Builder()
                .name("Lenovo Y700")
                .os("Linux")
                .processor("Intel CORE I7")
                .ram(8)
                .powerSupply(150)
                .build();

        Computer msi = new Computer.Builder()
                .powerSupply(180)
                .ram(16)
                .name("MSI GE72VR")
                .processor("Intel CORE I7")
                .build();
    }
}
~~~
