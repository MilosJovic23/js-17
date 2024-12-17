//

//

$(document).ready(function () {
	$(".dodajUkorpu").click(function () {
		var trenutnaKorpa = localStorage.getItem("korpa");
		var cena = $(this).attr("data-price");

		if (trenutnaKorpa != null) {
			ukupnaKorpa = parseInt(trenutnaKorpa) + parseInt(cena);
		} else{
            ukupnaKorpa=cena;
        }
		localStorage.setItem("korpa", ukupnaKorpa);
	});
});
