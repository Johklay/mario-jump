const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')

const jump  = () => {
    event?.preventDefault();

    if (document.body.classList.contains('game-over')) return;

    mario.classList.add('jump')

    setTimeout(()=>{

         mario.classList.remove('jump')

    }, 500);
}

const loop = setInterval (() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        const cloudPosition = cloud.offsetLeft
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`

        document.body.classList.add('game-over')

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
