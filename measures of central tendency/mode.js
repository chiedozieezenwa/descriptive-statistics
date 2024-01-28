class Statistics {
  constructor(modeValue) {
    this.modeValue = modeValue;
  }

  mode() {
    const modeTable = {};
    this.modeValue.forEach(
      (item) => (modeTable[item] = modeTable[item] + 1 || 1)
    );

    let modes = [];
    let maxFrequency = 0;
    for (const key in modeTable) {
      const value = parseFloat(key);
      const frequency = modeTable[key];
      if (frequency > maxFrequency) {
        modes = [value];
        maxFrequency = frequency;
      } else if (frequency === maxFrequency) {
        modes.push(value);
      }
    }

    if (modes.length === Object.keys(modeTable).length) {
      modes = [];
    }

    return modes;
  }
}

const data = [10, 20, 20, 30, 40, 40, 40, 50, 50];

const statistics = new Statistics(data);

const calculatedMode = statistics.mode();
console.log("Mode:", calculatedMode);
