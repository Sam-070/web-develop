const num=[23453, 46, 23, 39, 3, 8];
const result= num.map((n) => { return n**2});
console.log(result);
console.log("*****************");

const prices=[325,565,1235,766,2115];
console.log("Original Prices: ");
console.log(prices);
const result1= prices.map((n)=>{return n-(n*7.5/100)});
console.log("Discounted Prices: ");
console.log(result1);
console.log("*****************");

const price=[325,565,1235,766,2115];
console.log("Original Prices: ");
console.log(prices);
const result2= prices.map((n)=>{return n+n*0.12});
console.log("Increased Prices: ");
console.log(result2);
console.log("*****************");