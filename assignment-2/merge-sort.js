let mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr; // Base case: return if the array is already sorted or has only one element
  }

  // Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves back together
  return merge(sortedLeft, sortedRight);
}

let merge = (left, right) => {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right halves and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from left or right halves
  return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

