const sort = (arr) => {
  let low = 0,
    mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    switch (arr[mid]) {
      case 0: {
        let temp = arr[low];
        arr[low] = arr[mid];
        arr[mid] = temp;
        low++;
        mid++;
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        let temp = arr[mid];
        arr[mid] = arr[high];
        arr[high] = temp;
        high--;
        break;
      }
    }
  }
  console.log(low, mid, high);
  return arr;
};
