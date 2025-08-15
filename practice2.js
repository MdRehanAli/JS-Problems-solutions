// Reverse an array
const nums = [1, 5, 7, 8, 9, 11];

const reversed = [];
for (let i = 0; i < nums.length; i++) {
    reversed.unshift(nums[i]);
}

console.log(reversed);


// Reverse an array Using for of
const reverse = [];
for (const num of nums) {
    reverse.unshift(num)
}
console.log(reverse);

--------------------------------------------------------------------------------