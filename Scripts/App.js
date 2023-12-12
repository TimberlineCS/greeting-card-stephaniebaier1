//Your name
//Period
//Date

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */
//Stephanie Baier
//Period 1
//12/11/2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

//this will be the sky 
var sky = document.createElement("div")
document.body.append(sky)
sky.style.backgroundColor = "#ccdae3";
sky.style.width = "1490px"; 
sky.style.height = "705px"; 
//sky.style.padding = "4em"; 
sky.style.borderWidth = "0em"; 
sky.style.borderStyle = "dotted"; 
sky.style.borderColor = "blue";
sky.style.borderRadius = "0%"; 
sky.style.margin = "1em"; 

//tree color = 3d4f1a

//this will be the snowy ground
var snowy = document.createElement("div");
document.body.append(snowy)
snowy.style.backgroundColor = "white";
snowy.style.width = "1510px";
snowy.style.height = "150px";
//snowy.style.padding = "2em";
//snowy.style.borderWidth = "2em";
//snowy.style.borderStyle = "dotted";
//snowy.style.borderColor = "blue";
//snowy.style.borderRadius = "20%";
//snowy.style.margin = "2em";
snowy.style.position = "absolute"
snowy.style.top = "571px"
snowy.style.left = "10px"

//this will be the edging of the card
var edging = document.createElement("div")
document.body.append(edging)
edging.style.backgroundColor = "transparent";
edging.style.width = "1470px";
edging.style.height = "679px";
//edging.style.padding = "2em";
edging.style.borderWidth = "0.5em";
edging.style.borderStyle = "dotted";
edging.style.borderColor = "blue";
edging.style.borderRadius = "0%";
edging.style.margin = "1em"; 
edging.style.position = "absolute"
edging.style.top = "5px"
edging.style.left = "10px"



  