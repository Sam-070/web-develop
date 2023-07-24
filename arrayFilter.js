const prices=[2300,499,233,199,450,3400,1800];

const filteredprice = prices.filter((p) => {return p<500});

console.log(filteredprice);

const names= ['Raju','Kalia','Pinki'];
const lengthName = names.filter((p) => {return p.length>=5});
console.log(lengthName);