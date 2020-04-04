export const path = [
  [31.34388, 30.08201], // [31.343866, 30.081985],
  [31.342068, 30.082998],
  [31.340986, 30.083479],
  [31.339939, 30.079107],
  [31.339905, 30.078659],
  [31.343632, 30.078238],
  [31.34379, 30.07323], //[31.343752, 30.073223],
  [31.344164, 30.06958],
  [31.344885, 30.069456],
  [31.344414, 30.06941],
  [31.34523, 30.06198], //[31.345232, 30.061979],
  [31.346121, 30.054577],
  [31.34217, 30.05409], //[31.342167, 30.054121],
  [31.338667, 30.053438],
  [31.339891, 30.044897],
  [31.339907, 30.044889],
  [31.34144, 30.04505], //[31.341438, 30.045061],
  [31.345528, 30.045305],
  [31.34614, 30.04099], //[31.346119, 30.040989],
  [31.347178, 30.035158],
  [31.354013, 30.035912],
  [31.35511, 30.036781],
  [31.355429, 30.03956],
  [31.355684, 30.039557],
  [31.353939, 30.02618],
  [31.355469, 30.02471],
  [31.358801, 30.024595],
  [31.362198, 30.024614],
  [31.395172, 30.016426],
  [31.39839, 30.01638], //[31.39839, 30.01635],
  [31.404932, 30.01642],
  [31.43357, 30.01642], //[31.433571, 30.01642],
  [31.440107, 30.01642],
  [31.44026, 30.016132],
  [31.432274, 30.016146],
  [31.431128, 30.015249],
  [31.430952, 30.010803],
  [31.43102, 30.01288], //[31.43096, 30.012878],
  [31.431128, 30.015249],
  [31.431238, 30.006205],
  [31.431293, 30.006157],
  [31.44532, 30.006166],
  [31.446224, 30.006191],
  [31.44607, 30.005344],
  [31.44598, 29.9951] //[31.446011, 29.9951]
];

export const stationsIdx = [0, 6, 10, 12, 16, 18, 29, 31, 37, 44];
export const stations = stationsIdx.map((pos, id) => ({
  id,
  coordinates: path[pos],
  name: `Station ${id + 1}`,
  pos
})); //[
// [31.34388, 30.08201],
// [31.34379, 30.07323],
// [31.34523, 30.06198],
// [31.34217, 30.05409],
// [31.34144, 30.04505],
// [31.34614, 30.04099],
// [31.39839, 30.01638],
// [31.43357, 30.01642],
// [31.43102, 30.01288],
// [31.44598, 29.9951],
// ]