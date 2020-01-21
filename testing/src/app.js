const helloIronhack = () => 'Good morning Ironhackers'
const calculateMe = arr => {
    if (arr.length > 0) {
        return arr.reduce((acc, val) => val + acc)
    }
}

const person = {
    age: 33,
    grow(par) {
        this.age += par
    }
}
