const main = document.querySelector('.main');
const h1 = document.querySelector('h1');
main.style.width = '1770px';
main.style.height = '850px';
main.style.backgroundColor = 'black';

const ball = document.createElement('div');
const b = {x:50,y:30,w:40,h:40,dx:3,dy:3,speed:5,ani:{},move:false}
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '50%';
ball.style.width = `${b.w}px`;
ball.style.height = `${b.h}px`;
ball.style.position = 'relative';
ball.style.left = `${b.x}px`;
ball.style.top = `${b.y}px`;
main.append(ball);

h1.addEventListener('click',()=>{
    if(!b.move){
        b.ani = requestAnimationFrame(mover);
        b.move = true;

    }else{
        cancelAnimationFrame(b.ani);
        b.move = false;
    }
    
})

function mover(){
if(b.x>1770-b.w || b.x < 0){
        b.dx *= -1;
    }
if(b.y>850-b.h || b.y < 0){
    b.dy *= -1;
}
b.x += b.dx * b.speed;
b.y += b.dy * b.speed;
ball.style.left = `${b.x}px`;
ball.style.top = `${b.y}px`;
    if(b.move){
        b.ani = requestAnimationFrame(mover)
    }
}



