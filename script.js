function threeSumClosest(nums, target) {
  // Sort the input array in ascending order.
  nums.sort((a, b) => a - b);

  // Initialize variables to store the closest sum and its difference from the target.
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const currentDiff = Math.abs(currentSum - target);

      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        closestSum = currentSum;
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
const result = threeSumClosest(S, target);
console.log(result); // This will print 2

