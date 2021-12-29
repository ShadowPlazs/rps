let RPS = 0
let RPS_2 = 0
input.onButtonPressed(Button.A, function () {
    RPS = randint(1, 3)
    if (RPS == 1) {
        basic.showLeds(`
            . # . . .
            # # # # #
            . # # . .
            . # # # .
            . . # # .
            `)
    } else if (RPS == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (RPS == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
    	
    }
    basic.pause(1000)
    RPS_2 = randint(1, 3)
    if (RPS_2 == 1) {
        basic.showLeds(`
            . # . . .
            # # # # #
            . # # . .
            . # # # .
            . . # # .
            `)
    } else if (RPS_2 == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (RPS_2 == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})

