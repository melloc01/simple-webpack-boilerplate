import Animal from './Animal'

export default class Dog extends Animal {
	constructor(){
		super()
		console.warn(`I'm a dog!`)
	}
}