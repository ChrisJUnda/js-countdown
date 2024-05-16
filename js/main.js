'use strict'

/*
function prova (){
    console.log('ciao')

}

prova();

setTimeout(prova, 10_000)
setInterval(prova, 1_000)
*/


let seconds = 10;

const timer = setInterval(function(){

    
    if (seconds === 0){
        console.log('stampo buon anno');
        alert('buon anno');
        clearInterval(timer)
    }  else {
        console.log(seconds);
        seconds--;
    }

}, 1_000)