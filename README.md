# Quiz App · [![npm version](https://badge.fury.io/js/react.svg)](//npmjs.com/package/react) [![Version](https://img.shields.io/badge/Version-1.0.0-Green.svg)](https://shields.io/) 
Enkel quiz app bygget med Java Spring backend og React frontend.

## Struktur
Mappen `src/` inneholder Java backend. `frontend/` inneholder React applikasjonen

## Enviroment
For å kunne kjøre Quiz App trenger du følgende:

* [Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) - Backend språk
* [Node.js](https://github.com/nodejs/node) - Frontend runtime
* [Maven](https://maven.apache.org/) - Dependency Management

## Hvordan kjøre
### Backend
#### Maven
Hvis du ikke vil gå gjennom prosessen med bruk av en IDE og bare vil kjøre serveren kan du navigere til mappen hvor du lastet ned prosjektet og kjøre:
```
$ mvn spring-boot:run
```
#### IntelliJ
IntelliJ Gjør det enkelt å importere og kjøre Spring Boot prosjekter, gjør følgende:
1. Åpne IntelliJ
2. Naviger til "File - Open"
3. Naviger til mappen hvor prosjektet ble lastet ned
4. Velg "Quizapp" mappen og trykk Ok
5. Åpne QuizApplication.java og kjør main

### Frontend
#### NPM
For å kjøre React applikasjonen åpner du et kommandovindu og gjør følgende:
1. Naviger til `frontend/`
2. Kjør følgende kommandoer
```
$ npm install
$ npm start
```
3. React blir så hostet på url'en http://localhost:3000/

##### NB! Dette starter en development server, ønsker du å kjøre en production versjon kan du kjøre følgende kommandoer:
```
$ npm build
$ npm install -g serve
$ serve -s build
```
