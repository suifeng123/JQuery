$.fn.emptySelect = function(){
	return this.each(function(){
		if(this.tagName=='SELECT')this.options.length = 0;
	});
}

$.fn.loadSelect = function(optionDataArray){
	return this.emptySelect().each(function(){
		if(this.tagName == 'SELECT'){
			var selectElement = this;
			$.each(optionsDataArray,function(index,optionData){
				var option = new Option(optionData.caption,optionData.value);
				if($.brower.msie){
					selectElement.add(option);
				}else{
					selectElement.add(option,null);
				}
			});
		}
	});
}
(function($){
	$.fn.emptySelect = function(){
		return this.each(function(){
			if(this.tagName=='SELECT')this.options.length = 0;
		});
	}
	$.fn.loadSelect = function(optionsDataArray){
		return this.emptySelect().each(function(){
			if(this.tagName == 'SELECT'){
				var selectElement = this;
				$.each(optionsDataArray,function(index,optionData){
					var option = new Option(optionData.caption,option.value);
					if($.brower.msie){
						selectElement.add(option);
					}
					else{
						selectElement.add(option,null);
					}
				});
			}
		});
	}
})(jQuery);

$.ajaxSetup({
	type:'POST',
	timeout:5000,
	dataType:'html',
	error:function(xhr){
		$('#errorDisplay')
			.html('Error:'+xhr.status+''+xhr.statusText);
	}
});