const arrow = document.querySelector(".arrow1")
const answer = document.querySelector(".member")
const secondArrow = document.querySelector(".arrow2")
const secondAnswer = document.querySelector(".more")
const thirdArrow = document.querySelector(".arrow3")
const thirdAnswer = document.querySelector(".forgot")
const fourthArrow = document.querySelector(".arrow4")
const fourthAnswer = document.querySelector(".yes")
const fifthArrow = document.querySelector(".arrow5")
const fifthAnswer = document.querySelector(".direct")


let isOpen = close


arrow.addEventListener('click', function (){
   if (isOpen === close) {
     arrow.classList.add("perform")
     isOpen = open
     answer.style.display = "block"
     
     
   } else {
    arrow.classList.remove("perform")
    isOpen = close
    answer.style.display = "none"
    
   }

})

let isAnswered = true

secondArrow.addEventListener('click', function(){
    if (isAnswered===true) {
        secondArrow.classList.add("perform")
        isAnswered = false
        secondAnswer.style.display = "block"
    } else {
        secondArrow.classList.remove("perform")
        isAnswered = true
        secondAnswer.style.display = "none"
    }
})

 
let isTrue = true


thirdArrow.addEventListener('click', function(){
    if (isTrue===true) {
        thirdArrow.classList.add("perform")
        isTrue = false
        thirdAnswer.style.display = 'block'
    } else {
        thirdArrow.classList.remove("perform")
        isTrue = true
        thirdAnswer.style.display = 'none'
    }
})

let isDone = true

fourthArrow.addEventListener('click', function(){
    if (isDone===true) {
        fourthArrow.classList.add("perform")
        isDone = false
        fourthAnswer.style.display = "block"
    } else {
        fourthArrow.classList.remove("perform")
        isDone  = true
        fourthAnswer.style.display = "none"
    }
})

let isFinished = true

fifthArrow.addEventListener('click', function(){
    if (isFinished===true) {
        fifthArrow.classList.add("perform")
        isFinished = false
        fifthAnswer.style.display = "block"
    } else {
        fifthArrow.classList.remove("perform")
        isFinished = true
        fifthAnswer.style.display = "none"
    }
})