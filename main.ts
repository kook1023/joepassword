function isInputValid (numberOfDigits: number, numbersOfLetters: number) {
    isValid = true
    if (numberOfDigits < 2 || numbersOfLetters < 4 || numberOfDigits + numbersOfLetters < 8) {
        isValid = false
    }
    return isValid
}
input.onPinPressed(TouchPin.P0, function () {
    digits = 0
    letters = 0
})
function getRandomLetter () {
    if (Math.randomBoolean()) {
        return String.fromCharCode(randint(65, 90))
    } else {
        return String.fromCharCode(randint(97, 122))
    }
}
input.onButtonPressed(Button.A, function () {
    letters += 1
    basic.showString("" + (letters))
    basic.clearScreen()
})
function getRandomNumber () {
    if (true) {
        return String.fromCharCode(randint(48, 57))
    }
}
input.onButtonPressed(Button.AB, function () {
    if (isInputValid(digits, letters)) {
        for (let index = 0; index < letters; index++) {
            basic.showString("" + (getRandomLetter()))
        }
        for (let index = 0; index < letters; index++) {
            basic.showString("" + (getRandomNumber()))
        }
    } else {
        basic.showLeds(`
            # . . # .
            . . . . .
            # # # # .
            # . . . #
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    digits += 1
    basic.showString("" + (digits))
    basic.clearScreen()
})
let isValid = false
let letters = 0
let digits = 0
digits = 0
letters = 0
