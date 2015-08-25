$(document).ready(function(){
	// console.log("Ready!");
	var mybodyid = $('body').attr('id');
	var mynavid = '#nav_' + mybodyid;
	// console.log("mybodyid is " + mybodyid);
	// console.log("mynavid is " + mynavid);
	$(mynavid).attr('class','active');
	//var mytitle = $(document).find("title").text();
	//console.log("The title of this page is "+mytitle);
	//$('#titleh1').html(mytitle);
});