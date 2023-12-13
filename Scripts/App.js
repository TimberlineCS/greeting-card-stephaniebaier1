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

//this is the sky 
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

//this is the snowy ground
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

//this is the edging of the card
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

//this is the tree trunk
var trunk = document.createElement("div")
document.body.append(trunk)
trunk.style.backgroundColor = "#6c3f3a";
trunk.style.width = "70px";
trunk.style.height = "60px";
//trunk.style.padding = "2em";
//trunk.style.borderWidth = "2em";
//trunk.style.borderStyle = "dotted";
//trunk.style.borderColor = "blue";
trunk.style.borderRadius = "20%";
trunk.style.margin = "1em";
trunk.style.position = "absolute"
trunk.style.top = "520px"
trunk.style.left = "735px"//exactly half

//these triangles make the tree
var triangle1 = document.createElement("div");
triangle1.style.border = "#3d4f1a solid 150px";
triangle1.style.width = "1px";
triangle1.style.height = "0px";
triangle1.style.borderLeftColor = "transparent";
triangle1.style.borderLeftWidth = "205px"
triangle1.style.borderRightColor = "transparent";
triangle1.style.borderRightWidth = "205px"
triangle1.style.borderTopColor = "transparent";
document.body.append(triangle1);
triangle1.style.position = "absolute"
triangle1.style.top = "215px"
triangle1.style.left = "580px"

var triangle2 = document.createElement("div");
triangle2.style.border = "#3d4f1a solid 150px";
triangle2.style.width = "1px";
triangle2.style.height = "0px";
triangle2.style.borderLeftColor = "transparent";
triangle2.style.borderLeftWidth = "180px"
triangle2.style.borderRightColor = "transparent";
triangle2.style.borderRightWidth = "180px"
triangle2.style.borderTopColor = "transparent";
document.body.append(triangle2);
triangle2.style.position = "absolute"
triangle2.style.top = "165px"
triangle2.style.left = "605px"

var triangle3 = document.createElement("div");
triangle3.style.border = "#3d4f1a solid 150px";
triangle3.style.width = "1px";
triangle3.style.height = "0px";
triangle3.style.borderLeftColor = "transparent";
triangle3.style.borderLeftWidth = "155px"
triangle3.style.borderRightColor = "transparent";
triangle3.style.borderRightWidth = "155px"
triangle3.style.borderTopColor = "transparent";
document.body.append(triangle3);
triangle3.style.position = "absolute"
triangle3.style.top = "100px"
triangle3.style.left = "630px"

var triangle4 = document.createElement("div");
triangle4.style.border = "#3d4f1a solid 150px";
triangle4.style.width = "1px";
triangle4.style.height = "0px";
triangle4.style.borderLeftColor = "transparent";
triangle4.style.borderLeftWidth = "125px"
triangle4.style.borderRightColor = "transparent";
triangle4.style.borderRightWidth = "125px"
triangle4.style.borderTopColor = "transparent";
document.body.append(triangle4);
triangle4.style.position = "absolute"
triangle4.style.top = "40px"
triangle4.style.left = "660px"

var triangle5 = document.createElement("div");
triangle5.style.border = "#3d4f1a solid 150px";
triangle5.style.width = "1px";
triangle5.style.height = "0px";
triangle5.style.borderLeftColor = "transparent";
triangle5.style.borderLeftWidth = "100px"
triangle5.style.borderRightColor = "transparent";
triangle5.style.borderRightWidth = "100px"
triangle5.style.borderTopColor = "transparent";
document.body.append(triangle5);
triangle5.style.position = "absolute"
triangle5.style.top = "-5px"
triangle5.style.left = "680px"