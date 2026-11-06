class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        for (let token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                let right: number = stack.pop()!;
                let left: number = stack.pop()!;
                switch (token) {
                    case "+": stack.push(left + right); break;
                    case "-": stack.push(left - right); break;
                    case "*": stack.push(left * right); break;
                    case "/": stack.push(Math.trunc(left / right));
                        break;
                }

            } else {
                stack.push(Number(token));

            }
        }
        return stack.pop();
    }
}
