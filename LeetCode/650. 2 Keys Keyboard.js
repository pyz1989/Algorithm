/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if(n == 1) return 0;
    if(n % 2) return n;
    return 2 * Math.log2(n);
    //求解质数集合
};
