function add(x, y) {

    let decimalPlaces = Number(correctDigitsAdditionSubtraction(x, y))
    let value = Number(x) + Number(y)

    if (value.toString().length > 10) {
        return roundAccurately(value, -(decimalPlaces - 10))
    } else {
        return roundAccurately(value, decimalPlaces)
    }
};

function subtract(x, y) {

    let decimalPlaces = Number(correctDigitsAdditionSubtraction(x, y))
    let value = Number(x) - Number(y)
    
    if (value.toString().length > 10) {
        return roundAccurately(value, -(decimalPlaces - 10))
    } else {
        return roundAccurately(value, decimalPlaces)
    }
}

function multiply(x, y) {

    let decimalPlaces = Number(correctDigitsMultiplyDivide(x, y))
    let value = Number(x) * Number(y)

    if (value.toString().length > 10) {
        return Number(roundAccurately(value, decimalPlaces).toString().substr(0,11))
    } else {
        return roundAccurately(value, decimalPlaces)
    }
}

function divide(x, y) {
    if (y == 0) {
        return 'To infinity & beyond!'
    }
    console.log('divide')
    let decimalPlaces = Number(correctDigitsMultiplyDivide(x, y))
    let value = Number(x) / Number(y)

    if (value.toString().length > 10) {
        return roundAccurately(value, -(decimalPlaces - 10))
    } else {
        return roundAccurately(value, decimalPlaces)
    }
}

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

function correctDigitsAdditionSubtraction(num1, num2) {
    let num1String = num1.toString()
    let num2String = num2.toString()

    let num1DecimalIndex = num1String.indexOf('.')
    let num2DecimalIndex = num2String.indexOf('.')

    if (num1DecimalIndex > -1 || num2DecimalIndex > -1) {
        let decimalPosition = num1DecimalIndex > num2DecimalIndex ? num1DecimalIndex : num2DecimalIndex
        let digitsLength = num1String.length > num2String.length ? num1String.length : num2String.length
        let digitsAfterDecimal = digitsLength - 1 - decimalPosition
        return digitsAfterDecimal
    } else {
        return 0
    }
}

function correctDigitsMultiplyDivide(num1, num2) {
    let num1String = num1.toString()
    let num2String = num2.toString()

    let num1DecimalIndex = num1String.indexOf('.')
    let num2DecimalIndex = num2String.indexOf('.')

    let totalDecimals

    if (num1DecimalIndex > -1 && num2DecimalIndex > -1) {
        totalDecimals = num1String.length - num1DecimalIndex + num2String.length - num2DecimalIndex - 2
    } else if (num1DecimalIndex > -1) {
        totalDecimals = num1String.length - num1DecimalIndex - 1
    } else if (num2DecimalIndex > -1) {
        totalDecimals = num2String.length - num2DecimalIndex - 1
    }

    if (totalDecimals > 0) {
        return totalDecimals
    } else {
        return 0
    }
}


// https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkYjQwZTJmOTM1M2M1OGFkZDY0OGI2MzYzNGU1YmJmNjNlNGY1MDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2MTM5NjAwMDcsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNzE3NjI3OTU3MzUzMTY3MDc2NCIsImVtYWlsIjoiamVyaWtrb2FnYXRlcEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6Ikplcmlra28gVGltbSBBZ2F0ZXAiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2lBb3JfZFg3OXJsNmVmbUVUZk93ZElLTlJ0U2E1T20yWEdFazVfS2c9czk2LWMiLCJnaXZlbl9uYW1lIjoiSmVyaWtrbyBUaW1tIiwiZmFtaWx5X25hbWUiOiJBZ2F0ZXAiLCJpYXQiOjE2MTM5NjAzMDcsImV4cCI6MTYxMzk2MzkwNywianRpIjoiYzcxOTk0NTc2MmQwYjQzNWFlNWZjODJjZGM3YWIxMTQ0ZGFlMzk1ZCJ9.jD3KXB4bJfKWydFj_YOss1V-_U8ISyPZp77VYTyajTZ_N3V1TEBlrcHShJldpEkhD3bSlqu_B6uC48g40yB_a7sAzX5avFb9Xw1fmHmZzWdtpQUokv4mltuBcZ7U-3SkLnGzxm6ewJBYaoQ5XruVNi2ZdfKCKDU5rY9vJHObF3a91SUC6iTMsncrZ1PonJQ7FP_Eoyp4wRjPj0r3genU_LNrfYnxPlskKjcMEdz-LjRPK7S2sQTkHGsMxIrrVN5cPBOphM1R51QtrwzfDwwOKy-rwyX4SKBtYe1Srm8OXguo_mmhJazoKmud-BP46GPBwH4c6GnIlIEJ7D9Y1YF-Zw
function roundAccurately(number, decimalPlaces) {
    return Number(Math.round(number + 'e' + decimalPlaces) + "e-" + decimalPlaces)
}

