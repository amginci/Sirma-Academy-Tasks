// add method to object

let cat = {
    name: 'Navuhodonosor',
    age: 9,
    breed: 'Persian',
    makeSound() {
        console.log(this.name + ': Meow')
    },
    eyeColor: 'Hazel'
}
cat.makeSound()

cat.name = 'Navcho';
cat.makeSound();