/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
     let insertPos = 0;

  // Step 1: Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Step 2: Fill the rest of the array with zeroes
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
};