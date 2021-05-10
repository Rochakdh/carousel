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

var left = 0
var interval = setInterval(function(){
    left = left - 1000
    if (left<-2000){
        left = 0
    }
    carouselImageWrapper.style.left = left + 'px'
    console.log(left)
},1000)