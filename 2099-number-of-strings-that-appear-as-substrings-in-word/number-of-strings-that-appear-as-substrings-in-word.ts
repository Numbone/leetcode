function numOfStrings(patterns: string[], word: string): number {
     return patterns.reduce((count, pattern) => {
    return word.includes(pattern) ? count + 1 : count;
  }, 0);
};