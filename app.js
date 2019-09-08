
var myName = 'Michael Parker';  //var for my name
const states = 50; // constant about number of states
var people = [ //listed the var for everyones name and age
    charles = { name: 'Charles', age: 21 },
    abby = { name: 'Abby', age: 27 },
    james = { name: 'James', age: 18 },
    john = { name: 'John', age: 17 },
];
var vegetables = ['broccoli', 'zuccini', 'squash', 'eggplant']; //favorite vegetables
var persons = [ //create array of 5 objects with name and age
    michael = {name: 'Michael', age: 24},
    chris = {name: 'Chris', age: 26},
    parker = {name: 'Parker', age: 20},
    ally = {name: 'Ally', age: 18},
    jordan = {name: 'Jordan', age: 24},
];


function addNameStates(myName, states) {
    return myName + states; // function to add name and number of states
};



function sayHello() {
    var hello = 'Hello World!';
    alert(hello); //function to alert hello world
};

sayHello(); //calls function to alert hello world


function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!"); //function checks and responds on age if to young
    }
};
checkAge(charles.name, charles.age); //calls function checkAge for charles
checkAge(abby.name, abby.age); //calls function checkAge for abby
checkAge(james.name, james.age); //calls function checkAge for james
checkAge(john.name, john.age); //calls function checkAge for john


var i = 0;
if (i = 0, i < vegetables.length, i++){
    console.log(vegetable[i])
}; //logs to the console my 4 favorite veggies



var x = 0;
if (x=0, x < persons.length, x++){
    checkAge(persons[x].name, persons[x].age)
};

function getLength(string){
    return string.length;
};


function getLength(HelloWorld){
    return 'Hello World!'.length
}
var helloWorldLength = getlength(HelloWorld)

if (helloWorldLength % 2===0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
};


