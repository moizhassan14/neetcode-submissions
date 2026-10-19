class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let set=new Set(nums);
        let longest:number=0;
        for(let num of nums){
            if(!set.has(num-1)){
                let current:number=num;
                let count:number=1;
                while(set.has(current+1)){
                    current++;
                    count++;
                }
                longest=Math.max(longest,count);
            }
        }
        return longest;
        
    }

}
