import { Component, ATTRIBUTES, STATE } from './framework'
import { enableGesture } from './gesture'
import { Timeline, Animation } from './animation'
import { ease } from './ease'


export class Carousel extends Component {
    constructor() {
        super()
    }

    render() {
        this.root = document.createElement('div')
        this.root.classList.add('carousel')
        let index = 0;

        for (const img of this[ATTRIBUTES].imgList) {
            let child = document.createElement('div')
            child.className = 'carousel-item'
            child.style.backgroundImage = `url('${img}')`
            child.innerHTML = index;
            this.root.append(child)
            index++
        }

        enableGesture(this.root)
        let timeline = new Timeline()
        timeline.start()



        let nextPicture = () => {
            let nextIndex = (this[STATE].position + 1) % children.length

            let current = children[this[STATE].position]
            let next = children[nextIndex]
            t = Date.now()

            timeline.add(new Animation(
                current.style,
                'transform',
                -this[STATE].position * width,
                -width - this[STATE].position * width,
                500,
                0,
                ease,
                v => `translateX(${v}px)`
            ))

            timeline.add(new Animation(
                next.style,
                'transform',
                width - nextIndex * width,
                -nextIndex * width,
                500,
                0,
                ease,
                v => `translateX(${v}px)`
            ))

            this[STATE].position = nextIndex
            this.triggerEvent('change', { position: this[STATE].position })

        }

        let children = this.root.children
        let handle = null;
        this[STATE].position = 0
        let t = 0;
        let ax = 0;

        let width = this[ATTRIBUTES].width || 600

        this.root.addEventListener('start', event => {
            timeline.pause()
            clearInterval(handle)
            if (Date.now() - t < 1500) {
                let progress = (Date.now() - t) / 1500;
                ax = ease(progress) * 600 - 600;
            } else {
                ax = 0;
            }
            // let progress = (Date.now() - t) / 500
            // ax = ease(progress) * width - width
        })

        this.root.addEventListener('tap', event => {
            console.log('tap')
            this.triggerEvent('click', {
                position: this[STATE].position,
                data: this[ATTRIBUTES].imgList[this[STATE].position]
            })
        })

        this.root.addEventListener('pan', event => {
            let x = event.clientX - event.startX - ax
            let current = this[STATE].position - ((x - x % width) / width)
            let next = x >= 0 ? -1 : 1;
            for (const offset of [-1, 0, 1]) {
                let pos = current + offset;
                // 计算出合理的取值，比如:当长度是4时 pos如果为4 则要转换为0
                pos = (pos % children.length + children.length) % children.length;

                let child = children[pos]

                // 关闭动画
                child.style.transition = 'none'
                child.style.transform = `translateX(${-pos * width + offset * width + x % width}px)`
            }
        })

        this.root.addEventListener('end', event => {
            timeline.reset()
            timeline.start()
            handle = setInterval(nextPicture, 3000)

            let x = event.clientX - event.startX - ax;
            let current = this[STATE].position - ((x - x % width) / width)

            let direction = Math.round((x % width) / width)

            if (event.isFlick) {
                if (event.velocity > 0) {
                    direction = Math.ceil((x % width) / width)
                } else {
                    direction = Math.floor((x % width) / width)
                }
            }

            let next = x >= 0 ? -1 : 1;

            for (const offset of [0, next]) {
                let pos = current + offset
                pos = (pos + children.length) % children.length;

                let child = children[pos]
                timeline.add(new Animation(
                    child.style,
                    'transform',
                    -pos * width + offset * width + x % width,
                    -pos * width + offset * width + direction * width,
                    500,
                    0,
                    ease,
                    val => `translateX(${val}px)`
                ))

            }

            this[STATE].position = current - direction
            this[STATE].position = (this[STATE].position + children.length) % children.length

        })

        handle = setInterval(nextPicture, 3000)

        return this.root
    }
}