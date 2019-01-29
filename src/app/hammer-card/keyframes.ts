import { keyframes, style } from '@angular/animations';


export const swipeOuteLeft = [
    style({ transform: ' translate3d(0px, 0, 0)', opacity: 0, offset: 0 }),
    style({ transform: ' translate3d(-45px, 0, 0)', opacity: 1, offset: .6 }),
    style({ transform: ' translate3d(-100px, 0, 0)', offset: .74 }),
    style({ transform: ' translate3d(-150px, 0, 0)', offset: .9 }),
    style({ transform: 'none', offset: 1 })
]


export const swipeOuteRight = [
    style({ transform: ' translate3d(0px, 0, 0)', opacity: 0, offset: 0 }),
    style({ transform: ' translate3d(45px, 0, 0)', opacity: 1, offset: .6 }),
    style({ transform: ' translate3d(100px, 0, 0)', offset: .74 }),
    style({ transform: ' translate3d(150px, 0, 0)', offset: .9 }),
    style({ transform: ' translate3d(3000px, 0, 0)', offset: 1 })
]

export const tapMeUp = [
    style({ 'transform-origin': ' top left', 'animation-timing-function': ' ease-in-out', offset: 0 }),
    style({
        transform: ' rotate3d(0, 0, 1, 80deg)', 'transform-origin': ' top left',
        'animation-timing-function': ' ease-in-out', offset: .2
    }),
    style({
        transform: ' rotate3d(0, 0, 1, 60deg)', 'transform-origin': ' top left', opacity: 1,
        'animation-timing-function': ' ease-in-out', offset: .4
    }),

    style({
        transform: ' rotate3d(0, 0, 1, 80deg)', 'transform-origin': ' top left',
        'animation-timing-function': ' ease-in-out', offset: .6
    }),

    style({
        transform: ' rotate3d(0, 0, 1, 60deg)', 'transform-origin': ' top left', opacity: 1,
        'animation-timing-function': ' ease-in-out', offset: .8
    }),
    style({ transform: ' translate3d(0, 700px, 0)', opacity: 0, offset: 1 })
]

export const wobble = [
    style({ transform: ' translate3d(-3000px, 0, 0)', opacity: 0, offset: 0 }),
    style({ transform: ' translate3d(25px, 0, 0)', opacity: 1, offset: .6 }),
    style({ transform: ' translate3d(-10px, 0, 0)', offset: .74 }),
    style({ transform: ' translate3d(5px, 0, 0)', offset: .9 }),
    style({ transform: 'none', offset: 1 })
]

export const jello = [
    // style({transform: 'none', offset: .111}),
    style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: .111 }),
    style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: .222 }),
    style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: .333 }),
    style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: .444 }),
    style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: .555 }),
    style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .666 }),
    style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .777 }),
    style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: .888 }),
    style({ transform: 'none', offset: 1 })
]


export const swing = [
    style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    style({ transform: 'none', offset: 1 })
]

export const slideOutLeft = [
    style({ transform: ' translate3d(0, 0, 0)', opacity: 1, offset: 0 }),
    style({ transform: ' translate3d(-25px, 0, 0)', opacity: 1, offset: .6 }),
    style({ transform: ' translate3d(10px, 0, 0)', offset: .74 }),
    style({ transform: ' translate3d(-5px, 0, 0)', offset: .9 }),
    style({ transform: ' translate3d(0, 0, 0)', opacity: 0, offset: 1 })
]

export const zoomOutRight = [

    style({ transform: ' translate3d(0px, 0, 0)', opacity: 1, offset: 0 }),
    style({ transform: ' translate3d(65px, 0, 0)', opacity: 1, offset: .6 }),
    style({ transform: ' translate3d(-20px, 0, 0)' ,  opacity: 0.5, offset: .74 }),
    style({ transform: ' translate3d(3005px, 0, 0)',  opacity: 0, offset: .9 }),
    style({ transform: 'none', offset: 1 })

]

export const rotateOutUpRight = [
    style({ transform: 'rotate3d(0, 0, 0, 0deg)', opacity: 1, 'transform-origin': 'right bottom', offset: 0 }),
    style({ transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0, 'transform-origin': 'right bottom', offset: 1 }),
]

export const flipOutY = [
    style({ transform: 'perspective(400px)', offset: 0 }),
    style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.33 }),
    style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1 }),
]
