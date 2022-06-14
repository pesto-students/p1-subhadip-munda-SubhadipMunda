class Person {
    Teacher = {
        FirstName:"Sumit",
        LastName:"Das",
        Human:true,
        subject:"Computer",
        tech(){
            return(this.subject);
        }
    };
}

console.log(Person.tech);

//console.log(Person.FirstName(subject));

// var Person = function() {};
// Person.prototype.initialize=function(name,age)
// {
//     this.name=name;
//     this.age=age;
//     this.subject="Computer";
// }

// // TODO: create the class Teacher and a method teach
// class Teacher{
//     teach=function(){
//         return `${this.name} is now teaching ${this.subject}`;
//     }
// }


// var him = new Teacher();
// him.initialize("Adam",45);
// him.teach("Inheritance");