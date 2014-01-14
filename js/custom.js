jQuery(document).ready(function ($) {

/* Contact Form */
var $contactform  = $('#contact-form'),
    $success    = '<strong>Successfully!</strong> Your message has been sent. Thank you for using our contact form! We will contact you soon.';
	$error      = '<strong>Error!</strong> Required fields are not filled or filled incorrectly, please send a check and try again.';
   
    $contactform.submit(function(){
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function(msg) {
                if (msg == 'SEND') {
                    response = '<div class="successfully">'+ $success +'</div>';
                }
                else {
                    response = '<div class="error">'+ $error +'</div>';
                }
                $(".error,.successfully").remove();
                $contactform.prepend(response);
            }
         });
        return false;
    });
	
$(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
	
    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
			$('.navigation li[data-slide="1"]').removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });
	
	function goToByScroll(dataslide) {
		var goal = $('.slide[data-slide="' + dataslide + '"]').offset().top;
		if (mywindow.scrollTop()<goal) {
			var goalPx = goal + 1;
		} else {
			var goalPx = goal - 1;
		}
        htmlbody.animate({
            scrollTop: goalPx
        }, 2500, 'easeInOutQuint');
    }
	
	links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	// Blog
		$(".blog-container").eq(0).addClass("active");
		$(".blog .blog-content").eq(0).show();
	
		$(".blog-container").click(function(){
			$(this).next(".blog-content").slideToggle("fast")
			.siblings(".blog-content:visible").slideUp("fast");
			$(this).toggleClass("active");
			$(this).siblings(".blog-container").removeClass("active");
		});
		
	// prettyPhoto
		$("a[rel^='prettyPhoto']").prettyPhoto();
	
	// Sticky Navigation	
		$(".menu").sticky({topSpacing:0});

	$("#slide1, #selide3, #slide5, #slide7, #slide12, #slide13, #slide14").each(function () {
        var slide_h = $(this).height();
		
		$(this).css('background-size', '100% '+slide_h+'px');
		
    });
});

// Sort Portfolio 
$(function(){
        
  var $container = $('.projects');

  $container.isotope({
	itemSelector : '.element'
  });
    
  var $optionSets = $('#options .option-set'),
	  $optionLinks = $optionSets.find('a');

  $optionLinks.click(function(){
	var $this = $(this);

	if ( $this.hasClass('selected') ) {
	  return false;
	}
	var $optionSet = $this.parents('.option-set');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected');

	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
	
	value = value === 'false' ? false : value;
	options[ key ] = value;
	if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	  
	  changeLayoutMode( $this, options )
	} else {
	  
	  $container.isotope( options );
	}
	
	return false;
  }); 
});

/* Revolution Slider */
var tpj=jQuery;

	tpj(document).ready(function() {
		if (tpj.fn.cssOriginal!=undefined)
			tpj.fn.css = tpj.fn.cssOriginal;
				tpj('.fullscreenbanner').revolution(
					{
						delay:9000,
						startwidth:1170,
						startheight:600,

						onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

						thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
						thumbHeight:50,
						thumbAmount:3,

						hideThumbs:0,
						navigationType:"bullet",				// bullet, thumb, none
						navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

						navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom

						navigationHAlign:"right",				// Vertical Align top,center,bottom
						navigationVAlign:"bottom",					// Horizontal Align left,center,right
						navigationHOffset:30,
						navigationVOffset:30,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						touchenabled:"on",						// Enable Swipe Function : on/off

						stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
						stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

						hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
						hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
						hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

						fullWidth:"on",							// Same time only Enable FullScreen of FullWidth !!
						fullScreen:"on",						// Same time only Enable FullScreen of FullWidth !!
						
						shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

	});
});