function display(e) {
        
    let currentCharacter = e.target.textContent

    if (currentCharacter == 'C') {
        clear()
        return
    }

    if (beginSecondNumber) {
        calculatorDisplay.textContent = ''
        beginSecondNumber = false
    }

    if (calculatorDisplay.textContent == calculatedValue && !operator && numberString) {
        if (
            currentCharacter == '/' || 
            currentCharacter == '*' ||
            currentCharacter == '+' ||
            currentCharacter == '-') {

                operator = currentCharacter
                firstNumber = Number(numberString)
                numberString = ''
                calculatorDisplay.textContent = firstNumber
                beginSecondNumber = true
                console.log('beginninng after equals operation')
                return

        } else {
            calculatorDisplay.textContent = ''
            numberString = ''
            console.log('beginning new number after equals operation')
        }

    }

    if (currentCharacter == '.') {
        if (numberString.includes('.')) {
            console.log('already contains decimal')
            return
        }
    }

    if (calculatorDisplay.textContent == 0) {
        if (currentCharacter == '.') {
            calculatorDisplay.textContent = '0.'
            numberString = '0.'
            console.log('decimal')
            return
        } else if (    // test: 1-1=0+2 // to catch a case when calculatedValue = 0 and want to keep operating
            currentCharacter == '/' || 
            currentCharacter == '*' ||
            currentCharacter == '+' ||
            currentCharacter == '-') {
                if (numberString === '') {
                    console.log('error: no numbers selected. restarting')
                    clear()
                    return
                }
                operator = currentCharacter
                firstNumber = Number(numberString)
                numberString = ''
                calculatorDisplay.textContent = firstNumber
                beginSecondNumber = true
                console.log(firstNumber, '1st # display 0')
                return
        } else if (currentCharacter != '=') {

            if (numberString.includes('.')) {           // fixes issue of display not showing decimal correctly when starting at '0.'
                console.log('continuing decimal')
                calculatorDisplay.textContent += currentCharacter
            } else {
                console.log('filling out calculator normally')      // fills out calculator normally when no decimal
                calculatorDisplay.textContent = currentCharacter
            }
            numberString += currentCharacter
            console.log('display 0', numberString, 'numberString')
            return
        }
    }



    if (currentCharacter == '/' || 
        currentCharacter == '*' ||
        currentCharacter == '+' ||
        currentCharacter == '-') {

        if (operator) {         // test: 1+2+ = '3' --> layers on multiple operations
            if (firstNumber && !secondNumber) {
                secondNumber = Number(numberString)
                numberString = ''
                calculatedValue = operate(operator, firstNumber, secondNumber)
                calculatorDisplay.textContent = calculatedValue
                firstNumber = calculatedValue
                secondNumber = ''
                beginSecondNumber = true
                operator = currentCharacter
                console.log('multiple operations', operator, 'operator')
                return
            // } else {        // if operator already selected, will ignore selection
            //     console.log('operator already selected')
            //     return
            }

        } else {
            operator = currentCharacter
            // NEED TO: add 'active' class to button to highlight
            
        }
        

        if (!firstNumber) {                     // sets firstNumber once operator is chosen
            firstNumber = Number(numberString)
            numberString = ''
            calculatorDisplay.textContent = firstNumber
            beginSecondNumber = true
            operator = currentCharacter
            console.log(firstNumber, '1st #', operator, 'operator')
        } else if (firstNumber && !secondNumber) {      // sets secondNumber? accessible?
             secondNumber = Number(numberString)
             numberString = ''
             console.log('accessing this?', secondNumber, '2nd #')
         }
    
        return      // makes sure that operator isn't added to display/numberString
    }

    if (currentCharacter == '=') {

        if (firstNumber && operator && !secondNumber) {
            secondNumber = Number(numberString)
            numberString = ''
            console.log(operator, 'operator')
            calculatedValue = operate(operator, firstNumber, secondNumber)
            calculatorDisplay.textContent = calculatedValue
            numberString = calculatedValue
            firstNumber = ''
            secondNumber = ''
            operator = ''

            console.log('regular equals operation')
            // console.log(numberString, 'numberString')
            // console.log(firstNumber, '1st #')
            // console.log(secondNumber, '2nd #')
            // console.log(operator, 'operator')
            
            return
        } else if (firstNumber == 0 && operator && !secondNumber) {         // catches case when firstNumber = 0
            secondNumber = Number(numberString)
            numberString = ''
            calculatedValue = operate(operator, firstNumber, secondNumber)
            calculatorDisplay.textContent = calculatedValue
            numberString = calculatedValue
            firstNumber = ''
            secondNumber = ''
            operator = ''
            
            console.log('firstNumber = 0 equals operation')
            return
        }
        console.log('incorrect equals')
        clear()     // cathces and resets calculator if pressing equals sign incorrectly
        return      // makes sure that equals sign isn't added to display/numberString
    }


    numberString += currentCharacter
    calculatorDisplay.textContent += currentCharacter
    console.log(numberString, 'numberString')

    if (calculatorDisplay.textContent.length > 10 || numberString.length > 10) {
        clear()
        console.log('Too many digits')
    }

}

function clear() {
    calculatorDisplay.textContent = 0
    numberString = ''
    firstNumber = ''
    secondNumber = ''
    operator = ''
    calculatedValue = ''
    beginSecondNumber = false
}

let calculatorDisplay = document.querySelector('.display')
let firstNumber = ''
let operator = ''
let secondNumber = ''
let numberString = ''
let calculatedValue = ''
let beginSecondNumber = false
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', display))