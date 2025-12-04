const user1 = {
    name: "Rahul",
    age: 22,
    city: "Pune",
    printDetail: function () {
        console.log(`${this.name} is ${this.age}years old and currently live in ${this.city}`);

    },
};

const user2 = {
    name: "Bhogi",
    age: 22,
    city: "pune",
    printDetail: function () {
        console.log(`${this.name} is ${this.age}years old and currently live in ${this.city}`);

    }
};

const user3 = {
    name: "sumit",
    age: 22,
    city: "Delhi",
    printDetail: function () {
        console.log(`${this.name} is ${this.age}years old and currently live in ${this.city}`);


    },
};

console.log(user1.printDetail());


// constructor

// It is like a blueprint for creating objects.
// Instead of writing the same properties and methods again and again,
// we write a single blueprint
// and reuse it to create multiple objects with similar structure.
// This makes the code reusable.

function user(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printDetail = function () {
        console.log(`${this.name} is living in ${this.city}`);

    };
};

const user4 = new user("Neha", 20, "Nashik");
const user5 = new user("Ajay", 25, "Nashik");

// conventional / traditional way of using objects

console.log(user1.printDetail());
console.log(user1.name);

// // using objects created from constructor -> it is same as user1

// when we use new it creates the new object
// initially this points to window obj(global object) but when we use new then
// this keyword get binds to the empty object that we created using new
// i.e this->{}
// and this.name="Devanshu" means addind name prop in object with value devanshu
// same as object {name:Prathamesh}
// returns this object.

console.log(user5.name);
console.log(user5.printDetail());

console.log(user1.name.__proto__);

function normalFunction() {
    console.log(this);
}

console.log(normalFunction());


// creating an array of objects using constructor.
const name = ["raj", "shivam", "Pratik", "Priya"];
const age = [12, 32, 10, 13];
const city = ["mumbai", "Delhi", "karnataka", "Tamil Nadu"];

function NewUser(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let objArr = [];
let n = name.length;   

for (let i = 0; i < n; i++) {
    objArr.push(new NewUser(name[i], age[i], city[i]));  // fixed
}

console.log(objArr);






 const boolean=true;
 const string="=true";
  const number=12344;
  const arr=[4,44,4];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(number.__proto__);
console.log(arr.__proto__);

function student (name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;

}

student.prototype.greetMe=function(name){
    console.log("hi "+this.name);

};
const student1=new student("rajesh",22,"A+");
student1.greetMe(student1.name);

 function taskQueue(){
this.task=[];
 }
 // adding the new task to end of the queue

