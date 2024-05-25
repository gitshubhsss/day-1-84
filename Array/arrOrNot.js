/*4)Write a JavaScript function to check whether an `input` is an array or not
  console.log(is_array('shubham ranajne'));
 console.log(is_array([1, 2, 4, 0])); */


let checkArr=(inputArr)=>{
  if(typeof inputArr==="object"){
    console.log(inputArr,"isarray");
  }
  else{
    console.log(inputArr,"is not an array");
  }
}


checkArr([56,8654])

