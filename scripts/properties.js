// js have two type of properties => 1. Own Properties 2.Inherited Properties

//The own properties are properties that were defined on the object, while the
//inherited properties were inherited from the object's Prototype object.

// In most OOPS based languages, classes inherit from classes. 
// In JavaScript, it’s prototype (আদিরূপ)-based. 
// Objects inherit from Objects.
// And, we know an object is a prototype of classes. 
// Therefore, it’s prototypical based inheritance

var person = { name: 'shohan' }; //name => own properties
var student = { id: '173015026', dep: 'CSE' };//id, dep => own properties

//individual  objects
console.log('person =>');
console.log(person);

console.log('student =>');
console.log(student);
console.log('before inherit person object');
for(prop in student)console.log(prop)


//implement prototypal inheritance 
student.__proto__ = person;
//student = Object.create(person);


//after inherit from person
console.log('person =>');
console.log(person);
console.log('before inherit person object');
for(prop in student)console.log(prop)


console.log(Object.keys(student)); //display only own properties
console.log('id => OwnProperty = '+ student.hasOwnProperty('id'));
console.log('name => OwnProperty = '+ student.hasOwnProperty('name'));



console.log('student object property list');
for(prop in student)console.log(prop)



//delete an object own properties
delete student.id
console.log('after delete id properties');
console.log(student);



