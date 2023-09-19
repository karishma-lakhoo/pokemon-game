const battleBackgroundImage = new Image()
battleBackgroundImage.src = 'images/battleMap.png'
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})


let draggleSprite = new Monster(monsters.draggleSprite)
let embySprite = new Monster(monsters.embySprite)
let renderedSprites = [draggleSprite, embySprite]
let queue;
// console.log(embySprite)

let battleAnimationId
function initBattle(){
    document.querySelector('#userInterface').style.display = 'block';
    document.querySelector('#dialogueBox').style.display = 'none';
    document.querySelector('#enemyHealthBar').style.width = '100%';
    document.querySelector('#playerHealthBar').style.width = '100%';
    document.querySelector('#attacksBox').replaceChildren();
    draggleSprite = new Monster(monsters.draggleSprite);
    embySprite = new Monster(monsters.embySprite);
    renderedSprites = [draggleSprite, embySprite];
    embySprite.attacks.forEach((attack) => {
        const button = document.createElement('button');

        button.innerHTML = attack.name
        document.querySelector('#attacksBox').append(button)
    })
    queue = [];
// event listeners for buttons
    document.querySelectorAll('button').forEach(button =>{
        button.addEventListener('click', (e) => {
            const selectedAttack = attacks[e.currentTarget.innerHTML]
            embySprite.attack({
                attack: selectedAttack,
                recipient: draggleSprite,
                renderedSprites})
            // draggle or enemy attacks here
            // draggle can only attack if health > 0
            if(draggleSprite.health <=0){
                queue.push(() => {
                    draggleSprite.faint()
                })
                queue.push(() => {
                    // fade back to black
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        onComplete: () => {
                            cancelAnimationFrame(battleAnimationId);
                            animate()
                            document.querySelector('#userInterface').style.display = 'none'
                            gsap.to('#overlappingDiv', {
                                opacity: 0
                            })
                            battle.initiated = false;


                        }
                    })
                })
            }
            const randomAttack = draggleSprite.attacks[Math.floor(Math.random()* draggleSprite.attacks.length)]

            queue.push(() => {
                draggleSprite.attack({
                    attack: randomAttack,
                    recipient: embySprite,
                    renderedSprites})
            })
            if(embySprite.health <=0){
                queue.push(() => {
                    embySprite.faint()
                })
                queue.push(() => {
                    // fade back to black
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        onComplete: () => {
                            cancelAnimationFrame(battleAnimationId);
                            animate()
                            document.querySelector('#userInterface').style.display = 'none'
                            gsap.to('#overlappingDiv', {
                                opacity: 0
                            })
                            battle.initiated = false;
                        }
                    })
                })
            }

        })

        button.addEventListener('mouseenter', (e) => {
            const selectedAttack = attacks[e.currentTarget.innerHTML]
            document.querySelector('#attackType').innerHTML = selectedAttack.type;
            document.querySelector('#attackType').style.color = selectedAttack.color;
        })
    })

}
function animateBattle() {
    battleAnimationId = window.requestAnimationFrame(animateBattle)
    // console.log('animating battle')
    battleBackground.draw()
    draggleSprite.draw()
    embySprite.draw()

    renderedSprites.forEach((sprite) => {
        sprite.draw()
    })
    // document.querySelectorAll('button').forEach({button} => {
    //     button.addEventListener('click', (e) => {
    //         gsap.to('#overlappingDiv', {
    //             opacity: 1
    //         }
    if (keys.w.pressed){
        window.cancelAnimationFrame(battleAnimationId)
        gsap.to('#overlappingDiv', {
            opacity: 1,
            duration: 0.4,
            onComplete() {
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    duration: 0.4,
                    //     activate a new animation loop
                    onComplete() {
                        animate()
                        gsap.to('#overlappingDiv', {
                            opacity: 0,
                            duration: 0.4,
                        })
                        battle.initiated = false
                    }
                })
            }
        })

    }
}

animate();
// initBattle();
// animateBattle()




document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    if(queue.length > 0){
        queue[0]()
        queue.shift()
    }
    else{
        e.currentTarget.style.display = 'none'
    }
})