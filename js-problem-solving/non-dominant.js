
function printNumThenAllPairSums(numbers){

    console.log('Each number in the array:');

    numbers.forEach(function (number){ 
            console.log(number) //O(n)
    })

    console.log('These are their sum');
 // Here we have double for loop-> O(n^2)
    numbers.forEach(function(firstNum){
        numbers.forEach(function(secondNumber){
            console.log(firstNum+secondNumber);
        })
    })

}

// We keep the most dominant term which is growing the fastest => O(n^2)

printNumThenAllPairSums([1,2,3,4,5])










