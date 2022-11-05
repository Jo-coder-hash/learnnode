console.log("my node app");

var passenger = {
    name: 'passenger 1',
    email: 'passenger1@gmail.com',
    age: 45,
    phone: [12345, 12345678]
};       // semi colon is not mandatory
console.log(passenger);

var json = 
`{"name":"passenger 1","email":"passenger1@gmail.com","age":45,"phone":[12345,12345678]}`;
 
var res = JSON.stringify(passenger);
console.log(res);
//