// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 
// Constraints:

// 0 <= n <= 105
 

// assume x and y. x/2 = y.
// if even: x/2 to get y
// both x and y will have the same most right bit
// if odd: x/2 will have one less bit than y => add 1 to the bit (i%2)

var countBits = function(n) {
    let ans = []; 
      ans[0] = 0; 
      for (let i = 1; i <= n; i++) {
          ans[i] = ans[Math.floor(i/2)] + i%2; 
      }
      return ans;
  };




//Runtime: 133 ms