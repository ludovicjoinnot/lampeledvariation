let valeurBroche = 0
input.onButtonPressed(Button.A, function () {
    valeurBroche = 1023
    for (let index = 0; index <= 5; index++) {
        pins.analogWritePin(AnalogPin.P0, valeurBroche)
        basic.pause(1000)
        valeurBroche += -200
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    valeurBroche = 0
    for (let index = 0; index <= 5; index++) {
        pins.analogWritePin(AnalogPin.P0, valeurBroche)
        basic.pause(1000)
        valeurBroche += 200
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
})
