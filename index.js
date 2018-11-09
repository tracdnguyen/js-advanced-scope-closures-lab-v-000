function produceDrivingRange(distance) {
  return function(starting, ending) {
    const distanceTravelled = parseInt(ending) - parseInt(starting);

    if (distanceTravelled > distance) {
      return `${distanceTravelled - distance} blocks out of range`
    } else {
      return `within range by ${distance - distanceTravelled}`
    };

  };
};


function produceTipCalculator(percent) {
  return function(tip) {
    return (tip * percent);
  };
};


function createDriver() {
  
};