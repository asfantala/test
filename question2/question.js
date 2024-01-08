function findMissingNumber(nums) {
    const n = nums.length;
    let sum = 0;
    
    // Calculate the sum of all numbers in the range [0, n]
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    
    // Subtract each number in the array from the sum
    for (let num of nums) {
        sum -= num;
    }
    
    // The remaining sum is the missing number
    return sum;
}

const nums = [0,1,3];
const missingNumber = findMissingNumber(nums);
console.log(missingNumber);
