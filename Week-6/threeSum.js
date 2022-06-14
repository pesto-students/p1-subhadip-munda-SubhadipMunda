const threeSum = (arr, sum) => {
  arr.sort((a, b) => a - b);
  let curr;
  for (let i = 0; i < arr.length; i++) {
    let low = i + 1;
    let high = arr.length - 1;
    while (low < high) {
      curr = arr[low] + arr[high] + arr[i];

      if (curr === sum) return curr;
      else if (curr > sum) high--;
      else if (curr < sum) low++;
    }
  }
  return curr;
};
