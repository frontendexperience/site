$(function(){
  'use strict';

  $.getJSON( 'http://graph.facebook.com/?ids=https://www.facebook.com/frontendexperience', function( data ) {
    var obj = data['https://www.facebook.com/frontendexperience'];

    $('#likes').text( obj.likes );
  });
});
