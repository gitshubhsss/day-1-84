/*7) Write a JavaScript program to sort the items of an array.
     Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
     Sample Output : -4,-3,1,2,3,5,6,7,8 */

let num = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
let arr=[];
let min;
for(let i=0;i<num.length;i++){
   for(let j=0;j<num.length;j++){
    if(num[i]<num[j]){
        min=num[i];
    }
   }
   console.log(min);
}

