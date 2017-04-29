//inspired by: http://stackoverflow.com/questions/7649072/how-to-show-popup-if-select-option-in-select-dropdown-using-javascript

$(function() {
    $("#browsingSelector").change(function() {
        var val = $(this).val();

        if (val == 4) {
          window.open("createNew.html", "myPage", "width=400,height=200, left=580, top=300", "directories=0,titlebar=0,toolbar=0,location=0,status=0, menubar=0,scrollbars=no,resizable=no,");
          //confirm('Popup!')
        }
    });
});
