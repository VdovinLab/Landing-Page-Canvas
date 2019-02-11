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

	$("#contact-form").submit(function(event) {
		event.preventDefault();

		var formData = $(this).serialize();
		
		$(".form-container").addClass("hidden");
		$(".form-is-loading").addClass("initial");

		$.ajax({
			type: "POST",
			url: $(this).attr( "action" ),
			data: formData
			}).done(function() {

				$( ".form-is-loading" ).removeClass( "initial" );
				$( ".form-successfully" ).addClass( "initial" );
				
		}).fail(function() {
			
			$( ".form-is-loading" ).removeClass( "initial" );
			$( ".form-successfully" ).addClass( "initial error" );
			$( ".form-successfully" ).html( $('input[name="error-text"]').val() + '<a href="mailto:'+ $('input[name="email-to"]').val() +'?Subject='+ $('input[name="subject"]').val() +'">'+ $('input[name="email-to"]').val() +'</a>');
			
		});

	});

  });