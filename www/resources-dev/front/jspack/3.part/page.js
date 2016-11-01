"use strict";

(function($) {

	$(document).on("appinitOnce", function() {
	});

	$(document).on("appinit", function() {

		$('.tab-menu').each(function(){
			var $tabMenu = $(this);
			$('.tab-button',$tabMenu).each(function(){
				var $tabButton = $(this);
				var $tabUl = $('>ul', $tabButton);
				var $tabLi = $('>li', $tabUl);

				$tabLi.on('click','>a', function(){
					var $Li = $(this);
					var $tabName = $Li.attr('href');
					var $content = $($tabName);

					$content.addClass('active');
					$content.siblings().removeClass('active');
				});
			});
		});
		var $body = $('body, #wrap');
		var $header = $('#header');

		$('#lnb').each(function(){
			var $lnb = $(this);
			var $Ul = $('>ul', $lnb);
			var $Li = $('>li', $Ul);

            $lnb.on('mouseenter', function(){
                $header.addClass('active');
            });
            $lnb.on('mouseleave', function(){
                $header.removeClass('active');
            });

		});



	});



})(jQuery);