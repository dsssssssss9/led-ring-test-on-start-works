/**
 * In order for led blocks to work in ONSTART you MUST add a SET LED BRIGHTNESS block & set it to more than 0
 */
modules.led1.setBrightness(28)
basic.showIcon(IconNames.TShirt)
modules.led1.setAll(0x00ff00)
basic.pause(100)
