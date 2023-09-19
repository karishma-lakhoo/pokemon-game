const monsters = {
    embySprite: {
        position: {
            x: 250,
            y: 300
        }, image: {
            src: 'images/embySprite.png'
        },
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
        }, image: {
            src: 'images/draggleSprite.png'
        },
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