//find the largest number from the array only positive number

let arr=[654685,5,8,2,8,2,85,685,685,8];
let large=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        large=arr[i];
    }
}
console.log(large);