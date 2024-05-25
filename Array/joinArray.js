/*5)Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"]; */

const myColor = ["Red", "Green", "White", "Black"];

let strCol=myColor.toString();
console.log(strCol.replaceAll("," , ""));

//RedGreenWhiteBlack