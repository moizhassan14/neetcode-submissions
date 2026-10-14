class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map:Record<string,string[]>={};
        for(let str of strs){
            let freq=new Array(26).fill(0);
            for(let char of str){
                freq[char.charCodeAt(0)-97]++;
            }
            const key=freq.join(",");
            if(!map[key]){
                map[key]=[]
            }
            map[key].push(str);
        }
        return Object.values(map);
    }
}
