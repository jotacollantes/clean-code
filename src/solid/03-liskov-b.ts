export abstract class Vehicle {
  // getNumberSeats():number {
  //     throw Error('Method not implemented')
  // }

  //!Con asbtract la clase que herada obligatoriamente tiene que implementar el metodo
  abstract getNumberSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
//   getNumberOfTeslaSeats() {
//     return this.numberOfSeats;
//   }
  getNumberSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  // getNumberOfAudiSeats() {
  //     return this.numberOfSeats;
  // }
  getNumberSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  // getNumberOfToyotaSeats() {
  //     return this.numberOfSeats;
  //   }
  getNumberSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  //   getNumberOfHondaSeats() {
  //     return this.numberOfSeats;
  //   }
  getNumberSeats(): number {
    return this.numberOfSeats;
  }
}

export class Volvo extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  //   getNumberOfVolvoSeats() {
  //     return this.numberOfSeats;
  //   }
  getNumberSeats(): number {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehicle {
    constructor(private numberOfSeats: number) {
      super();
    }
    //   getNumberOfFordSeats() {
    //     return this.numberOfSeats;
    //   }
    getNumberSeats(): number {
      return this.numberOfSeats;
    }
  }
