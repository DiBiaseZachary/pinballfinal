basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        servos.P0.setAngle(0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showString("R")
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
        servos.P0.setAngle(50)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        servos.P1.setAngle(50)
        basic.showString("L")
    } else {
        servos.P1.setAngle(0)
        pins.digitalWritePin(DigitalPin.P11, 0)
    }
    servos.P2.run(pins.analogReadPin(AnalogPin.P3) / 10)
})
