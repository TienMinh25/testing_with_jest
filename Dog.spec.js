const Dog = require("./Dog.js");

describe("Dog", () => {
    let dog = new Dog('Buddy', 'Golden Retriever', 3);
    const barkSpy = jest.spyOn(dog, "bark");
    const fetchSpy = jest.spyOn(dog, "fetch");
    const describeSpy = jest.spyOn(dog, "describe");
    const consoleSpy = jest.spyOn(console, "log");
    afterEach(() => {
        consoleSpy.mockClear();
    })

    describe(".bark", () => {
        it ("defines a function", () => {
            expect(typeof dog.bark).toBe("function");
        })

        it ("return undefined and console log when call", () => {
            expect(dog.bark()).toBeUndefined();
            expect(consoleSpy).toHaveBeenCalledWith("Buddy barks: Woof woof!");
            expect(barkSpy).toHaveBeenCalled();
        })
    })

    describe(".fetch", () => {
        it ("defines a function", () => {
            expect(typeof dog.fetch).toBe("function");
        })

        describe("energy", () => {
            it ("greater than 0", () => {
                expect(dog.fetch()).toBeUndefined();
                expect(dog.energyLevel).toBe(8);
                expect(consoleSpy).toHaveBeenCalledWith("Buddy is fetching.")
                expect(fetchSpy).toHaveBeenCalled();
            })

            it ("less than 0", () => {
                // Arrange
                dog.energyLevel = 0;

                // act + assertion
                expect(dog.fetch()).toBeUndefined();
                expect(consoleSpy).toHaveBeenCalledWith("Buddy is too tired to fetch.")
                expect(fetchSpy).toHaveBeenCalled();
            })
        })
    })

    describe(".describe", () => {
        it ("defines a function", () => {
            expect(typeof dog.describe).toBe("function");
        })

        it ("return undefined and console log when call", () => {
            expect(dog.describe()).toBeUndefined();
            expect(consoleSpy).toHaveBeenCalledWith("Buddy is a 3-year-old Golden Retriever.");
            expect(describeSpy).toHaveBeenCalled();
        })
    })
})