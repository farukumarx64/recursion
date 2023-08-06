// Function to generate Fibonacci sequence iteratively up to the given number
let fibs = (number) => {
  // Initialize an empty array to store the Fibonacci sequence
  let fibsArray = [];

  // Loop to generate Fibonacci numbers up to the given number
  for (let i = 0; i < number; i++) {
    // If the fibsArray is empty or contains only one element, add the current number 'i' to it.
    if (fibsArray.length === 0 || fibsArray.length === 1) {
      fibsArray.push(i);
    } else {
      // For subsequent numbers, calculate the next Fibonacci number by summing the last two elements in the fibsArray.
      fibsArray.push(
        fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]
      );
    }
  }

  // Print the Fibonacci sequence array to the console
  console.log(fibsArray);
};
