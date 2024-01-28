class DescriptiveStatistics {
  constructor(meanvalue) {
    this.meanvalue = meanvalue;
  }

  mean() {
    return (
      this.meanvalue.reduce((sum, value) => sum + value, 0) /
      this.meanvalue.length
    );
  }
}

const values = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];

const statistics = new DescriptiveStatistics(values);

const calculatedMean = statistics.mean();
console.log("Mean:", calculatedMean);
