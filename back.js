var sec=0
var min=0
var hr=0
var Interval

function start(){
    Interval = setInterval(counter,10)
};

function pause(){
    clearInterval(Interval)
};

function stop(){
    clearInterval(Interval)
    sec=0
    min=0
    document.getElementById('counter').innerText='00:00:00'
};



function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('counter').innerText=hr+ ':' +min+ ':' +sec
}