/*var user1 = {
    firstname: 'Bob',
    lastname: 'Rockers',
    age: 42
}

var user2 = {
    firstname: 'Zack',
    lastname: 'Mayes',
    age: 18
}

//console.log(user1.age);

var weddinglist =[
    'this is a list',
    'sortof',
    'like an array'
]

// console.log(weddinglist[1]);

var userlist=[
    user1,user2
]

// console.log(userlist[0].firstname);*/

var addressbook = [
    {firstname: 'Zack',
        lastname: 'Mayes',
        address: '456 home',
        phone: '4050400405',
        age: 42
    }
,    {firstname: 'John',
    lastname: 'Smith',
    address: '012 home',
    phone: '4050405040',
    age: 18
    }
,    {firstname: 'Mary',
    lastname: 'Smith',
    address: '123 home',
    phone: '4054050405',
    age: 19
    }
,    {firstname: 'Jane',
    lastname: 'Doe',
    address: '789 home',
    phone: '4050405405',
    age: 52
    }
]

function printAddressBook(add){
    console.log(add);
    for(var i=0;i<add.length;i++){
        console.log(add[i].firstname + " " + add[i].lastname);
        console.log(add[i].address);
        console.log(add[i].phone);
    }
}

/*printAddressBook(addressbook);

var thing = 'thing';
var ourFunction = function(thing){
    for (var i=0;i<thing.length;i++){
        console.log(add[i].firstname + " " + add[i].lastname);
}
ourFunction(addressbook);

function ourConsole(){
    return function(message){
        console.log("Message");
    }
}
ourConsole();

function ourConsole1(message1){
    return function(message2){
        console.log(message1);
        console.log(message2);
    }
}
//this will print hello goodbye
var mgs = ourConsole1("hello");
mgs("Goodbye"); */

function forEach(arr1,func1){
for (var i=0;i<arr1.length;i++){
    func1(arr1[i]);
}
}

function printName(x){
    console.log(x.firstname,x.lastname);
}

forEach(addressbook,printName);
//you can also pass in a function as an argument
forEach(addressbook,function(x){console.log(x.phone)});
//x becomes arr1 in the forEach function
function printContact(x){
    console.log(x.firstname + " " + x.lastname);
    console.log(x.address);
    console.log(x.phone);
    console.log("============================")
}
forEach(addressbook,printContact);

var printHello = function(){
    console.log("yo");
}

setTimeout(printHello,5000);
setTimeout(function(){console.log("Anonymous")},3000);