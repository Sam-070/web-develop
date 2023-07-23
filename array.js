const arr1=[345,'hello',false,console.log];
console.log(arr1);
console.log(typeof arr1);

const movies = ['Bahubali', 'Asur', 'Intersteller', 'Conjuring', 'Nun', 'Ávengers'];
console.log(movies.length);
console.log(movies[3]);
console.log(movies[13]);
console.log(movies.at(-4));
console.log(movies.at(1));

movies[1]='Inception';
console.log(movies);

console.log(movies.slice(1,4));
console.log(movies.slice(1,-1));
console.log(movies.slice(2));
console.log(movies.slice(2,100));

movies.push('Flash');//end
movies.unshift('Pathan');//beginning

console.log(movies);

movies.pop();//end
movies.shift();//beginning
console.log(movies);

movies.splice(3,2);
console.log(movies);

console.log(['ironman',...movies, 'batman']);
console.log([...movies.slice(0,3), 'new element', ...movies.slice(0,3)]);