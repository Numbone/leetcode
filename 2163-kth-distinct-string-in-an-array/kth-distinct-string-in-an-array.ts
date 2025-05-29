function kthDistinct(arr: string[], k: number): string {
     const countMap = new Map<string, number>();

  
  for (const str of arr) {
    countMap.set(str, (countMap.get(str) || 0) + 1);
  }

  
  const distincts = arr.filter(str => countMap.get(str) === 1);

  
  return distincts[k - 1] || "";
};