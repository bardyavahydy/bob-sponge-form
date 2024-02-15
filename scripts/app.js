const $ = document
const leftEyeElm = $.getElementById('left-eye')
const rightEyeElm = $.getElementById('right-eye')
const userInputElm = $.getElementById('userInput')
const passInputElm = $.getElementById('passInput')

let LeftEyeTop = null
let LeftEyeLeft = null
let RightEyeTop = null
let RightEyeLeft = null

// FUNCTIONS

const positionEyeHandler = (leftEyeTop, leftEyeLeft, rightEyeTop, rightEyeLeft) =>{
    leftEyeElm.style.top = `${leftEyeTop}px`
    leftEyeElm.style.left = `${leftEyeLeft}px`
    rightEyeElm.style.top = `${rightEyeTop}px`
    rightEyeElm.style.left = `${rightEyeLeft}px`
}

const typingHandler = (event) =>{
    if(userInputElm.value.length <= 40){
        if(event.code === "Backspace" && userInputElm.value.length !== 0){
            if(userInputElm.value.length >= 24){
                positionEyeHandler(
                    +leftEyeElm.style.top.slice(0, leftEyeElm.style.top.indexOf('p')) + 0.5,  
                    +leftEyeElm.style.left.slice(0, leftEyeElm.style.left.indexOf('p')) - 0.5, 
                    +rightEyeElm.style.top.slice(0, rightEyeElm.style.top.indexOf('p')) + 0.5, 
                    +rightEyeElm.style.left.slice(0, rightEyeElm.style.left.indexOf('p')) - 0.5 )
            }else{
                positionEyeHandler(
                    +leftEyeElm.style.top.slice(0, leftEyeElm.style.top.indexOf('p')) - 0.5,  
                    +leftEyeElm.style.left.slice(0, leftEyeElm.style.left.indexOf('p')) - 0.5, 
                    +rightEyeElm.style.top.slice(0, rightEyeElm.style.top.indexOf('p')) - 0.5, 
                    +rightEyeElm.style.left.slice(0, rightEyeElm.style.left.indexOf('p')) - 0.5 )
            }
    
        }else if(userInputElm.value.length >= 24){
            positionEyeHandler(
                +leftEyeElm.style.top.slice(0, leftEyeElm.style.top.indexOf('p')) - 0.5,
                +leftEyeElm.style.left.slice(0, leftEyeElm.style.left.indexOf('p')) + 1, 
                +rightEyeElm.style.top.slice(0, rightEyeElm.style.top.indexOf('p')) - 0.5,
                +rightEyeElm.style.left.slice(0, rightEyeElm.style.left.indexOf('p')) + 1 )
    
        }else if(event.location === 0 && event.code !== "Backspace"){
            positionEyeHandler(
                +leftEyeElm.style.top.slice(0, leftEyeElm.style.top.indexOf('p')) + 0.5,  
                +leftEyeElm.style.left.slice(0, leftEyeElm.style.left.indexOf('p')) + 0.5, 
                +rightEyeElm.style.top.slice(0, rightEyeElm.style.top.indexOf('p')) + 0.5, 
                +rightEyeElm.style.left.slice(0, rightEyeElm.style.left.indexOf('p')) + 0.5 )
        }
    }
}

const oldPosition = () =>{
    LeftEyeTop = +leftEyeElm.style.top.slice(0, leftEyeElm.style.top.indexOf('p')) 
    LeftEyeLeft = +leftEyeElm.style.left.slice(0, leftEyeElm.style.left.indexOf('p')) 
    RightEyeTop = +rightEyeElm.style.top.slice(0, rightEyeElm.style.top.indexOf('p')) 
    RightEyeLeft = +rightEyeElm.style.left.slice(0, rightEyeElm.style.left.indexOf('p')) 
}

// EVENTS

userInputElm.addEventListener('focus', () => {
    if(userInputElm.value.length !== 0){
        positionEyeHandler(LeftEyeTop, LeftEyeLeft, RightEyeTop, RightEyeLeft )
    }else positionEyeHandler(75, 96, 75, 158)
})
userInputElm.addEventListener('blur', () =>{
    oldPosition()
    positionEyeHandler(75, 110, 75, 174)
})
userInputElm.addEventListener('keydown', typingHandler)
passInputElm.addEventListener('focus', () => positionEyeHandler(61, 121, 61, 164))
passInputElm.addEventListener('blur', () => positionEyeHandler(75, 110, 75, 174))