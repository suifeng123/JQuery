(function($){
	$.formatDate = function(date,pattern){
		var result = [];
		while(pattern.length > 0){
			$.formatDate.patternParts.lastIndex = 0;
			var matched = $.formatDate.patternParts.exec(pattern);
			if(matched){
                  result.push(
					  $.formatDate.patternValue[matched[0]].call(this,date));
				  pattern = pattern.slice(matched[0].length);
			}else{
				result.push(pattern.charAt(0));
				pattern = pattern.slice(1);
			}
		}
		return result.join('');
	};

