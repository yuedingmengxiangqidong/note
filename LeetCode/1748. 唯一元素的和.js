// 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。

// 请你返回 nums 中唯一元素的 和 。

//  

// 示例 1：

// 输入：nums = [1,2,3,2]
// 输出：4
// 解释：唯一元素为 [1,3] ，和为 4 。
// 示例 2：

// 输入：nums = [1,1,1,1,1]
// 输出：0
// 解释：没有唯一元素，和为 0 。
// 示例 3 ：

// 输入：nums = [1,2,3,4,5]
// 输出：15
// 解释：唯一元素为 [1,2,3,4,5] ，和为 15 。
//  

// 提示：

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/sum-of-unique-elements
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const map = {};
    let res = 0;
    for(val of nums){
        map[val]=map[val]?map[val]+1:1;
    }
    for(let key in map){
        if(map[key]===1) res+=+key;
    }
    return res
  };