let num1 = Math.ceil(Math.random() *10)
let num2 = Math.ceil(Math.random() *10)

let queEl = document.getElementById('que')
let inputEl = document.getElementById('input')
let formEl = document.getElementById('form')
let scoreEl = document.getElementById('score')
let score = JSON.parse(localStorage.getItem('score'))
if(! score)(score=0)
scoreEl.innerText = `Score:${score}`



queEl.innerText = `What is ${num1} multiply by ${num2}?`
let correctAns = num1 * num2


formEl.addEventListener('submit',(event)=>{
    event.preventDefault
    if(correctAns == inputEl.value){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()

    }

    console.log(score);



})

function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score))
}


