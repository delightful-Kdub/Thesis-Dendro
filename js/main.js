jQuery(function($) {

  var label = $('.menu label');
  label.click(function(){
    var label_id = $(this).attr('id');
    $('.tab-content').removeClass('open');
    $('.'+label_id+'-content').addClass('open');
  });
});

//trying to get the active tab to follow my visual designs and indicate its active
