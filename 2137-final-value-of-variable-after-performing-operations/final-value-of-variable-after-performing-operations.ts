function finalValueAfterOperations(operations: string[]): number {
    let count:number=0;
    for (let i=0;i<operations.length;i++){
        const e=operations[i];
        if (e==="--X" || e==="X--"){
            count--
        }else{
            count++
        }
    }
    return count
};