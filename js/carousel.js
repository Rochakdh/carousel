function main(element,transition){
var carouselContainer = document.querySelector('.carousel-container')
var carouselImageWrapper = document.querySelector('.carousel-image-wrapper')
var totalImage = carouselImageWrapper.childElementCount
const IMAGEWIDTH = 1000 
var TRANSITION = 2000
var left = 0
var HOLD = 400

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
function createSquares() {
    var square = document.createElement('div')
    square.className = 'square'
    squareWrapper.appendChild(square)
    return square
}

var leftBtn = buttons('left');
var rightBtn = buttons('right');
carouselContainer.appendChild(leftBtn)
carouselContainer.appendChild(rightBtn)
var squareWrapper = document.createElement('div')
squareWrapper.className = 'square-wrapper'
carouselContainer.appendChild(squareWrapper)
for (var i = 0; i<totalImage; i++ ){
    squareWrapper.appendChild(createSquares())
}
document.querySelector('.square').classList.add('active')


var interval;
function animate(){
    clearInterval(interval)
    interval = setInterval(function(){
        left = left - IMAGEWIDTH
        if (left< -totalImage*IMAGEWIDTH+IMAGEWIDTH){
            left = 0
        }
        var index = indexCalc(left)
        carouselImageWrapper.style.transition = HOLD +'ms'
        carouselImageWrapper.style.left = left + 'px'
        activeButton(index)
    },TRANSITION) 
   
}

function indexCalc(left){
    return Math.abs(left) / IMAGEWIDTH
}


function activeButton(index) {
    var actitveElement = document.querySelectorAll(".active");
    [].forEach.call(actitveElement, function(el) {
        el.classList.remove("active");
    });
    document.getElementsByClassName('square')[index].classList.add('active')
}


var elements=  document.getElementsByClassName('btn')
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click',function(e){
        if (e.target.classList[1] === 'btn-right'){
            left = left - IMAGEWIDTH
            if (left<-totalImage*IMAGEWIDTH+IMAGEWIDTH){
                left = 0
            }
            carouselImageWrapper.style.left = left + 'px'
        }
        else if (e.target.classList[1] === 'btn-left'){
            left = left + IMAGEWIDTH
            if (left>0){
                left += -totalImage*IMAGEWIDTH
            }
            carouselImageWrapper.style.left = left + 'px'
        }
        var index = indexCalc(left)
        activeButton(index)
        animate()  
    })
}

var getSquareChild = document.querySelectorAll('.square');
getSquareChild.forEach(function (square, index) {
    square.addEventListener('click', function (event) {
        left = -index * IMAGEWIDTH
        carouselImageWrapper.style.left = left + 'px'
        activeButton(index)
        animate()
    });
  });
animate()

}
main()
