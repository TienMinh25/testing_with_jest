const isEven = require('./isEven.js');

test("isEven passes for even number", () => {
  expect(isEven(2)).toBe(true);
})

test("isEven passes for odd number", () => {
  expect(isEven(3)).toBe(false);
})

describe("isEven", () => {
  const integerEvenNumbers = [2, 100, 6, 20];

  it.each(integerEvenNumbers)(
    "integerEvenNumbers passes for integer value %i", 
    (evenNumber) => expect(isEven(evenNumber)).toBe(true) 
  )

  const integerOddNumbers = [1, 3, 101, 2001, 23];

  it.each(integerOddNumbers)(
    "integerEvenNumbers passes for integer value %i", 
    (oddNumber) => expect(isEven(oddNumber)).toBe(false) 
  )
})
