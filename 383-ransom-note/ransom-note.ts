function canConstruct(ransomNote: string, magazine: string): boolean {
     const magazineCount: Record<string, number> = {};

  // Подсчитываем буквы в magazine
  for (const char of magazine) {
    magazineCount[char] = (magazineCount[char] || 0) + 1;
  }

  // Проверяем, можно ли собрать ransomNote
  for (const char of ransomNote) {
    if (!magazineCount[char]) {
      return false;
    }
    magazineCount[char]--;
  }

  return true;
  
};