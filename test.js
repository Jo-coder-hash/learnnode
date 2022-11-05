// es6
// template literal* destruring rest spread arrow functions* backtick* higher order func*
// function greet(name){
//     console.log("good morning "+name);
// }
// greet("nirupama")


// let Greet = name => console.log("good morning "+name);
    
// let add = name=> console.log(10);

// Greet("JYOTHIKA")

let name = "swarna";
let age = 22;
let dob = "22 june"
console.log("name is "+name+" age is "+age+" dob is "+dob);
console.log(`the name is ${name} and age is ${age} and dob is ${dob}`)

let boyfreinds = ["nikhil","saurav","manu","joyal"]
let i;
// for(let i = 0; i < boyfreinds.length; i++){
//     console.log(boyfreinds[i])
// }

function foreach(func,item){
    func(item)
}
boyfreinds.forEach(function (item){
    console.log(item);
})

function icecream(makeicecream,flavour){
    makeicecream(flavour)
}

icecream((flavour)=>console.log(`${flavour} ice cream`),"vanilla");








    setTimeout(()=>{
        console.log('nikhil')
    },0)

// function maths(num1,num2){
//     return num1 + num2;
// }
// let result = maths(10,20)
// console.log(result)

function math(func,num1,num2){
    func(num1,num2);
}

math(function (nik,jyoth){
    console.log(nik - jyoth)
},50,10)


function greet(func,name){
    func(name);
}


greet(function (name){
    console.log('good morning '+name);
},"arsha");

let fetched_data = {"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
console.log(fetched_data.data)

fetched_data.data.forEach((item)=>{
    // console.log(item)
    console.log(`name is ${item.first_name} \n last name is ${item.last_name} \n`)
})

