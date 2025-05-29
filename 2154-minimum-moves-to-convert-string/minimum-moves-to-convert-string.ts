function minimumMoves(s: string): number {
    let i = 0;
  let moves = 0;

  while (i < s.length) {
    if (s[i] === 'X') {
      moves++;
      i += 3; // делаем ход и пропускаем 3 символа
    } else {
      i++;
    }
  }

  return moves;
};