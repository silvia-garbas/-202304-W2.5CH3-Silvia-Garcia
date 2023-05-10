import { fizzBuzz } from "./fizzbuzz.js";
describe("Given a function", () => {
  describe("When it receives 2 and 10", () => {
    test("[2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz]", () => {
      const numberInitial = 2;
      const numberFinal = 10;
      const expectedResult = [
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
      ];

      const result = fizzBuzz(numberInitial, numberFinal);

      expect(result).toStrictEqual(expectedResult);
    });
  });
  describe("When it receives 40 and 45", () => {
    test(" ['Buzz', 41, 'Fizz', 43, 44, 'Buzz']", () => {
      const numberInitial = 40;
      const numberFinal = 45;
      const expectedResult = ["Buzz", 41, "Fizz", 43, 44, "Buzz"];

      const result = fizzBuzz(numberInitial, numberFinal);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
