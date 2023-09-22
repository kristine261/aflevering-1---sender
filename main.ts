input.onButtonPressed(Button.A, function () {
    Køn = 0.7
    basic.showString("M")
    TID = input.runningTime()
})
input.onGesture(Gesture.TiltLeft, function () {
    Vægt1 += 1
    Count = Vægt1
    basic.showNumber(Vægt1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(Promille)
    basic.pause(5000)
    if (Promille > 1.5) {
        radio.sendString("Send hjælp!")
        radio.sendNumber(Promille)
    }
})
input.onButtonPressed(Button.B, function () {
    Køn = 0.6
    basic.showString("K")
    TID = input.runningTime()
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    Vægt1 += 10
    Count = Vægt1
    basic.showNumber(Vægt1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Genstande = 0
    Tæller += 1
    Genstande = Tæller
    basic.showNumber(Tæller)
})
let Tæller = 0
let Genstande = 0
let Promille = 0
let Count = 0
let Vægt1 = 0
let TID = 0
let Køn = 0
radio.setGroup(280)
basic.showString("A=Mand")
basic.showString("B=Kvinde")
control.waitMicros(5)
basic.clearScreen()
basic.forever(function () {
    Promille = Tæller * 12 / (Vægt1 * Køn) - 0.15 * (TID / 3600000)
})
