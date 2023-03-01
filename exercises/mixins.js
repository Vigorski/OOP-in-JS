function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    console.log("eating");
    this.hunger -= 2;
    this.tired--;
    this.food -= 2;
    this.statusReport();
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
    this.hunger++;
    this.tired++;
    this.statusReport();
  },
};

const canHunt = {
  hunt: function () {
    console.log("hunting");
    this.hunger += 2;
    this.tired += 2;
    this.food += Math.random() > 0.49 ? 3 : 0;
    this.statusReport();
  },
};

function Person(name) {
  this.name = name;
  this.hunger = 0;
  this.tired = 0;
  this.food = 0;

  this.sleep = function () {
    console.log("sleeping");
    this.hunger += 2;
    this.tired -= 4;
    this.statusReport();
  };
  this.statusReport = function () {
    console.log(`
      Player: ${this.name},
      hunger: ${this.hunger},
      tired: ${this.tired},
      food left: ${this.food}
      `);
  };
}

mixin(Person.prototype, canEat, canWalk, canHunt);

const p = new Person("John");
