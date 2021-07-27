
// i need to take the first number inputetd 
const add = (a,b)=>{return a+b};
const subtract = (a,b)=>{return a-b};
const multiply = (a,b)=>{return a*b};
const divide = (a,b)=>{return Math.round((a/b)*10)/10};
let lastNumber="";
let firstNumber ="";
let operat ='';

let result =0;


function operate (lastNumber,firstNumber,operat){
    lastNumber=Number.parseInt(lastNumber);
    firstNumber=Number.parseInt(firstNumber);
    console.log(lastNumber, firstNumber)
    let answer=0
        switch (operat){
            case 'add':
                answer=add(firstNumber,lastNumber);
                break;
            case 'subtract':
                answer=subtract(firstNumber,lastNumber);
                break
            case 'multiply':
                answer=multiply(firstNumber,lastNumber);
                break;
            case 'divide':
                if(lastNumber==0){
                    alert("ERROR: You can't divide by zero")
                    
                }else{
                    answer=divide(firstNumber,lastNumber);

                }
                
                break;
            

        }
    return answer;

};
function operator(){
    
    
    
    switch (this.id){
        case "clear":
            firstNumber=""
            lastNumber='';
            result=0;
            operat=""
            display.textContent="0"
            break;
        case "delete":
            lastNumber='';
            display.textContent="0"
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": 
        case "0":
            if(operat==''){
                firstNumber+=this.id;
                if(firstNumber.length>45){
                    firstNumber=''
                }
                display.textContent= firstNumber;

            }else{
                lastNumber+=this.id;
                if(lastNumber.length>45){
                    lastNumber=''
                }
                display.textContent=lastNumber;
                

            }
            
            break;
        case "add":
        case "divide":
        case "multiply":
        case "subtract":
            if(operat==''){
                operat= this.id;
            }else{
                if(firstNumber==''){
                    firstNumber=result
                    result=operate(lastNumber,firstNumber,operat);
                    //display.textContent=result
                }else{
                    //console.log(operate(lastNumber,firstNumber,operat))
                    result=operate(lastNumber,firstNumber,operat);
                    //display.textContent=result

                }

                //result= operate(lastNumber,firstNumber,operat);
                operat= this.id;
                lastNumber=''
                firstNumber=''
                display.textContent=result;
                

            }
            break
        case "equal":
            if(operat==''){
                if(firstNumber==''){
                    display.textContent=result;
                }else{
                    display.textContent=firstNumber;

                }
                
            }else{
                if(firstNumber==''){
                    firstNumber=result
                    result=operate(lastNumber,firstNumber,operat);
                    display.textContent=result
                }else{
                    //console.log(operate(lastNumber,firstNumber,operat))
                    result=operate(lastNumber,firstNumber,operat);
                    display.textContent=result

                }
                operat=''
                lastNumber=''
                firstNumber=''
        
            }
            
            break;
    }
    //console.log(lastNumber)

}

const screen = document.querySelector(".screen");
const display = document.createElement("p");
//display.textContent= "0";

screen.appendChild(display);

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener('click', operator)
})
