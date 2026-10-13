class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        let freq:Record<string,number>={};
        for(let i=0;i<s.length;i++){
            freq[s[i]]=(freq[s[i]]|| 0)+1;
            freq[t[i]]=(freq[t[i]]|| 0)-1;
        }
        for(const key in freq){
            if(freq[key]!==0){
                return false 
            }
        }
        return true;

    }
}
