/**
 * Slower than all other solutions.
 * When N>1000 performance drops drastically. Because of sorting.
 * My solution: https://app.codility.com/demo/results/trainingYE3JYG-QV4/
 * Other guy solution: from here https://github.com/juliandavidmr/codility_exercises/blob/master/arrays/odd_occurrences_in_array.js
 */
function solution(A) {
  if(A.length === 1) {
    return A[0];
  }

  let a = 0;
  const sorted = A.sort();
  for(let i = 0; i < sorted.length; i=i+2) {
    a = sorted[i];
    const b = sorted[i+1];
    if(a !== b) break;
  }
  return a;
};
