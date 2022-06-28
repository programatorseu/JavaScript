const canvas = document.querySelector('#sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.clear');
const MOVE_AMOUNT = 10;
// destructing :
const {width, height} = canvas;

//create randon x and y
// let -  there are going to be reassigned
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;
let hue = 0;

// start drawing - put marker
ctx.beginPath();
//move marker
//starting point
ctx.moveTo(x, y);
//ending point
ctx.lineTo(x, y);
//connect points
ctx.stroke();
/// -> many args to pass that's why we create option
// {} -> object destructiring

function draw({ key }) {
    // increment hue by 1
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);
    switch(key) {
        case 'ArrowUp' :
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight' :
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown' :
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft' :
             x -= MOVE_AMOUNT;
             break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

function handleKey(e) {
    // for arrow keys -> blocking scrolling
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
    }
}

// once --> remove addEventListener
function clearCanvas() {
    canvas.classList.add('shake');
    //0 ,0 -> starting point
    ctx.clearRect(0,0,width, height);
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    }, {once: true});
}

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);



