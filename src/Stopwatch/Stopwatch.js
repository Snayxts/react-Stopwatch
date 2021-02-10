const DisplayingTimes = {
  displayMiliSeconds(x) {
    return Math.floor(x / 2.5) % 100;
  },
  displaySeconds(x) {
    return Math.floor(x / 250) % 60;
  },
  displayMinutes(x) {
    return Math.floor(x / 15000) % 60;
  },
  displayHours(x) {
    return Math.floor(x / 900000);
  },

  displayAll(props) {
    const display = [
      this.displayHours(props),
      this.displayMinutes(props),
      this.displaySeconds(props),
      this.displayMiliSeconds(props),
    ].join(" : ");
    return display;
  },
};

export default DisplayingTimes;
