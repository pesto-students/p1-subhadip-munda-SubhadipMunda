let name1 = {
    firstName: "Subhadip",
    lastName: "Munda",
}

// This
let printFullName = function(adj){
    console.log( this.firstName + " " + this.lastName + " " + "is a"+" "+ adj +" "+"Developer.");
}

//call
printFullName.call(name1,"nice");

let name2={
    firstName:"Tarun",
    LastName:"Biswas",
}

//function borrowin
printFullName.call(name2,"good");

//apply
printFullName.apply(name1,["nice"]);

// bind method
let printMyName=printFullName.bind(name1,"nice");
console.log(printMyName);

printMyName();


