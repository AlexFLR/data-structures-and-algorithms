const boxes = [1,2,3,4,5];


function logAllPairs(array){
    // nested for -> O(n)
    for (i=0;i<boxes.length;i++){ 
         
        for(j=i;j<boxes.length;j++){ 
            
            console.log("("+array[i]+","+array[j]+")");
        }
    }
}

logAllPairs(boxes);
