//find the minimum number from the array only positive number

let arr=[5,8,2,8,2,85,685,685,8];
let min;
for(let i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
            arr[i]=arr[j];
            min=arr[i];
        }
    }
}
console.log(min);