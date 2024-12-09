//creating function 
function createCounter(){
    let count =0; //for count
    return{
        incrementCounter:function(){//increment function
            count++              // count increment
            console.log(count)
        },
        decrementCounter:function(){ //decrement function
            count--           // count decrement 
            console.log(count)
        }
    }
}
let ans= createCounter();
ans. incrementCounter();
ans. incrementCounter();
ans. decrementCounter();