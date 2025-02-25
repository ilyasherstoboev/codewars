// export function hamming(n) {
//   let result = [1];
//   const pows = [0,0,0];
//   const clearNumbers = [2,3,5]

//   while (result.length < n) {
//     const next = clearNumbers.map((item, index) => result[pows[index]] * item);
//     let nextHamming = Math.min(...next);

//     result.push(nextHamming);
//     next.forEach((item, index) => {
//       if (nextHamming === item) pows[index] += 1;
//     })
//   }

//   return result[result.length - 1];
// }

export const hamming = (n) => new Hamming().getHamming(n);

class Hamming {
  constructor() {
    this.result = [1];
    this.pows = [0, 0, 0];
    this.clearNumbers = [2, 3, 5];
  }

  getHamming(n) {
    if (this.result.length >= n) return this.result[n - 1]; // Оптимизированный возврат
    this.#fillHamming(n);
    return this.result.pop();
  }


  #fillHamming(n) {
    while (this.result.length < n) {
      const nextValues = this.#getNext();
      let nextHamming = nextValues[0];

      for (let i = 1; i < nextValues.length; i++) {
        if (nextValues[i] < nextHamming) {
          nextHamming = nextValues[i];
        }
      }

      this.result.push(nextHamming);
      this.#incrementPow(nextHamming, nextValues);
    }
  }

  #incrementPow(nextHamming, nextValues) {
    nextValues.forEach((value, index) => {
      if (nextHamming === value) this.pows[index]++;
    });
  }

  #getNext() {
    return this.clearNumbers.map((factor, index) => this.result[this.pows[index]] * factor);
  }
}

