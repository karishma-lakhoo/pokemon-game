const canvas = document.querySelector('canvas')

const context = canvas.getContext('2d')

// console.log(gsap)

canvas.width = 1024
canvas.height = 576

// parsing the json data into an array
const collisionsMap = []
for ( let i = 0; i < collisions.length; i+=50){
    collisionsMap.push(collisions.slice(i, 50+i))
}

const battleZonesMap = []
for ( let i = 0; i < battleZonesData.length; i+=50){
    battleZonesMap.push(battleZonesData.slice(i, 50+i))
}

const boundaries = []
const offset = {
    x: -18,
    y: -200
}
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if( symbol === 7656){
            boundaries.push(new Boundary({position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y}}))
        }
    })
})

const battleZones = []

battleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if( symbol === 7243){
            battleZones.push(new Boundary({position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y}}))
        }
    })
})

// create the html image object
const image = new Image()
image.src = 'images/map.png'

const foregroundImage = new Image()
foregroundImage.src = 'images/foregroundObjects.png'


const playerUpImage = new Image()
playerUpImage.src = 'images/ShayUp1.png'

const playerLeftImage = new Image()
playerLeftImage.src = 'images/ShayLeft1.png'

const playerRightImage = new Image()
playerRightImage.src = 'images/ShayRight1.png'

const playerDownImage = new Image()
playerDownImage.src = 'images/ShayDown1.png'

// 64 x 256
const player = new Sprite({
    position: {
        x:  canvas.width/2 - 64/2,
        y:  canvas.height/2 - 256/4/2,
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 10
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    },
    // animate:false
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image:  image
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image:  foregroundImage
})

const thingsToDoImage = new Image()
thingsToDoImage.src = 'images/thingsToDO.png'
const thingsToDo = new Sprite({
    position: {
        x: 10,
        y: 10
    },
    image: thingsToDoImage
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    m: {
        pressed: false
    },
    n: {
        pressed:false
    },
    t: {
        pressed:false
    },
    y: {
        pressed:false
    }
}


const movables = [background, ...boundaries, foreground, ...battleZones]


function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x-4 + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x+15 <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y+15 <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y-5 + rectangle1.height >= rectangle2.position.y
    )
}

const battle = {
    initiated: false
}

