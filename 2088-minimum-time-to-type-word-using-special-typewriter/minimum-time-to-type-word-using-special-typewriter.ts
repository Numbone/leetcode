function minTimeToType(word: string): number {
     let time = 0;
  let currentCharCode = 'a'.charCodeAt(0);

  for (const ch of word) {
    const targetCharCode = ch.charCodeAt(0);
    const diff = Math.abs(targetCharCode - currentCharCode);
    const moveTime = Math.min(diff, 26 - diff); 
    time += moveTime + 1;
    currentCharCode = targetCharCode;
  }

  return time;
};