---
# This is the icon of the page

# This is the title of the article
title: Objektų elgsenos šablonai
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

Chain Of Responsibility Pattern, Command Pattern, Interpreter Pattern, Iterator Pattern, Mediator Pattern, Memento Pattern, Observer Pattern, State Pattern, Strategy Pattern, Template Pattern, Visitor Pattern.

## Chain Of Responsibility
~~~java
abstract class Logger {
protected Logger nextLogger;

public void setNextLogger(Logger nextLogger){
this.nextLogger = nextLogger;
}

public void logMessage(String message){
log(message);
if(nextLogger !=null){
nextLogger.logMessage(message);
}
}
abstract protected void log(String message);  
}
class ConsoleLogger extends Logger {
public ConsoleLogger(){
}
@Override
protected void log(String message) {    
System.out.println("Console::Logger: " + message);
}
}
class EMailLogger extends Logger {
public EMailLogger(){
}
@Override
protected void log(String message) {    
System.out.println("EMail::Logger: " + message);
}
}
class FileLogger extends Logger {
public FileLogger(){
}
@Override
protected void log(String message) {    
System.out.println("File::Logger: " + message);
}
}
public class Main {  
private static Logger getChainOfLoggers(){
Logger emailLogger = new EMailLogger();
Logger fileLogger = new FileLogger();
Logger consoleLogger = new ConsoleLogger();
emailLogger.setNextLogger(fileLogger);
fileLogger.setNextLogger(consoleLogger);
return emailLogger;  
}
public static void main(String[] args) {
Logger loggerChain = getChainOfLoggers();
loggerChain.logMessage("Null pointer");
loggerChain.logMessage("Array Index Out of Bound");
loggerChain.logMessage("Illegal Parameters");
}
}
~~~
## Command
~~~java
interface Command {
void execute();
}

class MouseCursor {
private int x = 10;
private int y = 10;
public void move() {
System.out.println("Old Position:"+x +":"+y);
x++;
y++;
System.out.println("New Position:"+x +":"+y);

}

public void reset() {
System.out.println("reset");
x = 10;
y = 10;
}
}

class MoveCursor implements Command {
private MouseCursor abcStock;

public MoveCursor(MouseCursor abcStock) {
this.abcStock = abcStock;
}

public void execute() {
abcStock.move();
}
}

class ResetCursor implements Command {
private MouseCursor abcStock;

public ResetCursor(MouseCursor abcStock) {
this.abcStock = abcStock;
}

public void execute() {
abcStock.reset();
}
}

class MouseCommands {
private List<Command> orderList = new ArrayList<Command>();

public void takeOrder(Command order) {
orderList.add(order);
}

public void placeOrders() {
for (Command order : orderList) {
order.execute();
}
orderList.clear();
}
}

public class Main {
public static void main(String[] args) {
MouseCursor cursor = new MouseCursor();

    MoveCursor moveCursor = new MoveCursor(cursor);
    ResetCursor resetCursor = new ResetCursor(cursor);

    MouseCommands commands= new MouseCommands();
    commands.takeOrder(moveCursor);
    commands.takeOrder(resetCursor);

    commands.placeOrders();
}
}
~~~

## Iterator
~~~java
interface Iterator {
public boolean hasNext();
public Object next();
}
class LetterBag {
public String names[] = {"R" , "J" ,"A" , "L"};
public Iterator getIterator() {
return new NameIterator();
}
class NameIterator implements Iterator {
int index;
@Override
public boolean hasNext() {
if(index < names.length){
return true;
}
return false;
}
@Override
public Object next() {
if(this.hasNext()){
return names[index++];
}
return null;
}    
}
}
public class Main {
public static void main(String[] args) {
LetterBag bag = new LetterBag();
for(Iterator iter = bag.getIterator(); iter.hasNext();){
String name = (String)iter.next();
System.out.println("Name : " + name);
}   
}
}
~~~
## Observer
~~~java
// Nuadojantis java.util. kuriame jau yra aprašytas šis design patternas
import java.util.ArrayList;
import java.util.List;
import java.util.Observable;
import java.util.Observer;

/**
* Created by Marius on 3/15/2017.
  */

class BookStore extends Observable{

    private List<String> books = new ArrayList<>();

    public void addBook(String data) {
        books.add(data);
        setChanged();// Kai yra kviečiamas šis metodas visi observeriai yra informuojami jeigu yra iškviestas notifyObservers()
        System.out.println(books);

    }

    @Override
    public String toString() {
        return "BookStore{" +
                "books=" + books +
                '}';
    }
}
class OnlineShop implements Observer{
@Override
public void update(Observable o, Object arg) {
System.out.println("OnlineShop klasė, Knygynas pasipildė naujomis knygomis.");
}
}
class Library implements Observer{
@Override
public void update(Observable o, Object arg) {
System.out.println("Library klasė, Knygynas pasipildė naujomis knygomis.");
}
}

