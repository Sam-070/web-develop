//filter all names strating with S from array
const names= ['Saman', 'Samaira','Rachel','Sakshi'];
const namewithS= names.filter((n) => {return n.startsWith('S')});
console.log(namewithS);

//filter all perfect squares from array
const num= [25,64,81,234,12];
function PerfSqr (n) {
    return Math.sqrt(n)%1 === 0;
}
const perSq= num.filter(PerfSqr);
console.log(perSq);

//filter all prime numbers from array
const n=[2,7,4,9,5,13,23,45,17,19];
const primeno= n.filter(chckPrime);
// if(n==2)
// return true;
function chckPrime(n){
    for(let i=2; i<n;i++){
        if(n%i===0)
        return false;
    }
    return true;
}
console.log(primeno);