function animate() {
    const animationId = window.requestAnimationFrame(animate)
    // console.log(animationId)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()

    })
    battleZones.forEach(battleZone => {
        battleZone.draw()
    })
    player.draw()
    foreground.draw()

    let moving = true
    player.animate = false

    if(battle.initiated) return
    // activating a battle
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for ( let i = 0; i < battleZones.length; i++){
            const battleZone = battleZones[i]
            if(
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: battleZone
                })
            ){
                // console.log('activate battle')
                // deactivate animation loop
                window.cancelAnimationFrame(animationId)
                battle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    duration: 0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            duration: 0.4,
                            //     activate a new animation loop
                            onComplete() {
                                animateBattle()
                                gsap.to('#overlappingDiv', {
                                    opacity: 0,
                                    duration: 0.4,
                                })
                            }
                        })
                    }
                })
                break
            }
        }
    }

    // movement code

    if (keys.w.pressed && lastKey === 'w') {
        for ( let i = 0; i < boundaries.length; i++){
            player.animate = true
            player.image = player.sprites.up
            const boundary = boundaries[i]
            if(
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }}
                })
            ){
                console.log('collidingTop')
                moving = false
                break
            }
        }

        if (moving === true){

            movables.forEach(movable => {
                movable.position.y += 3})
        }
    }
    else if (keys.a.pressed && lastKey === 'a') {
        for ( let i = 0; i < boundaries.length; i++){
            player.animate = true
            player.image = player.sprites.left
            const boundary = boundaries[i]
            if(
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }}
                })
            ){
                console.log('collidingLeft')
                moving = false
                break
            }
        }
        if (moving === true){

            movables.forEach(movable => {
                movable.position.x += 3})
        }

    }
    else if (keys.s.pressed && lastKey === 's') {
        for ( let i = 0; i < boundaries.length; i++){
            player.animate = true
            player.image = player.sprites.down
            const boundary = boundaries[i]
            if(
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }}
                })
            ){
                console.log('collidingBottom')
                moving = false
                break
            }
        }
        if (moving === true){
            movables.forEach(movable => {
                movable.position.y -= 3})
        }
    }
    else if (keys.d.pressed && lastKey === 'd') {
        for ( let i = 0; i < boundaries.length; i++){
            player.animate = true
            player.image = player.sprites.right
            const boundary = boundaries[i]
            if(
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }}
                })
            ){
                console.log('collidingRight')
                moving = false
                break
            }
        }
        if (moving === true){

            movables.forEach(movable => {
                movable.position.x -= 3})
        }
    }
    else if (keys.m.pressed){
        gsap.to('#mailDiv', {
            opacity: 1,
            duration: 0.4,
            onComplete() {
                gsap.to('#mailDiv', {
                    opacity: 1,
                    duration: 8,
                    onComplete() {
                        gsap.to('#mailDiv', {
                            opacity: 0,
                            duration: 0.4,
                        })
                    }
                })
            }
        })
    }

    else if (keys.n.pressed){
        gsap.to('#seedsDiv', {
            opacity: 1,
            duration: 0.4,
            onComplete() {
                gsap.to('#seedsDiv', {
                    opacity: 1,
                    duration: 4,
                    onComplete() {
                        gsap.to('#seedsDiv', {
                            opacity: 0,
                            duration: 0.4,
                        })
                    }
                })
            }
        })
    }
    else if (keys.t.pressed){
        gsap.to('#treasureDiv', {
            opacity: 1,
            duration: 0.4,
            onComplete() {
                gsap.to('#treasureDiv', {
                    opacity: 1,
                    duration: 4,
                    onComplete() {
                        gsap.to('#treasureDiv', {
                            opacity: 0,
                            duration: 0.4,
                        })
                    }
                })
            }
        })
    }
    else if (keys.y.pressed){
        gsap.to('#finalDiv', {
            opacity: 1,
            duration: 0.4,
            onComplete() {
                gsap.to('#finalDiv', {
                    opacity: 1,
                    duration: 4,
                    onComplete() {
                        gsap.to('#finalDiv', {
                            opacity: 0,
                            duration: 0.4,
                        })
                    }
                })
            }
        })
    }

}

const battleBackgroundImage = new Image()
battleBackgroundImage.src = 'images/battleMap.png'
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})

const draggleImage = new Image()
draggleImage.src = 'images/draggleSprite.png'

const draggleSprite = new BattleSprite({
    position: {
        x: 250,
        y: 300
    }, image: draggleImage,
    frames: {
        max: 4,
        hold: 30
    },
    animate: true
})

const embyImage = new Image()
embyImage.src = 'images/embySprite.png'

const embySprite = new BattleSprite({
    position: {
        x: 660,
        y: 200
    }, image: embyImage,
    frames: {
        max: 4,
        hold: 30
    },
    animate:true
})

let battleAnimationId
function animateBattle() {
    battleAnimationId = window.requestAnimationFrame(animateBattle)
    console.log('animating battle')
    battleBackground.draw()
    draggleSprite.draw()
    embySprite.draw()
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

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'm':
            keys.m.pressed = true
            lastKey = 'm'
            break
        case 'n':
            keys.n.pressed = true
            lastKey = 'n'
            break
        case 't':
            keys.t.pressed = true
            lastKey = 't'
            break
        case 'y':
            keys.y.pressed = true
            lastKey = 'y'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 'm':
            keys.m.pressed = false
        case 'n':
            keys.n.pressed = false
        case 't':
            keys.t.pressed = false
        case 'y':
            keys.y.pressed = false
    }
})



// animate()
animateBattle()

let clicked = false
addEventListener('click', () => {
    if (!clicked){
        audio.Map.play()
        clicked = true
    }
})


//notes: make it so that when you make your way to the picnic
// the girl there will ask you to get something for her from the shops
//then once you get it, you will receive a prize or an animation will happen
