function numJewelsInStones(jewels: string, stones: string): number {
    const jewelSet = new Set(jewels);
  return [...stones].reduce((count, stone) => count + (jewelSet.has(stone) ? 1 : 0), 0);
};