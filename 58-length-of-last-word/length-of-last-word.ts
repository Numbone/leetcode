function lengthOfLastWord(s: string): number {
     let length = 0;
  let foundWord = false;

  // Loop through the string from the end to the beginning
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      foundWord = true; // Mark that we've started counting a word
      length++;
    } else if (foundWord) {
      // If we encounter a space after finding a word, stop counting
      break;
    }
  }

  return length;
};