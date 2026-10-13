class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const freq: Record<string, number> = {};
        for (let i = 0; i < nums.length; i++) {
            freq[nums[i]] = (freq[nums[i]] || 0) + 1;
            if (freq[nums[i]] > 1) {
                return true;
            }
        }
        return false;
    }
}
