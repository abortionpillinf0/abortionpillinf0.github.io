$(document).ready(function(){
    $.getJSON( "/data.json", function( data ) {
        var uls = document.findElementById('uls');
    for (var i=0;i<data['data'].length;i++) {
        var li = document.createElement('li');
        li.innerHtml = data['data'][i]['tit'];
        uls.appendChild(li);
    }
  });
});
