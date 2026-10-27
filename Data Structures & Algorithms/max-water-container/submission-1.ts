class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
         let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(heights[left], heights[right]);
        const currentWater = width * currentHeight;
        
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer of the shorter line inward
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
    }
}
