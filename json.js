$(document).ready(function(){
    $.getJSON( "/data.json", function( data ) {
    for (var i=0;i<data['data'].length;i++) {
        console.log(data['data'][i]['tit']);
    }
  });
});
