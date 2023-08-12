---
# This is the icon of the page

# This is the title of the article
title: Struktūriniai šablonai
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

Adapter Pattern, Bridge Pattern, Composite Pattern, Decorator Pattern, Facade Pattern, Flyweight Pattern, Proxy Pattern.

## Adapter šablonas

~~~java
interface Player {
public void play(String type, String fileName);
}
interface AudioPlayer {  
public void playAudio(String fileName);
}
interface VideoPlayer {  
public void playVideo(String fileName);
}
class MyAudioPlayer implements AudioPlayer {
@Override
public void playAudio(String fileName) {
System.out.println("Playing. Name: "+ fileName);    
}
}
class MyVideoPlayer implements VideoPlayer {
@Override
public void playVideo(String fileName) {
System.out.println("Playing. Name: "+ fileName);    
}
}

class MyPlayer implements Player {

AudioPlayer audioPlayer = new MyAudioPlayer();
VideoPlayer videoPlayer = new MyVideoPlayer();

public MyPlayer(){      
}
@Override
public void play(String audioType, String fileName) {
if(audioType.equalsIgnoreCase("avi")){
videoPlayer.playVideo(fileName);
}else if(audioType.equalsIgnoreCase("mp3")){
audioPlayer.playAudio(fileName);
}
}
}
public class Main{
public static void main(String[] args) {
MyPlayer myPlayer = new MyPlayer();

      myPlayer.play("mp3", "h.mp3");
      myPlayer.play("avi", "me.avi");
}
}
~~~
## Bridge šablonas
~~~java
interface Printer {
public void print(int radius, int x, int y);
}
class ColorPrinter implements Printer {
@Override
public void print(int radius, int x, int y) {
System.out.println("Color: " + radius +", x: " +x+", "+ y +"]");
}
}
class BlackPrinter implements Printer {
@Override
public void print(int radius, int x, int y) {
System.out.println("Black: " + radius +", x: " +x+", "+ y +"]");
}
}
abstract class Shape {
protected Printer print;
protected Shape(Printer p){
this.print = p;
}
public abstract void draw();  
}
class Circle extends Shape {
private int x, y, radius;

public Circle(int x, int y, int radius, Printer draw) {
super(draw);
this.x = x;  
this.y = y;  
this.radius = radius;
}

public void draw() {
print.print(radius,x,y);
}
}
public class Main {
public static void main(String[] args) {
Shape redCircle = new Circle(100,100, 10, new ColorPrinter());
Shape blackCircle = new Circle(100,100, 10, new BlackPrinter());

      redCircle.draw();
      blackCircle.draw();
}
}
~~~
## Composite šablonas 

