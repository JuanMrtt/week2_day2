describe("Hello Ironhack function", () => {
    it("Must exist", () => {
        expect(typeof helloIronhack).toEqual('function')
    })
    it("\"Must return 'Good morning Ironhackers\"", () => {
        expect(helloIronhack()).toEqual('Good morning Ironhackers')
    })
})



describe("Calculate Me function", () => {
    it("Must return the sum of all values", () => {
        expect(calculateMe([1, 2, 3])).toEqual(6)
        expect(calculateMe([10, 20])).toEqual(30)
    })
    it("Must return 'undefined' if the argumentned array is empty", () => {
        expect(calculateMe([])).toBeUndefined()
    })
})



describe("Person object", () => {
    it("Must exist", () => {
        expect(person).toBeDefined()
        expect(typeof person).toEqual('object')
    })

    it("Must have a 'age' property", () => {
        expect(person.age).toBeDefined()
    })

    it("'age' property should have an initial value of 33", () => {
        expect(person.age).toEqual(33)
        expect(typeof person.age).toEqual('number')
    })

    it("Should have a 'grow' method", () => {
        expect(typeof person.grow).toEqual('function')
    })


    it("'grow' method should increase 'age' by argumented value'", () => {
        person.grow(3)
        expect(person.age).toEqual(36)
        person.grow(-3)
        expect(person.age).toEqual(33)
    })

})