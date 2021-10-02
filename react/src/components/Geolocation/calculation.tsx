const calcCrow = (lati1: number, lon1: number, lati2: number, lon2: number) => {
  const R = 6371; // Radius of the earth in km
  const dLat = toRad(lati2 - lati1);
  const dLon = toRad(lon2 - lon1);
  const lat1 = toRad(lati1);
  const lat2 = toRad(lati2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export const nearestOffice = (a: number, b: number) => {
  if (a < b) {
    return "Singapore";
  } else {
    return "London";
  }
};

// Converts numeric degrees to radians
const toRad = (Value: number) => {
  return (Value * Math.PI) / 180;
};

export default calcCrow;