class Main {
public static void main(String[] args) {
// Testas
BookStore bookStore = new BookStore();

        bookStore.addObserver(new Library());
        bookStore.addObserver(new OnlineShop());

        bookStore.addBook("Robinzonas kruzas");
        bookStore.notifyObservers();

        bookStore.addBook("Brisiaus galas.");
        bookStore.notifyObservers();

    }

}
~~~
## Observer 2 pavyzdys

~~~java
// Observer projektavimo šablonas, jo realizacija nenaudojant java.util bibliotekos
class MyValue {
private List<Observer> observers
= new ArrayList<Observer>();
private int state;

public int getState() {
return state;
}

public void setState(int state) {
this.state = state;
notifyAllObservers();
}

public void attach(Observer observer){
observers.add(observer);    
}

public void notifyAllObservers(){
for (Observer observer : observers) {
observer.update();
}
}   
}
abstract class Observer {
protected MyValue subject;
public abstract void update();
}
class PrinterObserver extends Observer{
public PrinterObserver(MyValue subject){
this.subject = subject;
this.subject.attach(this);
}

@Override
public void update() {
System.out.println("Printer: " + subject.getState() );
}
}
class EmailObserver extends Observer{

public EmailObserver(MyValue subject){
this.subject = subject;
this.subject.attach(this);
}

@Override
public void update() {
System.out.println("Email: "+ subject.getState() );
}
}
class FileObserver extends Observer{

public FileObserver(MyValue subject){
this.subject = subject;
this.subject.attach(this);
}

@Override
public void update() {
System.out.println("File: " + subject.getState());
}
}

public class Main {
public static void main(String[] args) {
MyValue subject = new MyValue();

      new FileObserver(subject);
      new EmailObserver(subject);
      new PrinterObserver(subject);

      subject.setState(15);
  
      subject.setState(10);
}
}
~~~ 
## Interpreter
~~~java
interface Expression {
public boolean evaluate(String context);
}

class IsInExpression implements Expression {
private String data;

public IsInExpression(String data) {
this.data = data;
}

@Override
public boolean evaluate(String context) {
if (context.contains(data)) {
return true;
}
return false;
}
}

class OrExpression implements Expression {

private Expression expr1 = null;
private Expression expr2 = null;

public OrExpression(Expression expr1, Expression expr2) {
this.expr1 = expr1;
this.expr2 = expr2;
}

@Override
public boolean evaluate(String context) {
return expr1.evaluate(context) || expr2.evaluate(context);
}
}

class AndExpression implements Expression {

private Expression expr1 = null;
private Expression expr2 = null;

public AndExpression(Expression expr1, Expression expr2) {
this.expr1 = expr1;
this.expr2 = expr2;
}

@Override
public boolean evaluate(String context) {
return expr1.evaluate(context) && expr2.evaluate(context);
}
}

public class Main {

public static void main(String[] args) {
Expression select = new IsInExpression("Select");
Expression from = new IsInExpression("From");
Expression isSelectFrom = new AndExpression(select, from);

    Expression insert = new IsInExpression("Insert");
    Expression update = new IsInExpression("Update");
    Expression isInsertOrUpdate = new OrExpression(insert, update);

    System.out.println(isSelectFrom.evaluate("Select"));
    System.out.println(isInsertOrUpdate.evaluate("Insert"));

    System.out.println(isSelectFrom.evaluate("Select From"));
    System.out.println(isInsertOrUpdate.evaluate("Update"));
}
}
~~~
## Mediator

~~~java
class Printer {
public static void showMessage(Machine user, String message){
System.out.println(new java.util.Date().toString()
+ " [" + user.getName() +"] : " + message);
}
}
class Machine {
private String name;

public Machine(String name){
this.name  = name;
}
public String getName() {
return name;
}
public void setName(String name) {
this.name = name;
}
public void sendMessage(String message){
Printer.showMessage(this,message);
}
}
class Main {
public static void main(String[] args) {
Machine m1= new Machine("M1");
Machine m2 = new Machine("M2");

      m1.sendMessage("Rebooting");
      m2.sendMessage("Computing");
}
}
~~~
## State
~~~java
interface State {
public void doAction(Context context);
}

class StartState implements State {
public void doAction(Context context) {
System.out.println("In start state");
context.setState(this);
}

public String toString() {
return "Start State";
}
}

class StopState implements State {

public void doAction(Context context) {
System.out.println("In stop state");
context.setState(this);
}

public String toString() {
return "Stop State";
}
}

class PlayState implements State {
public void doAction(Context context) {
System.out.println("In play state");
context.setState(this);  
}
public String toString() {
return "Play State";
}
}

