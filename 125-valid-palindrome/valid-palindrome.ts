function isPalindrome(s: string): boolean {
    const filteredStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if the string reads the same forward and backward
  let left = 0;
  let right = filteredStr.length - 1;
  
  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
};