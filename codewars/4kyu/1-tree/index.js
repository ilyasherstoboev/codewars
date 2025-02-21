export class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

export function treeByLevels (rootNode) {
  if (!rootNode) {
    return [];
  }

  let arrRoots = [rootNode];

  for(let i = 0; i < arrRoots.length; i++) {
    pushToArr(arrRoots[i], arrRoots)
  }

  return arrRoots.map(item => item.value);
}

function pushToArr (rootNode, arrRoots, keys = ['left', 'right']) {
  keys.forEach(key => {
    if (rootNode[key]) {
      arrRoots.push(rootNode[key])
    }
  })
}