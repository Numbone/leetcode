function reversePrefix(word: string, ch: string): string {
     const index = word.indexOf(ch);
  
  if (index === -1) return word; // символ не найден — ничего не делаем

  // Разделяем строку: сначала переворачиваем от 0 до index (включительно), остальное оставляем как есть
  const reversed = word
    .slice(0, index + 1)
    .split('')
    .reverse()
    .join('');
    
  return reversed + word.slice(index + 1);
};