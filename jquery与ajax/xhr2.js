xhr.onreadystatechange = function(){
	if(xhr.readyState== 4){
		if(xhr.status>= 200 && xhr.status<300){
			//sucess
		}
		else{
			//error
		}
	}
}