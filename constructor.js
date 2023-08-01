class Car {

    constructor(name = `NA`, cost = `NA`, color = `Black`, speed = 120) {

        this.name = name;
        this.cost = cost;
        this.color = color;
        this.speed = 250;

    }

    average(time = 60) {

        return (this.speed * time);

    }

}

let car1 = new Car(`BMW`, 5000000, `White`);
car1.rating = 5;

console.log(car1);
console.log(car1.average());