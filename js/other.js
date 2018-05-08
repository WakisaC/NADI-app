/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    document.getElementById("mySidenav").style.visibility="visible"; // show nav bar menu
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.visibility="hidden"; // hide nav bar menu 
} 

// side bar

function myFunction(x) {
    x.classList.toggle();
  
} 