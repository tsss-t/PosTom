// セッションテーブルからセッションリストに飛ぶやつ
$.fn.jumpToPresen = function() {
	$(this).on("click", function() {
		var id = $(this).attr("id");
		var sessionid = id.substr(10);
		sessionStorage.setItem("gotosessionid",sessionid);
		$(document).on("pageshow", "#presenListPage", scrollToTr);
		changeShowList("presenlist")
		changePage("#presenListPage");
	});
}
function scrollToTr() {
	if(!localStorage.getItem("downloadResult")){
		var target = $("#session" + sessionStorage.getItem("gotosessionid"));
		console.log(sessionStorage.getItem("gotosessionid"));
		if (target.offset()) {
			var position = target.offset().top - 45;
			var speed = 500;
			$('body,html').scrollTop(position);
		};
		
		$(document).off("pageshow");
		sessionStorage.removeItem("gotosessionid");
	}
	
}

$.fn.changeDate = function(dateId) {
	var date = $(this).html();
	$(this).on('click', function(e) {
		$("#sessionDate").html(date);
		//全部消す
		var dno = 1;
		for (var d in timetable){
			document.getElementById("sessiontable"+dno).style.display = 'none';
			dno++;
		}
		//指定箇所のみ表示
		document.getElementById(dateId).style.display = 'block';
	});
}

$.fn.jumpToVenue = function() {
	$(this).on("click", function() {
		changePage("#venuePage");
	});
}