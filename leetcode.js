var numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  let arr = [];
  while (nums.length > 0) {
    let alice = nums.shift();
    let bob = nums.shift();

    arr.push(bob);
    arr.push(alice);
  }
  return arr;
};
nums=[5,4,2,3]
let res = numberGame(nums)
console.log(res);