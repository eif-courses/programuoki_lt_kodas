---
# This is the icon of the page

# This is the title of the article
title: MVVM architektūra
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


Kotlin programavimo kalba yra suderinama su įvairiauisiomis šiuolaikinėmis programavimo aplinkomis IDE. Sintaksės susipažinimui galima naudoti Kotlin online: [https://play.kotlinlang.org/](https://play.kotlinlang.org/)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/aa8-OzSAZe8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Taip pat plačiau susipažinti su šia [JVM](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=33&displayformat=dictionary "Terminų ir santrumpų žodynas: JVM") programavimo kalba Kotlin galite susipažinti oficialioje svetainėje: [https://kotlinlang.org/](https://kotlinlang.org/).

Kotlin duomenų tipai: viskas yra objektai žemiau pateiktoje lentelėje nėra paminėtas tipas Any, kuris apibrėžia bet kokį tipą arba Kotlin kalboje vadinamas Unit, panašiai kaip [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalbos Object tipas:

<table border="1">

<tbody>

<tr>

<td> </td>

<td>

<p dir="ltr"><strong>DYDIS</strong></p>

</td>

<td>

<p dir="ltr"><strong>PAGAL NUTYLĖJIMĄ</strong></p>

</td>

<td>

<p dir="ltr"><strong>PAVYZDYS</strong></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Boolean</strong></span></p>

</td>

<td>

<p dir="ltr"><span>1 bit</span></p>

</td>

<td> </td>

<td>

<p dir="ltr"><span>True, false</span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Byte</strong></span></p>

</td>

<td>

<p dir="ltr"><span>8 bit</span></p>

</td>

<td rowspan="5">

<p dir="ltr"><span>Visus kintamuosius reikia inicijuoti</span></p>

<p><span> </span></p>

</td>

<td>

<p dir="ltr"><span>-127 iki 128</span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Char</strong></span></p>

</td>

<td>

<p dir="ltr"><span>16 bit</span></p>

</td>

<td>

<p dir="ltr"><span>‘A’, ‘\\n’, ‘\\101’, ‘2’ </span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Short</strong></span></p>

</td>

<td>

<p dir="ltr"><span>16 bit</span></p>

</td>

<td>

<p dir="ltr"><span>-1, 0, 1</span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Int</strong></span></p>

</td>

<td>

<p dir="ltr"><span>32 bit</span></p>

</td>

<td>

<p dir="ltr"><span>-2, -1, 0, 1, 2</span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Long</strong></span></p>

</td>

<td>

<p dir="ltr"><span>64 bit</span></p>

</td>

<td>

<p dir="ltr"><span>-2L, -1L, 0, 1L, 2L</span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Float</strong></span></p>

</td>

<td>

<p dir="ltr"><span>32 bit</span></p>

</td>

<td> </td>

<td>

<p dir="ltr"><span>3.4f, 3.9F</span></p>

</td>

</tr>

<tr>

<td>

<p dir="ltr"><span style="color: #0000ff;"><strong>Double</strong></span></p>

</td>

<td>

<p dir="ltr"><span>64 bit</span></p>

</td>

<td> </td>

<td>

<p dir="ltr"><span>3.7d, 3.5D</span></p>

</td>

</tr>

</tbody>

</table>

#### Kotlin kintamieji aprašomi naudojant **var** arba **val** raktinius žodžius:

- **var** - nusako jog kintamasis bus redaguojamas (angl. Mutable).

- **val** - nusako jog kintamasis nebus redaguojamas (angl. Immutable).

~~~kotlin
val skaicius = 50 // reikšmė, kurios negalime keisti (angl. immutable)
var vardas = "Petras" // Vardą galėsime pakeisti bet kada (angl. mutable)
~~~

#### Kotlin lateinit raktinis žodis:

~~~kotlin
lateinit var url: String // Pažadame, kad inicijuosime
println("Url adresas: $url") // Sulaužome pažadą (Error)
~~~

- lateinit - skirtas inicijuoti reikšmę vėliau.
- Jeigu sulaužome pažadą ir neinicijuojame, "url" kompiliatorius išves klaidos pranešimą:
- kotlin.UninitializedPropertyAccessException: lateinit property url has not been initialized

#### Kotlin by lazy raktinis žodis:

~~~kotlin
val valiuta: String = "EUR" 
fun main(args: Array<String>) {
  println("Pagrindinė valiuta!!!")
}
~~~

- Nepanaudojus kintamojo "valiuta" bus švaistoma atmintis, nes objektas yra inicijuotas.
- Šią problemą išspręsti naudosime by lazy.

~~~kotlin
val valiuta: String by lazy {
  "EUR" 
} 
~~~

- Panaudojus kintamąjį "valiuta" reikšmė bus inicijuota vieną kartą. Sekantį kartą reikšmė bus paimta iš CACHE atminties.
- Kintamasis valiuta su "lazy" nebus inicijuojamas tol, kol nebus panaudotas programiniame kode.
- lazy galima naudoti su var, val, nullable arba non-nullable.
- Thread safety - pirma gija, kuri inicijavo reikšmę, visos kitos gijos matys reikšmę iš CACHE atminties.

#### Kotlin String interpoliacija ```"${10+20}"```:

~~~kotlin
val suma: Int = 10 + 20
var tekstas: String = "Suma=$suma"
println(tekstas) // Suma=30
tekstas = "Suma padauginta iš 5= ${suma * 5}"
println(tekstas) // Suma padauginta iš 5=150
~~~

Kotlin ( ? ) - null referece:
- Pagal nutylėjimą Kotlin neturi "null reference" ir tikslas yra eliminuoti NullPointerException.
- Numatyta galimybė naudoti null (nullable references). Kam to reikia? Todėl, kad daugelis bibliotekų yra parašyti [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programavimo kalba ir tipai grąžina nullable reference.

~~~kotlin
var zinute: String = "Sveikas :)"
zinute = null // kompiliatoriaus klaida

var zinute: String? = "Sveikas :)"
zinute = null // Viskas gerai
~~~

- Kotlin ( ?: ) - Elvis Operatorius*
- Jeigu b yra null tada grąžiname -1 (Įprastinis sakinio užrašymas):

~~~kotlin
val l: Int = if (b != null) b.length else -1
~~~

- Galima pakeisti į supaprastintą išraišką: (Elvis operatorius ?:)

~~~kotlin
val l = b?.length ?: -1
~~~

- Lambda išraiška bus vykdoma jeigu reikšmė bus ne null.

~~~kotlin
val l = b?.length.let{print("Jei ne NULL")}
~~~

- Kotlin ( !! ) - operatorius not-null

~~~kotlin
val l = b!!.length
~~~

- Jeigu b yra null tada kompiliatorius išves pranešimą kotlin.KotlinNullPointerException
- Saugus tipų konvertavimas jeigu grąžinamas objektas yra kito tipo jis grąžins null vietoj ClassCastException.

~~~kotlin
val aInt: Int? = a as? Int
~~~

- Kotlin Kolekcijos su null tipo objektais:

~~~kotlin
val nullList: List<Int?> = listOf(1, 2, null, 4)
val intList: List<Int> = nullList.filterNotNull()
~~~

Jeigu **asmuo** arba **asmuo.skyrius** yra null, tada funkcija println(..) nebus iškviečiama:

~~~kotlin
asmuo?.skyrius?.direktorius = println("VISKAS TVARKOJE!")
~~~

Kotlin intervalas arba ciklas for:

~~~kotlin
for (i in 1..4) print(i) //o: 1, 2, 3, 4

for (i in 4 downTo 1) print(i)//o: 4, 3, 2, 1

for (i in 1..4 step 2) print(i)//o: 1, 3

for (i in 4 downTo 1 step 2) print(i)//o: 4, 2

for (i in 1 until 10) println(i)//o: nuo 1 iki 9
~~~

Funkcijos - aprašomos naudojant ```fun <pavadinimas>(<Parametrų sąrašas>) : <Grąžinama reikšmė>{....}```, funkcijos parametrams galima nurodyti reikšmę pagal nutylėjimą.

~~~kotlin
fun sudeti(a: Int = 50, b : Int): Int{

  return a + b

}

// Sutrumpintas variantas atliekantis tą patį veiksmą

fun sudeti(a: Int = 50, b : Int) = a + b
~~~

Kotlin funkcija, kuri nieko negrąžina aprašoma taip:

~~~kotlin
fun zinute(tekstas: String): Unit{ // Pagal nutylėjimą grąžina Unit tipą (Unit neprivaloma rašyti).
  println("Sveikas: $tekstas")
}
~~~

Kotlin (funkcijos - vararg, \* - spread operatorius)

vararg (kintamas param skaičius) - norint perduoti kolekciją kaip vararg reikia naudoti spread operatorių \*.

~~~kotlin
fun spausdinti(vararg zodziai: String) {
  print(zodziai)
}
fun main(args: Array<String>) {// * - spread
  spausdinti(zodziai = *arrayOf("ok", "bye", "yes"))
}
~~~

Kotlin (funkcijos, su lambda parametru). Jeigu funkcijos paskutinis parametras yra lambda galima perduoti be skliaustų ():

~~~kotlin
class HTML {
  fun body() { ... }
}
fun html(init: HTML.() -> Unit): HTML {
  val html = HTML()  // create the receiver object
  html.init()        // pass the receiver object
 return html
}
html {       // lambda with receiver begins here
  body()   // calling a method on the receiver
}
~~~

Kotlin (funkcijos [Generic](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=44&displayformat=dictionary "Terminų ir santrumpų žodynas: generic") tipas):

~~~kotlin
fun <T> singletonList(item: T): List<T> { 
  return listOf(item) 
}
~~~

Kotlin high order funkcijos: run, apply, also, let, with.
High order funkcijos - funkcijos, kurios automatiškai įvykdo funkciją esančia bloko viduje:

~~~kotlin
data class Person(var name: String, 
  var age: Int, 
  var job: String){
  fun info() = this.toString()
}
fun String.println() = println(this) // Extension funkcija
~~~

Įprastinis užrašymo būdas:

~~~kotlin
fun main(args: Array<String>) {
  val jonas = Person("Jonas", 28, "Dėstytojas")
  val petras = Person("Petras", 20, "Programeris")
  val vyresnis = if(jonas.age >= petras.age) jonas else petras
  vyresnis.info()
} 
~~~

**run { }** - funkcija įvykdo bloke esančią funkciją ir gražina rezultatą: šiuo atveju jonas arba petras egzempliorių.

~~~kotlin
run {
  if(jonas.age >= petras.age) jonas else petras
}.info()
jonas.run {// jonas?.run jeigu null run nevykdys  
   age = 30
   "jono amzius: $age"
 }.println()
~~~

**with { }** - bloke aprašyti algoritmą nereikia kartoti objekto egzemplioriaus pvz: "jonas.age", "jonas.job" pavadinimo:

~~~kotlin
with(jonas) {
   age = 29
   "jono amzius: $age"
 }.println()
~~~

**let { }** - galima pervadinti objekto egzemplioriaus pavadinimą ir nurodyti kokį rezultatą grąžiname:

~~~kotlin
petras.let{pet ->
   pet.age = 35
   pet.job = "Picos kepėjas"
   "Petro profesija: ${pet.job}"
}.println()
~~~

**apply{ }** - funkcija priima objekto instance (this) ir grąžina modifikuoto instance reference (this):

~~~kotlin
petras.apply {
 age = 40
 job = "Skyriaus vadovas"
}.info() 
~~~

**also { }** - funkcija priima (**it**) parametrą ir grąžina modifikuoto instance reference (this). Ši funkcija leidžia pervadinti objekto instance į norimą pavadinimą:

~~~kotlin
petras.also {
 it.age = 35
 it.job = "Picos kepėjas"
}.info()
~~~

**Kotlin klasės**

Kotlin klasė - Tuščią klasę aprašyti galima tiesiog naudojant raktinį žodį ```class<pavadinimas>```:

~~~kotlin
class Zmogus
~~~

Pirminis konstruktorius - aprašomas tiesiai po klasės pavadinimo skliausteliuose, o jo parametrai kaip ir įprasta aprašant bet, kurią funkciją:

~~~kotlin
class Zmogus(vardas:String, pavarde: String)
~~~

Papildomas konstruktorius - Papildomą konstruktorių galima aprašyti tokiu būdu:

~~~kotlin
class Zmogus(vardas:String, pavarde: String){
 constructor(vardas: String,
             pavarde: String,
             amzius: Int): this(vardas, pavarde)
}
~~~

Kadangi klasės pirminis konstruktorius neturi aprašomojo bloko vykdyti kodui, papildomai yra numatytas init blokas leidžiantis inicijuoti bloką/-us, kai sukursime Objekto egzempliorių įvykdysime visus žemiau aprašytus init blokus iš eilės.

~~~kotlin
class Zmogus(vardas:String, pavarde: String){
 init {
   println("Zmogaus vardas: ${vardas}")
 }
}
~~~

Taip pat konstruktoriaus parametrus galima pasiekti ir aprašant klasės kintamuosius (angl. properties):

~~~kotlin
class Zmogus(vardas:String, pavarde: String){
 val vardasDidziosiomis = vardas.toUpperCase()
}
~~~

Konstruktorius gali turėti read-only - val (tik skaityti) arba Mutable - var (kintama reikšmė):

~~~kotlin
class Zmogus(val vardas:String, var pavarde: String) 
~~~

Jeigu pirminis konstruktorius yra pažymėtas anotacija arba uždėtas motomumo modifikatorius pvz: public visada privalote naudoti constructor raktinį žodį.

~~~kotlin
class Zmogus public @Inject constructor(val vardas:String, var pavarde: String)
~~~

Uždrausime kurti klasės egzempliorių, jeigu nenorime turėti public default konstruktoriaus paskelbiame private.

~~~kotlin
class NeleidziuKurtiEgzempl private constructor()
~~~

Norint sukurti klasės egzempliorių rekomenduojama naudoti val.

~~~kotlin
val saskaita = Invoice()
val klientas = Customer("Petras Petraitis")
~~~

Kotlin paveldėjimas:

~~~kotlin
class Pavyzdys 
~~~

Pagal nutylėjimą ši klasė paveldi Kotlin tipą Any, tai nėra analogas [java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java").lang.Object klasei.

Any klasė turi šias funkcijas: equals(), hashCode(), toString(). Kotlin negalima paveldėti klasių, kurios nėra pažymėtos open. Dvitaškis nurodo jog paveldėsime klasę Tėvinė.

~~~kotlin
open class Tėvinė(p: Int)
class Vaikinė(p: Int) : Tėvinė(p)
~~~

**Delegation** - užduoties perdavimas kitam pvz. Yra du automobiliai lengvasis ir krovininis, kartais pervežant krovinį lengvasis automobilis tiesiog dėl techninių kliūčių negali vežti krovinio todėl perduoda jį krovininiui automobiliui.

**Observable** - Kai keisime reikšmę automatiškai įvykdys kodą esantį **{}.** Taip pat visada gausime senąją reikšmę bei naująją reikšmę, esant poreikiui galima gauti ir pradinę reikšmę.

~~~kotlin
class User {
 var name: String by Delegates.observable("<no name>") {
     prop, old, new ->
   println("$old -> $new")
 }
}
~~~

**Kotlin data class** Kotlin turi galimybę įgyvendinti duomenų klases vadinamas data class žemiau matysite kaip nesudėtingai galima aprašyti senąsias [JAVA](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") bean klases (POJO / POCO):

~~~kotlin
data class Studentas(val vardas: String, var amzius: Int)
~~~

**Pastaba**. data class negali būti paskelbtos abstrakčiomis klasėmės, taip pat negali būti galutinės (angl. sealed) arba vidinės (angl. inner). Sukūrus data class yra sugeneruojami šie metodai: get/set, toString, hashCode, copy metodai. Norint nukopijuoti reikšmę iš sukurto objekto egzemplioriaus pvz:

~~~kotlin
val petriukas = Studentas("Petriukas", 22)
    val kitasPetriukas = petriukas.copy(amzius = 25)
    println(kitasPetriukas) // Studentas(vardas=Petriukas, amzius=25)
~~~

**Data Classes and Destructuring Declarations**

Component functions generated for data classes enable their use in destructuring declarations:

~~~kotlin
val jane = User("Jane", 35) 
val (name, age) = jane
println("$name, $age years of age") // prints "Jane, 35 years of age"
~~~

**Standard Data Classes**

The standard library provides Pair and Triple. In most cases, though, named data classes are a better design choice, because they make the code more readable by providing meaningful names for properties.

### Overloaded methods

Overloaded metodai [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalboje aprašomi kiekvienam atvejui turi skirtis parametrų skaičius arba perduodamas tipas pvz: turime tokią aibę metodų:

~~~java
void metodas(){}
  void metodas(int a){}
  void metodas(double c){}
  void metodas(int a, double c){}
  void metodas(double c, int a){}
~~~

Kotlin kalboje šiek tiek paprasčiau kadangi yra įvedami įvardintieji parametrai (angl. named parameters) ir funkcijų parametrai gali turėti reikšmę pagal nutylėjimą (angl. by default) kas įgalina paprastesnį ir lankstesnį overloaded metodų aprašymą. Apžvelkime prieš tai aprašytą [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") metodą realizuojant analogiškus metodus naudojant Kotlin programavimo kalbą. Kadangi Kotlin neturi metodų turi funkcijas tada galima aprašyti funkciją atitinkančią prieš tai aprašytuosius metodus [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalboje.

~~~kotlin
fun metodas(a: Int = 0, c: Double = 0.0) { // Žymiai paprasčiau nereikia aprašyti visų įmanomų atvejų!!!
    metodas()
    metodas(10)
    metodas(c = 33.9)
    metodas(55, 22.9)
    metodas(c = 22.8, a = 2)
}
~~~

**Dar vienas pavyzdys palyginimui Java prieš Kotlin aprašant overloaded metodus**

~~~java
//--------------------------------------------Java-----------------------------------------------//
package overloadedMethods;

public class OverloadedMethodJava {
    void printMessage(String message){ 
      System.out.printf("Message: %s\n", message); 
    }
    void printMessage(String message, String prefix){ 
      System.out.printf("Message: %s, Prefix: %s\n", message, prefix); 
    }
    void printMessage(String message, String prefix, String suffix){ 
      System.out.printf("Message: %s, Prefix: %s, Suffix: %s\n", message, prefix, suffix); 
    }

    public static void main(String[] args) {
        new OverloadedMethodJava().printMessage("Hello");
        new OverloadedMethodJava().printMessage("Hello", "WithPRefix");
        new OverloadedMethodJava().printMessage("Hello", "WithPRefix", "AndSuffix");
    }
}
~~~

~~~kotlin
//--------------------------------------------Kotlin-----------------------------------------------//
package overloadedMethods

class OverloadedMethodKotlin {
    fun printMessage(message: String, prefix: String = "", suffix: String = "") {
        println("$message $prefix $suffix")
    }
}
fun main(args: Array<String>) {
    val overloaded = OverloadedMethodKotlin() // Immutable readonly
    overloaded.printMessage("Hi im Kotlin")
    overloaded.printMessage("Hi im Kotlin", "with prefix")
    overloaded.printMessage("Hi im Kotlin", "with prefix", "AndSuffix")
    // Bet kokia tvarka pagal vardą parametro
    overloaded.printMessage(prefix = "Hello im Prefix", message = "im Kotlin", suffix = "And Suffix")
~~~

### Kotlin Pairs ir Triples

~~~kotlin
fun grazinaPora(): Pair<String, String>{
    return Pair("Kaire", "Desine")
}
fun init(){
    val pora = grazinaPora()
    println("Pirmas narys: ${pora.first}, Antras narys: ${pora.second}")
}
~~~

Išvedamas tekstas į ekraną: `Pirmas narys: Kaire, Antras narys: Desine.` Aiškumui įvesti galima pakeisti first, second,…, ir t.t. į savo sugalvotus pavadinimus pvz:

~~~kotlin
fun init(){
    val pora = grazinaPora()
    val (kaire_ranka, desine_ranka) = grazinaPora()
    println("Pirmas narys: "+ kaire_ranka + ", Antras narys:" + desine_ranka)
    println("Pirmas narys: ${pora.first}, Antras narys: ${pora.second}")
}
~~~

Jeigu reikšmė yra nesvarbi naudojant reikšmių pervadinimą (angl. destructuring declarations) galima pavadinti naudojant underscore:

~~~kotlin
 val (_, kita_reiksme) = grazinaPora()
~~~

### TypeAlias Kotlin

Jeigu naudosime šį typealias mes pakeičiame String į Int, gali būti situacija, kai reikia modifikuoti atgyvenusį kodą (angl. deprecated), kadangi pakeitus visur kompiliatorius pažymės raudonai tada galie nesunkiai pašalinti šį kodą arba pakeisti.

~~~kotlin
typealias String = Int
~~~

### Conditions kotlin -> rengiama…

### Extension funkcijos

Šios extension funkcijos yra labai patogios jeigu nusprendėte aprašyti naują funkciją jau egzistuojančioje klasėje. Nereikia papildomai sukurti klasės tada paveldėti ją ir galiausiai papildyti nauju metodu. Kotlin naudoja šią paprastą konstrukciją:

~~~kotlin
// Duomenų klasė Studentas 
data class Studentas(val vardas: String, var amzius: Int)

// Esamom klasėm "Bet kuriai egzistuojančiai" galima papildyti naujomis funkcijomis pvz: 
fun Studentas.suteiktiStipendija(){
    println("Studentui suteikta stipendija")       
}

// Klasė Studentas papildyta nauja funkcija tikrinam naujai sukurtą metodą.
fun extensionFunkcijosTestas(){
    val stud = Studentas("Joniukas", 15)
    stud.suteiktiStipendija()
}
~~~

Į ekraną bus išvedamas šis tekstas:

`Studentui suteikta stipendija`

Taip pat dar vienas pavyzdys turime String klasę, kuria papildysime nauju metodu pvz:

~~~kotlin
fun String.pasisveikinimas(){
    println("Sveiki aš esu simbolių eilutė: (angl. String)")
}
fun extensionStringTestas(){
    val testas = String()
    testas.pasisveikinimas()
    "bet_kokia_simboliu_eilute".pasisveikinimas()
}
~~~

Į ekraną bus išvedamas šis tekstas:

~~~kotlin
Sveiki aš esu simbolių eilutė: (angl. String)
Sveiki aš esu simbolių eilutė: (angl. String)
~~~

Funkcija skaičiuojanti faktorialą naudojant rekursiją.

### Operatorių perkrovimas

Operatorių pekrovimas yra tik Kotlin kalboje panašumai lyginant su C++ kalba, kurioje taip pat yra galimybė naudoti perkrautuosius operatorius. Žemiau yra pateikiamas pavyzdys kaip galima panaudoti (plus (+)) operatorių norint susumuoti keletą skirtingų objektų pagal svorį:

~~~kotlin
package overloadedoperators

enum class MatavimoVnt(val svoris: Int){
    KILOGRAMAS (1000),
    GRAMAS (1),
    TONA (1_000_000)
}
interface VaisiausSvoris{
     fun svoris(): Int
}
class Pintine {
    private val sarasas : MutableList<Vaisius> = mutableListOf()
    fun idetiIpintine(vaisius: Vaisius) = sarasas.add(vaisius)
    fun pasverti(matas: MatavimoVnt = MatavimoVnt.GRAMAS):Int {
       return sarasas.sumBy { it -> it.svoris } / matas.svoris
    }
}

// Perkrauto operatoriaus (angl. overloaded operator) aprašymas 
open class Vaisius(val pavadinimas: String, var svoris: Int){
    operator fun plus(vaisius: Vaisius) : Vaisius{
        return Vaisius(pavadinimas, svoris + vaisius.svoris)
    }
}

class Slyva(pavadinimas:String, svoris: Int):
        Vaisius(pavadinimas, svoris), VaisiausSvoris{
    override fun svoris(): Int = svoris
}
class Kriause(pavadinimas:String, svoris: Int):
        Vaisius(pavadinimas, svoris), VaisiausSvoris{
    override fun svoris(): Int = svoris
}
class Obuolys(pavadinimas: String, svoris: Int):
        Vaisius(pavadinimas, svoris), VaisiausSvoris{
    override fun svoris(): Int = svoris
}

fun main(args: Array<String>) {
    val slyva = Slyva("Anašpet", 100)
    val obuolys = Obuolys("Auksis", 300)
    val kriause = Kriause("Aluona ", 350)
    var rezultatas = slyva + obuolys + kriause

    val pintine = Pintine()
    for (i in 1..20000) {
        pintine.idetiIpintine(slyva)
        pintine.idetiIpintine(obuolys)
        pintine.idetiIpintine(kriause)
    }
    println("Viso vaisių idėtų į pintinę: ${pintine.pasverti()} g")
    println("Viso vaisių idėtų į pintinę: ${pintine.pasverti(MatavimoVnt.KILOGRAMAS)} kg")
    println("Viso vaisių idėtų į pintinę: ${pintine.pasverti(MatavimoVnt.TONA)} t")
    println("Viso vaisių naudojant overloaded operatorių (plus (+)): ${rezultatas.svoris} g")
}
~~~

Įvykdžius programą į ekraną išvestas tekstas:

~~~kotlin
Viso vaisių idėtų į pintinę: 15000000 g
Viso vaisių idėtų į pintinę: 15000 kg
Viso vaisių idėtų į pintinę: 15 t
Viso vaisių naudojant overloaded operatorių (plus (+)): 750 g
~~~

Sekantis pavyzdys iliūstruoja situacija kada naudojant įprastinį aprašymą BigDecimal klasės kodo skaitomumas suprastėja, šiai problemai išspręsti galima naudoti overloaded operatorius.

~~~kotlin
package overloadedoperators
import java.math.BigDecimal
import java.math.BigDecimal.ONE

class Algoritmas {
    fun faktorialas(n: BigDecimal): BigDecimal {
        return if (n <= BigDecimal(1)) ONE else faktorialas(n - BigDecimal(1)) * n
    }
}
fun main(args: Array<String>) {
    val fakt = Algoritmas()
    println(fakt.faktorialas(BigDecimal(30_000)))
}
~~~

Įvykdžius šį kodą gausime Runtime klaidą kadangi tokio dydžio skaičiui reikia padidinti steką:

~~~java
Exception in thread "main" java.lang.StackOverflowError
	at java.base/java.math.BigDecimal.valueOf(BigDecimal.java:1221)
	at java.base/java.math.BigDecimal.add(BigDecimal.java:4783)
	at java.base/java.math.BigDecimal.add(BigDecimal.java:4790)
	at java.base/java.math.BigDecimal.subtract(BigDecimal.java:1460)
	at overloadedoperators.Algoritmas.faktorialas(Faktorialas.kt:7)
~~~

Naudojant overloaded parametrus turėsime tokią realizaciją taip pat pakeisime taip kad ištaisyti prieš tai įvykusią klaidą kotlin kalboje yra naudojamas žodis **tailrec**:

~~~kotlin
package overloadedoperators
import java.math.BigDecimal
import java.math.BigDecimal.ONE

class Algoritmas {
    tailrec fun faktorialas(n: BigDecimal, result: BigDecimal = ONE): BigDecimal {
        return if (n <= 1) result else faktorialas(n - 1, result * n)
    }
}

operator fun BigDecimal.minus(n: Int) = this.minus(BigDecimal(n))
operator fun BigDecimal.compareTo(n: Int) = this.compareTo(BigDecimal(n))

fun main(args: Array<String>) {
    val fakt = Algoritmas()
    println(fakt.faktorialas(BigDecimal(30_000)))
}
~~~

Įvykdžius programą bus paskaičiuojamas 30 000 faktorialas.

### Filter usage collections

~~~java
//--------------------------------------------Java----------------------------------------------//
public class ListExamples {
    public static void main(String[] args) {
        List<Customer> customers = new ArrayList<>(List.of(
                new Customer("Petras"),
                new Customer("Ona"),
                new Customer("Birute")
        ));
        customers.add(new Customer("Petras"));
        System.out.println("----------------------------");
        customers.forEach(System.out::print);
        IntStream intStream = IntStream.range(1, 100);
        intStream.filter(v -> v < 100)
                .mapToDouble(v -> v % 20)
                .forEach(System.out::print);
    }
}
~~~

~~~kotlin
//--------------------------------------------Kotlin-----------------------------------------------//
package listOfNumbers
// In JAVA CUSTOMER CLASS AROUND 100 lines with basic methods:)
data class Customer(val name: String)
fun main(args: Array<String>) {
    val customers = ArrayList<Customer>(listOf<Customer>(
            Customer("Petras"),
            Customer("Jonas"),
            Customer("Jonas")
    ))
    customers.add(Customer("Ona"))
    println("--------------------------------")
    customers.forEach { print(" " + it.name) }

    // number 1 to 100 similar to IntStream in JAVA
    val numbers = 1..100
    numbers.filter { it < 100 }
            .map { it % 20 }
            .forEach { print(" " + it) }
}
~~~

### Singleton Design pattern[#](https://eif-courses.github.io/java/domains/KOTLIN/#singleton-design-pattern)

Klasikinis projektavimo šablonas Singleton naudojant [java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programavimo kalbą.

~~~java
//--------------------------------------------Java-----------------------------------------------//
package singletonai;

public class Singleton {
    private static Singleton instance = null;
    protected Singleton() {
        // Exists only to defeat instantiation.
    }
    public static Singleton getInstance() {
        if(instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
~~~

To pačio projektavimo šablono aprašymas naudojant programavimo kalbą kotlin.

~~~kotlin
//--------------------------------------------Kotlin-----------------------------------------------//
package singletonai
object SingletonObject{
    val property = "kazkas"
}
~~~
