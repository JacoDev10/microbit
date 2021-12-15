input.onButtonPressed(Button.A, function () {
    images.createImage(`
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        # # . # #
        `).scrollImage(1, 200)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (Rover.Ultrasonic() <= 15) {
            Rover.MotorRunDual(50, 50)
            basic.pause(100)
        } else {
            Rover.MotorStopAll(MotorActions.Stop)
            basic.pause(100)
        }
    }
    Rover.MotorStopAll(MotorActions.Stop)
})
basic.showIcon(IconNames.Heart)
