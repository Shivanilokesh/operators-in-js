let x,y;
function operators(x,y){
    let add = x+y;
    let sub = x-y;
    let mul = x*y;
    let div = x/y;
    {
        if(x>y){
            console.log("x is greater than y");
        }
        else{
            console.log("x is not greater than y");
        }
        if(x<y){
            console.log("x is less than y");
        }
        else{
            console.log("x is not less than");
        }
        if(x=y){
            console.log("x is equal to y");
        }
        else{
            console.log("x is not equal to y");
        }
    }
    return {add, sub, mul, div};
}
console.log(operators(10,5));