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
trunk.style.borderRadius = "30%";
trunk.style.margin = "1em";
trunk.style.position = "absolute"
trunk.style.top = "585px"
trunk.style.left = "740px"

//these triangles make the tree
//base triangle is triangle0
//top triangle is triangle5
//tree color = 3d4f1a
var triangle0 = document.createElement("div");
triangle0.style.border = "#3d4f1a solid 150px";
triangle0.style.width = "1px";
triangle0.style.height = "0px";
triangle0.style.borderLeftColor = "transparent";
triangle0.style.borderLeftWidth = "235px"
triangle0.style.borderRightColor = "transparent";
triangle0.style.borderRightWidth = "235px"
triangle0.style.borderTopColor = "transparent";
document.body.append(triangle0);
triangle0.style.position = "absolute"
triangle0.style.top = "235px"
triangle0.style.left = "560px"

var triangle01 = document.createElement("div");
triangle01.style.border = "#3d4f1a solid 150px";
triangle01.style.width = "1px";
triangle01.style.height = "0px";
triangle01.style.borderLeftColor = "transparent";
triangle01.style.borderLeftWidth = "260px"
triangle01.style.borderRightColor = "transparent";
triangle01.style.borderRightWidth = "260px"
triangle01.style.borderTopColor = "transparent";
document.body.append(triangle01);
triangle01.style.position = "absolute"
triangle01.style.top = "275px"
triangle01.style.left = "540px"

var triangle02 = document.createElement("div");
triangle02.style.border = "#3d4f1a solid 150px";
triangle02.style.width = "1px";
triangle02.style.height = "0px";
triangle02.style.borderLeftColor = "transparent";
triangle02.style.borderLeftWidth = "290px"
triangle02.style.borderRightColor = "transparent";
triangle02.style.borderRightWidth = "290px"
triangle02.style.borderTopColor = "transparent";
document.body.append(triangle02);
triangle02.style.position = "absolute"
triangle02.style.top = "317px"
triangle02.style.left = "510px"


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
triangle1.style.top = "190px"
triangle1.style.left = "585px"

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
triangle2.style.top = "140px"
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
triangle3.style.top = "90px"
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
triangle5.style.left = "685px"

//these circles are the tree's ornaments
var ornament = document.createElement("div")
document.body.append(ornament)
ornament.style.backgroundColor = "#901819";
ornament.style.width = "20px";
ornament.style.height = "20px";
ornament.style.borderWidth = ".2em";
ornament.style.borderStyle = "dashed";
ornament.style.borderColor = "#c43c3a";
ornament.style.borderRadius = "100%";
ornament.style.margin = "1em";
ornament.style.position = "absolute"
ornament.style.top = "525px"
ornament.style.left = "725px"

var ornament2 = document.createElement("div")
document.body.append(ornament2)
ornament2.style.backgroundColor = "#901819";
ornament2.style.width = "20px";
ornament2.style.height = "20px";
ornament2.style.borderWidth = ".2em";
ornament2.style.borderStyle = "dashed";
ornament2.style.borderColor = "#c43c3a";
ornament2.style.borderRadius = "100%";
ornament2.style.margin = "1em";
ornament2.style.position = "absolute"
ornament2.style.top = "480px"
ornament2.style.left = "850px"

var ornament3 = document.createElement("div")
document.body.append(ornament3)
ornament3.style.backgroundColor = "#901819";
ornament3.style.width = "20px";
ornament3.style.height = "20px";
ornament3.style.borderWidth = ".2em";
ornament3.style.borderStyle = "dashed";
ornament3.style.borderColor = "#c43c3a";
ornament3.style.borderRadius = "100%";
ornament3.style.margin = "1em";
ornament3.style.position = "absolute"
ornament3.style.top = "315px"
ornament3.style.left = "710px"

var ornament4 = document.createElement("div")
document.body.append(ornament4)
ornament4.style.backgroundColor = "#901819";
ornament4.style.width = "20px";
ornament4.style.height = "20px";
ornament4.style.borderWidth = ".2em";
ornament4.style.borderStyle = "dashed";
ornament4.style.borderColor = "#c43c3a";
ornament4.style.borderRadius = "100%";
ornament4.style.margin = "1em";
ornament4.style.position = "absolute"
ornament4.style.top = "545px"
ornament4.style.left = "950px"

var ornament5 = document.createElement("div")
document.body.append(ornament5)
ornament5.style.backgroundColor = "#901819";
ornament5.style.width = "20px";
ornament5.style.height = "20px";
ornament5.style.borderWidth = ".2em";
ornament5.style.borderStyle = "dashed";
ornament5.style.borderColor = "#c43c3a";
ornament5.style.borderRadius = "100%";
ornament5.style.margin = "1em";
ornament5.style.position = "absolute"
ornament5.style.top = "220px"
ornament5.style.left = "770px"

var ornament6 = document.createElement("div")
document.body.append(ornament6)
ornament6.style.backgroundColor = "#901819";
ornament6.style.width = "20px";
ornament6.style.height = "20px";
ornament6.style.borderWidth = ".2em";
ornament6.style.borderStyle = "dashed";
ornament6.style.borderColor = "#c43c3a";
ornament6.style.borderRadius = "100%";
ornament6.style.margin = "1em";
ornament6.style.position = "absolute"
ornament6.style.top = "450px"
ornament6.style.left = "650px"

var ornament7 = document.createElement("div")
document.body.append(ornament7)
ornament7.style.backgroundColor = "#901819";
ornament7.style.width = "20px";
ornament7.style.height = "20px";
ornament7.style.borderWidth = ".2em";
ornament7.style.borderStyle = "dashed";
ornament7.style.borderColor = "#c43c3a";
ornament7.style.borderRadius = "100%";
ornament7.style.margin = "1em";
ornament7.style.position = "absolute"
ornament7.style.top = "350px"
ornament7.style.left = "850px"

var ornament8 = document.createElement("div")
document.body.append(ornament8)
ornament8.style.backgroundColor = "#901819";
ornament8.style.width = "20px";
ornament8.style.height = "20px";
ornament8.style.borderWidth = ".2em";
ornament8.style.borderStyle = "dashed";
ornament8.style.borderColor = "#c43c3a";
ornament8.style.borderRadius = "100%";
ornament8.style.margin = "1em";
ornament8.style.position = "absolute"
ornament8.style.top = "400px"
ornament8.style.left = "750px"

var ornament9 = document.createElement("div")
document.body.append(ornament9)
ornament9.style.backgroundColor = "#901819";
ornament9.style.width = "20px";
ornament9.style.height = "20px";
ornament9.style.borderWidth = ".2em";
ornament9.style.borderStyle = "dashed";
ornament9.style.borderColor = "#c43c3a";
ornament9.style.borderRadius = "100%";
ornament9.style.margin = "1em";
ornament9.style.position = "absolute"
ornament9.style.top = "560px"
ornament9.style.left = "600px"

//this is the text that says Happy Holidays
var div20 = document.createElement("div")