$( function() {
  $( "#accordion1" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
} );

$( function() {
  $( "#accordion2" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
} );

$( function() {
  $( "#accordion3" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
} );

$( function() {
  $( "#accordion4" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
} );

$( function() {
  $( "#accordion5" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
} );

$(document).ready(function() {
	$('.catalog-painters__link').click(function(event) {
		$('.catalog-painters').removeClass('catalog-painters-active')
		var num = $(this).attr('data-num');
		$('#block'+num).addClass('catalog-painters-active')
	});
});

