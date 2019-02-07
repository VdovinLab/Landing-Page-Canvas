$(document).ready(function() {

	$(".nav-item").click(function(event) {

		var id = "#" + $(this).data("target");
		
		$(".nav-item.selected").removeClass("selected");
		$(".box.selected").removeClass("selected");

		$(id).addClass("selected");
		$(this).addClass("selected");

		var offset = $(id).offset();

		offset.top = offset.top + $("#canvas-container").scrollTop();
		offset.left = offset.left - $(".navigation-container").width() + $("#canvas-container").scrollLeft();
		

		$("#canvas-container").animate({
			
			scrollTop: offset.top - 20,
			scrollLeft: offset.left - 20
			
		}, 600);

	});

  });