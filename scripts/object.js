
//In JavaScript the primitive data is saved-as-value. 
//On the contrary, saveas - reference mechanism is there for objects
//Ex:
var person = { name: 'shohan' };


//assign person one new person obj
var newPerson = person;

// We can access object properties in two ways:

// objectName.propertyName
// or
// objectName["propertyName"] 



//change new person property value

//newPerson.name = 'rafi';
newPerson['name'] = 'rafi';


//output:
//The variable is a reference, not a value
console.log('person =>');
console.log(person);

console.log('newPerson =>');
console.log(newPerson);



