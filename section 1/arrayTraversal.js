const num=[23453, 46, 23, 39, 3, 8];

for(let i=0;i<num.length; i++){
    console.log(num[i] ** 2);
}
console.log('******************');
for(let i of num){
    console.log(i **2);
}