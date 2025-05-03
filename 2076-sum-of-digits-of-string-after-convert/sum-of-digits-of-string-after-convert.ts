function getLucky(s: string, k: number): number {
   let converted = s
        .split('')
        .map(char => (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1).toString())
        .join('');

    for (let i = 0; i < k; i++) {
        converted = converted
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit), 0)
            .toString();
    }

    return parseInt(converted); 
};