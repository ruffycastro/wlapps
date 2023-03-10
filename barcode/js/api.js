$(function () {

  $('form').on('submit', function (e) {

    e.preventDefault();
    $('#loading').show();
    $.ajax({
      type: 'get',
      url: 'https://newsytem.webphilservices.online/api/verification.php',
      data: $('form').serialize(),
      success: function (result) {
        $('#loading').hide();
        $("#div1").html(result);
      }
    });

  });

});