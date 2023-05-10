const arrayNumbers = (initialNumber: number, finalNumber: number) => {
  let newArrayNumbers = [];
  for (let index = initialNumber; index <= finalNumber; index++) {
    newArrayNumbers.push(index);

    if (index % 3 === 0 && index % 5 === 0) {
      newArrayNumbers.pop();
      newArrayNumbers.push("FizzBuzz");
    }
    if (index % 3 === 0) {
      newArrayNumbers.pop();
      newArrayNumbers.push("Fizz");
    }
    if (index % 5 === 0) {
      newArrayNumbers.pop();
      newArrayNumbers.push("Buzz");
    }
  }
  return newArrayNumbers;
};

