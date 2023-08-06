// Function to generate Fibonacci sequence recursively up to the given number
let fibsRec = (number, sequence = [0, 1]) => {
  // Base case: If number is 0 or 1, return an error message.
  if (number === 0 || number === 1) return "number must be greater than 0 & 1";

  // Base case: If the length of the sequence array is equal to the number, return the sequence.
  if (sequence.length === number) return sequence;

  // Recursive step: Calculate the next Fibonacci number and call the function recursively.
  return fibsRec(
    number,
    sequence.concat(
      // Add the sum of the last two elements in the sequence array to create the next Fibonacci number.
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    )
  );
};

// Example usage:
console.log(fibsRec(8))