const maxSumContiguousSubarray = (arr) => {
  let maxTillHere = 0;
  let max = 0;
  for (let el of arr) {
    maxTillHere = maxTillHere + el;

    if (maxTillHere < 0) {
      maxTillHere = 0;
    }

    max = Math.max(maxTillHere, max);
  }
  return max;
};

const example = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
