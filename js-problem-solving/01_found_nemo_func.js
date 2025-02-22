const nemo = ['cloud','door','fish','nemo'];

const large = new Array(100).fill('nemo');

function findNemo(array) {
    for(i=0; i<array.length; i++){
        if (array[i] == 'nemo'){
            console.log('Found Nemo!');
        }
    }
}

findNemo(large);











