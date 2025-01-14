//for(let tanus = 10; tanus > 0 ; tanus --){
    //console.log(tanus);
    
//}

const numbers = [22 , 56, 31 , 27 , 88 , 66 , 20 ,93 , 23 ,35 ,0 , 71 ,]



const evenNumbers = [];
const oddNumbers = [];  

numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number); 
  } else {
    oddNumbers.push(number); 
  }
});

console.log("Toqsonlar ", evenNumbers); 
console.log("Juft sonlar", oddNumbers);