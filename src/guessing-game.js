class GuessingGame {
  constructor() {
    this.root = null;
    this.max = 0;
    this.current = 0;
  }

  setRange(min, max) {
    this.max = max;
    this.current = Math.ceil(max / 2);
    this.min = min;
  }

  guess() {
    return this.current;
  }

  lower() {
    this.max = this.current;
    this.current = this.current - Math.floor((this.current - this.min) / 2);
  }

  greater() {
    this.min = this.current;
    this.current = this.current + Math.ceil((this.max - this.current) / 2);
  }
}

module.exports = GuessingGame;
