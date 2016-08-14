$(document).ready(function () {

        // you want to enable the pointer events only on click;

        $('#about').hover(function(){
        	$(".flip").css('background','url("public/images/rain.gif") no-repeat transparent 0% 0%')
        }, function(){
        	$('.flip').css('background','black')
        });
        $('#projects').hover(function(){
        	$(".flip").css('background','url("public/images/thingy.gif") no-repeat transparent 0% 0%')
        	$(".flip").css('background-position','center center')
        }, function(){
        	$(".flip").css('background','black')
        });
        $('#contact').hover(function(){
        	$(".flip").css('background', '#1e355c')
        }, function(){
        	$(".flip").css('background','black')
        });
        $('#p').on('click', function(){
        	if($('.graph').attr('id') == "coll"){
        		$('.graph').attr('id','nothing')
        		$('.revealed').attr('id','dropdead');
        		setTimeout(function(){ $('.revealed').attr('class','hidden') }, 2000);
        	}else{
        		$('.graph').attr('class','graph')
        		$('.graph').attr('id', 'coll')
        		$('.hidden').attr('class','revealed')
        		$('.revealed').attr('id','awake')
        	}
        });
        $('#projectsModal').on('shown.bs.modal', function (e) {
        	console.log("shown");
  			$('.grid').masonry({
  				itemSelector:'.grid-item',
  				columnWidth:'.grid-sizer',
  				gutter: '.gutter-sizer',
  				percentPosition:true
  			})
		})
        
        // you want to disable pointer events when the mouse leave the canvas 

});