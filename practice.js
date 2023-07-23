let prime=true;

for(let n=50; n<=350; n++){
    for(let i=2; i<=n/2; i++){
        if(n%i==0){
            prime=false;
            break;
        }
        else{
            prime=true;
        }
    }
    if(prime==true)
    console.log(n);
}