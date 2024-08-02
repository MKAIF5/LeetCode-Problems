// Problem : Reverse Integer

const takeInteger = (integer) => {
    let reverseConverted = parseInt(integer.toString().split("").reverse().join("") , 10);
  
    if(integer < 0){
      return reverseConverted * -1
    }
    return reverseConverted
  }
  
  console.log(takeInteger("-327"));
// Solved 