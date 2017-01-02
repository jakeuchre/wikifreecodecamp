$(document).ready(function(){

   $('#getArt').click(function(){
              var getVal = $('#inputTxt').val();
              var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+getVal+"&format=json&callback=?";

              $.ajax({
                      type: "GET",
                      url: wikiUrl,
                      async: true,
                      dataType: "json",
                      success: function(data){
                        //console.log(data);
                        $('inputTxt').html('');

                        for(var i=0; i<data[1].length; i++){
                          $('#res').prepend("<li><a target=_blank href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p><li>");
                          $('#res').fadeIn(4000);
                        }

                        $('#inputTxt').val('');

                      },
                      error: function(errorMessage) {
                        alert("error");
                      }

                    });


                  });
  $('#inputTxt').keypress(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code===13){
      $('#getArt').click();
    }
  });

});
