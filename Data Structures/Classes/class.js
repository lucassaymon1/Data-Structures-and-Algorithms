// quick curiosities

console.log('[] === []? ', [] === [])
console.log('[1] === [1]? ', [1] === [1])

const obj1 = { value: 10 }
const obj2 = obj1
const obj3 = { value: 10 }

console.log('obj1 equals to obj2? ', obj1 === obj2)
// true, because obj1 references obj2 and have both same types
console.log('obj1 equals to obj3? ', obj1 === obj3)
console.log('obj1 equals to obj3? ', obj1 == obj3)
// false, because obj1 and obj3, despite both have same values, they are different typed objects

// each one of the primitive types of JavaScript were created, then can be referenced by some declared variable. The same applies to objects. When a object is declared, it also has its own type created in memory space.

class Player {
	constructor(name, type) {
		this.name = name
		this.type = type
		console.log(this) //will print the wizzard object without the play method
	}

	introduce = () => {
		console.log(`Hi, i am ${this.name} and i'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type) // will call the constructor function of the parent class
		// this is why you dont need to reference 'this' again
		console.log(this) // will print the Wizard object
	}

	play = () => {
		console.log(`WEEEEE I'm a ${this.type}`)
	}
}

// const player = new Player('Sheona', 'Berserker') Would print the Player object
const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magician')

wizard1.introduce()
wizard1.play()
