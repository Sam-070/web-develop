const n=5;

if(n===0 || n===1){
    console.log("Factorial of "+ n+ " is 1.");
}
else{
    let fact=1;
    for(let i=2; i<=n; i++){
        fact*=i;
    }
    console.log("Factorial of "+ n +" is "+ fact);
}