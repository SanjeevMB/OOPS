class first {

    constructor(name, age, gender) {

        this.name = name;
        this.age = age;
        this.gender = gender;

    }

}

class second extends first {

    address(vill, post, pin, dist) {

        this.vill = vill;
        this.post = post;
        this.pin = pin;
        this.dist = dist;

    }

    printInfo() {

        return (`${this.name} is ${this.age} year old ${this.gender} belongs from ${this.vill} ${this.post}, ${this.pin}, ${this.dist}`);

    }

}

let obj = new second('Sanjeev', 28, 'Male');

obj.address('Raurachawar', 'Amhar', 221712, 'Ballia');

console.log(obj.printInfo());