class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack:string[]=[];
        let matchingPairs:Record<string,string>={
            ')':'(',
            ']':'[',
            '}':'{'
        }
        for(let char of s){
            if(char==='(' || char==='[' || char==='{'){
                stack.push(char)
            }else{
                let expeceted:string=matchingPairs[char];
                let poppped:string=stack.pop();
                if(poppped !== expeceted){
                    return false
                }
            }

        }
        return stack.length === 0;
    }
}
