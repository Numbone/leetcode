function isHappy(n: number): boolean {
      const getSumOfSquares = (num: number): number => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    const seenNumbers: Set<number> = new Set(); // Track numbers we've already seen to detect cycles

    while (n !== 1) {
        if (seenNumbers.has(n)) {
            return false; // We've entered a loop
        }

        seenNumbers.add(n);
        n = getSumOfSquares(n); // Update n to the sum of the squares of its digits
    }

    return true; // n is 1, so it's a happy number
};