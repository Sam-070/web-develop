// const user = {name:'Raju', email:'raju@email', password:'9876'};

// console.log(user.name);
// console.log(user['email']);

// user.address= 'Lucknow';
// console.log(user);

// user.password= '1234';
// console.log(user);

// let customkey= 'email';
// console.log(user[customkey]);

// let smartphone = {
//     brand : 'Samsung',
//     model : 'S21',
//     price : 72000,
//     color : 'Black',
// };
// smartphone.color = ['Black', 'White', 'Blue'];
// console.log(smartphone);
// console.log(smartphone.color[2]);
// smartphone.color.push('Red');
// console.log(smartphone);


const smartphoneList= [
    { brand:'Samsung', model:'S21', price: 70000, color: ['Black','Blue']},
    { brand:'Samsung', model:'S23', price: 82000, color: ['Black','Blue']},
    { brand:'Apple', model:'iPhone 12', price: 80000, color: ['White','Red','Yellow']},
    { brand:'OnePlus', model:'9 Pro', price: 60000, color: ['Blue','White']},
    { brand:'OnePlus', model:'Nord', price: 40000, color: ['Blue','White']},
    { brand:'Xiaomi', model:'Mi 11', price: 50000, color: ['Black','Gold']},
];

// console.log(smartphoneList[2].price);

// smartphoneList[3].color.push('Blue');
// console.log(smartphoneList[3]);

// smartphoneList[1].color.splice(1);
// console.log(smartphoneList[1]);

// const filteredResult= smartphoneList.filter((phone) => { return phone.price < 70000});
// console.log(filteredResult);

// const result = smartphoneList.filter((n) => { return n.brand.toLowerCase().includes('sams'.toLowerCase())});
// console.log(result);

const blue= smartphoneList.filter((n) => { return n.color.includes('Blue') && n.price <= 70000});
console.log(blue);

const brands= smartphoneList.map((n) => {return n.brand});
console.log(new Set(brands));//unique brands with set no duplicates

