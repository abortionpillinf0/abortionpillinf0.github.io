$(document).ready(function(){
    $.getJSON( "/data.json", function( data ) {
    for (var key: data) {
        console.log(data[key]['tit']);
    }
  });
});
