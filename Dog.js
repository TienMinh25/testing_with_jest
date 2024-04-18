class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.energyLevel = 10;
    }
  
    bark() {
      console.log(`${this.name} barks: Woof woof!`);
    }
  
    fetch() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} is fetching.`);
        this.energyLevel -= 2;
      } else {
        console.log(`${this.name} is too tired to fetch.`);
      }
    }
  
    describe() {
      console.log(`${this.name} is a ${this.age}-year-old ${this.breed}.`);
    }
}
  
module.exports = Dog;