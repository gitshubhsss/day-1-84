// 1)for a given array with marks of student -> [85,97,44,37,76,60] find the average marks of the entire class 

const student=[85,97,44,37,76,60];

let lenth=student.length;

let sum=0;

for(let i=0;i<lenth;i++){
    sum+=student[i]
}
console.log(`average marks of the student is ${sum/lenth}`);