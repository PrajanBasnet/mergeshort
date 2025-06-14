// Merge short

// [3, 2, 1, 13, 8, 5, 0, 1]  the output should be [0, 1, 1, 2, 3, 5, 8, 13]


function mergeShort(arr, starting , highest){
let finalData = []    
let i = 0;
let k =0;    
let j = 0;

if(starting < highest){
    let midpoint = parseInt((starting + highest) /2)

    mergeShort(arr,starting,midpoint)
    mergeShort(arr,midpoint + 1 ,highest)

    let leftHand = arr.slice(starting, midpoint + 1);
    let rightHand = arr.slice(midpoint + 1, highest + 1);
    while (i < leftHand.length && j < rightHand.length  ) {
        
        if(leftHand[i] < rightHand[j]){
                finalData[k++] = leftHand[i++]
    
            }else{
                finalData[k++] = rightHand[j++]
                
            }
        }
        for(i; i < leftHand.length; i++){
            finalData[k++] = leftHand[i]
        }
        for(j; j < rightHand.length; j++){
            finalData[k++] = rightHand[j]
        }
        for (let m = 0; m < finalData.length; m++) {
            arr[starting + m] = finalData[m];
        }
    }
    
    // console.log(finalData)
}

let myArr = [3, 2, 1, 13, 8, 5, 0, 1];
mergeShort(myArr,0 ,myArr.length )
console.log(myArr)


