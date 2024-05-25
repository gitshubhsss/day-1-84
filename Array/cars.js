/*3) create an array to store companies -> ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
   a)Remove the first company from the array
   b)remove the uber and add OLA in its place
   c)add amazon at the end */


const companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();

let index=companies.indexOf("Uber");

companies.splice(index,1,"OLA");


companies.push("amazon");

console.log(companies);

