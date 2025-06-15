

function mergeShort(arr,start,end){
    
    if( start >= end) return 1;
    let midvalue = Math.floor((start + end) / 2);

    mergeShort(arr,start,midvalue);
    mergeShort(arr,midvalue+1,end);
    
    let left = arr.slice(start,midvalue + 1);
    let right = arr.slice(midvalue + 1, end + 1);

    let i = 0;
    let j = 0;
    let k = start;

    while (i < left.length && j < right.length) {

        if(left[i] < right[j]){
            console.log(left[i] ," --- ", right[j])
            arr[k++] = left[i++]
        }else{
            console.log(left[i] ," *** ", right[j])
            
            arr[k++] = right[j++]
        }
    }
    while(i < left.length){
        arr[k++] = left[i++]
    }
    while(j < right.length){
        arr[k++] = right[j++]
    }
    return arr;
}

let myArr = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeShort(myArr,0 ,myArr.length ))


