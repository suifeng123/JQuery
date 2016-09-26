(function($){
	$.toFixedWidth = function(value,length,fill){
		var result = value.toString();
		if(!fill)fill = '0';
		var padding = length - result.length;
		if(padding<0){
             result = result.substr(-padding);
		}
		else{
			for(var n=0;n<padding;n++)
				result = fill+result;
		}
		return result;
	};
})(jQuery);