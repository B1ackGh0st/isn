(function($) {
    'use strict';
	
	jQuery(document).ready(function(){
		
		/* START LIGHTBOX */
		
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		
		/* END LIGHTBOX JS */
		
		/* START COUNDOWN JS */
			$('#counter_area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/* END COUNDOWN JS */
		
	});	
})(jQuery);