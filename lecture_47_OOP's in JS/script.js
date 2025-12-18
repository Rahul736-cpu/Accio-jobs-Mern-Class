// chai aur code........


// // /*
// //    javascript classes
// //    ## oop


// //    ## Object 
// //   - objects are collection of properties  and method 
// //   - tolowerCase,toUpperCase are also the objects

// //    ## why to use OOP's

// //  Part of OOP's
// //  Object literal 

// //  - constructor Function 
// //  - peototypes
// //  - Classes
// //  - instance (new, this) 


// //  ## 4 Pillers ( Keywords )..

// // 1] Abstraction (means hideing Details.best example for this is fetch.. whenever abstraction occure it is object orentation programming );
// // 2] Encapsulation(means encapsulating items, appling raper to it )
// // 3] Inheritance 
// // 4] Polymorphism("poly"= Many: "morphism"=types:)

// // */


// // const user={
// //   username:"Rahul",
// //   loginCount:4,
// //   signnedIn:true,
// //   getUserDetails: function(){
// //     // console.log('got user details from Database');
// //     console.log(`username: ${this.username}`);
// //     console.log(this);   
// //   }

// // }
// // console.log(user.username);
// // // console.log(user.loginCount);
// // // console.log(user.signnedIn);
// // console.log(user.getUserDetails());



// // constructor Function (new)

// function user(username,userCount,lognnedIn){
// this.username=username;
// this.lognnedIn=lognnedIn;
// this.userCount=userCount
// return this
// }
// const userOne =user("Rahul",false,3);
// const userTwo=user("Ram",true,56);
// console.log(userOne);

// console.log(userTwo);



///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// class.......



class Employee {
    constructor({ name, gender, id, designation, joining, salary }) {
        this.name = name;
        this.gender = gender;
        this.id = id;

        this.designation = designation;

        this.joining = joining;
        this.salary = salary;
    }
    checkIn(time) {
        this.checkInTime = time.toLocaleTimeString();
    }
    checkOut(time) {
        this.checkOutTime = time.toLocaleTimeString();
    }
    totalTimeToday() {
        if (!this.checkInTime || !this.checkOutTime) {
            console.log("check in or check out missing !!")
            return;

        }
        return this.checkOutTime - this.checkInTime;
    }
}

const employee = new Employee({
    name: "Rahul",
    gender: "male",
    id: "EMP-4689",
    designation: "unior Softwear Engineer",
    joiningDate: new Date(),
    salary: 800000,
});
console.log({ employee });

document
    .querySelector("button:first-of-type")
    .addEventListener("click", () => {});

document
    .querySelector("button:last-of-type")
    .addEventListener("click",()=>{
        employee.checkOut(new DataTransfer());
        console.log(employee.totalTimeToday());
    });


employee.checkIn(new Date());
employee.checkOut(new Date());







