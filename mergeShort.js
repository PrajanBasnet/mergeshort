// Merge short

// [3, 2, 1, 13, 8, 5, 0, 1]  the output should be [0, 1, 1, 2, 3, 5, 8, 13]
let myArr = [3, 2, 1, 13, 8, 5, 0, 1];
function mergeShort(lowest, n , highest){

    if(lowest < highest){

        let midpoint = parseInt(lowest + highest /2);
        let higherShort = n.splice(midpoint,highest);
        let lowerShort = n.splice(0,midpoint);
    
        console.log(lowerShort)
        console.log("Test",higherShort)


        mergeShort(lowest, lowerShort,  midpoint)
    

 
    }
}

console.log(mergeShort(0, myArr ,myArr.length))