$(document).ready(function() {
	$('.about-section__text-block .button_type_link').click(function () {
		$(this).parents('.about-section__text-block').toggleClass('hidden');
		!0 === $('.about-section__text-block').hasClass('hidden') ? $(this).text($(this).data('show_text')) : $(this).text	($(this).data('hide_text'));
	});
});

$(document).ready(function() {
	$('.faq-section__accordion .faq-button-js').click(function () {
		$('.hidden-question').toggleClass('d-none');
		!0 === $('.hidden-question').hasClass('d-none') ? $(this).text($(this).data('show-text')) : $(this).text	($(this).data('hide-text'));
	});
});

$(document).ready(function() {
	$('.certificate-button-js').click(function () {
		$('.hidden-certificats-js').toggleClass('d-none');
		!0 === $('.hidden-certificats-js').hasClass('d-none') ? $(this).text($(this).data('show-text')) : $(this).text	($(this).data('hide-text'));
	});
});

