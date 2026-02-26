/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelica Riego-O'Creen
 * Created on: Feb 2026
 * This program will light up an lED when A is pressed and turn off when button B is pressed.
*/

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})
  
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.No)
  pins.digitalWritePin(DigitalPin.P16, 0)
})
