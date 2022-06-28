const buySell = (arr) => {
  let min = Number.MAX_VALUE;
  let ans = 0;
  let max = 0;
  for (let el of arr) {
    min = Math.min(el, min);
    if (el > min) {
      ans = el - min;
      max = Math.max(max, ans);
    }
  }
  return max;
};
