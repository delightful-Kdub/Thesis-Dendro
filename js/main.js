jQuery(function($) {

  var label = $('.menu label');
  label.click(function(){
    var label_id = $(this).attr('id');
    $('.tab-content').removeClass('open');
    $('.'+label_id+'-content').addClass('open');
    $('.menu label').removeClass('activetab');
    $('.menu label').addClass('tab');
    $(this).removeClass('tab');
    $(this).addClass('activetab');
  });

  //trying to get the active tab to follow my visual designs and indicate its active



  //instead of below, do this:  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_textarea_value

  $('input#goToTree').click(function() {
    var text = $('textarea .notesTextArea').val();
    //send to server and process response
    console.log(text);
  });

});
