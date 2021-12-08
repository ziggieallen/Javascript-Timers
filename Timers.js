function countDown (time) {
    let timer = setInterval(function(){
        time--;
        if(time <= 0) {
            clearInterval(timer);
            console.log('Done');
        }
        else {
            console.log(time);
        }
    } ,1000)
}

//Don't understand the syntax for this.
//Why is the 'else' needed?
//In this videos, setInterval looked more like 'setInterval(func, 4000)'. I don't understand how this was written.

function randomGame() {
    let num;
    let times = 0;
    let timer = setInterval(function() {
        num = Math.random();
        times++
        if(num > .75) {
            clearInterval (timer);
            console.log(`It took ${times} try/tries`);
        }
    },1000)
}