const diffExists = (arr, diff) => {
  const freq = new Map();
  for (let el of arr) {
    let prev = freq.get(el);
    freq.set(el, !prev ? 1 : prev + 1);
  }
  for (let el of arr) {
    let reqd = el - diff;
    if (freq.has(reqd)) return true;
  }
  return false;
};
