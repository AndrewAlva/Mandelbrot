jQuery(document).ready(function($) {
	var lineCounter = 1;

	setInterval(function(){
		if (lineCounter == 1 ){
			$('#firstText').addClass('upperText');
			$('#secondText').removeClass('lowerText');
			
			setTimeout(function(){
				$('#firstText').remove();

				$('#changingText').append('<h2 id="thirdText" class="leftText lowerText"> Developing </h2>');
			},600);

			lineCounter = 2;

		} else if (lineCounter == 2 ){
			$('#secondText').addClass('upperText');
			$('#thirdText').removeClass('lowerText');
			
			setTimeout(function(){
				$('#secondText').remove();

				$('#changingText').append('<h2 id="firstText" class="leftText lowerText"> Evolving </h2>');
			},600);

			lineCounter = 3;

		} else if (lineCounter == 3 ){
			$('#thirdText').addClass('upperText');
			$('#firstText').removeClass('lowerText');
			
			setTimeout(function(){
				$('#thirdText').remove();

				$('#changingText').append('<h2 id="secondText" class="leftText lowerText"> Growing </h2>');
			},600);

			lineCounter = 1;

		}
	},3000);
});