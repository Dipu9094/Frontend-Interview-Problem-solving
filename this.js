const user = {
    name: "Fauzia",
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };
  
  user.greet(); // Hello, I'm Fauzia
  
  const greetFunc = user.greet;
  greetFunc(); // Hello, I'm undefined (this is now global)
  