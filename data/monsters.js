const embyImage = new Image()
embyImage.src = 'images/embySprite.png'

const draggleImage = new Image()
draggleImage.src = 'images/draggleSprite.png'

const monsters = {
    embySprite: {
        position: {
            x: 250,
            y: 300
        }, image: embyImage,
        frames: {
            max: 4,
            hold: 30
        },
        animate:true,
        name: "Emby",
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    draggleSprite: {
        position: {
            x: 660,
            y: 200
        }, image: draggleImage,
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        attacks: [attacks.Tackle, attacks.Fireball]
    }

}