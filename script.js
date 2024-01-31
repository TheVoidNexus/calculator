// Made by TheVoidNexus on 29.01.2024
document.addEventListener("DOMContentLoaded", function() {
  let buttonMain = document.getElementById("CircelMain");
  let buttonCircelArea = document.getElementById("Button2");
  let buttonCircelOmkrets = document.getElementById("Button3");
  let buttonCircelVolume = document.getElementById("Button4");
 
  buttonCircelArea.style.display = "none";
  buttonCircelOmkrets.style.display = "none";
  buttonCircelVolume.style.display = "none";

  buttonMain.addEventListener("click", function() {
    buttonCircelArea.style.display = (buttonCircelArea.style.display === "none") ? "block" : "none";
     buttonCircelOmkrets.style.display = (buttonCircelOmkrets.style.display === "none") ? "block" : "none";
     buttonCircelVolume.style.display = (buttonCircelVolume.style.display === "none") ? "block" : "none";
  });
});



function Hypotenusan() {
let a = prompt("Vad är a?","");
a **= 2;
if( a >= 0) {
if( a != "") {
let b = prompt("Vad är b?","");
b **= 2;
let unit = prompt("Vilken är enheten?","");
if( b >= 0) {
if (b != "") {
  SquaredC = a + b;
  c = Math.sqrt(SquaredC);
  let RundadC = Math.round(c);

  alert(`Hypotenusa: ${c}` + ` ${unit}\nRundad: ${RundadC}` + ` ${unit}`)
} else {
  alert("Error");
}
} else {
	alert("Error");
}
} else {
	alert("Error");
} 
} else {
  alert("Error");
}
}

//


function CircelArea() {
let radius = prompt("Vad är radien?","");
let unit = prompt("Vilken är enheten?","");
if(radius >= 0) {
if(radius != "") {
let Arean = Math.PI * radius * radius
let RoundedArea = Math.round(Arean);

alert(`Area: ${Arean}` + ` ${unit}²\nRundad: ${RoundedArea}` + ` ${unit}²`);
} else {
alert("Error");
}
} else {
alert("Error");
}
}

//


function CircelOmkrets() {
let radius = prompt("Vad är radien?","");
let unit = prompt("Vilken är enheten?","");
if(radius >= 0) {
if(radius != "") {
let Omkrets = 2 * Math.PI * radius;
let RoundedOmkrets = Math.round(Omkrets);

alert(`Omkrets: ${Omkrets}` + ` ${unit}\nRundad: ${RoundedOmkrets}` + ` ${unit}`);
} else {
alert("Error");
}
} else {
alert("Error");
}
}

//


function CircelVolume() {
let radius = prompt("Vad är radien?","");
let unit = prompt("Vilken är enheten?","");
if(radius >= 0) {
if(radius != "") {
let Volume = 3/4 * Math.PI * radius * radius * radius;
let RoundedVolume = Math.round(Volume);

alert(`Volumen: ${Volume} ${unit}³` + `\nRundad: ${RoundedVolume} ${unit}³`);
} else {
alert("Error");
}
} else {
alert("Error");
}
}
