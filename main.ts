basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Rollerskate)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Asleep)
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # . # .
            . . # . .
            `)
    }
})
