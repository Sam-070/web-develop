//change to uppercase
const names=["Alice","Sam","Jack","Ren"];
const uppernames= names.map((n)=> { return n.toUpperCase()});
console.log(uppernames);

//print only first names
const fullNames= ["Saman Abid","Aamna Khan","Fariha Firoz","Eleena Fatima"];
const firstNames= fullNames.map(fullNames => fullNames.split(' ')[0]);
console.log(firstNames);

//square root of numbers in an array
const num=[25,121,64,1000,81];
const sqrtnum= num.map(num => Math.sqrt(num));
console.log(sqrtnum);