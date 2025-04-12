function greet(place) {
    console.log(`${this.name} from ${place}`);
  }
  
  const person = { name: "Lin" };
  
  greet.call(person, "Copenhagen"); // Lin from Copenhagen
  greet.apply(person, ["Copenhagen"]); // Lin from Copenhagen
  
  const greetFrom = greet.bind(person);
  greetFrom("Copenhagen"); // Lin from Copenhagen
  