function adjustColorDropdown(){
	var styleValue = $('#styleDropdown').val();
	var dropdownSet = $('#colorDropdown');
	if(styleValue.length == 0){
		dropdownSet.attr('disabled',true);
		dropdownSet.emptySelect();
		adjustSizeDropdown();
	}
	else{
		dropdownSet.attr("disabled",false);
		$.getJSON(
			'getColors.jsp',
		{style:styleValue},
			function(data){
			dropdownSet.loadSelect(data);
			adjustSizeDropdown();
		}
		);
	}
}
