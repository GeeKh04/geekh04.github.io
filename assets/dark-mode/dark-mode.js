/* =================================
===  STYLE SWITCH DARK MODE     ====
==================================== */
 $(document).ready(function(){
 	$('#toggle-switcher').click(function(){
		if($('body').hasClass('dark-vertion')){
			$('body').removeClass('dark-vertion');
			$('body').addClass('white-vertion');
		}else{
			$('body').removeClass('white-vertion');
			$('body').addClass('dark-vertion');
		}
		if($('#mode-icon').hasClass('fa-moon-o')){
			$('#mode-icon').removeClass('fa-moon-o');
			$('#mode-icon').addClass('fa-sun-o');
			$('#mode-icon').css({'color':'white'});
			//$('#toggle-switcher').css({'background-color':'black'});
		}else{
			$('#mode-icon').removeClass('fa-sun-o');//fa-spin
			$('#mode-icon').addClass('fa-moon-o');
			$('#mode-icon').css({'color':'black'});
			//$('#toggle-switcher').css({'background-color':'white'});
		}
	});
});