function letterConvert(inputWord){
       let upperCaseArray = [];
        let lowerCaseArray = [];
 
    for (let i = 0; i < inputWord.length ; i++){
        let result = inputWord[i];
        let result1 = result.toUpperCase();
        let result2 = result.toLowerCase();
        if(inputWord[i] == result1) {
            upperCaseArray.push(inputWord[i]);
        }
        if (inputWord[i] == result2) {
            lowerCaseArray.push(inputWord[i]);
            
        }
    }

    if(upperCaseArray.length > lowerCaseArray.length){
            let convertedWord = inputWord.toUpperCase();
            return convertedWord;          
        }
    if(lowerCaseArray.length > upperCaseArray.length){
            let convertedWord = inputWord.toLowerCase();
            return convertedWord;
        }
    if(lowerCaseArray.length == upperCaseArray.length){
            let convertedWord = inputWord;
            return convertedWord;
        }

        return {
            upperCaseArray,
            lowerCaseArray,
        }

}

let myWord1 = "BANgLAdesH"; // no. of upper case words > no. of lower case words
console.log(letterConvert(myWord1)); //Returns BANGLADESH



let myWord2 = "BanGLAdesH"; //no. of upper case words = no. of lower case words
console.log(letterConvert(myWord2));  //Returns BanGLAdesH



let myWord3 = "BanglAdesH";  //no. of upper case words < no. of lower case words
console.log(letterConvert(myWord3)); // Returns bangladesh


let myWord4 = "I LOves it ";
console.log(letterConvert(myWord4)); // Returns i loves it


let myWord5 = "I LOves It ";
console.log(letterConvert(myWord5)); // Returns I LOVES IT

let myWord6 = "I LOves It ";
console.log(letterConvert(myWord6)); // Returns I LOves It