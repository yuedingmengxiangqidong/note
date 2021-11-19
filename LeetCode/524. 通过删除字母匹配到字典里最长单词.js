// 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

// 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。

//  

// 示例 1：

// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"
// 示例 2：

// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"
//  

// 提示：

// 1 <= s.length <= 1000
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 1000
// s 和 dictionary[i] 仅由小写英文字母组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
    let res = "";
    for (const t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            if (t.length > res.length || (t.length === res.length && t < res)) {
                res = t;
            }
        }
    }
    return res;
};
