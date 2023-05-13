// 1.a. Write a function called countOccurrences that takes an array of numbers and a 
// number as input and returns the number of times the input number occurs in the array.

function count(array,Num){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]==Num){
            count++;
        }

}
return count;
}


console.log(count([2,3,4,2,3,5,5,2],4));