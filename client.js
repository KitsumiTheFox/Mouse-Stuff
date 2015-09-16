var user = prompt("Nickname:");
var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

$("head").append("<style>."+user+" {background-color: "+color+"; }</style>");

$( document ).ready(function() {	
	$(document).mousemove(function(e) {
		$("#coords").html("X: " + e.pageX + ", " + "Y: " + e.pageY);
		$("body").append("<div class='"+user+" draw' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'></div>");
	});
});