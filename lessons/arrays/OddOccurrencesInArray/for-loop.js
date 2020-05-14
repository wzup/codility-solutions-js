/**
 * The most efficient solution
 * https://app.codility.com/demo/results/trainingCU8K3K-B5H/
 */
function solution(A) {
  if(A.length === 1) {
    return A[0];
  }

  const o = {};
  for (let i = 0; i < A.length; ++i) {
    const item = A[i];
    if(item in o) {
      delete o[item];
    } else {
      o[item] = item;
    }
  }
  const entries = Object.entries(o);
  if(entries.length > 0) {
    return entries[0][1];
  }
  return null;
};
