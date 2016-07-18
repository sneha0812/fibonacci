function fibonacci(number) {
  if (number === 1) {
    return [0, 1];
  }
  for (let i = 1; i <= number; i++) {
    let fibonacci = fibonacci(number - 1) + fibonacci(number - 2);
    return fibonacci;
  }
};
console.log(fibonacci(8)); 
