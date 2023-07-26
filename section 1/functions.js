function addNums(a,b){
    var c=a+b;
    console.log(c);
};

addNums(2345,6754);
// console.log(c);


const getPercent = function(m1,m2,m3,m4,m5){
    console.log(m1,m2,m3,m4,m5);
    let percent = (m1+m2+m3+m4+m5)/5;
    // console.log(percent);

    return percent;
};
const res = getPercent(80,70,30,50,90);
console.log(res);


const getFactorial = (n) => {
    let f=1;
    for(let i=2;i<n;i++){
        f*=i;
    }
    return f;
};
const getFactorialwithRec = (n) => {
    if(n==0 || n==1){
        return 1;
    }
    let f =getFactorialwithRec(n-1)*n;

    return f;
}
const fact = getFactorial(5);
const fact1 = getFactorialwithRec(7);
console.log(fact);
console.log(fact1);