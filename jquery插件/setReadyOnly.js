
(function($){
	$.fn.serReadOnly = function(readonly){
		return this.filter('input:text')
			.attr('readonly',readyinly)
			.css('opacity',readyonly?0.5:1.0);
	}
})(jQuery);