$(document).ready(function() {

	$( ".nav-item" ).click(function() {

		var id = "#" + $(this).data( "target" );
		
		$( ".nav-item.selected" ).removeClass( "selected" );
		$( ".box.selected" ).removeClass( "selected" );

		$(id).addClass( "selected" );
		$(this).addClass( "selected" );

		var offset = $(id).offset();

		offset.top = offset.top + $( "#canvas-container" ).scrollTop();
		offset.left = offset.left - $( ".navigation-container" ).width() + $( "#canvas-container" ).scrollLeft();

		isNowAnimated = true;

		$( "#canvas-container" ).animate({
			
			scrollTop: offset.top - 20,
			scrollLeft: offset.left - 20
			
		}, 600);

	});

	$( ".box" ).click(function() {

		$( ".nav-item.selected" ).removeClass( "selected" );
		$( ".box.selected" ).removeClass( "selected" );

		$(this).addClass( "selected" );
		$( '.nav-item[data-target="' + $(this).attr("id")  +'"]' ).addClass( "selected" );

	});

  });