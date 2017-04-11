
//DELETE the below unless i wanna use it for something else vvv
function toggleMenu() {
  var menuBox = document.getElementById('menu-box');
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}
//DELETE the ABove unless i wanna use it for something else ^^^


jQuery(function($) {

  var label = $('.menu label');
  label.click(function(){
    var label_id = $(this).attr('id');
    $('.tab-content').removeClass('open');
    $('.'+label_id+'-content').addClass('open');
  });
});
