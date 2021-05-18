// let animal = {
//     eats: true,
//     walk() {
//       /* этот метод не будет использоваться в rabbit */
//       console.log('Animal')
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.walk = function() {
//     console.log("Rabbit! Bounce-bounce!");
//   };
  
//   rabbit.walk(); // Rabbit! Bounce-bounce!

// let user = {
//     name: "John",
//     surname: "Smith",
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   let admin = {
//     __proto__: user,
//     isAdmin: true
//   };
  
//   console.log(admin.fullName); // John Smith (*)

  
//   // срабатывает сеттер!
//   admin.fullName = "Alice Cooper"; // (**)
//   console.log(admin.name); // Alice
//   console.log(admin.surname); // Cooper
//   console.log(user.fullName)