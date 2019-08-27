var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({}); 
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');
 

	JSCCommon.inputMask();  
	  
	var icon = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.2 477.2" style="enable-background:new 0 0 477.2 477.2;" xml:space="preserve"><g><path d="M145.2,238.6L360.7,23.1c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0L116.5,229.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.2,238.6z"/></g></svg>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// // карусель
	$('.s-about__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: true,
	 
		arrows: true,
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{

      breakpoint: 991.98,
      settings: {
				slidesToShow: 3, 
				infinite: false,
				loop: false,
      }

    } ]
	});
	
	$('.s-specialist__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: true,
	 
		arrows: true,
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [
			{

      breakpoint: 991.98,
      settings: {
				slidesToShow: 5, 
				infinite: false,
				loop: false,
      } 
		} ,
		
			{

      breakpoint: 575.98,
      settings: {
				slidesToShow: 3,  
      } 
		} ,

	]
	});
	
	$('.s-rew__row').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 600,
		infinite: true,
	 
		arrows: true,
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{

      breakpoint: 991,
      settings: {
				slidesToShow: 3, 
				infinite: false,
				loop: false,
      }

		},
		{
      breakpoint: 767.98,
      settings: {
				slidesToShow: 2 
      }

		},

	 ]
	});
	
var $status = $('.pagingInfo');
var $slickElement = $('.s-steps__slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('шаг '+ i + ' из ' + slick.slideCount);
});

$slickElement.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		appendArrows: ".control-block",
		// infinite: true,
	 
		infinite: true,
		arrows: true,
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{

      breakpoint: 991.98,
      settings: {
				slidesToShow: 3, 
				loop: false,
      } 
		},
		{
      breakpoint: 767.98,
      settings: {
				slidesToShow: 2 
      }

		},

	 ]
	});
var $status2 = $('.pagingInfo2');
var $slickElement2 = $('.s-prices__slider');

$slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status2.text('система '+ i + ' из ' + slick.slideCount);
});

$slickElement2.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		appendArrows: ".control-block2",
		// infinite: true,
	 
		infinite: true,
		arrows: true,
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{

      breakpoint: 991.98,
      settings: {
				slidesToShow: 5, 
				loop: false,
      }

		},
		{
      breakpoint: 767.98,
      settings: {
				slidesToShow: 2 
      }

		},

	 ]
	});

	$(".s-prices__toggle").click(function(){
		$(".s-prices__slide:nth-child(4), .s-prices__slide:nth-child(5)").slideToggle()
	})
//  скрывает/ показывает лишний текст
$(document).on('click',".b-morelines_section_button", function(e){
	e.preventDefault();
})
	$('.toggle-text-js').readmore({ speed: 500,  
		moreLink: '<a class="b-morelines_section_button" href="#">Читать полностью</a>',
	lessLink: '<a class="b-morelines_section_button" href="#">Скрыть</a>',
	heightMargin: 20,
	collapsedHeight: 183
	 });


	$('.custom-input-time__input').change(function(){
		$(this).parents('form').find('.toggle-wrap-input-js').toggle().toggleClass('active');
	})
	
	$('.form-wrap__polite').change(function(){
		$(this).parents('form').find('.form-wrap__btn').toggleClass('disabled');
	})
	// $(".jaw-block").each(function(){
		var th = $(this);
		$('[data-tooth-number]').click(function(e){
			var number = $(this).data("tooth-number")
			if($(this).hasClass("active")) { 
				$('[data-tooth-number="'+number+'"]').removeClass('active');
			}else{
				$('[data-tooth-number="'+number+'"]').addClass('active');

		}

		var teeth = [];
	 
		
		$('.jaw-block__tooth-item.active').each(function() {
				var value = $(this).data("tooth-number");

				if (teeth.indexOf(value) == - 1) {
						teeth.push(value);
				}
		});

		$('.tooth-numbers-input').val(teeth.join(', '));

		
			// $(this).toggleClass("active")
			// th.find(".jaw-block__tooth-number")
			// .eq($(this).index()).toggleClass("active");

		// })
		
		// th.find(".jaw-block__tooth-number").click(function(e){
		// 	$(this).toggleClass("active")
		// 	th.find(".jaw-block__tooth-item").eq($(this).index()).toggleClass("active")
		// })
	})


	

	// accordion
	$(".showhide").click(function () {


		$(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"),
			$(this).next("div").filter(function () {
				return "block" == $(this).css("display")
			}).slideUp().parent().removeClass("active"),
			$(this).next("div").filter(function () {
				return "none" == $(this).css("display")
			}).slideDown().prev("div").addClass("active").parent().addClass("active")
	})
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

				$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
}); 

var gets = (function() {
	var a = window.location.search;
	var b = new Object();
	a = a.substring(1).split("&");
	for (var i = 0; i < a.length; i++) {
	c = a[i].split("=");
			b[c[0]] = c[1];
	}
	return b;
})();
		// form
		$("form").submit(function () { //Change
			var th = $(this);
			th.find('.utm_source').val(gets['utm_source']); // добавить здесь в php и в форме
			th.find('.utm_term').val(gets['utm_term']);
			$.ajax({
				type: "POST",
				url: 'action.php', //Change
				data: th.serialize()
			}).success(function () { 
				ym(55013233,'reachGoal','call-back');
				//gtag('event','click_po_knopkie',{'event_category':'submit','event_action':'call-back'});
				window.location.replace("/thanks.html");
				setTimeout(function () { 
					th.trigger("reset"); 
				}, 4000);
			});
			return false;
		});
		// /form

		$(".s-accord__btn-more").click(function(e){
			e.preventDefault();
			$(".s-accord .col-lg-6").slideDown(function(){
				$(".s-accord__btn-more").fadeOut();
			});
		})
});
JSCCommon = { 
	magnificPopupCall: function () {
		$(".link-modal").click(function(){
			$($(this).data("src")).find(".order").val( $(this).data("order"))
		})
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false, 
			touch: false, 
			// type : 'inline', 
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
 

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  .  
	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/

