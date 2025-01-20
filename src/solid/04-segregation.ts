interface Bird {
  eat(): void;
  // fly(): void;
  // run(): void;
  // swim(): void;
}


interface RunningBird {
  run(): number;
}

interface SwimmerBir {
  swim(): void;
}

interface FlyingBird {
  fly(): void;
}

class Tucan implements Bird, FlyingBird {
  fly() {}
  eat() {}
}

class Huminbirid implements Bird, FlyingBird {
  fly() {}
  eat() {}
}

class Ostrich implements Bird, RunningBird, SwimmerBir {
  eat() {}
  run() { return 100}
  swim() {}
}

class Penguin implements Bird, RunningBird, SwimmerBir {
  eat() {}
  run() {return 50}
  swim() {}
}
