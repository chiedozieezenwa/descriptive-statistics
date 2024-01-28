class DispersionStatistics {
  constructor(data) {
    this.data = data.slice().sort((a, b) => a - b);
  }

  range() {
    return this.data[this.data.length - 1] - this.data[0];
  }

  variance() {
    const mean = this.mean();
    const squaredDifferences = this.data.map((val) => (val - mean) ** 2);
    return (
      squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length
    );
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  quartiles() {
    const q1Index = Math.floor(this.data.length / 4);
    const q2Index = Math.floor(this.data.length / 2);
    const q3Index = Math.floor((3 * this.data.length) / 4);
    return {
      q1: this.data[q1Index],
      q2: this.data[q2Index],
      q3: this.data[q3Index],
    };
  }

  percentile(p) {
    if (p < 0 || p > 100) {
      throw new Error("Percentile must be between 0 and 100");
    }
    const index = Math.floor((p / 100) * (this.data.length - 1));
    return this.data[index];
  }

  mean() {
    const sum = this.data.reduce((acc, val) => acc + val, 0);
    return sum / this.data.length;
  }
}

const data = [12, 45, 67, 23, 1, 90, 33, 50, 23, 78];
const dispersionStats = new DispersionStatistics(data);
console.log("Range:", dispersionStats.range());
console.log("Variance:", dispersionStats.variance());
console.log("Standard Deviation:", dispersionStats.standardDeviation());
console.log("Quartiles:", dispersionStats.quartiles());
console.log("25th Percentile:", dispersionStats.percentile(25));
console.log("50th Percentile (Median):", dispersionStats.percentile(50));
console.log("75th Percentile:", dispersionStats.percentile(75));
