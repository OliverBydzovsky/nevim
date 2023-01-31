radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
loops.everyInterval(100, function () {
    for (let i = 0; i <= 255; i++) {
        radio.setGroup(0)
        i += 1
    }
})
