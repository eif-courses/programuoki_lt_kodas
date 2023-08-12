---
# This is the icon of the page

# This is the title of the article
title: Grafinė vartotojo sąsaja
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

Darbui su grafine sąsaja programavimo kalba [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") yra jau tapę klasika, kadangi nenuostabu, kad Web technologijos sparčiai auga ir palaiko tiek internetines aplikacijas, desktop PC, mobiliasiems prietaisams ir kitoms platformoms.Be abejo yra likusių senų projektų ar integruotų prietaisų, kur naršyklė nėra įdiegta tuo atveju grafinės sąsajos bibliotekos gali praversti ir būti, kuriama programinė įranga. Sąrašas pagrindinių grafikos bibliotekų:

* Abstract Window Toolkit (AWT): Oracle. Pagrindiniai elemetai skirti klaviatūros ir pelės įvykiams naudoti, pagrindinių komponentų skaičius yra labai mažas apie 13.
* Standard Window Toolkit (SWT): IBM. Individualus projektas pagrinde suderinamas su Eclipse programinę įranga. Spartus ir daug komponentų turintis įrankis.
* Swing: Oracle. Papildinys AWT bibliotekos atnaujinti kai kurie elementai pridėtą daugiau komponentų.
* JavaFX: Oracle (new).Oracle kompanija paleido vadžias dėl šios bibliotekos ir perdavė naujiems iniciatoriams, kurie perėmė visą darbą tai Gluon karkasas skirtas, kurti tiek mobilioms, desktop ar kitoms aplikacijoms, dali iš paslaugų yra apmokestinta.<iframe width="100%" height="400" src="https://www.youtube.com/embed/COgmwoGxNqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
* Android (Google-Jetbrains) - grafinė sąsajos modeliavimo, testavimo, kūrimo įrankis pritaikytas kurti mobiliasias programėles: televizoriams, telefonams, planšetėms, išmaniesiems laikrodžiams, mobiliems telefonams ir kitiems prietaisams.

  **Java AWT (Abstract Window Toolkit)**

  The Abstract Window Toolkit (AWT) - tai [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") platformos įrankis skirtas kurti nepriklausomą nuo operacinės sistemos grafinę vartotojo sąsają. Naudojantis specialiu grafinių elementų modeliavmo įrankiu paprastai ir greitai galima sukurti grafinę vartotojo sąsają skirtą [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programoms rašyti. Papildomai buvo praplėstas [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") AWT ir sukurtas Swing papildantys naujas valdikliais/komponentais (žr. 3.1 pav.): Mygtukais, lentelėmis ir kt. Taip pat Swing buvo sukurtas tam, kad būtų pritaikytas konkrečiai operacinei sistemai ir kad atrodytų kuo panašesnis į naudojamos operacinės sistemos komponentus. Taip pat paliekant teisę pasirinkti norimą atvaizdavimą pvz: Linux operacinės sistemos grafinė sąsaja būtų naudojama Windows [OS](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=36&displayformat=dictionary "Terminų ir santrumpų žodynas: OS") ar MAC OSX ir pan.

  ![](https://lh3.googleusercontent.com/RRO7dg4EXHWPghZDEm0rqCLE9Q3dYMpgPri06K9Pi1CsMA8cZe7TcOFxCHVTCaky6BlHna6RVZWl_KnOA42EoUjMlOFlb4sZa5dJNxrgp1AMWEqgYTjFpZnBhVbOvykgGPIP9rfv35s)

  3\.1 pav. Grafinis redaktorius [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") AWT ir SWING komponentai

  Kaip sukurti paprasčiausią mygtuko paspaudimo veiksmą yra pateikta schema (žr. 3.2 pav.) ir programinis kodas.

  ![](https://lh4.googleusercontent.com/gru3EG7Ul_ngeHi1I4vKur3hQFl_wtZtwVc-5BWXimlz3RU-DMEbdswat9Wtrl5Kpx8TmzEIZHfvxD0lFlLTCbvdUvIk4nzQ3kqRfoIRzvqLtL4JnkYEXLZ8tfYNsq0j3kpQMNGcap0)

  3\.2 pav. Mygtuko įvykio aprašymas programiškai naudojant [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") AWT biblioteką

  ~~~java
  Button button = new Button("Button");
  // Aprašome įvyki, kurį vėliau galėsime naudoti.
  ActionListener actionListenerMygtukasPaspaustas = new ActionListener() {
     @Override
     public void actionPerformed(ActionEvent e) {
         System.out.println("Mygtukas paspaustas");
  };
  button.addActionListener(actionListenerMygtukasPaspaustas);
  ~~~

**Java SWT (Standard Widget Toolkit)**

The Standard Widget Toolkit (SWT) - grafinis redaktorius skirtas kurti grafinę sąsają [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") platformai. Šis įrankis buvo kuriamas IBM kompanijos vėliau perduotas Eclipse grupei kartu suderinamu su Eclipse IDE programavimo aplinka. Tai viena iš alternatyvų AWT ir Swing [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") GUI įrankiams siūlomiems Sun Microsystems kompanijos pagal nutylėjimą [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") SE platformos biblioteka. Lyginant GUI įrankius žemam lygmenynje SWT su AWT, SWT yra parašytas su [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") programavimo kalba. Atvaizduoti grafinius elementus SWT naudoja JNI ([Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") Native Interface) pasiekti operacinės sistemos elementus, panašiai kaip programos rašomos taikant tos operacinės sistemos specifiniu [API](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=45&displayformat=dictionary "Terminų ir santrumpų žodynas: API"). Taip pat prie SWT yra siūlomas papildomų elementų rinkinys JFace, kuris palengvina kūrimą grafinės sąsajos naudojant SWT. Kūrimo įrankiai esantys SWT yra kurti atsižvelgiant į AWT ir Swing trūkumus ir privalumus. SWT yra sukurtas kuris turi tiek AWT ir Swing privalumus vienoje vietoje bei ištaisytos spragos, kurios buvo šiose grafinės sąsajos įrankiuose. Graifinis redaktorius yra pateikiamas 3.2 paveikslėlyje.

![](https://lh4.googleusercontent.com/Mc0dq4L--BBN4laScFT5i1pdWV6BdMIxNiQjm-9kb0FexiF0Xv239PvpOlce-7uScwW1ppmTrDGbm0kVg1ehu-xUPWLIbdPkuhILOCJHSj9uNvuCqZppDXCtQkDdRzjdrl0bJraGoMY)3.2 pav. Grafinis SWT redaktorius Eclipse IDE aplinkoje

**Java FX**

[Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX tai Oracle priežiūroje buvęs projektas ir nuo [Java JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=29&displayformat=dictionary "DUK - Dažnai užduodami klausimai: JAVA JDK") 1.7 buvo kaip sudedamoji [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") SDK SE platformos dalis. Laikui bėgant atsiradus naujom technologijoms kaip HTML5 [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX sumažėjo populiarumas. Bet tai nereiškia jog neliko sričių kur [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX būtų naudojamas, kuriant programinę įrangą kompiuteriams. Taip pat nuo [JAVA JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=29&displayformat=dictionary "DUK - Dažnai užduodami klausimai: JAVA JDK") 11 versijos [JAVA](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX išimtas iš [JAVA](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") SE taigi reikia papildomai jį konfigūruoti. Taip pat šį grafinį redaktorių perėmė kita kompanija [GLUON](https://gluonhq.com/products/javafx/), kuri dabar pagrindinė siūlanti komercinius įrankius rašyti [JAVA](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX aplikacijas: Desktop, mobilias aplikacijas ir kt. Turintiems naujesnes [JAVA JDK](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=29&displayformat=dictionary "DUK - Dažnai užduodami klausimai: JAVA JDK") versijas ar naudojantiems modernias programavimo aplinkas rekomenduojama perskaityti šią informaciją: [https://openjfx.io/openjfx-docs/#introduction](https://openjfx.io/openjfx-docs/#introduction)

Grafinis redaktorius "Scene builder" naudoja FXML formatą arba aprašoma tiesiogiai naudojant įprastas [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") klases. Stiliams valdyti yra sukurtas atskiras formatas panašus į įprastinį css tipo failą esantį standartą Web pasaulyje tai -fx-css skirtas uždėti elementų: mygtukų, tekstinių laukų, tab'ų stilių. Šio redaktoriaus grafinį dizainerį galite pamatyti 3.3 paveikslėlyje.

![](https://lh4.googleusercontent.com/dU4JoiKmw5hUEIO5Gl_qU4Ki4wNB0-l8j8XLCSwz8CSpmqFiPYN76Fh6OQDtQTgpEM6pRoZ8Aig4U3H_IFZhugbBAvr4mFYgY30tpfagVhfwFWTQR3mJDW2XNcoctb96rooqEckYEmI)

3\.3 pav. [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX Scene builder langas

[Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX privalumas turint stilių dokumentus kaip ir internetinių svetainių kūrimas ypatingai grafinei sąsajai valdyti yra paprasta. Programiškai nėra sunku aprašyti, kad vos vienu mygtuko paspaudimu būtų pakeista tema/stilius (žr. 3.4 pav.).

![](https://lh6.googleusercontent.com/9vqdUXWHBE7-vcpvWNK_rDmew2uN0yq59viF_diQaGJboo83EQVlgvUULJmYV2EvQJ0uVL9VBQt08MfSFVE-qSlbXK4q1hiuIVu8Cuwu_igSKnWI1yh25mO1BVTWSlrU5PdakBCJ6D4)![](https://lh3.googleusercontent.com/RjheB_amezWB_7T2_4ccSmCg-Uz26iYpwf06nZa5gPbouHADdi8vDArz5uoW9lrhw-RrlsseinAOq9RxdCYj8tl6M_eix3ZGOmuH3o1bE_4mu43h3C93LZJoELEiYjnYUmL026P5EP4)

3\.4 pav. kairėje pusėje originalus vaizdas, dešinėje pusėje pakeistas stilius.

Žemiau pateikiamas [Java](https://vma-test.viko.lt/mod/glossary/showentry.php?eid=32&displayformat=dictionary "Terminų ir santrumpų žodynas: Java") FX projekto pavyzdys keičiantis stilių:

~~~xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.text.*?>
<?import javafx.scene.chart.*?>
<?import javafx.scene.shape.*?>
<?import javafx.scene.image.*?>
<?import javafx.scene.canvas.*?>
<?import java.lang.*?>
<?import java.util.*?>
<?import javafx.scene.*?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>

<AnchorPane id="AnchorPane" fx:id="langas" minHeight="517.0" minWidth="800.0" prefHeight="517.0" prefWidth="800.0" xmlns="http://javafx.com/javafx/8" xmlns:fx="http://javafx.com/fxml/1" fx:controller="javafxapplication1.FXMLDocumentController">
    <children>
      <Canvas fx:id="canvas" height="238.0" layoutX="18.0" layoutY="250.0" style="-fx-background-color: red;" width="576.0" AnchorPane.bottomAnchor="29.0" AnchorPane.leftAnchor="18.0" AnchorPane.rightAnchor="206.0" AnchorPane.topAnchor="250.0" />
      <TitledPane animated="false" layoutX="1131.0" layoutY="8.0" prefHeight="148.0" prefWidth="202.0" text="Color" AnchorPane.rightAnchor="0.0" AnchorPane.topAnchor="0.0">
        <content>
          <AnchorPane minHeight="0.0" minWidth="0.0" prefHeight="0.0" prefWidth="200.0">
               <children>
                  <ColorPicker fx:id="spalva" layoutX="14.0" layoutY="14.0" prefHeight="43.0" prefWidth="170.0" />
                  <Rectangle fx:id="daugiakampis" arcHeight="5.0" arcWidth="5.0" fill="DODGERBLUE" height="32.0" layoutX="14.0" layoutY="67.0" stroke="BLACK" strokeType="INSIDE" width="169.0" />
               </children>
            </AnchorPane>
        </content>
      </TitledPane>
      <TitledPane animated="false" layoutX="598.0" layoutY="148.0" prefHeight="159.0" prefWidth="202.0" text="Choose style" AnchorPane.rightAnchor="0.0">
        <content>
          <AnchorPane minHeight="0.0" minWidth="0.0" prefHeight="74.0" prefWidth="200.0">
               <children>
                  <ComboBox fx:id="stilius" layoutX="14.0" layoutY="24.0" prefHeight="38.0" prefWidth="168.0" promptText="Pasirinkite stilių" />
                    <Label fx:id="label" layoutX="14.0" layoutY="75.0" minHeight="16" minWidth="69" prefHeight="17.0" prefWidth="166.0" />
               </children>
            </AnchorPane>
        </content>
      </TitledPane>
      <TitledPane animated="false" layoutX="598.0" layoutY="307.0" text="PieChart" AnchorPane.rightAnchor="0.0">
        <content>
          <AnchorPane minHeight="0.0" minWidth="0.0" prefHeight="180.0" prefWidth="200.0">
               <children>
                    <Button fx:id="button" layoutX="13.0" layoutY="99.0" onAction="#handleButtonAction" prefHeight="67.0" prefWidth="173.0" text="Add to Piechart" />
                  <TextField fx:id="valuePieChart" layoutX="100.0" layoutY="22.0" prefHeight="25.0" prefWidth="93.0" text="5" AnchorPane.leftAnchor="109.6" AnchorPane.rightAnchor="0.0" />
                  <Text layoutX="14.0" layoutY="39.0" strokeType="OUTSIDE" strokeWidth="0.0" text="Reikšmė" />
                  <Text layoutX="15.0" layoutY="79.0" strokeType="OUTSIDE" strokeWidth="0.0" text="Pavadinimas" />
                  <TextField fx:id="namePiechart" layoutX="100.0" layoutY="62.0" prefHeight="25.0" prefWidth="92.0" text="Hello" AnchorPane.leftAnchor="100.0" AnchorPane.rightAnchor="0.0" />
               </children>
            </AnchorPane>
        </content>
      </TitledPane>
      <PieChart fx:id="diagrama" layoutX="18.0" layoutY="14.0" prefHeight="287.0" prefWidth="568.0" AnchorPane.leftAnchor="0.0" AnchorPane.topAnchor="0.0" />
      <Separator layoutX="582.0" orientation="VERTICAL" prefHeight="517.0" prefWidth="0.0" style="-fx-background-color: ;" AnchorPane.bottomAnchor="0.0" AnchorPane.rightAnchor="212.0" AnchorPane.topAnchor="0.0" />
    </children>
</AnchorPane>
~~~

~~~java
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javafxapplication1;

import java.awt.MouseInfo;
import java.awt.Point;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.ResourceBundle;
import javafx.animation.PathTransition;
import javafx.animation.Timeline;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventType;

import javafx.fxml.Initializable;

import javafx.scene.canvas.GraphicsContext;

import javafx.scene.effect.DropShadow;

import javafx.scene.input.MouseEvent;
import javafx.scene.paint.Color;

import javax.swing.JOptionPane;
import javafx.fxml.FXML;
import javafx.scene.canvas.Canvas;
import javafx.scene.chart.PieChart;
import javafx.scene.control.Button;
import javafx.scene.control.ColorPicker;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.shape.CubicCurveTo;
import javafx.scene.shape.HLineTo;
import javafx.scene.shape.LineTo;
import javafx.scene.shape.MoveTo;
import javafx.scene.shape.Path;
import javafx.scene.shape.Rectangle;
import javafx.scene.shape.VLineTo;
import javafx.util.Duration;

/**
 *
 * @author Marius
 */
public class FXMLDocumentController implements Initializable {

    private GraphicsContext gc;

    private static int countPoints = 0;

    ObservableList<PieChart.Data> pieChartData
            = FXCollections.observableArrayList(
                    new PieChart.Data("Grapefruit", 13),
                    new PieChart.Data("Oranges", 25),
                    new PieChart.Data("Plums", 10),
                    new PieChart.Data("Pears", 22),
                    new PieChart.Data("Apples", 30));

    @FXML
    private AnchorPane langas;
    
    @FXML
    private Button button;

    @FXML
    private Canvas canvas;

    @FXML
    private Rectangle daugiakampis;

    @FXML
    private PieChart diagrama;

    @FXML
    private TextField valuePieChart;

    @FXML
    private ColorPicker spalva;

    @FXML
    private TextField namePiechart;

    @FXML
    private ComboBox<String> stilius;

    @FXML
    private Label label;

    @FXML
    private void handleButtonAction(ActionEvent event) {

        final Rectangle rectPath = new Rectangle(0, 0, 40, 40);
        rectPath.setArcHeight(10);
        rectPath.setArcWidth(10);
        rectPath.setFill(Color.ORANGE);

        gc = canvas.getGraphicsContext2D();
        gc.setFill(Color.LIME);
        gc.fillRect(rectPath.getX(), rectPath.getY(), rectPath.getWidth(), rectPath.getHeight());

        Path path = new Path();

        path.getElements().add(new MoveTo(560.0f, 0.0f));
        path.getElements().add(new LineTo(100.0f, 100.0f));

        PathTransition pathTransition = new PathTransition();
        pathTransition.setDuration(Duration.millis(3000));
        pathTransition.setPath(path);
        pathTransition.setNode(canvas);
        pathTransition.setOrientation(PathTransition.OrientationType.ORTHOGONAL_TO_TANGENT);
        pathTransition.setCycleCount(Timeline.INDEFINITE);
        pathTransition.setAutoReverse(true);
        pathTransition.play();

        pieChartData.add(new PieChart.Data(namePiechart.getText(), Double.parseDouble(valuePieChart.getText())));

        diagrama.setData(pieChartData);

        System.out.println("You clicked me!");
        label.setText("Hello World!");
    }
    @Override
    public void initialize(URL url, ResourceBundle rb) {

        spalva.setOnAction(e->{
            daugiakampis.setFill(spalva.getValue());
        });
      
        stilius.getItems().removeAll(stilius.getItems());
        stilius.getItems().addAll("Option A", "Option B", "Option C");
        stilius.getSelectionModel().select("Option B"); 
    }

}
~~~

~~~java
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javafxapplication1;

import com.sun.webkit.dom.EventImpl;
import javafx.application.Application;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyEvent;
import javafx.stage.Stage;
import javax.swing.JOptionPane;

/**
 *
 * @author Marius
 */
public class JavaFXApplication1 extends Application {
    
    // Išorinis stilius css dokumente
    private String theme1Url = getClass().getResource("theme1.css").toExternalForm();
    private String theme2Url = getClass().getResource("theme2.css").toExternalForm();
    
    @Override
    public void start(Stage stage) throws Exception {
       
      Parent root = FXMLLoader.load(getClass().getResource("FXMLDocument.fxml"));

        Scene scene = new Scene(root);
       
        final EventHandler keyF1 = new EventHandler<KeyEvent>() {
            @Override
            public void handle(KeyEvent event) {
                
                if(event.getCode() == KeyCode.F1)
                {
                  //  JOptionPane.showMessageDialog(null, "F1 klavisas paspaustas");
                       scene.getStylesheets().remove(theme2Url);
                     scene.getStylesheets().add(theme1Url);       
                }
                else if(event.getCode() == KeyCode.F2){
                    scene.getStylesheets().remove(theme1Url);
                   scene.getStylesheets().add(theme2Url);       
                }//throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
            }
        };
        
        scene.setOnKeyPressed(keyF1);
        stage.setScene(scene);
        stage.show();
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
~~~

~~~css
 theme1.css stiliaus failo turinys

.root{
    -fx-font-size: 12pt;
    -fx-font-family: "Tahoma";
    -fx-base: red;
    -fx-background: #90a4ae;
    -fx-focus-color: white;
}

.button {
    -fx-background-color: slateblue; 
    -fx-text-fill: white;
    -fx-border-radius: 5;
}
.separator{
    -fx-background-color: red;
}
~~~

~~~css
 theme2.css stiliaus failo turinys
.root{
    -fx-font-size: 12pt;
    -fx-font-family: "Courier New";
    -fx-base: #388e3c;
    -fx-background: #8d6e63;
}

.buttonStyle {
    -fx-text-fill: red;
    -fx-background-color: lightcyan;
    -fx-border-color: green;
    -fx-border-radius: 5;
}
.separator{
    -fx-background-color: #388e3c;
}
~~~
