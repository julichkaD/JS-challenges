function analyzeCarMileage(cars) {
  let totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  let averageMiles = totalMileage / cars.length;
  let highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );
  let lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );
  return {
    averageMiles: parseFloat(averageMiles.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;


