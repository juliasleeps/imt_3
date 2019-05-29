interface CoffeeType {
    name: string,
    waterNeeded: number,
    beansNeeded: number,
    milkNeeded?: number
}

class CoffeeDrink {
    private _americano: CoffeeType = {
        name: 'Americano',
        waterNeeded: 200,
        beansNeeded: 30
    }
    private _espresso: CoffeeType = {
        name: 'Espresso',
        waterNeeded: 100,
        beansNeeded: 30
    }
    private _latte: CoffeeType = {
        name: 'Latte',
        waterNeeded: 100,
        beansNeeded: 30,
        milkNeeded: 100
    }
    private _cappuccino: CoffeeType = {
        name: 'Cappuccino',
        waterNeeded: 100,
        beansNeeded: 30,
        milkNeeded: 50
    }
    
    get americano(){
        return this._americano;
    }
    get espresso(){
        return this._espresso;
    }
    get latte(){
        return this._latte;
    }
    get cappuccino(){
        return this._cappuccino;
    }
}

class Water {
    constructor(private waterCapacity: number = 300, private actualWaterVolume: number = 300){
    }

    decreaseActualWaterVolume(value: number){
        this.actualWaterVolume -= value;
    }

    checkActualWaterVolume(){
        return this.actualWaterVolume;
    }
    
    refillWater(){
        this.actualWaterVolume = this.waterCapacity;
    }
}

class Milk {
    constructor(private milkCapacity: number = 500, private actualMilkVolume: number = 500){
    }

    decreaseActualMilkVolume(value: number){
        this.actualMilkVolume -= value;
    }

    checkActualMilkVolume(){
        return this.actualMilkVolume;
    }
    
    refillMilk(){
        this.actualMilkVolume = this.milkCapacity;
    }
}

class CoffeeBeans {
    constructor(private beansCapacity: number = 500, private actualBeansVolume: number = 500){
    }

    decreaseActualBeansVolume(value: number){
        this.actualBeansVolume -= value;
    }

    checkActualBeansVolume(){
        return this.actualBeansVolume;
    }
    
    refillBeans(){
        this.actualBeansVolume = this.beansCapacity;
    }
}

class CoffeeMaker {

    constructor(
        private water: Water = new Water(),
        private coffeeBeans: CoffeeBeans = new CoffeeBeans(),
        private coffeeDrink: CoffeeDrink = new CoffeeDrink(),
        private milk: Milk = new Milk()
        ){
    }

    private makeCoffee(drink: CoffeeType){        
        if (this.water.checkActualWaterVolume() < drink.waterNeeded){
            console.log(`There is not enoght water`);
            return
        }
        if (this.coffeeBeans.checkActualBeansVolume() < drink.beansNeeded){
            console.log(`There is not enoght coffee beans`);
            return
        }
        if (drink.milkNeeded){
            if (this.milk.checkActualMilkVolume() < drink.milkNeeded){
                console.log(`There is not enoght milk`);
                return
            }
        }
        console.log(`Your ${drink.name} is ready!`);

        this.water.decreaseActualWaterVolume(drink.waterNeeded);
        this.coffeeBeans.decreaseActualBeansVolume(drink.beansNeeded);
        if(drink.milkNeeded){
            this.milk.decreaseActualMilkVolume(drink.milkNeeded);
        }
    }
    makeAmericano(){
        this.makeCoffee(this.coffeeDrink.americano);
    }
    makeEspresso(){
        this.makeCoffee(this.coffeeDrink.espresso);
    }
    makeLatte(){
        this.makeCoffee(this.coffeeDrink.latte);
    }
    makeCappuccino(){
        this.makeCoffee(this.coffeeDrink.cappuccino);
    }
}

let myCoffeeMaker = new CoffeeMaker();
myCoffeeMaker.makeAmericano();
myCoffeeMaker.makeEspresso();
myCoffeeMaker.makeCappuccino();
myCoffeeMaker.makeLatte();


