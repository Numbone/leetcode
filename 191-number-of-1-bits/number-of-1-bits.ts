function hammingWeight(n: number): number {
    let count = 0;
  while (n !== 0) {
    count += n & 1;  // Check if the last bit is 1
    n >>>= 1;        // Unsigned right shift by 1 bit
  }
  return count;
};