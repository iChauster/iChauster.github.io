$(document).ready(function () {

        // you want to enable the pointer events only on click;
        var screensize = $(window).width()
        $('#about').hover(function(){
            if(screensize > 768){
        	   $(".flip").css('background','url("public/images/rain.gif") no-repeat transparent 0% 0%')
            }
        }, function(){
        	$('.flip').css('background','black')
        });
        $('#projects').hover(function(){
            if(screensize > 768){
        	   $(".flip").css('background','url("public/images/thingy.gif") no-repeat transparent 0% 0%')
        	   $(".flip").css('background-position','center center')
            }
        }, function(){
        	$(".flip").css('background','black')
        });
        $('#contact').hover(function(){
        	$(".flip").css('background', '#1e355c')
        }, function(){
        	$(".flip").css('background','black')
        });
        var time;
        if(screensize > 768){
            time = 2000;
        }else{
            time = 1000;
        }
        $('#p').on('click', function(){
        	if($('.graph').attr('id') == "coll"){
        		$('.graph').attr('id','nothing')
        		$('.revealed').attr('id','dropdead');
        		setTimeout(function(){ $('.revealed').attr('class','hidden') }, time);
        	}else{
        		$('.graph').attr('class','graph')
        		$('.graph').attr('id', 'coll')
        		$('.hidden').attr('class','revealed')
                setTimeout(function(){$('.revealed').attr('id','awake')}, 240);
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