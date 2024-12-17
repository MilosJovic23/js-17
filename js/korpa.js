//

//

//

$(document).ready(function () {
	var korpa = localStorage.getItem("korpa");

	if (korpa == null) {
		$("#korpa").html("nemate proizvoda u kropi");
	}
	{
		$("#korpa").html(korpa);
	}
	$("#isprazniKorpu").click(function () {
		localStorage.removeItem("korpa");
		
			$("#korpa").html("nemate proizvoda u kropi");
	
	});

});
