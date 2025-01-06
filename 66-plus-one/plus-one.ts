function plusOne(digits: number[]): number[] {
     for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the current digit is less than 9, just add 1 and return the result
            digits[i]++;
            return digits;
        }
        
        // If the current digit is 9, set it to 0 and continue to the next digit
        digits[i] = 0;
    }
    
    // If all digits were 9, we need to add 1 at the beginning of the array
    return [1, ...digits];
};