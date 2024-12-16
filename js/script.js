//

//

$(document).ready(function () {
	$(".dodajUkorpu").click(function () {
		// console.log("test");

		var trenutnaKorpa = localStorage.getItem("korpa");
		var cena = $(this).attr("data-price");

		if (trenutnaKorpa != null) {
			ukupnaKorpa = parseInt(trenutnaKorpa) + parseInt(cena);
		} else{
            ukupnaKorpa=cena;
        }

		console.log(ukupnaKorpa);
		// console.log(cena);
		localStorage.setItem("korpa", ukupnaKorpa);
	});
});
