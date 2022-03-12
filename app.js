const arry =[2,3,4,5,6] 
let myArray = [];
for(let i=0;i<arry.length;i++){    
    if(arry[i] == 4){
        continue;
    }
    myArray.push(arry[i]);
    // console.log(myArray);
}

// Shortcut: Array Filter Method
const arry2 =[2,3,4,5,6];
let myArray2 = arry2.filter((num => num != 4));
console.log(myArray2);
