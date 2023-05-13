# Boomerang-GDSC2021
A prototype for a website that hosts the lost and found system of toronto for pets and items.

![Short demo of the webpage](webpage2.gif)

This project is created using GCP, HTML, Javascript and CSS. The database is on firebase. 
The contributors to the project are:
1. Harshit Sohaney (1st year UofT comp. eng)
2. Srinidhi Shankar (1st year UofT comp. eng)
3. Shreyaansh Daddoo (1st year UofT comp. eng)
4. Prarthona Paul (1st year UofT comp. eng)

## Introduction
The boomerangTrial.js file contains the database connection scripts to create a new post everytime someone posts for a lost pet. The boomerangMAPS.html file contains the script and html files for the google maps API.

## Limitations
Since this is a working prototype, not all functionalities are complete. There is an issue that remains unresolved regarding numerous posts being posted in real time. Codes for reporting the pets and calculating user scores have not be completed. There is no login page, but the registration page is functional.

You can run the website from any of the html pages by simply opening them. The navigation bar on the top left allows for free movement between the various pages. The lost pets page is connected to the firebase database. 

## Firebase Configuration
In order to run the firebase database, you must connect to the database through console.firebase.google.com . You must have firebase SDK's downloaded on your computer and initialize the firebase database as needed. In order to run the code with a functional database, you must change the firebaseConfig to the one set by your account. 
Code snippet to change from [boomerangTrial](https://github.com/HarshitSohaney/Boomerang-GDSC2021/blob/main/boomerangTrial.js) :

      const firebaseConfig = {
          apiKey: "inputHere",
          authDomain: "inputHere",
          projectId: "inputHere",
          storageBucket: "inputHere",
          messagingSenderId: "inputHere",
          appId: "inputHere",
          measurementId: "inputHere"
          };
          
 Further instructions on adding firebase can be found here https://firebase.google.com/docs/web/setup
 
 ## HTML/CSS
 All other html files do not require any external downloads to run. The names suggest the title of the page (boomerangHomePage, boomerangLostPets, etc.).
 
 ## Using the webpage
 
 The user can use the sign up page to create an account. The lost pets section can be used to report pets using the report a pet form. The other links currently do not work. 
 The lost items page is expected to work in a very similar fashion under a different collection in the database.
 
 ## Link to Demo
 
 [Video Demonstration](https://www.youtube.com/watch?v=mYoJ8DSOkNY)
 
 
 
 
