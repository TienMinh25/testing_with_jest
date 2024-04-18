const isEven = require('./isEven.js');

// test("isEven passes for even number", () => {
//   expect(isEven(2)).toBe(true);
// })

// test("isEven passes for odd number", () => {
//   expect(isEven(3)).toBe(false);
// })

// describe("isEven", () => {
//   const integerEvenNumbers = [2, 100, 6, 20];

//   it.each(integerEvenNumbers)(
//     "integerEvenNumbers passes for integer value %i", 
//     (evenNumber) => expect(isEven(evenNumber)).toBe(true) 
//   )

//   const integerOddNumbers = [1, 3, 101, 2001, 23];

//   it.each(integerOddNumbers)(
//     "integerEvenNumbers passes for integer value %i", 
//     (oddNumber) => expect(isEven(oddNumber)).toBe(false) 
//   )
// })

// The mock factory returns the function () => true
// jest.mock("./isEven.js", () => () => true);

// describe("isEven", () => {
//   it('should not pass, but pass because of the isEven() mock', () => {
//     expect(isEven(3)).toBe(true);
//   })

//   it('should pass', () => {
//     expect(isEven(4)).toBe(true);
//   })
// })

jest.mock("./isEven.js", () => jest.fn());

afterEach(() => {
    isEven.mockClear();
})

describe("isEven", () => {
    it("should be false", () => {
        isEven.mockImplementation(() => false);
        
        expect(isEven(3)).toBe(false);
        expect(isEven).toHaveBeenCalledWith(3);
    })
    
    it("should be true", () => {
        isEven.mockImplementation(() => true);
        
        expect(isEven(4)).toBe(true);
        expect(isEven).toHaveBeenCalledWith(4);
    })
})