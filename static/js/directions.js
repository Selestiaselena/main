function directionsShowDetails(btn, currentBlock, hideBlock1, hideBlock2) {
    btn.on('click', function () {
        currentBlock.removeClass('d-none');
        [hideBlock1, hideBlock2].forEach(block => block.addClass('d-none'));
    });
}

var yogaBtn = $('.yoga-button-js');
var yogaBlock = $('.yoga-block-js');
var astroButton = $('.astro-button-js');
var astroBlock = $('.astro-block-js');
var helpsButton = $('.dynamics-button-js');
var helpsBlock = $('.dynamics-block-js');

directionsShowDetails(yogaBtn, yogaBlock, astroBlock, helpsBlock);
directionsShowDetails(astroButton, astroBlock, yogaBlock, helpsBlock);
directionsShowDetails(helpsButton, helpsBlock, yogaBlock, astroBlock);
