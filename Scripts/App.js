//Stephanie Baier
//Period 1
//12/11/2023

//My program creates a "Happy Holidays" card that shows a winter scene with animation and music.

//this is the sky 
var sky = document.createElement("div")
document.body.append(sky)
sky.style.backgroundColor = "#051220"
sky.style.width = "1490px"; 
sky.style.height = "705px"; 
sky.style.borderWidth = "0em"; 
sky.style.borderStyle = "dotted"; 
sky.style.borderColor = "#0195fe";
sky.style.borderRadius = "0%"; 
sky.style.margin = "1em"; 

//this is the snowy hill in the background
var hill= document.createElement("img")
hill.src = "https://www.clipartmax.com/png/full/216-2161856_snowy-ground-with-trees-png-clipart-image-snowy-hill-clipart-png.png"
hill.setAttribute("width", "1500px")
hill.style.position = "absolute"
hill.style.top = "185px"
hill.style.left = "20px"
document.body.append(hill)

//this is the edging of the card
var edging = document.createElement("div")
document.body.append(edging)
edging.style.backgroundColor = "transparent";
edging.style.width = "1470px";
edging.style.height = "679px";
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
trunk.style.borderRadius = "30%";
trunk.style.margin = "1em";
trunk.style.position = "absolute"
trunk.style.top = "585px"
trunk.style.left = "740px"


//these triangles make the tree
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
ornament.style.top = "545px"
ornament.style.left = "735px"


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
ornament2.style.top = "440px"
ornament2.style.left = "840px"


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
ornament3.style.top = "355px"
ornament3.style.left = "710px"

//this is the text that says Happy Holidays
var div1 = document.createElement("div")
div1.style.backgroundColor = "transparent";
div1.style.width = "600px";
div1.style.height = "80px";
div1.style.borderWidth = ".2em";
div1.style.borderStyle = "dashed";
div1.style.borderColor = "transparent";
div1.style.borderRadius = "0%";
div1.style.margin = "1em";
div1.style.position = "absolute"
div1.style.top = "-70px"
div1.style.left = "380px"
div1.innerHTML = "Happy Holidays"
div1.style.textAlign = "center"
div1.style.fontSize = "5em"
div1.style.color = "white"
div1.style.fontFamily = "Blackadder ITC"
document.body.append(div1)


//this inserts an image of a moon
var moon = document.createElement("img")
moon.src = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Moon_rotating_full_220px.gif"
moon.setAttribute("width", "90px")
moon.style.position = "absolute"
moon.style.top = "70px"
moon.style.left = "100px"
document.body.append(moon)

//inserts lights images to makes the tree's lights
var lights = document.createElement("img")
lights.src = "https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-pisca-pisca-de-natal-1.gif"
lights.setAttribute("width", "161px")
lights.style.position = "absolute"
lights.style.top = "445px"
lights.style.left = "600px"
document.body.append(lights)

var lights2 = document.createElement("img")
lights2.src = "https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-pisca-pisca-de-natal-1.gif"
lights2.setAttribute("width", "163px")
lights2.style.position = "absolute"
lights2.style.top = "295px"
lights2.style.left = "730px"
document.body.append(lights2)

var lights3 = document.createElement("img")
lights3.src = "https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-pisca-pisca-de-natal-1.gif"
lights3.setAttribute("width", "161px")
lights3.style.position = "absolute"
lights3.style.top = "445px"
lights3.style.left = "805px"
document.body.append(lights3)

var lights4 = document.createElement("img")
lights4.src = "https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-pisca-pisca-de-natal-1.gif"
lights4.setAttribute("width", "161px")
lights4.style.position = "absolute"
lights4.style.top = "175px"
lights4.style.left = "667px"
document.body.append(lights4)

//makes the deer
var animal = document.createElement("img")
animal.src = "https://media1.giphy.com/media/PM0dtv2jhXEtJZ1D2M/giphy.gif?cid=6c09b952no9pnqn6j4zzqqb5difnfqd7489ms1b3iwbkr88y&ep=v1_stickers_related&rid=giphy.gif&ct=s"
animal.setAttribute("width", "400px")
animal.style.position = "absolute"
animal.style.top = "275px"
animal.style.left = "1000px"
document.body.append(animal)

//makes the deer's ornament
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
ornament4.style.top = "610px"
ornament4.style.left = "1105px"

//adds the audio
var au = new Audio("Music/carolOfTheBells.mp3");
au.controls = true;
document.body.appendChild(au);
au.style.top = "640px"
au.style.left = "50px"
au.style.position = "absolute"