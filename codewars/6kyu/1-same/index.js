export function comp(array1, array2){
  if (!array1 || !array2 || cloneArr2.length !== cloneArr1.length) return false

  const cloneArr2 = [...eval(array2)].sort()
  const cloneArr1 = array1.map(item => Math.pow(item, 2)).sort();

  return cloneArr1.every((val, index) => cloneArr2[index] === val)
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

comp(a1,a2);