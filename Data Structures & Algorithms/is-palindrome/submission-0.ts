class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned:string=s.toLowerCase().replace(/[^a-z0-9]/g,"");
        const reversed:string=cleaned.split("").reverse().join("");
        if(cleaned === reversed){
            return true 
        }
        return false;
    }
}
