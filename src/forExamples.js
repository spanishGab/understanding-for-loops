const myCars = [
  {
    make: "Hyundai",
    model: "Veloster",
    topSpeed: 214,
  },
  {
    make: "VolksWagen",
    model: "Golf gti",
    topSpeed: 249.4,
  },
  {
    make: "Honda",
    model: "Civic",
    topSpeed: 272,
  },
];

function logFasterCar(forType, fasterCar) {
  console.log(
    forType,
    `The faster car is the ${fasterCar.make} ${fasterCar.model}: ${fasterCar.topSpeed} km/h`,
  );
}

function doStandardFor(cars) {
  let fasterCar = cars[0];

  for (let index = 0; index < cars.length; index++) {
    if (cars[index].topSpeed > fasterCar.topSpeed) {
      fasterCar = cars[index];
    }
  }

  logFasterCar('[FOR]', fasterCar);
}

function doForEach(cars) {
  let fasterCar = cars[0];

  cars.forEach((car) => {
    if (car.topSpeed > fasterCar.topSpeed) {
      fasterCar = car;
    }
  });

  logFasterCar('[FOREACH]', fasterCar);
}

function doForOf(cars) {
  let fasterCar = cars[0];

  for (const car of cars) {
    if (car.topSpeed > fasterCar.topSpeed) {
      fasterCar = car;
    }
  }

  logFasterCar('[FOR...OF]', fasterCar);
}

function doForIn(cars) {
  let fasterCar = cars[0];

  for (let index in cars) {
    if (cars[index].topSpeed > fasterCar.topSpeed) {
      fasterCar = cars[index];
    }
  }

  logFasterCar('[FOR...IN]', fasterCar);
}

// doStandardFor(myCars);
// doForEach(myCars);
// doForOf(myCars);
// doForIn(myCars);