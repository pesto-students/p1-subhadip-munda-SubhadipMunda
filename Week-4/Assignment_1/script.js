let getNumber=()=>{
    const number= Math.floor(Math.random()*100)+1;
    if((number%5)===0){
        console.log("Reject Promise");
    }else if((number%5)!==0){
        console.log("Resolve Promise");
    }
}

getNumber();