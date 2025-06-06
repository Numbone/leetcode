function convertToTitle(columnNumber: number): string {
     let result = '';

    while (columnNumber > 0) {
        columnNumber--; // смещение, чтобы A стало 0
        const remainder = columnNumber % 26;
        const char = String.fromCharCode(65 + remainder); // 65 = 'A'
        result = char + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};