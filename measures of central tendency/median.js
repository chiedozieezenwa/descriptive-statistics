class DescriptiveStatistics {
  constructor(medianvalue) {
    this.medianvalue = medianvalue;
  }

  median() {
    const arraySorted = this.medianvalue.slice().sort((a, b) => a - b);
    return arraySorted.length % 2 === 0
      ? (arraySorted[arraySorted.length / 2 - 1] +
          arraySorted[arraySorted.length / 2]) /
          2
      : arraySorted[Math.floor(arraySorted.length / 2)];
  }
}

const values = [5.5, 10, 15.5, 20, 25.5, 30, 35.5, 40, 45.5, 50];

const statistics = new DescriptiveStatistics(values);

const calculatedMedian = statistics.median();
console.log("Median:", calculatedMedian);
