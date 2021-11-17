// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

//  

// 示例 1:

// 输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
// 示例 2:

// 输入: dividend = 7, divisor = -3
// 输出: -2
// 解释: 7/-3 = truncate(-2.33333..) = -2
//  

// 提示：

// 被除数和除数均为 32 位有符号整数。
// 除数不为 0。
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/divide-two-integers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。






/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 const MAX = 2147483647, MIN = -2147483648;
 var divide = function(dividend, divisor) {
     if(dividend == MIN && divisor == -1)
         return MAX;
     let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
     for(let i=31;i>=0;i--){
         if((a>>>i)>=b){
             // 1<<31 = -2147483648，需特殊处理
             if(i==31){
                 a -= MAX;
                 a -= 1;
                 res -= MIN;
             } else{
                 a -= b<<i;
                 res += 1<<i;
             }
         }
     }
     return (dividend > 0) == (divisor > 0) ? res : -res;
 };
 