# Password-Generator
![alt text](./assets\Images\03-javascript-homework-demo.png)

This application implememts a password generator.
I was tasked with modifying starter code t0 create an application that enables employees to generate random passwords based on criteria that they’ve selected. 
This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that I wrote. 
The password can include special characters specified by the OWASP Foundation.

## To Users

As a user, you can randomly generate a password that meets certain criteria which strengthens its security. Upon clicking the generate password button, the user is prompted with a series of questions that lets them select their desired criteria to apply to the generation of their password. If any invalid value or entry is submitted, it is detected and the user is alerted and must restart the selection process. Once all of the selection options are submitted, their password is presented to them via the text area above the "Generate Password" button.

## Featured Criteria

Each of the OPTIONALLY featured criteria adds sequrity.
The 5 criteria features that provide the security offered by this password generator and are listed below.

1) Password length 
2) Inclusion of uppercase letters
3) Inclusion of lowercase letters
4) Inclusion of numerical characters
5) Inclusion of special characters

## Programming Details

This program divides the implementation of the generator into several processes.
API tools are used to access certain elements in the HTML file. 
Functions are created to operate with the API tools so that all of the processes of the password generation can be done using javaScript.

## Processes

The processes follow the same order as the list of criteria above in the Featured Criteria section, all of which are my original ideas. 
They provide all the necessary input selected by the user that enable the generator to produce a password as specified. 
The algorithm that generates the password in accordance with the selected criteria is my version of an algorithm I found on Stack overflow which was offered by a user named Gumbo and edited by a user named Skizo-ozikS.
This algorithm returns a string value which is the password displayed in the text area of the application.

## Application Link

https://llh9.github.io/Password-Generator/

## Developer - Landon Hinkle





