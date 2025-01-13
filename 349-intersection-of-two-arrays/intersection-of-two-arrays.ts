function intersection(nums1: number[], nums2: number[]): number[] {
    const res:number[]=[];
    for (let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                if(!res.includes(nums1[i])){
                    res.push(nums1[i])
                }
            }
        }
    }
    return res
};