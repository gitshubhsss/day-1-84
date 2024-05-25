/*2) For a given array with prices of 5 items ->[250,645,300,900,50] All items have an offer of 10% off on them . change teh array to store the final price after applying offer*/

let item=[250,645,300,900,50];
let disItem=[];
for(let i=0;i<item.length;i++){
    disItem.push(item[i]-item[i]/10)
}
console.log(disItem);//[ 225, 580.5, 270, 810, 45 ]