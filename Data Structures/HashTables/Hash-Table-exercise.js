class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}

	_hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash
	}

	set(key, value) {
		const address = this._hash(key)

		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value])

		return this.data[address]
	}

	get(key) {
		const address = this._hash(key)
		const currentAddress = this.data[address]

		if (currentAddress) {
			for (let i = 0; i < currentAddress.length; i++) {
				if (currentAddress[i][0] === key) {
					return currentAddress[i][1]
				}
			}
		}
		return undefined
	}

	keys() {
		const keysArray = []
		const hashTable = this.data

		for (let i = 0; i < hashTable.length; i++) {
			if (hashTable[i]) {
				if (hashTable[i].length > 1) {
					for (let j = 0; j < hashTable[i].length; j++) {
						keysArray.push(hashTable[i][j][0])
					}
				} else keysArray.push(hashTable[i][0][0])
			}
		}
		return keysArray
	}

	values() {
		const valuesArray = []
		const hashTable = this.data

		for (let i = 0; i < hashTable.length; i++) {
			if (hashTable[i]) {
				if (hashTable[i].length > 1) {
					for (let j = 0; j < hashTable[i].length; j++) {
						valuesArray.push(hashTable[i][j][1])
					}
				} else valuesArray.push(hashTable[i][0][1])
			}
		}
		return valuesArray
	}
}

const myHashTable = new HashTable(12)
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.get('grapes'))
console.log(myHashTable.set('apples', 9))
console.log(myHashTable.get('apples'))
console.log(myHashTable.set('bananas', 100))
console.log(myHashTable.get('bananas'))
console.log(myHashTable.set('oranges', 25))
console.log('Keys: ', myHashTable.keys())
console.log('Values: ', myHashTable.values())
