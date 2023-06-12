$(document).ready(function(){
    $.getJSON( "/data.json", function( data ) {
    for (var key in data) {
        console.log(data[key]);
    }
  });
});
