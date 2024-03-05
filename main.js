let operator="";
let previousNumber="";
let currentNumber="";
let result="";
let numbersNodeList=document.querySelectorAll(".number");
let operatorsNodeList=document.querySelectorAll(".operator");
let clear=document.querySelector(".clear-btn")
let decimal=document.querySelector(".decimal")
let equal=document.querySelector(".equal")
let topScreen=document.querySelector(".screen-top");
let bottomScreen=document.querySelector(".screen-bottom");

//getting numbers, operators and clear

numbersNodeList.forEach((numberBtn)=>numberBtn.addEventListener("click",function (e){padNumber(e.target.textContent);
bottomScreen.textContent=currentNumber;
}))

function padNumber(num){
  if (currentNumber.length<=22){
  currentNumber += num;
  }
  };

operatorsNodeList.forEach((operatorBtn)=>operatorBtn.addEventListener("click", function (e){
padOperator(e.target.textContent);
topScreen.textContent=`${previousNumber}${operator}`;
bottomScreen.textContent=currentNumber;
}));

function padOperator(oper){
  if(topScreen.textContent.length>0 && bottomScreen.textContent.length>0){    
    operate();
    topScreen.textContent=result;
    operator=oper;
    previousNumber=result;
    currentNumber="";
  }else if (topScreen.textContent.length>0 && bottomScreen.textContent.length<1){
    topScreen.textContent=result;
    operator=oper; 
    previousNumber=result;
  }else{
    operator =oper;
    previousNumber=currentNumber;
    currentNumber=""; 
  } 
	}



clear.addEventListener("click",padClear)

// equal

equal.addEventListener("click",()=>{                      
  if(currentNumber !="" && previousNumber !=""){
    operate();
    topScreen.textContent="";
    if (previousNumber.length<=22){
      bottomScreen.textContent=result;
      topScreen.textContent=`${result}`;
      currentNumber="";
      bottomScreen.textContent=currentNumber;
    }else{
      return "out of range"
    }
    
  }


})

// operation functions
function add(previousNum,currentNum){
	return previousNum + currentNum};
    
function subtract (previousNum,currentNum){
	return previousNum - currentNum};
    
function multiply(previousNum,currentNum){
	return previousNum * currentNum};
    
function divide (previousNum,currentNum){
	return previousNum / currentNum};
    
//





function padClear (){
	operator="";
	previousNumber="";
	currentNumber="";
  result="";
  topScreen.textContent=currentNumber;
  bottomScreen.textContent=currentNumber;
}




    
    
function operate(){

  previousNumber=Number(previousNumber);
  currentNumber=Number(currentNumber);
 {
    if(operator===""){
      return
    }
    else if(operator==="+"){
     result= add(previousNumber,currentNumber)
    }else if(operator==="-"){
     result=subtract(previousNumber,currentNumber)
    }else if(operator==="x"){
     result=multiply(previousNumber,currentNumber)
    }else if(operator==="/"){
    result= divide (previousNumber,currentNumber)}
    result=roundNumber(result)
    previousNumber=previousNumber.toString();
    currentNumber=previousNumber.toString();
  }


  

};    
function roundNumber(num){
  return Math.round(num*1000)/1000;
}
