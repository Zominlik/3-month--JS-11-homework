// form.addeventlistener('submit', async (e)=>{
// e.preventDefault();
// let baseUrl ='https://www';
// const TOKEN__Name = "accesToken"
// let authToken = localStoreage.getItem(TOKEN__Name)
// let info = {
//     email: inpul.value.value;
//     password:0password.value;
// try {
//     let response = await fetch(`${baseUrl}/login`,{
//         method:'POST',
//         body:JSON.stringify(info),
        
//         })
//         let data = await response.json()
//         if(data?.error){
//             throw Error(data?.error)
//         }else if (data?.token){
//             let infoLocalStorage = localStorage.setItem(TOKEN__Name, data?.token)
//             window.location(../index.html)
//         }
// }
// catch(err){
// console.log(err);
// }
// }
// })

// let someObj = {

// }

// class Animal {
//      constructor(name, age, hasTale, isMale) {
//         this.animalName = name
//         this.animalAge = age
//         this.animalIsMale = isMale
//         this.animalhasTale = hasTale
//     }

//      voice(){
//         console.log('this is animal voice');
//     }
// }
// // console.log(Animal);

// class Cat extends Animal {
// constructor(name, age, hasTale, isMale, eyeColor){
// super(name, age, hasTale, isMale, eyeColor);
// this.eyeColor = eyeColor;
// }
// voice(){
//     console.log('meow meow');
// }
// // get getCatEyeColor(){
// //         console.log({
// //             eye: this.animalName,
// //             age: this.animalAge,
// // });

// set setChangeName (anotherAnimalName ) {
//     this.animalName = anotherAnimalName
// }

// // set setChangeAge (anotherAnimalName ) {
// //     this.animalName = anotherAnimalName
// // }

// };

// const cat = new Cat('kitty', 1, true, false, 'blue');
// cat.getCatEyeColor
// cat.setChangeName = 'tom'
// // cat.setChangeAge = 3
// console.log(cat);
// // console.log(typeof null);

// class Vehicle {

// }

// console.log(Animal instanceof Cat);

// class Dog extends Animal {
//     constructor(name, age, hasTale, isMale,eyeColor){
//         super(name, age, hasTale, isMale,eyeColor)
//         this.eyeColor = eyeColor
//     }
//     voice(){
//         console.log('wow wow');
//     }
//     //shu yerda owerwrite bo'libdi !!!
// }

// const dog = new Dog('someDog', 2, true, true, 'black');
// const animal = new Animal('someAnimal',9,'red', true, )

// dog.voice();
// cat.voice();
// animal.voice();

// console.log(cat);
// console.log(dog);
// console.log(animal);





// UYGA VAZIFA QISMI


class Mashina {
    constructor(carName, color, horsePower, carModel, weight,){
        this.carName = carName
        this.Color = color;
        this.carModel = carModel
        this.engineStrong = horsePower;
        this.carWeight = weight;
    }
    engineVoise(){
        console.log('noise');
    }
}
let mashina = new Mashina('Ford', 'blue', 300, 'ford GT 3Gen', '1ton')
console.log(Mashina);
mashina.engineVoise()
console.log(mashina);

class Sedan extends Mashina {
    constructor(carName, color, horsePower, carModel, weight, moreHorsePower){
        super(carName, color, horsePower, carModel, weight, moreHorsePower);
        this.moreHorsePower = moreHorsePower
    }
    engineVoise(){
        console.log('a little more Power');
    }
}

const sedan = new Sedan('Ford', 'blue', 300, 'ford GT 3Gen', '1ton','400')
console.log(sedan);
sedan.engineVoise();

class Gruzavoy extends Mashina {
    constructor(carName, color, horsePower, carModel, weight, carryingCapacity, moreWeight){
        super(carName, color, horsePower, carModel, weight, carryingCapacity, moreWeight);
        this.moreCarryingCapacity = carryingCapacity
        this.moreWeight = moreWeight
    }
    engineVoise(){
        console.log('more Power');
    }
}

const gruzavoy = new Gruzavoy('Ford', 'blue', 300, 'ford GT 3Gen', '1ton','more shipping', '5ton')
console.log(gruzavoy);
gruzavoy.engineVoise()

class Pickup extends Mashina {
    constructor(carName, color, horsePower, carModel, weight, cargoAndPassengerTransport){
        super(carName, color, horsePower, carModel, weight, cargoAndPassengerTransport)
        this.convenience = cargoAndPassengerTransport
    }
    engineVoise(){
        console.log('normal Noise');
    }
}
const pickup = new Pickup('Ford', 'blue', 300, 'ford GT 3Gen', '1ton', 'Transport up to 4 passengers & cargo transport')
console.log(pickup);
pickup.engineVoise();

class Hatchback extends Mashina {
    constructor(carName, color, horsePower, carModel, weight, convenience){
        super(carName, color, horsePower, carModel, weight, convenience)
        this.convenience = convenience
    }
    engineVoise(){
        console.log('comfortable');
    }
}
const hatchback = new Hatchback('Ford', 'blue', 300, 'ford GT 3Gen', '1ton', 'comfortable')
console.log(hatchback);
hatchback.engineVoise()

class Crossover extends Mashina {
    constructor(carName, color, horsePower, carModel, weight, modernity, alternativeFuelConsumption){
        super(carName, color, horsePower, carModel, weight, modernity, alternativeFuelConsumption)
        this.modernity = modernity;
        this.alternativeFuelConsumption = alternativeFuelConsumption
    }
    engineVoise(){
        console.log('awesome car');
    }
}
const crossover = new Crossover('ford', 'blue', 300, 'ford GT 3Gen', '1ton', 'modernCar', 'medium fuel consumpt');
console.log(crossover);
crossover.engineVoise()