var CoffeeDrink = /** @class */ (function () {
    function CoffeeDrink() {
        this._americano = {
            name: 'Americano',
            waterNeeded: 200,
            beansNeeded: 30
        };
        this._espresso = {
            name: 'Espresso',
            waterNeeded: 100,
            beansNeeded: 30
        };
        this._latte = {
            name: 'Latte',
            waterNeeded: 100,
            beansNeeded: 30,
            milkNeeded: 100
        };
        this._cappuccino = {
            name: 'Cappuccino',
            waterNeeded: 100,
            beansNeeded: 30,
            milkNeeded: 50
        };
    }
    Object.defineProperty(CoffeeDrink.prototype, "americano", {
        get: function () {
            return this._americano;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeDrink.prototype, "espresso", {
        get: function () {
            return this._espresso;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeDrink.prototype, "latte", {
        get: function () {
            return this._latte;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeDrink.prototype, "cappuccino", {
        get: function () {
            return this._cappuccino;
        },
        enumerable: true,
        configurable: true
    });
    return CoffeeDrink;
}());
var Water = /** @class */ (function () {
    function Water(waterCapacity, actualWaterVolume) {
        if (waterCapacity === void 0) { waterCapacity = 300; }
        if (actualWaterVolume === void 0) { actualWaterVolume = 300; }
        this.waterCapacity = waterCapacity;
        this.actualWaterVolume = actualWaterVolume;
    }
    Water.prototype.decreaseActualWaterVolume = function (value) {
        this.actualWaterVolume -= value;
    };
    Water.prototype.checkActualWaterVolume = function () {
        return this.actualWaterVolume;
    };
    Water.prototype.refillWater = function () {
        this.actualWaterVolume = this.waterCapacity;
    };
    return Water;
}());
var Milk = /** @class */ (function () {
    function Milk(milkCapacity, actualMilkVolume) {
        if (milkCapacity === void 0) { milkCapacity = 500; }
        if (actualMilkVolume === void 0) { actualMilkVolume = 500; }
        this.milkCapacity = milkCapacity;
        this.actualMilkVolume = actualMilkVolume;
    }
    Milk.prototype.decreaseActualMilkVolume = function (value) {
        this.actualMilkVolume -= value;
    };
    Milk.prototype.checkActualMilkVolume = function () {
        return this.actualMilkVolume;
    };
    Milk.prototype.refillMilk = function () {
        this.actualMilkVolume = this.milkCapacity;
    };
    return Milk;
}());
var CoffeeBeans = /** @class */ (function () {
    function CoffeeBeans(beansCapacity, actualBeansVolume) {
        if (beansCapacity === void 0) { beansCapacity = 500; }
        if (actualBeansVolume === void 0) { actualBeansVolume = 500; }
        this.beansCapacity = beansCapacity;
        this.actualBeansVolume = actualBeansVolume;
    }
    CoffeeBeans.prototype.decreaseActualBeansVolume = function (value) {
        this.actualBeansVolume -= value;
    };
    CoffeeBeans.prototype.checkActualBeansVolume = function () {
        return this.actualBeansVolume;
    };
    CoffeeBeans.prototype.refillBeans = function () {
        this.actualBeansVolume = this.beansCapacity;
    };
    return CoffeeBeans;
}());
var CoffeeMaker = /** @class */ (function () {
    function CoffeeMaker(water, coffeeBeans, coffeeDrink, milk) {
        if (water === void 0) { water = new Water(); }
        if (coffeeBeans === void 0) { coffeeBeans = new CoffeeBeans(); }
        if (coffeeDrink === void 0) { coffeeDrink = new CoffeeDrink(); }
        if (milk === void 0) { milk = new Milk(); }
        this.water = water;
        this.coffeeBeans = coffeeBeans;
        this.coffeeDrink = coffeeDrink;
        this.milk = milk;
    }
    CoffeeMaker.prototype.makeCoffee = function (drink) {
        console.log(this.water.checkActualWaterVolume());
        console.log(this.coffeeBeans.checkActualBeansVolume());
        console.log(this.milk.checkActualMilkVolume());
        if (this.water.checkActualWaterVolume() < drink.waterNeeded) {
            console.log("There is not enoght water");
            return;
        }
        if (this.coffeeBeans.checkActualBeansVolume() < drink.beansNeeded) {
            console.log("There is not enoght coffee beans");
            return;
        }
        if (drink.milkNeeded) {
            if (this.milk.checkActualMilkVolume() < drink.milkNeeded) {
                console.log("There is not enoght milk");
                return;
            }
        }
        console.log("Your " + drink.name + " is ready!");
        this.water.decreaseActualWaterVolume(drink.waterNeeded);
        this.coffeeBeans.decreaseActualBeansVolume(drink.beansNeeded);
        if (drink.milkNeeded) {
            this.milk.decreaseActualMilkVolume(drink.milkNeeded);
        }
    };
    CoffeeMaker.prototype.makeAmericano = function () {
        this.makeCoffee(this.coffeeDrink.americano);
    };
    CoffeeMaker.prototype.makeEspresso = function () {
        this.makeCoffee(this.coffeeDrink.espresso);
    };
    CoffeeMaker.prototype.makeLatte = function () {
        this.makeCoffee(this.coffeeDrink.latte);
    };
    CoffeeMaker.prototype.makeCappuccino = function () {
        this.makeCoffee(this.coffeeDrink.cappuccino);
    };
    return CoffeeMaker;
}());
var myCoffeeMaker = new CoffeeMaker();
myCoffeeMaker.makeAmericano();
myCoffeeMaker.makeEspresso();
myCoffeeMaker.makeCappuccino();
myCoffeeMaker.makeLatte();
