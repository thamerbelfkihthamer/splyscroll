
jQuery(document).ready(function($) {
			
			$('.handle ').on('click',function(){
				$('nav ul').toggleClass('showing');
			});
			$('nav ul').on('click',function(){
				$('nav ul').toggleClass('showing');
			});


	var sections =  [];
	var id = false;
	var $navbar = $('nav');
	var $navbara = $('a',$navbar);

	$navbara.click(function(event) {
		
		$('html , body').animate({
			scrollTop: $($(this).attr('href')).offset().top -$navbar.height()});
		hash($(this).attr('href'));
	});

	$('#image').click(function(e){
		$('html , body').animate({
			scrollTop: $('#section1').offset().top - $navbar.height() 
		})
	})

	$navbara.each(function(){
		sections.push($($(this).attr('href')));
	});

	$(window).scroll(function(e){
		var scrollTop = $(this).scrollTop() + ($(window).height()/2);
		for(var i in sections){
			var section  = sections[i];
			if(scrollTop > section.offset().top){
				scroll_id =  section.attr('id');
			}
		}
		if(scroll_id !== id){
			id= scroll_id;
			if($(window).width() >670){
				$navbara.removeClass('bord');
		        $('a[href="#' + id + '"]', $navbar).addClass('bord');
			}
		
		}

		
	});

});


hash =  function(h){

	if(history.pushState){
		history.pushState(null,null,h);
	}else{
		location.hash = h;
	}
}