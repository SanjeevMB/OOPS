class Animal {

    constructor(name, legs, place) {

        this.name = name;
        this.legs = legs;
        this.livingPlace = place;

        console.log(`${this.name} have ${this.legs} legs lives in ${this.livingPlace}`);

    }

    wondering(name) {

        this.name = name

        console.log(`${this.name} is barking`);

    }

}

class Dog extends Animal {

    constructor(name, legs) {

        super(`Dogs`, 4, `Jungle`);

        this.name = name;
        this.legs = legs;

        console.log(`${this.name} have ${this.legs} legs`)

    }

    wondering(name) {

        super.wondering(`dog`);

        this.name = name;

        console.log(`${this.name} is not barking`);

    }

}

let d = new Dog(`Dog`, 4);

console.log(d.wondering(`Monkey`));