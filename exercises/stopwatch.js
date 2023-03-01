function Stopwatch() {
  let startTime,
    endTime,
    duration = 0;
  let running = false;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (val) {
      duration = val;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (val) {
      startTime = val;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (val) {
      endTime = val;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (val) {
      running = val;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch is already running!");
  }

  this.running = true;
  this.startTime = Date.now();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch is stopped!");
  }

  this.running = false;
  this.endTime = Date.now();
  const timeDifference = (this.endTime - this.startTime) / 1000;
  this.duration = this.duration + timeDifference;
};

Stopwatch.prototype.reset = function () {
  this.running = false;
  this.startTime, this.endTime, (this.duration = 0);
};

const sw = new Stopwatch();
