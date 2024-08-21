let userInputEl = document.getElementById("userInput");

let bomImgEl = document.getElementById("bomImg");

let errorMsgEl = document.getElementById("errorMsg");
let timerEl = document.getElementById("timer"); 

// how to add timers in js

//setimeout();
 
   //setInterval();


//   let intervalId = setInterval(()=>{
//     console.log("hello i am setinterval");
    
// }, 1000);

// clearInterval(intervalId)


let counter = 10;

 let intervalId = setInterval(()=>{
  counter = counter - 1;

  timerEl.textContent = counter;
  //console.log(counter);

  if(counter === 0){
    clearInterval(intervalId);
    bomImgEl.src = "blast.jpeg"
    }
    

},1000);

function onChangeUserInput(event){
if(event.target.value === "defuse" && event.key === "Enter" && counter > 0){
  clearInterval(intervalId);
  //lisi condition ke true hone mein likh denge
 bomImgEl.src = "raphael-renter-raphi_rawr-j2gctU0c3ZE-unsplash.jpg"

}else{
  if(counter === 0){
  clearInterval(intervalId);
  bomImgEl.src = "blast.jpeg"
  }
  else if(event.target.value !== "defuse" && event.key === "Enter"){
    clearInterval(intervalId);
  bomImgEl.src = "blast.jpeg"
  }

}


}


userInputEl.addEventListener("keyup",onChangeUserInput)


//spelling galt hui bom fatna chahiye