$( document ).ready(function() {
	$('#contact-message').keyup(function () {
		var left = 200-this.value.length;
		if (this.value.length > 200) {
			this.value = this.value.substring(0, 200);
		} else {
			$('#charsmore').text("maximum 200 characters - of which " + left + " are left");
		}
	});
	
	$('.slickdiv').slick({
		dots: true,
		infinite: true,
		speed: 700,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		cssEase: 'linear'
	});
});