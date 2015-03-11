# simplePageScroller
Listen to any kind of scroll(even scrolling via code), if it hears even a single scroll it will scroll to that direction with the height of the window

just add to html

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> 	<!-- your jquery --> 
	<script src="jquery.simplePageScroller.plugin.js"></script>  Resource jQuery				<!-- double check filepath --> 
	<script>																					<!-- initialize --> 
	$(function(){
		$("html,body").init_simplePageScroller();
	});
	</script>