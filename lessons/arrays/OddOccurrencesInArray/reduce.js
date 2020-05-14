/**
 * Second by performance - little bit slower than for loop.
 * https://app.codility.com/demo/results/training7B4V3D-G2Q/
 */
function solution(A) {
  if(A.length === 1) {
    return A[0];
  }

  const o = A.reduce((all, one) => {
    if(one in all) {
      delete all[one];
    } else {
      all[one] = one;
    }
    return all;
  });

  const entries = Object.entries(o);
  if(entries.length > 0) {
    return entries[0][1];
  }
  return null;
};
