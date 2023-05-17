// STEP 1
// ******************************************************

// class Cat {
// constructor(name) {
// this._name = name
// }
// };

// var DogClass = class {
//     constructor(name) {
//     this._name = name
//     }
//     };

// STEP 2
// ******************************************************

// const myCat = new Cat('Mittens')
// console.log(`Cat's name is - ${myCat._name}.`);
// const myDog = new DogClass('Morty')
// console.log(`Dog's name is - ${myDog._name}.`);

// STEP 3
// ******************************************************

// class Animal {
//     constructor() {
//       }
//     generate = function() {
//         console.log(`The animal has been created`)
//         }
//     };
// const rabbit = new Animal();
// rabbit.generate();

// STEP 4
// ******************************************************

// class Animal {
//     constructor(type) {
//     this.type = type
//     }
//     generate = function() {
//         console.log(`An animal of type: ${this.type}, has been created`)
//         }
//     };
// const rabbit = new Animal('rabbit');
// rabbit.generate();

// STEP 5
// ******************************************************

// class Animal {
//     constructor(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
//     }
//     generate = function() {
//         console.log(`\nAn animal of type: ${this.type}, has been created:
//         \n\tType: ${this.type}\n\tBreed: ${this.breed}\n\tColor: ${this.color}\n\tHeight: ${this.height}\n\tLength: ${this.length}\n`)
//         }
//     };
// const rabbit = new Animal('Rabbit', 'Bunny', 'Brown', '12 inches', '14 inches');
// rabbit.generate();

// STEP 6
// ******************************************************

// class Animal {
//     constructor(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
//     }
//     };
// const rabbit = new Animal('Rabbit', 'Bunny', 'Brown', '12 inches', '14 inches');
// let i = 0;
// for (let property in rabbit) {
//     i++
//         console.log(`\t(${i}) ${property}: ${rabbit[property]}.`);
// console.log();
// };

// STEP 7
// ******************************************************

// class Animal {
//     constructor(type, breed, color, height, length) {                                   // CREATE THE ANIMAL CLASS
//     this.type = type
//     this.breed = breed
//     this.color = color                                                                  // ANIMAL CLASS PROPERTIES
//     this.height = height
//     this.length = length
//     }
//     speak = function() {                                                                // CREATE A METHOD FOR THE ANIMAL CLASS
//         switch (this.type) {
//             case'Dog':
//             console.log(`\nThe ${this.color} ${this.type} is barking!\n`)
//             break;
//             case'Cat':                                                                  // DETERMINE THE TYPE OF ANIMAL
//             console.log(`\nThe ${this.color} ${this.type} is meowing!\n`)
//             break;
//             default:
//             console.log(`\nThe ${this.color} ${this.type} is speaking!\n`)
//             break;
//         }
//     }
// };

// const dog = new Animal('Dog', 'Labrador', 'Golden', '36 inches', '48 inches');          // INSTANTATION
// const cat = new Animal('Cat', 'Manx', 'Marmalade', '18 inches', '28 inches');
// const parrot = new Animal('Parrot', 'Feather', 'Red & Yellow', '16 inches', '28 inches');

// dog.speak();
// cat.speak();                                                                            // CALL THE METHODS
// parrot.speak();

// STEP 8
// ******************************************************

// class Animal {
//     constructor(type) {                                                         // CREATE THE ANIMAL CLASS
//     let _type = type;                                                           // PRIVATE PROPERTY
    
//     let checkType = function() {                                                 // PRIVATE METHOD TO CHECK TYPE OF ANIMAL
//       if (_type === 'Dog') {
//          return 'Dog'
//         } 
//       else {
//         return 'Cat'
//         }
//     }

//     let speak = checkType()                                                      // CALLS THE CHECKTYPE METHOD
//     if (speak === 'Dog') {
//         console.log(`The ${speak} has made a noise.\n`);
//         } 
//     else {
//         console.log(`The ${speak} has made a noise.\n`);
//            }
  
//         }
//     }
  
//   const dog = new Animal('Dog', 'Labrador');                                     // CREATE 2 CLASS INSTANCES
//   const cat = new Animal('Cat', 'Manx');

// STEP 9
// ******************************************************

// String.prototype.findWords = function() {                                           // CREATE STRING METHOD CALLED FINDWORDS
//     wordToFind = "the";                                                             // DEFINE THE WORD FOR THE METHOD TO FIND
//     text = this.toLowerCase();                                                      // MAKE LOWERCASE TO ENSURE ALL MATCHES FOUND
//     words = text.split (' ');                                                       // MAKE THE TEXT AN ARRAY OF INDIVIDUAL WORDS
//     counter = 0
//     for (var i = 0; i < words.length; i++){                                         // LOOP THROUGH THE WORDS LOOKING FOR MATCHES
//             if (words[i] == wordToFind) {
//                 counter++                                                           // INCREMENT THE COUNTER WHEN A MATCH IS FOUND
//                 }
//             }
//     alert(`I found "${wordToFind}" ${counter} time(s).`);                           // ALERT THE RESULT
//     }

// let textString = ("Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype")
// textString.findWords();                                                              // CALL THE METHOD