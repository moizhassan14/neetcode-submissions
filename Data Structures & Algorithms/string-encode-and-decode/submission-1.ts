class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result:string="";
        for(let str of strs){
            result+=str.length+"#"+str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result:string[]=[];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j] !== "#"){
                j++;
            }
            let length:number=Number(str.substring(i,j));
            const s:string=str.substring(j+1,j+1+length);
            result.push(s);
            i=j+1+length
        }
        return result
    }
}
