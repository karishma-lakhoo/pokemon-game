const battleBackgroundImage = new Image()
battleBackgroundImage.src = 'images/battleMap.png'
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})



const draggleSprite = new Monster(monsters.draggleSprite)

const embySprite = new Monster(monsters.embySprite)
embySprite.attacks.forEach((attack) => {
    const button = document.createElement('button');
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)

})
// console.log(embySprite)

let battleAnimationId
const renderedSprites = [draggleSprite, embySprite]
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



animateBattle()

const queue = [];
// event listeners for buttons
document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML]
        embySprite.attack({
            attack: selectedAttack,
            recipient: draggleSprite,
            renderedSprites})
        queue.push(() => {
            draggleSprite.attack({
                attack: attacks.Tackle,
                recipient: embySprite,
                renderedSprites})
        })
    })


})


document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    if(queue.length > 0){
        queue[0]()
        queue.shift()
    }
    else{
        e.currentTarget.style.display = 'none'
    }
})