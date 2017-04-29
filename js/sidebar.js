/*inspired by: https://www.w3schools.com/howto/howto_js_sidenav.asp*/

/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "295px";
    document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
