---
# This is the icon of the page

# This is the title of the article
title: Spring Boot karkasas
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

Spring karkasas sudarytas iš apie 20 astkirų modulių skirtų kurti programinę įranga naudojant [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") kalbos plain old [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") objects (POJO). Tai įgalina galimybę prisitaikyti prie [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") SE modelio programavimo ir pilnai arba dalinai kuriant [JAVA](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") EE programinę įrangą skirtą įmonėms. Spring platformos/karkaso nauda:

* Neturint transaction [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API") vykdyti duomenų bazės tranzakcijas.
* Sukurti metodą, kuris atlieka prisijungimą prie nutolosios paslaugos neturint nuotolinio prisijungimo [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API").
* Sukurti žiniučių apdorojimo metodą be papildomo JMS [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API") panaudojimo.
* Daugelis populiariausių paslaugų yra numatyta su šiuo karkasu pvz. Monitoringo programa, greitas Web servisų sūkurimas ir paleidimas pvz. REST [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API"), mikroservisų sukūrimas, jar archyvo sukūrimas, kuriame yra visa reikiama konfigūracija: Aplikacijų serveris, duomenų bazė ir papildomi įrankiai paleisti programinei įrangai.

Spring karkaso sandara žiūrėti 5.1 paveikslėlį.

![Related image](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/06/ecosys.png)

5\.1 pav. Spring karkaso sandara

Spring projekto kurimas yra gan paprastas kadangi tai yra suderinama su Maven ir Gradle projekto kūrimo įrankiais.

Naudojantiems Maven konfigūraciją sukurti minimalią Spring Web aplikaciją pakanka pridėti startinį bibliotekų rinkinį "spring-boot-starter-web":

~~~xml
<parent>
    <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.1.RELEASE</version>
</parent>
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
~~~

Gradle naudotojiems analogiškai bus sukurta Spring Web aplikacija pridėjus startinį bibliotekų rinkinį "spring-boot-starter-web":

~~~bash
dependencies {
  compile("org.springframework.boot:spring-boot-starter-web:1.5.1.RELEASE")
}
~~~

Pradedantiesiems naudoti Spring karkasą rekomenduojama sukurti pirmąją aplikaciją naudojant Spring Boot. Spring Boot yra spartus būdas kurti aplikacijas Spring karkaso pagrindu, kurios yra paruoštos produkcijai. Projekto konfigūravimas vietoje programinio kodo rašymo tai siūlo Spring Boot. Taip yra paspartinamas procesas kurti Spring aplikacijas kiek įmanoma greičiau.

Nuo ko pradėti plačiau pasiskaityti galite pagal dominančią sritį oficialioje Spring karkaso svetainėje kur yra pateikti aplikacijų pavyzdžiai su detaliomis pamokomis ir programinio kodo pavyzdžiais rasite čia: [https://spring.io/guides](https://spring.io/guides).

Modernios programavimo aplinkos IDE turi galimybę pasirinkti dažniausiai naudojamas bibliotekas pasirenkant iš duoto sąrašo naudojant Spring Initializr įrankį. Įrankis skirtas sugeneruoti Spring Boot startinį projektą su pasirinktomis bibliotekomis. Jeigu Spring Initializr nėra įdiegtas, galima naudotis šio įrankio internetinę versiją ir sukurti projektą, kuris yra atsiunčiamas ir paleidžiamas naudojantis Maven arba Gradle įrankiu. Detaliau Spring Initializr įrankį galite panagrinėti šiuo adresu: [http://start.spring.io/](http://start.spring.io/).

Naudojantis Spring DATA kuriant REST [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API"), įprastinės SQL užklausos yra aprašomos naudojant [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") interfeisą ir SQL užklausa yra aprašoma tiesiog metodo pavadinime:

~~~java
@RepositoryRestResource
interface ClassRoomRepository extends CrudRepository<ClassRoom, Long>{
  List<ClassRoom> findByEmployeesFirstNameContains(@Param("q")String firstName);
}
@RepositoryRestResource
  interface EmployeeRepository extends CrudRepository<Employee, Long>{
    List<Employee> findTop5ByFirstName(@Param("q") String firstName);
    List<Employee> findDistinctByRoleNotIn(@Param("pareigos") String role);
}
~~~

**Plačiau apie Spring Data -** [https://www.youtube.com/watch?v=wZKmA6XodNE](https://www.youtube.com/watch?v=wZKmA6XodNE)

Norint sukurti Web aplikaciją su grafine vartotojo sąsaja naudojant Spring Boot karkasą yra naudojamas įprastinis MVC projektavimo šablonas. Modelis tai paprastas [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") POJO. Vaizdas (angl. View) yra naudojami template engines, kurių yra labai daug. Pasirinktinai galite rinktis bet kurį iš siūlomų variklių skirtų kurti grafinę vartotojo sąsają:

JSP + [JSTL](https://jstl.java.net/), [Thymeleaf](http://www.thymeleaf.org/), [Freemarker](http://www.freemarker.org/), [Handlebars](https://github.com/jknack/handlebars.java), [jtwig](https://github.com/jtwig/jtwig), [Velocity](http://velocity.apache.org/), [HTTL](http://httl.github.io/en/), [Scalate](http://scalate.fusesource.org/), [Jade](https://github.com/neuland/jade4j), Mustache - Based on [JMustache](https://github.com/samskivert/jmustache), [Pebble](http://www.mitchellbosecke.com/pebble/home) ir kiti.

Kad atvaizuoti vaizdą naršyklėje reikia duomenų iš "BackEnd", šie duomenis yra perduodami Controller pagalba į View. IntelliJ IDEA pagal nutylėjimą kuriant Spring Boot projektą yra siūlomas Thymeleaf šablonų variklis. Štai taip atrodo šio šablonų variklio View dokumentas:

~~~html
<div>
  <form class="form-horizontal" th:object="${product}" th:action="@{/product}"method="post">
  <input type="hidden" th:field="*{id}"/>
  <input type="hidden" th:field="*{version}"/>
  <div class="form-group">
    <label class="col-sm-2 control-label">Description:</label>
    <div class="col-sm-10">
     <input type="text" class="form-control" th:field="*{description}"/>
</div>
~~~

Įvykdžius šį programinį kodą bus atvaizduotas šis vaizdas žr. 5.3 pav.

![](https://lh4.googleusercontent.com/0LWSYi0gDDWX-Qj00E0yCS-CkMCzgj9yr1iItbKY33dpfMf5af78Ykxd-odN4HlbLM4a_oBxJvMZrOkcd_uovvhfM5B4swfZQt3PzMU_q3UDvLqyggk0KWnhH_IwDcGVCoZH0OJfRvw)

5\.3. pav. Thymeleaf šablonų variklio rezultatas

Kaip sukurti Spring Web MVC projektą galite vadovautis šiuo pavyzdžiu: [https://springframework.guru/spring-boot-web-application-part-4-spring-mvc/](https://springframework.guru/spring-boot-web-application-part-4-spring-mvc/). Arba vadovautis šiais žingsniais:

* Pasirinkti programinę įrangą pvz: IntelliJ IDEA.
  1. Pasirinkti projektų kūrimo įrankį: Maven, Gradle ar kitą, startinę konfigūraciją galima rasti oficialioje svetainėje: [https://spring.io/guides](https://spring.io/guides).
  2. Siūloma konfigūracija (žr. 5.4 pav.):
    * **Web** - Full Stack programa.
    * **Lombok** - kuriant entity nereikia get/set.
    * **Security** - apribojimai ir papildomos funkcijos.
    * **Thymeleaf** - varyklis generuoti šablonus/html.
    * **JPA** - [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") persistence [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API") sąsaja su DB.
    * **MySQL** - duomenų bazė.
    * **DevTools** - Nereikia perkrauti visos programos iš naujo.

      ![](https://lh3.googleusercontent.com/c4sLk7PVvv5jlJBr5g9aVmNO9i7uXeRyp9NTHNhBjlANjQkdQ2_yWMpRRgxO193iJ0JYOfIIwYYeKdIaWoNvLP0kWPn1VXj-5h0fF1LbG1sZWKR9OtIX02HcfmHtA_4I6lqeY4NuThU)5.4 pav. Siūlomas Spring Initializr įrankio bibliotekų sąrašas
  3. **applications.properties** dokumente priklausomai nuo pasirinktos duomenų bazės, nurodyti prisijungimo informacija:

     ~~~properties
     spring.datasource.url=jdbc:mysql://localhost:3306/test
     spring.datasource.username=root
     spring.datasource.password=slaptažodis
     spring.datasource.driverClassName=com.mysql.jdbc.Driver
     ~~~
  4. ![](https://lh4.googleusercontent.com/-JwW3rEgkcQPjwENnxfDXHie1Cg9v-7yXE4V9G8eeALe3FnOSpUQi0aVsCtqrkNk2axLAMJjm0_ijE1gdR17x2uIufWSVOd3QkPM9brY48Y1JSr0C0W-kjtfWSVx86AGV5B8nI-KOAo)
  * Naudojantis IntelliJ IDEA spausti:View > Tool windows > Database,

    Iššokusiame lange ![](https://lh4.googleusercontent.com/Dy744iM35RBACRPSkmbJTTCyao2fBarSoPe-VcBr4tzbNwK38WOtE_kdE-74RdOKdh5lp-eQj0v1rvSmcCa3Cc-t-CVjfuBL3VexPCgKO2SVOkM7Kgc53EvXMIBr9MqDIdHYjAkINeU) pasirinkti + simbolį prijungti savo egzistuojančią arba naują duomenų bazę.

    Papildomai privalote atnaujinti savo Maven ar Gradle dependency, jeigu keitėte duomenų bazę ar norite pakeisti į kitą.

    Pastaba! Įvykdyti savo programą ir įsitikinti jog viskas sklandžiai veikia.

    [http://localhost:8080/](http://localhost:8080/) - pagal nutylėjimą, kadangi naudojama Security yra:

    Prisijungimo vardas: user;

    Slaptažodis: default security password: 263196a4-313b-4d19-919c-97aebbbce72e (Rasite konsolėje kompiliuojant savo programą).
  * sukurti klasę Security ir ją įkelti į configuration package

    ~~~java
    @Configuration
    public class Security extends WebSecurityConfigurerAdapter{
      @Override
      protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/").permitAll();
        http.csrf().disable();
        http.headers().frameOptions().disable();
      }
    }
    ~~~
  * Siūloma sukurti [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") Packages taip sudarant projekto struktūrą:
  * ![](https://lh3.googleusercontent.com/jxwt968azSRJXG0i4wx6IIC-gdgiYsGrNNGg5amR3yE8Sed23GOW_WrEEqO8g9t12mYx9M9ZkuGISxFQhiKiIpHZB-OhtNuqVJ1mAD3Q7nV34Kar0-YkO_A1_T_vxENM5PDrIsAVtGA)
  * Domain package sukurti Entity (Modelis) priklausomai nuo pasirinktos temos pavyzdžiui: **Gyvunas.[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java")**, kadangi naudojama Lombok įprastinis [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") POJO atrodo ženkliai paprastesnis:

    ~~~java
    @Data
    @Entity
    public class Gyvunas {
      @Id @GeneratedValue Long id;
      private String amzius;
      private String pavadinimas;
      protected Gyvunas(){}
      public Gyvunas(String amzius, String pavadinimas) {
        this.amzius = amzius;
        this.pavadinimas = pavadinimas;
      }
    }
    ~~~
  * Sukurti repozitoriją **GyvunasRepository.[java ](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java")**ir ją patalpinti į repositories package:

    ~~~java
    interface GyvunasRepository extends CrudRepository<Gyvunas, Long>{}
    ~~~
  * Service kataloge sukurti interfeisą: GyvunasService.[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") ir jo įgyvendinimą: GyvunasServiceImpl.[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java"):

    ~~~java
    interface GyvunasService {
      Iterable<Gyvunas> atvaizduotiGyvunus();
      Gyvunas gyvunasPagalId(Integer id);
      Gyvunas issaugotiGyvuna(Gyvunas gyvunas);
      void panaikintiGyvuna(Integer id);
    }
    ~~~

    ~~~java
    @Service 
    class GyvunasServiceImpl implements GyvunasService{
      private GyvunasRepository gyvunasRepository;
      @Autowired
      public void setGyvunasRepository(GyvunasRepository gyvunasRepository) {
        this.gyvunasRepository = gyvunasRepository;
      }
      @Override
      public Iterable<Gyvunas> atvaizduotiGyvunus() {
        return gyvunasRepository.findAll();
      }
      @Override
      Gyvunas gyvunasPagalId(Integer id){
        return gyvunasRepository.findOne(id);
      }
      @Override 
      Gyvunas issaugotiGyvuna(Gyvunas gyvunas){
        return gyvunasRepository.save(gyvunas);
      }
      @Override 
      void panaikintiGyvuna(Integer id){
        return gyvunasRepository.delete(id);
      }
    }
    ~~~
  * Sukurti klasę **UzpildomDuomenimis.[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java")** skirtą užpildyti duomenų bazę testiniais duomenimis:

    ~~~java
    @Component
    public class UzpildomDuomenimis implements ApplicationListener<ContextRefreshedEvent>{
      private GyvunasRepository gyvunasRepository;
      @Autowired
      public void setGyvunasRepository(GyvunasRepository gyvunasRepository) {
        this.gyvunasRepository = gyvunasRepository;
      }
      @Override
      public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        for (int i = 0; i < 15; i++)
          gyvunasRepository.save(new Gyvunas("belekas", "Lape"+i));
      }
    }
    
    ~~~
  * Patikrinti ar jūsų duomenų bazė yra užpildoma duomenimis, tada pereiti į tolimesnį žingsnį Controllers package sukurti naują kontrolerio klasę **IndexController.[java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java")**:

    ~~~java
    @Controller
    public class IndexController {
      @RequestMapping("/")
      String index(){
        return "index";
      }
    }
    ~~~
  * templates kataloge sukurti index.html. Paleisti projektą ir naršyklėje patrikrinti ar veikia internetinė svetainė ir atvaizduoja index.html turinį: [http://localhost:8080/](http://localhost:8080/)

    ![](https://lh3.googleusercontent.com/vKRAexigjwKe4gYqyl48n-DiDctRPKf2OTCkxRTdhBXY738HE5gjCteuShN3GKZhaOvz_dXSmC7nBcM3pcx4ZeaPhgTVgxZpzKWoVcbhKgsPr7FkcWEaYMG2utWD98rczMgrsXROx2w)
  * Sukurti fragments katalogą ir jame sukurti 2 failus: **Headerinc.html** -> privalomas naudojant Thymeleaf template engine ir **Header.html:**
  * **![](https://lh5.googleusercontent.com/02kmcDJx6iBeXOre7kkfNFlaqloI55N_TzkwLFHwiPBBvIXsk2Wnx53pJHTZh-iYJwZakNUQc5VpnblXNkQQnq_lNKS7mySMGvlfBcSIdAtDEq6L9zjVWOYl7T_54gWcdnHOB8TgR2M)**
  * headerinc.html turinys:

    ~~~html
    <!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org">
    <head lang="en" th:fragment="head">
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
     <link href="http://cdn.jsdelivr.net/webjars/bootstrap/3.3.4/css/bootstrap.min.css"
     th:href="@{/webjars/bootstrap/3.3.4/css/bootstrap.min.css}"
     rel="stylesheet" media="screen" />
     <script src="http://cdn.jsdelivr.net/webjars/jquery/2.1.4/jquery.min.js"
     th:src="@{/webjars/jquery/2.1.4/jquery.min.js}"></script>
     <link href="../static/css/guru.css"
     th:href="@{/css/guru.css}" rel="stylesheet" media="screen"/>
    </head>
    ~~~
  * header.html turinys:

    ~~~html
    <!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org">
    <head lang="en">
    </head>
    <body>
    <div class="container">
     <div th:fragment="header">
     <nav class="navbar navbar-default">
     <div class="container-fluid">
     <div class="navbar-header">
     <a class="navbar-brand" href="#" th:href="@{/}">Home</a>
     <ul class="nav navbar-nav">
     <li><a href="#" th:href="@{/products}">Products</a></li>
     <li><a href="#" th:href="@{/product/new}">Create Product</a></li></ul>
     </div>
     </div>
     </nav>
     <div class="jumbotron">
     <div class="row text-center">
     <div class="">
     <h2>Spring karkasas</h2>
     <h3>Spring Boot Web Aplikacija</h3>
     </div>
     </div>
     <div class="row text-center">
     <img src="../../static/images/NewBannerBOOTS_2.png" width="400"
     th:src="@{/images/NewBannerBOOTS_2.png}"/>
     </div>
     </div>
     </div>
    </div>
    </body>
    </html>
    ~~~
  * index.html turinys:

    ~~~html
    <!DOCTYPE html>
    <html>
    <head lang="en">
    <title>Spring Framework Guru</title>
    <!--/*/ <th:block th:include="fragments/headerinc :: head"></th:block> /*/-->
    </head>
    <body>
    <div class="container">
    <!--/*/ <th:block th:include="fragments/header :: header"></th:block> /*/-->
    </div>
    </body>
    </html>
    ~~~
  * Sukurti antrą kontrolerį, kurio pagalba atvaizduosime gyvūnų sąrašą:

    ~~~java
    @Controller
    public class GyvunasController {
      private GyvunasService gyvunasService;
      @Autowired
      public void setProductService(GyvunasService gyvunasService) {
        this.gyvunasService = gyvunasService;
      }
      @RequestMapping(value = "/gyvunai", method = RequestMethod.GET)
      public String list(Model model){
        model.addAttribute("gyvunai", gyvunasService.atvaizduotiGuvunus());
      return "gyvunai";
      }
    }
    ~~~
  * Sukurti gyvunai.html:

    ~~~html
    <body>
    <div class="container">
     <!--/*/ <th:block th:include="fragments/header :: header"></th:block> /*/-->
     <div th:if="${not #lists.isEmpty(gyvunai)}">
     <h2>Product List</h2>
     <table class="table table-striped">
     <tr>
     <th>Pavadinimas</th>
     <th>Amzius</th>
     </tr>
     <tr th:each="gyvunas : ${gyvunai}">
     <td th:text="${gyvunas.pavadinimas}">Gyvunas</td>
     <td th:text="${gyvunas.amzius}">Amzius</td>
     </tr>
     </table>
     </div>
    </div>
    ~~~
  * Naršyklėje atidaryti šią nuorodą: http://localhost:8080/gyvunai jeigu viskas tvarkoje turėtų atvaizduoti panašų vaizdą (žr. 5.5 pav.). ![](https://lh6.googleusercontent.com/PepO3KXYUBuUZiM5nAM0dwYpzf4hvuvtfXHjQv_wxBqJDBqi8UP_ruBiDHK89tqB-XbwPLNtrvbRizFLbmYcE2yGJeZbZB3KC4BRbDOodbwl7p9MCVpGzniNSRlrM2vIKGuX8ELUnbk)

    5\.5 pav. Naršyklėje atvaizduotas Gyvunai.html turinys
