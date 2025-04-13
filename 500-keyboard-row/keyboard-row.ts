function findWords(words: string[]): string[] {
    const firstRow="qwertyuiop"
    const secondRow="asdfghjkl"
    const thirdRow="zxcvbnm"
    let result:string[]=[]
    for (let i=0;i<words.length;i++){
        const word= words[i];
        const lowerWord = word.toLowerCase();

        let row:string|null=null

        if (firstRow.includes(lowerWord[0])) {
            row = firstRow;
        } else if (secondRow.includes(lowerWord[0])) {
            row = secondRow;
        } else if (thirdRow.includes(lowerWord[0])) {
            row = thirdRow;
        }

          let isValid = true;
            for (let k = 1; k < lowerWord.length; k++) {
            if (!row!.includes(lowerWord[k])) {
                isValid = false;
                break;
            }
            }

            if (isValid) {
            result.push(word);
        }
    }
    return result
};