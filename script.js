// Made by TheVoidNexus on 29.01.2024 | Last edited: 31.01.2024
document.addEventListener("DOMContentLoaded", function() {
  let buttonMain = document.getElementById("CircelMain");
  let buttonCircelArea = document.getElementById("Button2");
  let buttonCircelOmkrets = document.getElementById("Button3");
  let buttonCircelVolume = document.getElementById("Button4");
  let buttonCubeOmkrets = document.getElementById("Button5");
  let buttonCubeArea = document.getElementById("Button6");
  let buttonCubeVolume = document.getElementById("Button7");
 
  buttonCircelArea.style.display = "none";
  buttonCircelOmkrets.style.display = "none";
  buttonCircelVolume.style.display = "none";
  buttonCubeOmkrets.style.display = "none";
  buttonCubeArea.style.display = "none";
  buttonCubeVolume.style.display = "none";

  CircelMain.addEventListener("click", function() {
    buttonCircelArea.style.display = (buttonCircelArea.style.display === "none") ? "block" : "none";
     buttonCircelOmkrets.style.display = (buttonCircelOmkrets.style.display === "none") ? "block" : "none";
     buttonCircelVolume.style.display = (buttonCircelVolume.style.display === "none") ? "block" : "none";
  });
  CubeMain.addEventListener("click", function() {
	buttonCubeOmkrets.style.display = (buttonCubeOmkrets.style.display === "none") ? "block" : "none";
	buttonCubeArea.style.display = (buttonCubeArea.style.display === "none") ? "block" : "none";
	buttonCubeVolume.style.display = (buttonCubeVolume.style.display === "none") ? "block" : "none";
});
});


function Hypotenusan() {
let a = prompt("What is a?","");
a **= 2;
if( a >= 0) {
if( a != "") {
let b = prompt("What is b?","");
b **= 2;
let unit = prompt("What is the unit?","");
if( b >= 0) {
if (b != "") {
  SquaredC = a + b;
  c = Math.sqrt(SquaredC);
  let RundadC = Math.round(c);
if(c == Infinity) {
c = "∞";
RundadC = "∞";
}

  alert(`Hypotenuse: ${c}` + ` ${unit}\nRounded: ${RundadC}` + ` ${unit}`)
} else {
  alert("The input cannot be empty.");
}
} else {
	alert("The input must be a number.");
}
} else {
	alert("The input cannot be empty.");
} 
} else {
  alert("The input must be a (positive) number.");
}
}

//


function CircelArea() {
let radius = prompt("What is the radius?","");
let unit = prompt("What is the unit?","");
if(radius >= 0) {
if(radius != "") {
let Arean = Math.PI * radius * radius
let RoundedArea = Math.round(Arean);
if(Arean == Infinity) {
Arean = "∞";
RoundedArea = "∞";
}

alert(`Area: ${Arean}` + ` ${unit}²\nRounded: ${RoundedArea}` + ` ${unit}²`);
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
}

//


function CircelOmkrets() {
let radius = prompt("What is the radius?","");
let unit = prompt("What is the unit?","");
if(radius >= 0) {
if(radius != "") {
let Omkrets = 2 * Math.PI * radius;
let RoundedOmkrets = Math.round(Omkrets);
if(Omkrets == Infinity) {
Omkrets = "∞";
RoundedOmkrets = "∞";
}

alert(`Circumference: ${Omkrets}` + ` ${unit}\nRounded: ${RoundedOmkrets}` + ` ${unit}`);
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
}

//


function CircelVolume() {
let radius = prompt("What is the radius?","");
let unit = prompt("What is the unit?","");
if(radius >= 0) {
if(radius != "") {
let Volume = 3/4 * Math.PI * radius * radius * radius;
let RoundedVolume = Math.round(Volume);
if(Volume == Infinity) {
Volume = "∞";
RoundedVolume = "∞";
}
alert(`Volume: ${Volume} ${unit}³` + `\nRounded: ${RoundedVolume} ${unit}³`);
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
}

//


function CubeOmkrets() {
let a = prompt("What is a?","");
if( a >= 0) {
if( a != "") {
	let b = prompt("What is b?","");
	if( b >= 0) {
	if (b != "") {
let unit = prompt("What is the unit?","");
	if(unit != "") {
	let Omkrets = 2 * a + 2 * b;
	let RoundedOmkrets = Math.round(Omkrets);
alert(`Circumference: ${Omkrets} ${unit}\nRounded: ${RoundedOmkrets} ${unit}`);
} else {
alert("The input cannot be empty.");
	}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
}

//


function CubeArea() {
let a = prompt("What is a?","");
if( a >= 0) {
if( a != "") {
	let b = prompt("What is b?","");
	if( b >= 0) {
	if (b != "") {
let unit = prompt("What is the unit?","");
	if(unit != "") {
	let Area = a * b;
	let RoundedArea = Math.round(Area);
alert(`Area: ${Area} ${unit}\nRounded: ${RoundedArea} ${unit}`);
} else {
alert("The input cannot be empty.");
	}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
}

//


function CubeVolume() {
let a = prompt("What is a?","");
if( a >= 0) {
if( a != "") {
	let b = prompt("What is b?","");
	if( b >= 0) {
	if ( b != "") {
		let c = prompt("What is c?","");
		if( c >= 0) {
		if( c != "") {
let unit = prompt("What is the unit?","");
	if(unit != "") {
	let Volume = a * b * c;
	let RoundedVolume = Math.round(Volume);
alert(`Area: ${Volume} ${unit}\nRounded: ${RoundedVolume} ${unit}`);
} else {
alert("The input cannot be empty.");
	}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
} else {
alert("The input cannot be empty.");
}
} else {
alert("The input must be a (positive) number.");
}
}
