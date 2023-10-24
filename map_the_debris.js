// freeCodeCamp Intermediate Algorithm Scripting -> Map the Debris
// This is a complicated challenge. I followed Useful Programmer's YouTube video at https://www.youtube.com/watch?v=37NSow_KFBE&ab_channel=UsefulProgrammer
// That video breaks down the math needed to solve the problem

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    
    let orbitalPeriodResults = [];
  
    arr.forEach(function(element) {
      let translatedElement = {};
      let twoTimesPi = Math.PI * 2;
      let earthRadiusPlusAverageAltitude = earthRadius + element.avgAlt;
      let topOfDivision = Math.pow(earthRadiusPlusAverageAltitude, 3);
  
      let numberToTakeSquareRoot = topOfDivision / GM;
      let squareRootResult = Math.sqrt(numberToTakeSquareRoot);
  
      let orbitalPeriodResult = twoTimesPi * squareRootResult;
  
      translatedElement.name = element.name;
      translatedElement.orbitalPeriod = Math.round(orbitalPeriodResult);
  
      orbitalPeriodResults.push(translatedElement);
    });
    return orbitalPeriodResults;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  