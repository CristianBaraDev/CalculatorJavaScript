let display = document.getElementById('display');
let myH1 = document.getElementsByClassName('h1Text');

let buttons = Array.from(document.getElementsByClassName('button'));

//Loop to get buttons to add text to the display and call for the current number in calculator to do squares operations
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

//This function adds text to our string in our display
function addToDisplay(value){
    document.getElementById('display').value += value;
}

//Function to calculate squares
function calculateSquares(){
    try{
        let number = parseFloat(document.getElementById('display').value);
        display.value = number * number;
    }catch(error){
        document.getElementById('display').value ='Error';
    }
}

//Function to calculate squares roots
function calculateSquaresRoots(){
    try{
    let number = parseFloat(document.getElementById('display').value);
    if(number<0) throw "Negative Number";
    display.value = Math.sqrt(number);
    }catch(error){
        document.getElementById('display').value ='Error';
    }
}


function calculateResult(){
    try{
        // Getting the text from the display and  splitting the numbers and operators
        let regExpression = document.getElementById('display').value;
        let numbers = regExpression.split(/\+|\-|\x|\//g);
        let operators = regExpression.replace(/[0-9]|\./g, '').split('');

        //Function to convert the display text into numbers and operators and calculate the result of the display
        //Displays "Error" when dividing by zero or entering the wrong type of Input
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
                        throw "Cannot divide by zero";
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

//Function to clear the displayy
function cleanDisplay(){
    document.getElementById('display').value ='';
}

