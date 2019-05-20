interface CoffeeType {
    name: string,
    waterNeeded: number,
    beansNeeded: number 
}

const americano: CoffeeType = {
    name: 'Americano',
    waterNeeded: 200,
    beansNeeded: 30
}

const espresso: CoffeeType = {
    name: 'Espresso',
    waterNeeded: 100,
    beansNeeded: 30
}

class CoffeeMaker {
    private water: number = 0;
    private beans: number = 0;

    checkWater(){
        return this.water;
    }

    checkBeans(){
        return this.beans;
    }
    
    refillWater(){
        this.water = 1000;
    }

    refillBeans(){
        this.beans = 300;
    }

    makeCoffee(coffeeType: CoffeeType): void{
        if (this.water < coffeeType.waterNeeded) {
            console.log(`There is not enoght water`);
            return
        }
        if (this.beans < coffeeType.beansNeeded) {
            console.log(`There is not enoght coffee beans`);
            return
        }
        console.log(`Your ${coffeeType.name} is ready!`);
        this.water = this.water - coffeeType.waterNeeded;
        this.beans = this.beans - coffeeType.beansNeeded;
    }
}

let myCoffeeMaker = new CoffeeMaker();
myCoffeeMaker.refillBeans();
myCoffeeMaker.refillWater();
myCoffeeMaker.makeCoffee(americano);
myCoffeeMaker.makeCoffee(espresso);
console.log(myCoffeeMaker.checkWater());
console.log(myCoffeeMaker.checkBeans());


