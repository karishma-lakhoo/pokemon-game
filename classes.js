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
    constructor({ position, image, frames = { max: 1, hold: 10}, sprites = [], animate = false, isEnemy = false}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0 }

        this.image.onload = () => {
            this.width = (this.image.width/this.frames.max)
            this.height = this.image.height
        }
        this.animate = animate
        this.sprites = sprites
        this.opacity = 1
        this.health  = 100
        this.isEnemy = isEnemy
    }

    draw() {
        context.save()
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
    attack({attack, recipient}){
        const timeline = gsap.timeline()
        this.health -= attack.damage

        let movementDistance = 20
        let healthBar = '#enemyHealthBar'
        if(this.isEnemy) healthBar = '#playerHealthBar'
        if(this.isEnemy) movementDistance = -20
        timeline.to(this.position, {
            x: this.position.x - movementDistance
        }).to(this.position, {
            x: this.position.x + movementDistance*2,
            duration: 0.1,
            onComplete: () => {
                // where enemy gets hit
                gsap.to(healthBar, {
                    width: this.health - attack.damage + '%'
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
        context.fillStyle = 'rgba(255, 0, 0, 0.5)'
        context.fillRect( this.position.x, this.position.y, this.width, this.height)
    }
}