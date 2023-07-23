for(let i=0;i<10;i++){
    console.log(i);
};
// let num=89;
// let prime= true;
// for(let i=2;i<7;i++){
//     if(num%i ===0){
//         console.log('not prime');
//         prime=false;
//         break;
//     }
// };

// if(prime)
// console.log("Prime");

let n=10;
while(n<20){
    console.log(n);
    n++;
};

let number=238653;
let rev=0;
while(number>0){
    console.log('rev', rev);
    console.log('num', number);
    let r= number%10;
    rev=rev*10 +r;
    number=parseInt(number/10);
}
console.log('rev',rev);
console.log('num',number);