function searchInsert(nums: number[], target: number): number {
     return nums.findIndex((num) => num >= target) !== -1
        ? nums.findIndex((num) => num >= target)
        : nums.length;
};