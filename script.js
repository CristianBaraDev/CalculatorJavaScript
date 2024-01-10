let display = document.getElementById('display');
let myH1 = document.getElementsByClassName('h1Text');


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        switch(e.target.innerText){
            case 'C':
                cleanDisplay();
                break;
                case '+':
                addToDisplay('+');
                break;
                case '-':
                addToDisplay('-');
                break;
                case 'x':
                addToDisplay('x');
                break;
                case '/':
                addToDisplay('/');
                break;
                case '.':
                addToDisplay('.');
                break;
                case 'X²':
                calculateSquares();
                break;
                case '√x':
                calculateSquaresRoots();
                break;
                case '9':
                addToDisplay('9');
                break;
                case '8':
                addToDisplay('8');
                break;
                case '7':
                addToDisplay('7');
                break;
                case '6':
                addToDisplay('6');
                break;
                case '5':
                addToDisplay('5');
                break;
                case '4':
                addToDisplay('4');
                break;
                case '3':
                addToDisplay('3');
                break;
                case '2':
                addToDisplay('2');
                break;
                case '1':
                addToDisplay('1');
                break;
                case '0':
                addToDisplay('0');
                break;
                case '=':
                calculateResult();
        }

    });

});

function addToDisplay(value){
    document.getElementById('display').value += value;
}


function calculateSquares(){
    try{
        let number = parseFloat(document.getElementById('display').value);
        display.value = number * number;
    }catch(error){
        document.getElementById('display').value ='Error';
    }
    
}

function calculateSquaresRoots(){
    try{
    let number = parseFloat(document.getElementById('display').value);
    display.value = Math.sqrt(number);
    }catch(error){
        document.getElementById('display').value ='Error';
    }
}

function calculateResult(){
    try{
        let regExpression = document.getElementById('display').value;

        let numbers = regExpression.split(/\+|\-|\x|\//g);
        let operators = regExpression.replace(/[0-9]|\./g, '').split('');
        let square = regExpression;
        let squareRoot =regExpression;

        let result =  parseFloat(numbers[0]);
        for(let i = 0; i < operators.length;i++){
            let nextNumber = parseFloat(numbers[i + 1]);
            switch(operators[i]){
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case 'x':
                    result *= nextNumber;
                    break;
                case '/':
                    if(nextNumber !==0){
                        result /= nextNumber;
                    }else{
                        throw "Division by zero";
                    }
                    break;
                default:
                    throw "Invalid operator"
            }

        }
        document.getElementById('display').value =result;
    }catch(error){
        document.getElementById('display').value ='Error';
    }
}

function cleanDisplay(){
    document.getElementById('display').value ='0';
}

