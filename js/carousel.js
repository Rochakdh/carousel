var carouselContainer = document.querySelector('.carousel-container')
var carouselImageWrapper = document.querySelector('.carousel-image-wrapper')
console.log(carouselImageWrapper)
function buttons(position) {
    var buttons = document.createElement('button')
    buttons.classList = 'btn'
    if (position === 'right'){
        buttons.classList.add('btn-right')
        buttons.innerHTML = '>'
    }
    else if(position === 'left'){
        buttons.classList.add('btn-left')
        buttons.innerHTML = '<'
    }
    return buttons
}

var leftBtn = buttons('left');
var rightBtn = buttons('right');
carouselContainer.appendChild(leftBtn)
carouselContainer.appendChild(rightBtn)