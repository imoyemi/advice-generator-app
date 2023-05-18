/* GLOBAL VARIABLE*/ 
const btn = document.querySelector('.dice')
const numberId = document.querySelector('#adviceid')
const advice = document.querySelector('.content')
const line = document.querySelector(".line")

/* fetch result*/ 
function generate() {
    /**** waiting for response ****/
    advice.textContent = 'Loading...'
    btn.disabled = true
    btn.style.cursor = 'wait'
/**** fetch response ****/
    fetch('https://api.adviceslip.com/advice')
.then(response=>{
    if(response.status !== 200){
        throw new Error('Request Failed')
    }else{
      return  response.json()
    }
}
 )
.then(data=>{
    numberId.textContent=`#${data.slip.id}`
    advice.textContent = data.slip.advice
    btn.disabled = false
    btn.style.cursor = 'pointer'
})
.catch(error=>{
    advice.textContent = error
    btn.disabled = false
    btn.style.cursor = 'pointer'
})
}
const resize = ()=>{
    if(window.innerWidth <= 725){
        line.scr = "img/pattern-divider-mobile.svg" 
        }
}


// event listener
window.addEventListener('resize',resize)
window.addEventListener('DOMContentLoaded',generate)
btn.addEventListener('click',generate)