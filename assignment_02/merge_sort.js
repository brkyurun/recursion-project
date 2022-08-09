function mergeSort(array) {
  if (array.length === 1) return array;

  const division = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, division);
  let secondHalf = array.slice(division, array.length);

  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  return merge(firstHalf, secondHalf);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left[0]);
      left.shift();
    } else {
      merged.push(right[0]);
      right.shift();
    }
  }

  while (right.length > 0) {
    merged.push(right[0]);
    right.shift();
  }

  while (left.length > 0) {
    merged.push(left[0]);
    left.shift();
  }

  return merged;
}
