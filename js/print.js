/*
window.onload = function() {
  var printbutton = document.getElementById('printbutton');
  printbutton.onclick = function(){
    console.log(button);
    console.log('test');
    window.print();
  };
}
*/
jQuery(function($) {
  $('#printbutton').click(function(){
    window.print();
  });
});
