$(document).ready(function(){
    $.getJSON( "/data.json", function( data ) {
    console.log(data[0]['tit']);
  });
});
