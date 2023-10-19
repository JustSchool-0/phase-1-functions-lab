const hqSt = 42;
const blockLenFeet = 264;

function distanceFromHqInBlocks(street) {
  if (street > hqSt) {
    return street - hqSt;
  }
  return hqSt - street;
}

function distanceFromHqInFeet(street) {
  // A block is 264' long
  return distanceFromHqInBlocks(street) * blockLenFeet;
}

function distanceTravelledInFeet(start, destination) {
  return (Math.max(start, destination) - Math.min(start, destination)) * blockLenFeet
}

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination);
  if (dist > 2500) {
    return 'cannot travel that far';
  } else if (dist > 2000) {
    return 25;
  }
  const adjustedDist = dist - 400;
  if (adjustedDist <= 0) {
    return 0;
  }
  return adjustedDist * 0.02;
}
