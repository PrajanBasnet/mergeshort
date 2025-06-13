// fibonacci sequence 
function fib(n){
    let t = [];
    t[0] = 0;
    t[1] =1
    if(n < 2 )return 1;
    for (let i = 2; i < n; i++) {
     t[i] = t[i-1] + t[i-2]
        
    }
    return t;
}

console.log(fib(8));