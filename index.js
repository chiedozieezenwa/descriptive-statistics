class Human {
  constructor(name, gender, occupation, hobby) {
    this.name = name;
    this.gender = gender;
    this.occupation = occupation;
    this.hobby = hobby;
    this.weight = null;
  }

  static getLifeExpectancy() {
    return "Humans have an average life expectancy of 70 - 120 years";
  }

  setWeight(weight) {
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }
}

console.log(Human.getLifeExpectancy());

const Tappi = new Human(
  "Tappi",
  "Male",
  "Learnable Program Coordinator",
  "FIFA 23"
);

const Livinus = new Human("Livinus", "Male", "Enemy of Peace", "Violence");

Tappi.setWeight(100);
Livinus.setWeight(70);

console.log(Tappi, Livinus);
