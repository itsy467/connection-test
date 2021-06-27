radio.onReceivedValue(function (name, value) {
    if (接続数 <= 25) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > 2) {
            radio.setGroup(無線グループ)
            接続数 += 1
            if (!(接続数 % 5 == 0)) {
                LEDX = 接続数 % 5
            } else {
                LEDX = 4
            }
            if (接続数 < 6) {
                LEDY = 0
            }
            if (接続数 > 5 && 接続数 < 11) {
                LEDY = 1
            }
            if (接続数 > 10 && 接続数 < 16) {
                LEDY = 2
            }
            if (接続数 > 15 && 接続数 < 21) {
                LEDY = 3
            }
            if (接続数 > 20 && 接続数 < 26) {
                LEDY = 4
            }
            led.plot(LEDX, LEDY)
            if (接続数 / 10 == 0) {
                無線グループ += 1
            }
        } else {
            basic.showString("Reception strength is weak")
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . . .
                . # # # .
                `)
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # . # .
                `)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # . # .
                `)
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # . # .
                `)
        }
    }
})
let LEDY = 0
let LEDX = 0
let 無線グループ = 0
let 接続数 = 0
radio.setFrequencyBand(50)
接続数 = 0
無線グループ = 1
LEDX = 0
LEDY = 0
basic.forever(function () {
    if (接続数 == 25) {
        basic.pause(150)
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
            basic.showLeds(`
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # # . .
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # # .
                . # # . .
                # # . . .
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # #
                . . # # .
                . # # . .
                # # . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # .
                . # # . .
                # # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # #
                . . # # .
                . # # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . # #
                . . # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                . . . # #
                `)
        }
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