class Context {
private State state;

public Context() {
state = null;
}

public void setState(State state) {
this.state = state;
}

public State getState() {
return state;
}
}

public class Main {
public static void main(String[] args) {
Context context = new Context();

    StartState startState = new StartState();
    startState.doAction(context);

    System.out.println(context.getState().toString());

    PlayState playState = new PlayState();
    playState.doAction(context);
    
    StopState stopState = new StopState();
    stopState.doAction(context);

    System.out.println(context.getState().toString());
}
}
~~~
## Strategy

~~~java
interface MathAlgorithm {
public int calculate(int num1, int num2);
}
class MathAdd implements MathAlgorithm{
@Override
public int calculate(int num1, int num2) {
return num1 + num2;
}
}
class MathSubstract implements MathAlgorithm{
@Override
public int calculate(int num1, int num2) {
return num1 - num2;
}
}
class MathMultiply implements MathAlgorithm{
@Override
public int calculate(int num1, int num2) {
return num1 * num2;
}
}
class MathContext {
private MathAlgorithm algorithm;

public MathContext(MathAlgorithm strategy){
this.algorithm = strategy;
}

public int execute(int num1, int num2){
return algorithm.calculate(num1, num2);
}
}
public class Main {
public static void main(String[] args) {
MathContext context = new MathContext(new MathAdd());    
System.out.println("10 + 5 = " + context.execute(10, 5));

      context = new MathContext(new MathSubstract());    
      System.out.println("10 - 5 = " + context.execute(10, 5));

      context = new MathContext(new MathMultiply());    
      System.out.println("10 * 5 = " + context.execute(10, 5));
}
}
~~~
## Template
~~~java
abstract class UseSoftware{
abstract void download();
abstract void install();
abstract void configuration();
abstract void run();

public void useNewSoftware(){
download();
install();
configuration();
run();   
}
}
~~~
## Visitor
~~~java
class TreeNode {
private String name;
public TreeNode(String name) {
this.name = name;
}
public String getName() {
return name;
}
public void accept(NodeVisitor v) {
v.visit(this);
}
}
interface NodeVisitor {
public void visit(TreeNode n);
}
class ConsoleVisitor implements NodeVisitor {
@Override
public void visit(TreeNode n) {
System.out.println("console:" + n.getName());
}
}

class EmailVisitor implements NodeVisitor {
@Override
public void visit(TreeNode n) {
System.out.println("email:" + n.getName());
}
}

public class Main {
public static void main(String[] args) {

    TreeNode computer = new TreeNode("Java2s.com");
    computer.accept(new ConsoleVisitor());
    computer.accept(new EmailVisitor());
}
}
~~~ 
## Memento
~~~java
//The memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback). The memento pattern is implemented with three objects: the originator, a caretaker and a memento. The originator is some object that has an internal state. The caretaker is going to do something to the originator, but wants to be able to undo the change. The caretaker first asks the originator for a memento object. Then it does whatever operation (or sequence of operations) it was going to do. To roll back to the state before the operations, it returns the memento object to the originator. The memento object itself is an opaque object (one which the caretaker cannot, or should not, change). When using this pattern, care should be taken if the originator may change other objects or resources - the memento pattern operates on a single object. Classic examples of the memento pattern include the seed of a pseudorandom number generator (it will always produce the same sequence thereafter when initialized with the seed state)[citation needed][clarification needed] and the state in a finite state machine.
import java.util.List;
import java.util.ArrayList;
class Originator {
private String state;
// The class could also contain additional data that is not part of the
// state saved in the memento..

    public void set(String state) {
        this.state = state;
        System.out.println("Originator: Setting state to " + state);
    }
 
    public Memento saveToMemento() {
        System.out.println("Originator: Saving to Memento.");
        return new Memento(this.state);
    }
 
    public void restoreFromMemento(Memento memento) {
        this.state = memento.getSavedState();
        System.out.println("Originator: State after restoring from Memento: " + state);
    }
 
    public static class Memento {
        private final String state;

        public Memento(String stateToSave) {
            state = stateToSave;
        }
 
        // accessible by outer class only
        private String getSavedState() {
            return state;
        }
    }
}

class Caretaker {
public static void main(String[] args) {
List<Originator.Memento> savedStates = new ArrayList<Originator.Memento>();

        Originator originator = new Originator();
        originator.set("State1");
        originator.set("State2");
        savedStates.add(originator.saveToMemento());
        originator.set("State3");
        // We can request multiple mementos, and choose which one to roll back to.
        savedStates.add(originator.saveToMemento());
        originator.set("State4");
 
        originator.restoreFromMemento(savedStates.get(1));   
    }
}
~~~
