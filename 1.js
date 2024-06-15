function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Впервые пользуешься калькулятором?!';
    } else {
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number2 !== 0 ? number1 / number2 : 'Дэлит на зиро';
                break;
            default:
                result = 'Ноунейм оператор';
        }
    }

    document.getElementById('result').innerHTML = result + '<br>КТО ПРОЧИТАЛ, ТОТ ГЕЙ!!';
    
    // воспроизводит песенку
    const audio = document.getElementById('audio');
    audio.play();
}