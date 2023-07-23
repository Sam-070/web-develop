let n=25;

let nsqrt= Math.sqrt(n);
let nInt= Math.floor(nsqrt);

if(n===nInt*nInt)
{
    console.log(n + " is a perfect square.");
}
else{
    console.log(n + " is not a perfect square.");
}