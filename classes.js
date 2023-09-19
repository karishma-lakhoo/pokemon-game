class Sprite {
    constructor({ position, image, frames = { max: 1, hold: 10}, sprites = [], animate = false}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0 }

        this.image.onload = () => {
            this.width = this.image.width
            this.height = this.image.height/this.frames.max
        }
        this.animate = animate
        this.sprites = sprites
    }

    draw() {
        // context.drawImage(this.image, this.position.x, this.position.y)
        context.drawImage(this.image,
            0,
            this.frames.val * 64,
            this.image.width,
            this.image.height/ this.frames.max,
            this.position.x,
            this.position.y,
            this.image.width,
            this.image.height/this.frames.max)

        if (!this.animate) return


        if (this.frames.max > 1){
            this.frames.elapsed++
        }
        if (this.frames.elapsed % this.frames.hold === 0){
            if (this.frames.val < this.frames.max - 1){
                this.frames.val++
            }
            else{
                this.frames.val = 0
            }
        }


    }
}

class BattleSprite {
    constructor({
                    position,
                    image,
                    frames = { max: 1, hold: 10},
                    sprites = [],
                    animate = false,
                    rotation =0,
                    }) {
        this.position = position
        this.image = new Image()
        this.frames = {...frames, val: 0, elapsed: 0 }
        this.image.onload = () => {
            this.width = (this.image.width/this.frames.max)
            this.height = this.image.height
        }
        this.image.src = image.src
        this.animate = animate
        this.sprites = sprites
        this.opacity = 1
        this.rotation = rotation

    }

    draw() {
        context.save()
        context.translate(this.position.x + this.width/2,this.position.y + this.height/2)
        context.rotate(this.rotation)
        context.translate(-this.position.x - this.width/2,-this.position.y - this.height/2)

        context.globalAlpha = this.opacity
        // context.drawImage(this.image, this.position.x, this.position.y)
        context.drawImage(this.image,
            this.frames.val * this.width,
            0,
            this.image.width/this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.frames.max,
            this.image.height)

        context.restore()
        if (!this.animate) return
        if (this.frames.max > 1){
            this.frames.elapsed++
        }
        if (this.frames.elapsed % this.frames.hold === 0){
            if (this.frames.val < this.frames.max - 1){
                this.frames.val++
            }
            else{
                this.frames.val = 0
            }
        }


    }



}

class Monster extends BattleSprite{
    constructor({
                    position,
                    image,
                    frames = { max: 1, hold: 10},
                    sprites = [],
                    animate = false,
                    rotation =0,
                    isEnemy = false,
                    name,
                    attacks

                }) {
        super({
            position,
            image,
            frames,
            sprites,
            animate,
            rotation,
        })
        this.health  = 100
        this.isEnemy = isEnemy
        this.name = name
        this.attacks = attacks

    }
    attack({attack, recipient, renderedSprites}){
        // show dialogue box
        document.querySelector('#dialogueBox').style.display = "block"
        document.querySelector('#dialogueBox').innerHTML = this.name  + " used " + attack.name
        let healthBar = '#enemyHealthBar'
        if(this.isEnemy) healthBar = '#playerHealthBar'
        recipient.health -= attack.damage
        let rotation = 1
        if(this.isEnemy) rotation = -2.2
        switch (attack.name) {
            case 'Fireball':
                const fireBallImage = new Image()
                fireBallImage.src = './images/fireball.png'
                const fireball = new BattleSprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: fireBallImage,
                    frames:{
                        max: 4,
                        hold: 10
                    },
                    animate: true,
                    rotation: rotation
                })
                renderedSprites.splice(1,0, fireball)

                gsap.to(fireball.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // where enemy gets hit
                        gsap.to(healthBar, {
                            width: recipient.health  + '%'
                        })
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08,
                        })
                        gsap.to(recipient, {
                            opacity:0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                        })
                        renderedSprites.splice(1,1)
                    }
                })

                break

            case 'Tackle':
                const timeline = gsap.timeline()

                let movementDistance = 20
                if(this.isEnemy) movementDistance = -20

                timeline.to(this.position, {
                    x: this.position.x - movementDistance
                }).to(this.position, {
                    x: this.position.x + movementDistance*2,
                    duration: 0.1,
                    onComplete: () => {
                        // where enemy gets hit
                        gsap.to(healthBar, {
                            width: recipient.health  + '%'
                        })
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08,
                        })
                        gsap.to(recipient, {
                            opacity:0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                        })
                    }
                }).to(this.position, {
                    x: this.position.x
                })
                break;

        }


    }
    faint() {
        document.querySelector('#dialogueBox').innerHTML = this.name  + " fainted "
        gsap.to(this.position, {
            y: this.position.y + 20
        })
        gsap.to(this, {
            opacity: 0
        })
    }

}

class Boundary {
    static width = 40
    static height = 40
    constructor({position}) {
        this.position = position
        this.width = 40
        this.height = 40
    }
    draw() {
        context.fillStyle = 'rgba(255, 0, 0, 0)'
        context.fillRect( this.position.x, this.position.y, this.width, this.height)
    }
}