function threeSum(S, target) {
  if (S.length < 3) {
    // Handle the case where there are not enough elements in the array.
    return null;
  }

  S.sort((a, b) => a - b); // Sort the array in ascending order.

  let closestSum = S[0] + S[1] + S[2]; // Initialize closestSum with the sum of the first three elements.

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const currentSum = S[i] + S[left] + S[right];

      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum; // Update closestSum if the current sum is closer to the target.
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

// Example usage:
const S = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(S, target);
console.log(result); // Output: 2
