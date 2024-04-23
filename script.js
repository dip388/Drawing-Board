const canvas = document.getElementById('Canvas');
let colorPicker = document.getElementById('favcolor');
const ctx = canvas.getContext("2d");
let color = '';
let lineWidth = 5;
let isPainting = false;

document.getElementById('plus').addEventListener('click',function (){
    if(lineWidth < 10){
        lineWidth = lineWidth+1;
        document.getElementById('count').innerText = lineWidth;
    }
});

document.getElementById('minus').addEventListener('click',function(){
    if(lineWidth > 1){
        lineWidth = lineWidth-1;
        document.getElementById('count').innerText = lineWidth;
    }
})



colorPicker.addEventListener('change',function(){
    ctx.strokeStyle = this.value;
});


let offSetX = canvas.offsetLeft;
let offSetY = canvas.offsetTop;

canvas.width = window.innerWidth - offSetX-100;
canvas.height = window.innerHeight - offSetY-20;

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx = canvas.getContext("2d");
})

let startX;
let startY;


const draw = (e)=>{
    if(!isPainting){
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX,e.clientY)
    ctx.stroke(); 
}

canvas.addEventListener('mousedown',function(e){

    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup',function(){
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove',draw);


let mode = 'light';
document.getElementById('modeBtn').addEventListener('click',function (){

    if(mode == 'light'){
        mode = 'dark';
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        this.innerText = 'dark'
    }else{
        mode = 'light';
        this.innerText = 'light'
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }

})

