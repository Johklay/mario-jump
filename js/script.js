const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')

const jump  = (event) => {
    event?.preventDefault();

    if (document.body.classList.contains('game-over')) return;
    if (mario.classList.contains('jump')) return;

    mario.classList.add('jump')

   
}

const loop = () =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioHeight = mario.clientHeight;

    const isPortrait = window.innerHeight > window.innerWidth;
    const limiteColisao = isPortrait ? 90 : 120;
    
    if (pipePosition <= limiteColisao && pipePosition > 0 && marioPosition < mario.clientHeight * 0.6){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        const cloudPosition = cloud.offsetLeft;
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        document.body.classList.add('game-over')

        mario.src = 'img/game-over.png'
        mario.style.width = '65px'
        mario.style.marginLeft = '45px'

        return;
    }

    requestAnimationFrame(loop)

};

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump, {passive: false})

mario.addEventListener('animationend', () => {
    mario.classList.remove('jump');
});

loop();
