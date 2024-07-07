input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(12000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        `)
    basic.pause(12000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        `)
    basic.pause(12000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.pause(12000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(12000)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.showLeds(`
    . . # . #
    . # # . #
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
