//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function parseFood(menu){

    for (const food in menu) {
        if (food == "shakes") {
            for (const flavor in menu[food][0]){
                console.log(`${flavor}: ${menu[food][0][flavor]}`)
            } continue;
        }
        console.log(`${food}: ${menu[food]}`)
    }
}

parseFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods


class Person: 
  
  def __init__(self, name, age): 
    self.name = name
    self.age = age

  def ageInc(self): 
    self.age += 1
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name; 
    this.age = age;

    this.ageInc = (input) => this.age +=input

    this.print = () => console.log(this.name,this.age)
}
let John = new Person('John', 36)
let Kim = new Person('Kim', 25)


console.log(John.ageInc(9))
console.log(Kim.ageInc(9));

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

    def chkLen(stra):
if len(stra) > 10: 
print("Big Word")
else: 
print("Small Number")
*/

let p = "Smaer"
let lenChk = (stra) => 
{
    return new Promise ((resolve, reject) => 
    {
        if (stra.length > 10) 
        {
            resolve(console.log("Big Word"))
        } 
        else 
        {
            reject (console.log("Small Number"))
        }
        
    })
}

(lenChk(p))