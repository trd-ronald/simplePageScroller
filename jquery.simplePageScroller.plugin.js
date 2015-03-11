/*
	Summary: Listen to any kind of scroll(even scrolling via code), if it hears even a single scroll it will scroll to that direction with the height of the window

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="jquery.simplePageScroller.plugin.js"></script>  Resource jQuery
	<script>
	$(function(){
		$("html,body").init_simplePageScroller();
	});
	</script>
*/

(function($){
	$.fn.init_simplePageScroller = function(){
		var scrollTimeOutflag = true;
		var lastScrollTop = 0;
		$(window).scroll(function(e){
			var st = $(this).scrollTop();
			console.log(st+"+"+$(window).height());
			if (st > lastScrollTop){
				// downscroll code
				if(scrollTimeOutflag){
					$('html,body').stop().animate({
						scrollTop: lastScrollTop+$(window).height()
					}, 400, function(){//when complete
						setTimeout(function(){ scrollTimeOutflag = true; }, 100);
					});
					scrollTimeOutflag = false;
				}
			} else {
				// upscroll code
				if(scrollTimeOutflag){
					$('html,body').stop().animate({
						scrollTop: lastScrollTop-$(window).height()
					}, 400, function(){//when complete
						setTimeout(function(){ scrollTimeOutflag = true; }, 100);
					});
					scrollTimeOutflag = false;
				}
			}
			lastScrollTop = st;
		});	
	};
})(jQuery);

