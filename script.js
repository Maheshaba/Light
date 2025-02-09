
/*function toggleLight() {
         let bulb = document.getElementById("bulb");
         let button = document.getElementById("button");
     
         if (bulb.src.includes("bulboff")) {
                  bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
                  button.textContent = "Turn OFF";
         } else {
                  bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"; // Turn OFF
                  button.textContent = "Turn ON ";
  }
}*/


function toggleLight() {
 let bulb = document.getElementById("bulb");
 let button = document.getElementById("button");

 if (bulb.src.includes("bulboff")) {
 bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
 button.textContent = "Turn OFF";
 } else {
 bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
   button.textContent = "Turn ON";
 }
}

