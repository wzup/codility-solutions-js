/**
 * Another interesting solution
 * https://app.codility.com/demo/results/trainingFN5RVT-XQ4/
 *
 * 1. Находим произведение массива. Можно использовать A.reduce
 * 2. Делим произведение на каждый элемент массива. Делим с остатком (P % item)
 * 3. Если остаток НЕ равен 0, это искомое непарное число.
 */
function solution(A) {
  let sum = 1;

  for(let i=0; i<A.length; i++) {
    sum *= A[i];
  }

  for(let i=0; i<A.length; i++) {
    const resto = sum % Math.pow(A[i], 2);

    if(resto !== 0) {
      return A[i];
    } else {
      sum /= A[i];
    }
  }
};
