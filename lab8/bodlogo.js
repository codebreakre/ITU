let n=prompt("Heden too oruulah ve:");
 let sum=0;
 for(let i=1; i<=n; i++){
    let value=prompt(i+" дэх тоог оруул: ");
    value=parseInt(value);

    if(isNaN(value)){
        console.log("buruu ogogdol oruulsn bn");
        break;
    }
    sum+=value;
 }
 let duplic_sum=sum;
 let reverse=0;
 let track;
 while(duplic_sum>0){
    track=duplic_sum%10;
    reverse=reverse*10+track;
    duplic_sum=Math.floor(duplic_sum/10);
 }
 if(sum==reverse){
    console.log("the number is palindrome");
 }



 

 function calculateTimeToCatch(distance) {
   const wolfSpeed = 25; 
   const rabbitSpeed = 18; 
   const speedDifference = wolfSpeed - rabbitSpeed;
   const timeInHours = distance / speedDifference;
   const hours = Math.floor(timeInHours);
   const minutes = Math.floor((timeInHours - hours) * 60);
   const seconds = Math.round(((timeInHours - hours) * 60 - minutes) * 60); 
   return { hours, minutes, seconds };
}
const distance = 1; 
const time = calculateTimeToCatch(distance);
console.log(`Time to catch the rabbit: ${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds.`);

108
50/36
2 
50


function calculateDoorNumber(doorNumber) {
   const orts = Math.ceil(doorNumber/36);
   const davhar = Math.ceil((doorNumber-(orts-1)*36)/4);
   const door=doorNumber-(orts-1)*36-(davhar-1)*4;
}




function gcd(a, b) {
   while (b !== 0) {
     let temp = b;
     b = a % b;
     a = temp;
   }
   return a;
 }
 
 function lcm(a, b) {
   return Math.abs(a * b) / gcd(a, b);
 }

 let numbers=[10, 50, 50, 40, 60];
 let theLCM=lcm(numbers[0], numbers[1]);
 for(let i=2; i<5; i++){
   theLCM=lcm(theLCM,numbers[i]);
 }
 console.log(theLCM);



 const currentTime = new Date().getHours(); 
 const input = prompt("Та тоо оруулна уу:");
 
 if (currentTime >= 6 && currentTime < 18) { 
     const square = Math.pow(input, 2); 
     alert(`Таны оруулсан тооны 2 зэрэг: ${square}`);
 } else { 
     const squareRoot = Math.sqrt(input); 
     alert(`Таны оруулсан тооны язгуур: ${squareRoot}`);
 }
 