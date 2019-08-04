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
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/1.png);"></div>')
	// /добавляет подложку для pixel perfect
 
	// }); 
 
	// /закрыть/открыть мобильное меню

	// function heightses() {

	// 	var w = $(window).width(); 

	// 	var topH = $("header ").innerHeight();
 
	// } 

	// $(window).resize(function () {
	// 	heightses();

	// });
 
	// heightses();
 
	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   }); 

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

      breakpoint: 992,
      settings: {
				slidesToShow: 3, 
				infinite: false,
				loop: false,
      }

    } ]
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

      breakpoint: 992,
      settings: {
				slidesToShow: 3, 
				infinite: false,
				loop: false,
      }

		},
		{
      breakpoint: 768,
      settings: {
				slidesToShow: 2 
      }

		},

	 ]
	});
	
	$('.s-steps__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: true,
	 
		arrows: true,
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{

      breakpoint: 992,
      settings: {
				slidesToShow: 3, 
				infinite: false,
				loop: false,
      }

		},
		{
      breakpoint: 768,
      settings: {
				slidesToShow: 2 
      }

		},

	 ]
	});

	$('.toggle-text-js').moreLines({
		linecount: 3,                   	// force moreLines after a certain number of lines. Default is 'auto' auto = 1
	 
		buttontxtmore: "Читать полностью",     	// Add your inner text for button
		buttontxtless: "Скрыть",     	// Add your inner text for button
		animationspeed: 600             	// Type your custom speed animation, by defaul is 'auto' auto = 1
	});
 
	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			// $.magnificPopup.close();
			// $.magnificPopup.open({
			// 	items: {
			// 		src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
			// 		type: 'inline'
			// 	}
			// })
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
			}, 4000);
		});
		return false;
	});
	// /form

	$('.custom-input-time__input').change(function(){
		$(this).parents('form').find('.toggle-wrap-input-js').slideToggle().toggleClass('active');
	})
	
	$('.form-wrap__polite').change(function(){
		$(this).parents('form').find('.form-wrap__btn').toggleClass('disabled');
	})

});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	 

	// /LazyFunction

	magnificPopupCall: function () {
		// $('.popup-with-move-anim').magnificPopup({
		// 	type: 'inline',

		// 	fixedContentPos: true,
		// 	fixedBgPos: true,

		// 	overflowY: 'auto',

		// 	closeBtnInside: true,
		// 	preloader: false,

		// 	midClick: true,
		// 	removalDelay: 300,
		// 	mainClass: 'my-mfp-zoom-in',
		// 	tClose: 'Закрыть (Esc)',
		// });

		// // / modal window

		// // modal галерея
		// $(".gal").each(function () {

		// 	$(this).find("a").magnificPopup({
		// 		type: 'image',
		// 		closeOnContentClick: false,
		// 		closeBtnInside: false,
		// 		mainClass: 'mfp-with-zoom mfp-img-mobile',
		// 		tClose: 'Закрыть (Esc)',
		// 		image: {
		// 			verticalFit: true,
		// 			// titleSrc: function(item) {
		// 			//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		// 			// }

		// 		},
		// 		gallery: {
		// 			enabled: true,
		// 			tPrev: 'Назад (Кнопка влева)', // title for left button
		// 			tNext: 'Вперед (Кнопка вправа)', // title for right button
		// 			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
		// 		}
		// 	});
		// })
		// // /modal галерея


		
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

