const body = document.querySelector("body"),
    firstInput = document.querySelector(".Input1")
    secondInput = document.querySelector(".Input2")
function setGradientBackgroundToBody(){
    body.style.background = `linear-gradient(to right , ${firstInput.value} , ${secondInput.value})`
}
firstInput.addEventListener('input', setGradientBackgroundToBody)    
secondInput.addEventListener('input', setGradientBackgroundToBody)    