![](https://lh6.googleusercontent.com/DTjuhjeagLZaDmRkN659_NzlOJ0VazLJaJgJmeIFLYgNR42jyoA0mBlylL9QGqB6cFe1_ax5UBTxOEPbxUUpIE3CpFZrPvZmP1auo3c4_CGhySitSh4KTD6pGhEXoNegWyR4aMk_l6s)
~~~java
// Design pattern Composite medžio struktūros realizacija
// Composite pattern is structural pattern since it creates a tree structure of group of objects. Composite pattern treats a group of objects as a single object. Composite pattern uses one class to represent a tree structure. In Composite pattern we create a class contains group of its own objects.
interface Component{
void showPrice();
}
class Leaf implements Component{
private String name;
private int price;

    public Leaf(String name, int price) {
        this.name = name;
        this.price = price;
    }
    @Override
    public void showPrice() {
        System.out.println(name+" : "+price);
    }
}
class Composite implements Component{
private String name;
List<Component> components = new ArrayList<>();

    public Composite(String name) {
        this.name = name;
    }

    public void addComponent(Component component){
        components.add(component);
    }

    @Override
    public void showPrice() {
        System.out.println(name);
        for (Component c: components) {
            c.showPrice();
        }
    }
}
public class Main {
public static void main(String[] args) {

        // Komponentai PC
        Component hdd = new Leaf("HDD", 120);
        Component mouse = new Leaf("Mouse", 15);
        Component monitor = new Leaf("Monitor",150);
        Component ram = new Leaf("Ram", 55);
        Component cpu = new Leaf("CPU", 220);
        Component printer = new Leaf("Printer", 180);

        // Komponentų klasifikavimas
        Composite peripherals = new Composite("Peripherals");
        Composite cabinet = new Composite("Cabinet");
        Composite motherBoard = new Composite("MotherBoard");
        Composite computer = new Composite("Computer");

        // Į mb įdedam ram ir cpu
        motherBoard.addComponent(cpu);
        motherBoard.addComponent(ram);

        // Išoriniai prietaisai
        peripherals.addComponent(mouse);
        peripherals.addComponent(monitor);
        peripherals.addComponent(printer);

        // Kompiuterio dėžė
        cabinet.addComponent(motherBoard);
        cabinet.addComponent(hdd);

       // Kompiuteris ir prijungtais išoriniais prietaisais
        computer.addComponent(peripherals);
        computer.addComponent(cabinet);
       
        computer.showPrice();
    }
}
// REZULTATAS ĮVYKDŽIUS PROGRAMĄ
Computer
Peripherals
Mouse : 15
Monitor : 150
Printer : 180
Cabinet
MotherBoard
CPU : 220
Ram : 55
HDD : 120
~~~
## Composite 2 pavyzdys
~~~java
// Composite design pattern 2 pavyzdys
class Employee {
private String name;
private String title;
private List<Employee> subordinates;

public Employee(String name,String title) {
this.name = name;
this.title = title;
subordinates = new ArrayList<Employee>();
}

public void add(Employee e) {
subordinates.add(e);
}

public void remove(Employee e) {
subordinates.remove(e);
}

public List<Employee> getSubordinates(){
return subordinates;
}

public String toString(){
return "Employee :[ Name : "+ name
+", dept : "+ title +subordinates +" ]";
}   
}

public class Main {
public static void main(String[] args) {
Employee CEO = new Employee("John","CEO");

      Employee headSales = new Employee("Rob","Sales");

      Employee headMarketing = new Employee("Mike","Marketing");

      Employee programmer1 = new Employee("Lili","Programmer");
      Employee programmer2 = new Employee("Bob","Programmer");

      Employee tester1 = new Employee("Jack","Tester");
      Employee tester2 = new Employee("Tom","Tester");

      CEO.add(headSales);
      CEO.add(headMarketing);

      headSales.add(tester1);
      headSales.add(tester2);

      headMarketing.add(programmer1);
      headMarketing.add(programmer2);

      //print all employees of the organization
      System.out.println(CEO); 
      for (Employee headEmployee : CEO.getSubordinates()) {
         System.out.println(headEmployee);
         for (Employee employee : headEmployee.getSubordinates()) {
            System.out.println(employee);
         }
      }    
}
}
~~~

## Decorator šablonas

~~~java
interface Printer {
void print();
}
class PaperPrinter implements Printer {
@Override
public void print() {
System.out.println("Paper Printer");
}
}
class PlasticPrinter implements Printer {
@Override
public void print() {
System.out.println("Plastic Printer");
}
}
abstract class PrinterDecorator implements Printer {
protected Printer decoratedPrinter;
public PrinterDecorator(Printer d){
this.decoratedPrinter = d;
}
public void print(){
decoratedPrinter.print();
}  
}
class Printer3D extends PrinterDecorator {
public Printer3D(Printer decoratedShape) {
super(decoratedShape);    
}
@Override
public void print() {
System.out.println("3D.");
decoratedPrinter.print();         
}
}
public class Main {
public static void main(String[] args) {
Printer plasticPrinter = new PlasticPrinter();
Printer plastic3DPrinter = new Printer3D(new PlasticPrinter());
Printer paper3DPrinter = new Printer3D(new PaperPrinter());
plasticPrinter.print();
plastic3DPrinter.print();
paper3DPrinter.print();
}
}
~~~

## Facade šablonas

~~~java

class ShapeFacade {
interface Shape {
void draw();
}
class Rectangle implements Shape {
@Override
public void draw() {
System.out.println("Rectangle::draw()");
}
}
class Square implements Shape {
@Override
public void draw() {
System.out.println("Square::draw()");
}
}
class Circle implements Shape {
@Override
public void draw() {
System.out.println("Circle::draw()");
}
}
private Shape circle = new Circle();
private Shape rectangle = new Rectangle();
private Shape square = new Square();

public ShapeFacade() {
}
public void drawCircle() {
circle.draw();
}
public void drawRectangle() {
rectangle.draw();
}
public void drawSquare() {
square.draw();
}
}
public class Main {
public static void main(String[] args) {
ShapeFacade shapeFacade = new ShapeFacade();
shapeFacade.drawCircle();
shapeFacade.drawRectangle();
shapeFacade.drawSquare();
}
}
~~~
## Proxy šablonas
~~~java
interface Printer {
void print();
}
class ConsolePrinter implements Printer {
private String fileName;

public ConsolePrinter(String fileName){
this.fileName = fileName;
}
@Override
public void print() {
System.out.println("Displaying " + fileName);
}
}
class ProxyPrinter implements Printer{
private ConsolePrinter consolePrinter;
private String fileName;

public ProxyPrinter(String fileName){
this.fileName = fileName;
}

@Override
public void print() {
if(consolePrinter == null){
consolePrinter = new ConsolePrinter(fileName);
}
consolePrinter.print();
}
}
public class Main {

public static void main(String[] args) {
Printer image = new ProxyPrinter("test");
image.print();   
}
}
~~~
