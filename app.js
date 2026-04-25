const DRILL_DATA = {
  numbers: {
    "1": 0.228,
    "2": 0.221,
    "3": 0.213,
    "4": 0.209,
    "5": 0.2055,
    "6": 0.204,
    "7": 0.201,
    "8": 0.199,
    "9": 0.196,
    "10": 0.1935,
    "11": 0.191,
    "12": 0.189,
    "13": 0.185,
    "14": 0.182,
    "15": 0.18,
    "16": 0.177,
    "17": 0.173,
    "18": 0.1695,
    "19": 0.166,
    "20": 0.161,
    "21": 0.159,
    "22": 0.157,
    "23": 0.154,
    "24": 0.152,
    "25": 0.1495,
    "26": 0.147,
    "27": 0.144,
    "28": 0.1405,
    "29": 0.136,
    "30": 0.1285,
    "31": 0.12,
    "32": 0.116,
    "33": 0.113,
    "34": 0.111,
    "35": 0.11,
    "36": 0.1065,
    "37": 0.104,
    "38": 0.1015,
    "39": 0.0995,
    "40": 0.098,
    "41": 0.096,
    "42": 0.0935,
    "43": 0.089,
    "44": 0.086,
    "45": 0.082,
    "46": 0.081,
    "47": 0.0785,
    "48": 0.076,
    "49": 0.073,
    "50": 0.07,
    "51": 0.067,
    "52": 0.0635,
    "53": 0.0595,
    "54": 0.055,
    "55": 0.052,
    "56": 0.0465,
    "57": 0.043,
    "58": 0.042,
    "59": 0.041,
    "60": 0.04,
    "61": 0.039,
    "62": 0.038,
    "63": 0.037,
    "64": 0.036,
    "65": 0.035,
    "66": 0.033,
    "67": 0.032,
    "68": 0.031,
    "69": 0.02925,
    "70": 0.028,
    "71": 0.026,
    "72": 0.025,
    "73": 0.024,
    "74": 0.0225,
    "75": 0.021,
    "76": 0.02,
    "77": 0.018,
    "78": 0.016,
    "79": 0.0145,
    "80": 0.0135
  },
  letters: {
    "A": 0.234,
    "B": 0.238,
    "C": 0.242,
    "D": 0.246,
    "E": 0.25,
    "F": 0.257,
    "G": 0.261,
    "H": 0.266,
    "I": 0.272,
    "J": 0.277,
    "K": 0.281,
    "L": 0.29,
    "M": 0.295,
    "N": 0.302,
    "O": 0.316,
    "P": 0.323,
    "Q": 0.332,
    "R": 0.339,
    "S": 0.348,
    "T": 0.358,
    "U": 0.368,
    "V": 0.377,
    "W": 0.386,
    "X": 0.397,
    "Y": 0.404,
    "Z": 0.413
  },
  fractions: {
    "1/64": 0.015625,
    "1/32": 0.03125,
    "3/64": 0.046875,
    "1/16": 0.0625,
    "5/64": 0.078125,
    "3/32": 0.09375,
    "7/64": 0.109375,
    "1/8": 0.125,
    "9/64": 0.140625,
    "5/32": 0.15625,
    "11/64": 0.171875,
    "3/16": 0.1875,
    "13/64": 0.203125,
    "7/32": 0.21875,
    "15/64": 0.234375,
    "1/4": 0.25,
    "17/64": 0.265625,
    "9/32": 0.28125,
    "19/64": 0.296875,
    "5/16": 0.3125,
    "21/64": 0.328125,
    "11/32": 0.34375,
    "23/64": 0.359375,
    "3/8": 0.375,
    "25/64": 0.390625,
    "13/32": 0.40625,
    "27/64": 0.421875,
    "7/16": 0.4375,
    "29/64": 0.453125,
    "15/32": 0.46875,
    "31/64": 0.484375,
    "1/2": 0.5,
    "33/64": 0.515625,
    "17/32": 0.53125,
    "35/64": 0.546875,
    "9/16": 0.5625,
    "37/64": 0.578125,
    "19/32": 0.59375,
    "39/64": 0.609375,
    "5/8": 0.625,
    "41/64": 0.640625,
    "21/32": 0.65625,
    "43/64": 0.671875,
    "11/16": 0.6875,
    "45/64": 0.703125,
    "23/32": 0.71875,
    "47/64": 0.734375,
    "3/4": 0.75,
    "49/64": 0.765625,
    "25/32": 0.78125,
    "51/64": 0.796875,
    "13/16": 0.8125,
    "53/64": 0.828125,
    "27/32": 0.84375,
    "55/64": 0.859375,
    "7/8": 0.875,
    "57/64": 0.890625,
    "29/32": 0.90625,
    "59/64": 0.921875,
    "15/16": 0.9375,
    "61/64": 0.953125,
    "31/32": 0.96875,
    "63/64": 0.984375
  }
};

const UNC_UNF_SIZES = [
  { size: "#0", major: 0.060, unc: 80, unf: 80 },
  { size: "#1", major: 0.073, unc: 64, unf: 72 },
  { size: "#2", major: 0.086, unc: 56, unf: 64 },
  { size: "#3", major: 0.099, unc: 48, unf: 56 },
  { size: "#4", major: 0.112, unc: 40, unf: 48 },
  { size: "#5", major: 0.125, unc: 40, unf: 44 },
  { size: "#6", major: 0.138, unc: 32, unf: 40 },
  { size: "#8", major: 0.164, unc: 32, unf: 36 },
  { size: "#10", major: 0.190, unc: 24, unf: 32 },
  { size: "#12", major: 0.216, unc: 24, unf: 28 },
  { size: "1/4", major: 0.250, unc: 20, unf: 28 },
  { size: "5/16", major: 0.3125, unc: 18, unf: 24 },
  { size: "3/8", major: 0.375, unc: 16, unf: 24 },
  { size: "7/16", major: 0.4375, unc: 14, unf: 20 },
  { size: "1/2", major: 0.5, unc: 13, unf: 20 },
  { size: "9/16", major: 0.5625, unc: 12, unf: 18 },
  { size: "5/8", major: 0.625, unc: 11, unf: 18 },
  { size: "3/4", major: 0.75, unc: 10, unf: 16 },
  { size: "7/8", major: 0.875, unc: 9, unf: 14 },
  { size: "1", major: 1.0, unc: 8, unf: 12 }
];

const METRIC_THREADS = [
  { size: "M1", major: 1, coarse: 0.25, fine: [0.2] },
  { size: "M1.2", major: 1.2, coarse: 0.25, fine: [0.2] },
  { size: "M1.4", major: 1.4, coarse: 0.3, fine: [0.2] },
  { size: "M1.6", major: 1.6, coarse: 0.35, fine: [0.2] },
  { size: "M1.8", major: 1.8, coarse: 0.35, fine: [0.2] },
  { size: "M2", major: 2, coarse: 0.4, fine: [0.25] },
  { size: "M2.5", major: 2.5, coarse: 0.45, fine: [0.35] },
  { size: "M3", major: 3, coarse: 0.5, fine: [0.35] },
  { size: "M3.5", major: 3.5, coarse: 0.6, fine: [0.35] },
  { size: "M4", major: 4, coarse: 0.7, fine: [0.5] },
  { size: "M5", major: 5, coarse: 0.8, fine: [0.5] },
  { size: "M6", major: 6, coarse: 1.0, fine: [0.75] },
  { size: "M7", major: 7, coarse: 1.0, fine: [0.75] },
  { size: "M8", major: 8, coarse: 1.25, fine: [1.0, 0.75] },
  { size: "M10", major: 10, coarse: 1.5, fine: [1.25, 1.0] },
  { size: "M12", major: 12, coarse: 1.75, fine: [1.5, 1.25] },
  { size: "M14", major: 14, coarse: 2.0, fine: [1.5] },
  { size: "M16", major: 16, coarse: 2.0, fine: [1.5] },
  { size: "M18", major: 18, coarse: 2.5, fine: [2.0, 1.5] },
  { size: "M20", major: 20, coarse: 2.5, fine: [2.0, 1.5] },
  { size: "M22", major: 22, coarse: 2.5, fine: [2.0, 1.5] },
  { size: "M24", major: 24, coarse: 3.0, fine: [2.0] },
  { size: "M27", major: 27, coarse: 3.0, fine: [2.0] },
  { size: "M30", major: 30, coarse: 3.5, fine: [2.0] },
  { size: "M33", major: 33, coarse: 3.5, fine: [2.0] },
  { size: "M36", major: 36, coarse: 4.0, fine: [3.0] }
];

const UNC_TAP_DRILLS = {
  "#0-80": "3/64",
  "#1-64": "#53",
  "#2-56": "#51",
  "#3-48": "5/64",
  "#4-40": "#43",
  "#5-40": "#39",
  "#6-32": "#36",
  "#8-32": "#29",
  "#10-24": "#25",
  "#12-24": "#17",
  "1/4-20": "#7",
  "5/16-18": "F",
  "3/8-16": "5/16",
  "7/16-14": "U",
  "1/2-13": "27/64",
  "9/16-12": "31/64",
  "5/8-11": "17/32",
  "3/4-10": "21/32",
  "7/8-9": "49/64",
  "1-8": "7/8",
  "1-1/8-7": "63/64",
  "1-1/4-7": "1-7/64",
  "1-1/2-6": "1-11/32",
  "1-3/4-5": "1-35/64",
  "2-4-1/2": "1-25/32"
};

const UNF_TAP_DRILLS = {
  "#1-72": "#53",
  "#2-64": "#50",
  "#3-56": "#46",
  "#4-48": "#42",
  "#5-44": "#37",
  "#6-40": "#33",
  "#8-36": "#29",
  "#10-32": "#21",
  "#12-28": "#15",
  "1/4-28": "#3",
  "5/16-24": "I",
  "3/8-24": "Q",
  "7/16-20": "W",
  "1/2-20": "29/64",
  "9/16-18": "33/64",
  "5/8-18": "37/64",
  "3/4-16": "11/16",
  "7/8-14": "13/16",
  "1-12": "15/16",
  "1-1/8-12": "1-3/64",
  "1-1/4-12": "1-11/64",
  "1-1/2-12": "1-27/64",
  "1-3/4-12": "1-43/64",
  "2-12": "1-59/64"
};

const METRIC_TAP_DRILLS = {
  "M1.6": { coarse: 1.25 },
  "M1.8": { coarse: 1.45 },
  "M2": { coarse: 1.6 },
  "M2.5": { coarse: 2.05 },
  "M3": { coarse: 2.5 },
  "M3.5": { coarse: 2.9 },
  "M4": { coarse: 3.3 },
  "M5": { coarse: 4.2 },
  "M6": { coarse: 5.0 },
  "M7": { coarse: 6.0 },
  "M8": { coarse: 6.8, fine: 7.0 },
  "M10": { coarse: 8.5, fine: 8.8 },
  "M12": { coarse: 10.2, fine: 10.5 },
  "M14": { coarse: 12.0, fine: 12.5 },
  "M16": { coarse: 14.0, fine: 14.5 },
  "M18": { coarse: 15.5, fine: 16.5 },
  "M20": { coarse: 17.5, fine: 18.5 },
  "M22": { coarse: 19.5, fine: 20.5 },
  "M24": { coarse: 21.0, fine: 22.0 },
  "M27": { coarse: 24.0, fine: 25.0 },
  "M30": { coarse: 26.5, fine: 28.0 },
  "M33": { coarse: 29.5, fine: 31.0 },
  "M36": { coarse: 32.0, fine: 33.0 }
};

const MATERIAL_LIBRARY = {
  stainless: {
    label: "Stainless",
    variants: [
      { id: "304", name: "304", density: 8.0, modulus: 193, yield: 215, tensile: 505, sfm: [30, 75] },
      { id: "316", name: "316", density: 8.0, modulus: 193, yield: 205, tensile: 515, sfm: [30, 70] },
      { id: "17-4", name: "17-4 PH", density: 7.8, modulus: 197, yield: 1000, tensile: 1100, sfm: [25, 60] },
      { id: "nitronic-60", name: "Nitronic 60", density: 7.62, modulus: 181, yield: 345, tensile: 655, sfm: [20, 55] }
    ]
  },
  mild: {
    label: "Mild Steel",
    variants: [
      { id: "a36", name: "A36", density: 7.85, modulus: 200, yield: 250, tensile: 400, sfm: [10, 125] },
      { id: "1018", name: "1018", density: 7.87, modulus: 205, yield: 370, tensile: 440, sfm: [10, 125] }
    ]
  },
  alloy: {
    label: "Alloy Steel",
    variants: [
      { id: "4140", name: "4140", density: 7.85, modulus: 200, yield: 415, tensile: 655, sfm: [50, 120] },
      { id: "c300", name: "Maraging C300", density: 7.99, modulus: 190, yield: 1862, tensile: 2000, sfm: [20, 45] }
    ]
  },
  aluminum: {
    label: "Aluminum",
    variants: [
      { id: "6061", name: "6061-T6", density: 2.70, modulus: 68.9, yield: 276, tensile: 310, sfm: [400, 1000] },
      { id: "7075", name: "7075-T6", density: 2.81, modulus: 71.7, yield: 503, tensile: 572, sfm: [400, 1000] },
      { id: "5052", name: "5052-H32", density: 2.68, modulus: 68, yield: 180, tensile: 230, sfm: [400, 1000] }
    ]
  },
  titanium: {
    label: "Titanium",
    variants: [
      { id: "gr2", name: "Grade 2", density: 4.51, modulus: 105, yield: 275, tensile: 345, sfm: [20, 60] },
      { id: "gr5", name: "Grade 5", density: 4.43, modulus: 114, yield: 880, tensile: 950, sfm: [20, 60] }
    ]
  },
  nickel: {
    label: "Nickel Alloy",
    variants: [
      { id: "in718", name: "Inconel 718", density: 8.19, modulus: 205, yield: 414, tensile: 827, sfm: [10, 30] }
    ]
  },
  metals: {
    label: "Other Metals",
    variants: [
      { id: "tungsten", name: "Tungsten", density: 19.3, modulus: 400, yield: 750, tensile: 980, sfm: [10, 40] },
      { id: "c101", name: "Copper C10100", density: 8.92, modulus: 117, yield: 69, tensile: 220, sfm: [200, 600] }
    ]
  },
  plastics: {
    label: "Plastics",
    variants: [
      { id: "nylon", name: "Nylon 6", density: 1.14, modulus: 2.7, yield: 70, tensile: 80, sfm: [200, 400] },
      { id: "pla", name: "PLA", density: 1.24, modulus: 3.5, yield: 60, tensile: 65, sfm: [150, 300] },
      { id: "delrin", name: "Delrin (Acetal)", density: 1.41, modulus: 3.2, yield: 70, tensile: 75, sfm: [200, 400] }
    ]
  },
  composites: {
    label: "Composites",
    variants: [
      { id: "carbon-fiber-sm", name: "Carbon Fiber SM", density: 1.6, modulus: 70, yield: 600, tensile: 800, sfm: [200, 400] },
      { id: "carbon-fiber-hm", name: "Carbon Fiber HM", density: 1.8, modulus: 230, yield: 900, tensile: 1200, sfm: [200, 400] },
      { id: "fiberglass", name: "Fiberglass", density: 1.9, modulus: 25, yield: 300, tensile: 500, sfm: [200, 400] }
    ]
  }
};

const METRIC_CLEARANCE = [
  { size: "M2", close: 2.2, normal: 2.4, loose: 2.6 },
  { size: "M2.5", close: 2.7, normal: 2.9, loose: 3.1 },
  { size: "M3", close: 3.2, normal: 3.4, loose: 3.6 },
  { size: "M4", close: 4.3, normal: 4.5, loose: 4.8 },
  { size: "M5", close: 5.3, normal: 5.5, loose: 5.8 },
  { size: "M6", close: 6.4, normal: 6.6, loose: 7.0 },
  { size: "M8", close: 8.4, normal: 9.0, loose: 10.0 },
  { size: "M10", close: 10.5, normal: 11.0, loose: 12.0 },
  { size: "M12", close: 13.0, normal: 13.5, loose: 15.0 },
  { size: "M14", close: 15.0, normal: 15.5, loose: 17.0 },
  { size: "M16", close: 17.0, normal: 17.5, loose: 19.0 },
  { size: "M20", close: 21.0, normal: 22.0, loose: 24.0 },
  { size: "M24", close: 25.0, normal: 26.0, loose: 28.0 }
];

const J429_PROOF = {
  grade2: {
    label: "SAE Grade 2",
    psi: 55000,
    psiLarge: 33000,
    cutoff: 0.75
  },
  grade5: {
    label: "SAE Grade 5",
    psi: 85000,
    psiLarge: 74000,
    cutoff: 1.0
  },
  grade8: {
    label: "SAE Grade 8",
    psi: 120000,
    psiLarge: 120000,
    cutoff: 1.5
  }
};

const ISO_898_PROOF = {
  "4.6": 225,
  "4.8": 310,
  "5.6": 300,
  "5.8": 380,
  "6.8": 420,
  "8.8": 600,
  "9.8": 650,
  "10.9": 830,
  "12.9": 970
};

// Non-J429 / non-ISO-898 proof stresses (MPa) used for A2/A4 stainless, Ti-6Al-4V, and nylon.
const SPECIAL_PROOF_MPA = {
  a2: 450,
  ti: 830,
  nylon: 50
};

const NUT_FACTORS = [
  { id: "dry", label: "Dry", k: 0.2 },
  { id: "lube", label: "Lubricated", k: 0.15 }
];

const BOLT_MATERIALS = {
  inch: [
    { id: "grade2", label: "Low carbon steel", sub: "Grade 2 / 4.6–5.8" },
    { id: "grade5", label: "Alloy steel", sub: "Grade 5 / 8.8" },
    { id: "grade8", label: "High-strength alloy steel", sub: "Grade 8 / 10.9–12.9" },
    { id: "a2", label: "Stainless steel", sub: "A2 / A4" },
    { id: "ti", label: "Titanium", sub: "Ti" },
    { id: "nylon", label: "Nylon", sub: "PA" }
  ],
  metric: [
    { id: "4.6", label: "Low carbon steel", sub: "Grade 2 / 4.6–5.8" },
    { id: "8.8", label: "Alloy steel", sub: "Grade 5 / 8.8" },
    { id: "10.9", label: "High-strength alloy steel", sub: "Grade 8 / 10.9–12.9" },
    { id: "12.9", label: "High-strength alloy steel", sub: "Grade 8 / 10.9–12.9" },
    { id: "a2", label: "Stainless steel", sub: "A2 / A4" },
    { id: "ti", label: "Titanium", sub: "Ti" },
    { id: "nylon", label: "Nylon", sub: "PA" }
  ]
};

const THREAD_MATERIALS = [
  { id: "steel", label: "Into steel" },
  { id: "aluminum", label: "Into aluminum" }
];

const THREAD_MATERIAL_FACTORS = {
  steel: 1.0,
  aluminum: 0.5
};

const TREE = {
  root: [
    { id: "drill", label: "Drill / Tap / Clearance" },
    { id: "torque", label: "Torque Spec" },
    { id: "speeds", label: "Speeds & Feeds" },
    { id: "materials", label: "Materials" },
    { id: "convert", label: "Conversions" }
  ],
  drill: [
    { id: "convert", label: "Drill Size Convert" },
    { id: "tap", label: "Tap Drill" },
    { id: "clearance", label: "Clearance Hole" }
  ],
  torque: [
    { id: "unc", label: "UNC" },
    { id: "unf", label: "UNF" },
    { id: "metric-coarse", label: "Metric Coarse" },
    { id: "metric-fine", label: "Metric Fine" }
  ],
  speeds: [
    { id: "drill", label: "Drilling" },
    { id: "endmill", label: "End Mill" }
  ],
  materials: [],
  convert: [
    { id: "length", label: "Length" },
    { id: "speed", label: "Speed" },
    { id: "mass", label: "Mass" },
    { id: "force", label: "Force" },
    { id: "pressure", label: "Pressure" },
    { id: "torque", label: "Torque" },
    { id: "temp", label: "Temperature" }
  ]
};

const state = {
  category: "drill",
  mode: "convert",
  modeByCategory: {
    drill: "convert",
    torque: "unc",
    speeds: "drill",
    materials: "list",
    convert: "length"
  },
  drillInput: "",
  drillType: "number",
  drillChoice: "7",
  tapSystem: "unc",
  tapSize: "#8",
  clearanceSystem: "metric",
  clearanceSize: "M6",
  torqueSystem: "unc",
  torqueGrade: "a2",
  torqueSize: "1/2",
  torqueSeries: "unc",
  torqueK: "dry",
  torqueThreadMaterial: "steel",
  speedTool: "drill",
  speedFamily: "mild",
  speedVariant: "a36",
  speedDia: 0.25,
  speedFeed: 0.005,
  materialFamily: "stainless",
  materialVariant: "304",
  convertFrom: "in",
  convertTo: "mm",
  convertValue: 1
};

const CONVERSION_UNITS = {
  length: [
    { id: "in", label: "in" },
    { id: "mm", label: "mm" },
    { id: "ft", label: "ft" },
    { id: "m", label: "m" }
  ],
  speed: [
    { id: "ft/min", label: "ft/min" },
    { id: "m/min", label: "m/min" },
    { id: "ft/s", label: "ft/s" },
    { id: "m/s", label: "m/s" },
    { id: "mph", label: "mph" },
    { id: "kph", label: "kph" },
    { id: "kn", label: "kn" }
  ],
  mass: [
    { id: "lb", label: "lb" },
    { id: "kg", label: "kg" }
  ],
  force: [
    { id: "lbf", label: "lbf" },
    { id: "N", label: "N" }
  ],
  pressure: [
    { id: "psi", label: "psi" },
    { id: "MPa", label: "MPa" }
  ],
  torque: [
    { id: "in·lbf", label: "in·lbf" },
    { id: "ft·lbf", label: "ft·lbf" },
    { id: "N·m", label: "N·m" }
  ],
  temp: [
    { id: "°F", label: "°F" },
    { id: "°C", label: "°C" },
    { id: "K", label: "K" }
  ]
};

const CONVERSION_FUNCS = {
  length: {
    base: "mm",
    "in": { toBase: (v) => v * 25.4, fromBase: (v) => v / 25.4 },
    "mm": { toBase: (v) => v, fromBase: (v) => v },
    "ft": { toBase: (v) => v * 304.8, fromBase: (v) => v / 304.8 },
    "m": { toBase: (v) => v * 1000, fromBase: (v) => v / 1000 }
  },
  speed: {
    base: "m/s",
    "ft/min": { toBase: (v) => v * 0.00508, fromBase: (v) => v / 0.00508 },
    "m/min": { toBase: (v) => v / 60, fromBase: (v) => v * 60 },
    "ft/s": { toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
    "m/s": { toBase: (v) => v, fromBase: (v) => v },
    "mph": { toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
    "kph": { toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
    "kn": { toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 }
  },
  mass: {
    base: "kg",
    "lb": { toBase: (v) => v * 0.45359237, fromBase: (v) => v / 0.45359237 },
    "kg": { toBase: (v) => v, fromBase: (v) => v }
  },
  force: {
    base: "N",
    "lbf": { toBase: (v) => v * 4.448221615, fromBase: (v) => v / 4.448221615 },
    "N": { toBase: (v) => v, fromBase: (v) => v }
  },
  pressure: {
    base: "MPa",
    "psi": { toBase: (v) => v * 0.006894757, fromBase: (v) => v / 0.006894757 },
    "MPa": { toBase: (v) => v, fromBase: (v) => v }
  },
  torque: {
    base: "N·m",
    "in·lbf": { toBase: (v) => v * 0.113, fromBase: (v) => v / 0.113 },
    "ft·lbf": { toBase: (v) => v * 1.35582, fromBase: (v) => v / 1.35582 },
    "N·m": { toBase: (v) => v, fromBase: (v) => v }
  },
  temp: {
    base: "K",
    "°F": { toBase: (v) => ((v - 32) * 5) / 9 + 273.15, fromBase: (v) => (v - 273.15) * 9 / 5 + 32 },
    "°C": { toBase: (v) => v + 273.15, fromBase: (v) => v - 273.15 },
    "K": { toBase: (v) => v, fromBase: (v) => v }
  }
};

const drillCatalog = buildDrillCatalog();
const MATERIAL_FAMILIES = Object.entries(MATERIAL_LIBRARY).map(([id, data]) => ({
  id,
  label: data.label
}));

const DRILL_BUTTONS = {
  number: Object.keys(DRILL_DATA.numbers),
  letter: Object.keys(DRILL_DATA.letters),
  fraction: Object.keys(DRILL_DATA.fractions),
  metric: Array.from({ length: 39 }, (_, i) => (1 + i * 0.5).toFixed(1).replace(/\.0$/, ""))
};

function drillInputFromChoice(type, choice) {
  if (type === "number") return `#${choice}`;
  if (type === "letter") return choice;
  if (type === "fraction") return choice;
  if (type === "metric") return `${choice}mm`;
  return choice;
}

function getVariantOptions(familyId) {
  const family = MATERIAL_LIBRARY[familyId] || MATERIAL_LIBRARY.mild;
  return family.variants.map((v) => ({ id: v.id, label: v.name }));
}

function getVariant(familyId, variantId) {
  const family = MATERIAL_LIBRARY[familyId] || MATERIAL_LIBRARY.mild;
  return family.variants.find((v) => v.id === variantId) || family.variants[0];
}

function getAllVariants() {
  return Object.entries(MATERIAL_LIBRARY).flatMap(([familyId, family]) =>
    family.variants.map((v) => ({ ...v, family: family.label, familyId }))
  );
}

function buildDrillCatalog() {
  const items = [];
  Object.entries(DRILL_DATA.numbers).forEach(([k, v]) => {
    items.push({ label: `#${k}`, type: "number", inches: v });
  });
  Object.entries(DRILL_DATA.letters).forEach(([k, v]) => {
    items.push({ label: k, type: "letter", inches: v });
  });
  Object.entries(DRILL_DATA.fractions).forEach(([k, v]) => {
    items.push({ label: k, type: "fraction", inches: v });
  });
  items.forEach((item) => {
    item.mm = item.inches * 25.4;
  });
  return items.sort((a, b) => a.inches - b.inches);
}

function toFixedTrim(value, digits = 4) {
  if (value === null || value === undefined) return "—";
  const fixed = value.toFixed(digits);
  return fixed.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

const UNIT_PREF = {
  si: "si",
  imp: "imp"
};

const UNIT_CONVERTERS = {
  in: { toSI: (v) => v * 25.4, siUnit: "mm" },
  mm: { toImp: (v) => v / 25.4, impUnit: "in" },
  ft: { toSI: (v) => v * 0.3048, siUnit: "m" },
  m: { toImp: (v) => v / 0.3048, impUnit: "ft" },
  lb: { toSI: (v) => v * 0.45359237, siUnit: "kg" },
  kg: { toImp: (v) => v / 0.45359237, impUnit: "lb" },
  lbf: { toSI: (v) => v * 4.448221615, siUnit: "N" },
  N: { toImp: (v) => v / 4.448221615, impUnit: "lbf" },
  psi: { toSI: (v) => v * 0.006894757, siUnit: "MPa" },
  MPa: { toImp: (v) => v / 0.006894757, impUnit: "psi" },
  "ft·lbf": { toSI: (v) => v * 1.35582, siUnit: "N·m" },
  "in·lbf": { toSI: (v) => v * 0.113, siUnit: "N·m" },
  "N·m": { toImp: (v) => v / 1.35582, impUnit: "ft·lbf" },
  "ft/min": { toSI: (v) => v * 0.00508, siUnit: "m/s" },
  "m/min": { toImp: (v) => v * 3.28084 / 60, impUnit: "ft/s" },
  "ft/s": { toSI: (v) => v * 0.3048, siUnit: "m/s" },
  "m/s": { toImp: (v) => v / 0.3048, impUnit: "ft/s" },
  "mph": { toSI: (v) => v * 0.44704, siUnit: "m/s" },
  "kph": { toSI: (v) => v / 3.6, siUnit: "m/s" },
  "kn": { toSI: (v) => v * 0.514444, siUnit: "m/s" },
  "°F": { toSI: (v) => (v - 32) * 5 / 9, siUnit: "°C" },
  "°C": { toImp: (v) => (v * 9) / 5 + 32, impUnit: "°F" },
  "K": { toImp: (v) => (v - 273.15) * 9 / 5 + 32, impUnit: "°F" }
};

function formatDual(impValue, impUnit, siValue, siUnit, prefer = UNIT_PREF.imp, digitsImp = 3, digitsSi = 3) {
  const imp = `${toFixedTrim(impValue, digitsImp)} ${impUnit}`;
  const si = `${toFixedTrim(siValue, digitsSi)} ${siUnit}`;
  if (prefer === UNIT_PREF.si) {
    return { primary: si, secondary: imp };
  }
  return { primary: imp, secondary: si };
}

function formatFromUnit(value, unit, prefer = UNIT_PREF.imp, digitsImp = 3, digitsSi = 3) {
  const converter = UNIT_CONVERTERS[unit];
  if (!converter) {
    return { primary: `${toFixedTrim(value, digitsImp)} ${unit}`, secondary: "" };
  }
  if (converter.toSI) {
    const siValue = converter.toSI(value);
    return formatDual(value, unit, siValue, converter.siUnit, prefer, digitsImp, digitsSi);
  }
  const impValue = converter.toImp(value);
  return formatDual(impValue, converter.impUnit, value, unit, prefer, digitsImp, digitsSi);
}

function formatRpmDual(rpm, prefer = UNIT_PREF.imp) {
  const radPerSec = (rpm * 2 * Math.PI) / 60;
  return formatDual(rpm, "rpm", radPerSec, "rad/s", prefer, 0, 1);
}

function formatDualCell(impValue, impUnit, siValue, siUnit, prefer = UNIT_PREF.imp, digitsImp = 3, digitsSi = 3) {
  const { primary, secondary } = formatDual(impValue, impUnit, siValue, siUnit, prefer, digitsImp, digitsSi);
  return `<div class="cell-primary">${primary}</div><div class="cell-secondary">${secondary}</div>`;
}

function parseDrillInput(input) {
  if (!input) return null;
  const clean = input.trim().toLowerCase();
  if (clean.includes("mm")) {
    const num = parseFloat(clean.replace("mm", ""));
    if (!Number.isNaN(num)) {
      return { inches: num / 25.4, mm: num, label: `${num} mm`, type: "metric" };
    }
  }
  if (clean.startsWith("#")) {
    const key = clean.replace("#", "");
    if (DRILL_DATA.numbers[key]) {
      return { inches: DRILL_DATA.numbers[key], mm: DRILL_DATA.numbers[key] * 25.4, label: `#${key}`, type: "number" };
    }
  }
  if (/^[a-z]$/i.test(clean)) {
    const key = clean.toUpperCase();
    if (DRILL_DATA.letters[key]) {
      return { inches: DRILL_DATA.letters[key], mm: DRILL_DATA.letters[key] * 25.4, label: key, type: "letter" };
    }
  }
  if (/\d+\s*\/\s*\d+/.test(clean)) {
    const frac = clean.replace(/\s/g, "");
    if (DRILL_DATA.fractions[frac]) {
      return { inches: DRILL_DATA.fractions[frac], mm: DRILL_DATA.fractions[frac] * 25.4, label: frac, type: "fraction" };
    }
  }
  const val = parseFloat(clean);
  if (!Number.isNaN(val)) {
    return { inches: val, mm: val * 25.4, label: `${val} in`, type: "decimal" };
  }
  return null;
}

function findNearestDrill(inches) {
  let best = drillCatalog[0];
  let bestDelta = Math.abs(inches - best.inches);
  drillCatalog.forEach((item) => {
    const delta = Math.abs(inches - item.inches);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = item;
    }
  });
  return best;
}

function drillChoiceInches(type, choice) {
  if (type === "number") return DRILL_DATA.numbers[choice] || null;
  if (type === "letter") return DRILL_DATA.letters[choice] || null;
  if (type === "fraction") return DRILL_DATA.fractions[choice] || null;
  if (type === "metric") {
    const mm = parseFloat(choice);
    return Number.isNaN(mm) ? null : mm / 25.4;
  }
  return null;
}

function nearestDrillChoice(type, targetInches, fallback) {
  const choices = DRILL_BUTTONS[type] || [];
  if (!choices.length || targetInches === null || targetInches === undefined) {
    return choices[0] || fallback;
  }
  let best = choices[0];
  let bestDelta = Math.abs(targetInches - drillChoiceInches(type, best));
  choices.forEach((choice) => {
    const inches = drillChoiceInches(type, choice);
    if (inches === null) return;
    const delta = Math.abs(targetInches - inches);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = choice;
    }
  });
  return best;
}

function threadMajorInches(size) {
  const metric = METRIC_THREADS.find((t) => t.size === size);
  if (metric) return metric.major / 25.4;
  const inch = UNC_UNF_SIZES.find((s) => s.size === size);
  if (inch) return inch.major;
  return null;
}

function nearestThreadSize(targetIsMetric, currentSize, fallback) {
  const sizes = targetIsMetric ? METRIC_THREADS : UNC_UNF_SIZES;
  if (sizes.some((s) => s.size === currentSize)) return currentSize;

  const currentMajor = threadMajorInches(currentSize);
  if (currentMajor === null) return fallback;

  let best = sizes[0];
  let bestDelta = Math.abs(currentMajor - threadMajorInches(best.size));
  sizes.forEach((size) => {
    const major = threadMajorInches(size.size);
    const delta = Math.abs(currentMajor - major);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = size;
    }
  });
  return best.size;
}

function calcTapDrillInch(major, tpi, percent) {
  if (!major || !tpi) return null;
  const pitch = 1 / tpi;
  const base = major - pitch;
  return base * (percent / 75);
}

function calcTapDrillMetric(major, pitch, percent) {
  if (!major || !pitch) return null;
  const base = major - pitch;
  return base * (percent / 75);
}

function tensileStressAreaInch(major, tpi) {
  return 0.7854 * Math.pow(major - 0.9743 / tpi, 2);
}

function tensileStressAreaMetric(major, pitch) {
  return 0.7854 * Math.pow(major - 0.9382 * pitch, 2);
}

function calcTorqueInch({ major, tpi, grade, k, preloadPct }) {
  const area = tensileStressAreaInch(major, tpi);
  const proofPsi = getProofPsiInch(grade, major);
  const proofLoad = area * proofPsi;
  const clamp = proofLoad * (preloadPct / 100);
  const torqueInLb = k * clamp * major;
  return {
    area,
    proofPsi,
    proofLoad,
    clamp,
    torqueInLb,
    torqueFtLb: torqueInLb / 12
  };
}

function calcTorqueMetric({ major, pitch, propertyClass, k, preloadPct }) {
  const area = tensileStressAreaMetric(major, pitch);
  const proof = getProofMpaMetric(propertyClass);
  const proofLoad = area * proof;
  const clamp = proofLoad * (preloadPct / 100);
  const torqueNm = k * clamp * (major / 1000);
  return {
    area,
    proof,
    proofLoad,
    clamp,
    torqueNm,
    torqueFtLb: torqueNm / 1.35582
  };
}

function applyThreadFactor(torque, factor) {
  if (!factor || factor === 1) return torque;
  const scaled = { ...torque };
  if ("clamp" in scaled) scaled.clamp *= factor;
  if ("torqueInLb" in scaled) scaled.torqueInLb *= factor;
  if ("torqueFtLb" in scaled) scaled.torqueFtLb *= factor;
  if ("torqueNm" in scaled) scaled.torqueNm *= factor;
  return scaled;
}

function rpmFromSfm(sfm, diameterIn) {
  if (!sfm || !diameterIn) return 0;
  return (sfm * 3.82) / diameterIn;
}

function getProofPsiInch(grade, majorIn) {
  const info = J429_PROOF[grade];
  if (info) {
    return majorIn > info.cutoff ? info.psiLarge : info.psi;
  }
  const specialMpa = SPECIAL_PROOF_MPA[grade];
  if (specialMpa) {
    return specialMpa / 0.006894757;
  }
  const fallback = J429_PROOF.grade5;
  return majorIn > fallback.cutoff ? fallback.psiLarge : fallback.psi;
}

function getProofMpaMetric(propertyClass) {
  if (ISO_898_PROOF[propertyClass]) return ISO_898_PROOF[propertyClass];
  if (SPECIAL_PROOF_MPA[propertyClass]) return SPECIAL_PROOF_MPA[propertyClass];
  return 600;
}

function render() {
  renderRows();
  renderInputs();
  renderPanel();
}

function setState(next) {
  const targetCategory = next.category || state.category;
  if (next.mode) {
    if (!state.modeByCategory) state.modeByCategory = {};
    state.modeByCategory[targetCategory] = next.mode;
  }
  Object.assign(state, next);
  render();
}

function setLiveState(next) {
  Object.assign(state, next);
  renderPanel();
}

const ROW_SCROLL = {};
let ROW_KEYS_BEFORE_RENDER = new Set();

function renderRows() {
  const rows = document.getElementById("rows");
  const categoryRow = document.getElementById("categoryRow");
  ROW_KEYS_BEFORE_RENDER = new Set(Array.from(document.querySelectorAll(".row-buttons"))
    .map((buttons) => buttons.dataset.scrollKey)
    .filter(Boolean));
  rows.innerHTML = "";
  categoryRow.innerHTML = "";

  const rootRow = createRow("Category", TREE.root, state.category, (id) => {
    const defaults = state.modeByCategory || {
      drill: "convert",
      torque: "unc",
      speeds: "drill",
      materials: "list",
      convert: "length"
    };
    const nextMode = defaults[id] || "convert";
    setState({ category: id, mode: nextMode });
  }, "root:category");
  categoryRow.appendChild(rootRow);

  const options = TREE[state.category] || [];
  if (options.length) {
    const row = createRow("Mode", options, state.mode, (id) => {
      if (state.category === "torque") {
        const isMetric = id.startsWith("metric");
        const wasMetric = state.mode.startsWith("metric");
        setState({
          mode: id,
          torqueGrade: isMetric === wasMetric ? state.torqueGrade : "a2",
          torqueSize: nearestThreadSize(isMetric, state.torqueSize, isMetric ? "M10" : "1/2")
        });
        return;
      }
      if (state.category === "convert") {
        const units = CONVERSION_UNITS[id] || [];
        const from = units[0]?.id || state.convertFrom;
        const to = units[1]?.id || units[0]?.id || state.convertTo;
        setState({ mode: id, convertFrom: from, convertTo: to });
        return;
      }
      if (state.category === "speeds") {
        setState({ mode: id, speedFeed: id === "drill" ? 0.005 : 0.002 });
        return;
      }
      setState({ mode: id });
    }, `mode:${state.category}`);
    rows.appendChild(row);
  }

  if (state.category === "convert") {
    const units = CONVERSION_UNITS[state.mode] || [];
    const ids = units.map((u) => u.id);
    const next = {};
    if (!ids.includes(state.convertFrom) && units[0]) {
      next.convertFrom = units[0].id;
    }
    if (!ids.includes(state.convertTo)) {
      next.convertTo = units[1]?.id || units[0]?.id || state.convertTo;
    }
    if (Object.keys(next).length) {
      setState(next);
      return;
    }
    if (state.convertValue === null || state.convertValue === undefined || Number.isNaN(state.convertValue)) {
      setState({ convertValue: 1 });
      return;
    }
    const fromRow = createRow("From", units, state.convertFrom, (id) => setState({ convertFrom: id }), `convert:${state.mode}:from`);
    rows.appendChild(fromRow);
    const toRow = createRow("To", units, state.convertTo, (id) => setState({ convertTo: id }), `convert:${state.mode}:to`);
    rows.appendChild(toRow);
    const valueRow = document.createElement("div");
    valueRow.className = "row row-tight";
    valueRow.appendChild(createInputBlock("Value", "number", state.convertValue, (val, live) => {
      const next = { convertValue: Number(val) || 0 };
      if (live) {
        setLiveState(next);
      } else {
        setState(next);
      }
    }, "tight-input"));
    rows.appendChild(valueRow);
  }

  if (state.category === "drill" && state.mode === "tap") {
    const row = createRow("Thread System", [
      { id: "unc", label: "UNC" },
      { id: "unf", label: "UNF" },
      { id: "metric-coarse", label: "Metric Coarse" },
      { id: "metric-fine", label: "Metric Fine" }
    ], state.tapSystem, (id) => setState({
      tapSystem: id,
      tapSize: nearestThreadSize(id.startsWith("metric"), state.tapSize, id.startsWith("metric") ? "M6" : "#8")
    }), "tap:system");
    rows.appendChild(row);

    const sizeOptions = (state.tapSystem.startsWith("metric")
      ? METRIC_THREADS.map((t) => ({ id: t.size, label: t.size }))
      : UNC_UNF_SIZES.map((s) => ({ id: s.size, label: s.size }))
    );
    const sizeRow = createRow("Thread Size", sizeOptions, state.tapSize, (id) => setState({ tapSize: id }), `tap:size:${state.tapSystem}`);
    rows.appendChild(sizeRow);
  }

  if (state.category === "drill" && state.mode === "clearance") {
    const systemRow = createRow("System", [
      { id: "metric", label: "Metric ISO" },
      { id: "inch", label: "Inch (rule of thumb)" }
    ], state.clearanceSystem, (id) => setState({
      clearanceSystem: id,
      clearanceSize: nearestThreadSize(id === "metric", state.clearanceSize, id === "metric" ? "M6" : "1/2")
    }), "clearance:system");
    rows.appendChild(systemRow);

    const sizeOptions = (state.clearanceSystem === "metric" ? METRIC_CLEARANCE : UNC_UNF_SIZES)
      .map((s) => ({ id: s.size, label: s.size }));
    const sizeRow = createRow("Bolt Size", sizeOptions, state.clearanceSize, (id) => setState({ clearanceSize: id }), `clearance:size:${state.clearanceSystem}`);
    rows.appendChild(sizeRow);
  }

  if (state.category === "drill" && state.mode === "convert") {
    const typeRow = createRow("Type", [
      { id: "number", label: "Number" },
      { id: "letter", label: "Letter" },
      { id: "fraction", label: "Fraction" },
      { id: "metric", label: "Metric" }
    ], state.drillType, (id) => {
      const targetInches = drillChoiceInches(state.drillType, state.drillChoice);
      const nextChoice = nearestDrillChoice(id, targetInches, "7");
      setState({
        drillType: id,
        drillChoice: nextChoice,
        drillInput: drillInputFromChoice(id, nextChoice)
      });
    }, "drill:convert:type");
    rows.appendChild(typeRow);

    const choices = DRILL_BUTTONS[state.drillType] || [];
    const choiceRow = createRow(
      "Size",
      choices.map((c) => ({ id: c, label: state.drillType === "metric" ? `${c}mm` : c })),
      state.drillChoice,
      (id) => setState({
        drillChoice: id,
        drillInput: drillInputFromChoice(state.drillType, id)
      }),
      `drill:convert:size:${state.drillType}`
    );
    rows.appendChild(choiceRow);
  }

  if (state.category === "torque") {
    const isMetric = state.mode.startsWith("metric");
    if (!isMetric) {
      const sizeRow = createRow("Bolt Size", UNC_UNF_SIZES.map((s) => ({ id: s.size, label: s.size })), state.torqueSize, (id) => setState({ torqueSize: id }), "torque:inch:size");
      rows.appendChild(sizeRow);
      const matRow = createRow("Bolt Material", BOLT_MATERIALS.inch, state.torqueGrade, (id) => setState({ torqueGrade: id }), "torque:inch:material");
      rows.appendChild(matRow);
    }

    if (isMetric) {
      const sizeRow = createRow("Bolt Size", METRIC_THREADS.map((s) => ({ id: s.size, label: s.size })), state.torqueSize, (id) => setState({ torqueSize: id }), "torque:metric:size");
      rows.appendChild(sizeRow);
      const matRow = createRow("Bolt Material", BOLT_MATERIALS.metric, state.torqueGrade, (id) => setState({ torqueGrade: id }), "torque:metric:material");
      rows.appendChild(matRow);
    }

    const threadRow = createRow("Thread Material", THREAD_MATERIALS, state.torqueThreadMaterial, (id) => setState({ torqueThreadMaterial: id }), "torque:thread");
    rows.appendChild(threadRow);

    const kRow = createRow("Nut Factor", NUT_FACTORS.map((k) => ({ id: k.id, label: `${k.label} (K=${k.k})` })), state.torqueK, (id) => setState({ torqueK: id }), "torque:nutfactor");
    rows.appendChild(kRow);
  }

  if (state.category === "speeds") {
    const familyRow = createRow("Family", MATERIAL_FAMILIES, state.speedFamily, (id) => {
      const first = MATERIAL_LIBRARY[id]?.variants[0];
      setState({ speedFamily: id, speedVariant: first ? first.id : state.speedVariant });
    }, "speeds:family");
    rows.appendChild(familyRow);
    const variantRow = createRow("Variant", getVariantOptions(state.speedFamily), state.speedVariant, (id) => setState({ speedVariant: id }), `speeds:variant:${state.speedFamily}`);
    rows.appendChild(variantRow);
  }

  if (state.category === "materials") {
    const familyRow = createRow("Family", MATERIAL_FAMILIES, state.materialFamily, (id) => {
      const first = MATERIAL_LIBRARY[id]?.variants[0];
      setState({ materialFamily: id, materialVariant: first ? first.id : state.materialVariant });
    }, "materials:family");
    rows.appendChild(familyRow);
    const variantRow = createRow("Variant", getVariantOptions(state.materialFamily), state.materialVariant, (id) => setState({ materialVariant: id }), `materials:variant:${state.materialFamily}`);
    rows.appendChild(variantRow);
  }

  if (state.category === "convert") {
    // conversion rows are rendered as From/To unit buttons
  }
}

function createRow(title, options, active, onSelect, key = title) {
  const row = document.createElement("div");
  row.className = "row";
  const shouldCenterActive = !ROW_KEYS_BEFORE_RENDER.has(key);
  const header = document.createElement("div");
  header.className = "row-title";
  header.textContent = title;
  const buttons = document.createElement("div");
  buttons.className = "row-buttons";
  buttons.dataset.scrollKey = key;
  if (!(key in ROW_SCROLL)) ROW_SCROLL[key] = 0;
  buttons.addEventListener("scroll", () => {
    ROW_SCROLL[key] = buttons.scrollLeft;
  });

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "select" + (opt.id === active ? " active" : "");
    if (opt.sub) {
      btn.innerHTML = `<span class="btn-main">${opt.label}</span><span class="btn-sub">${opt.sub}</span>`;
    } else {
      btn.textContent = opt.label;
    }
    btn.addEventListener("click", () => onSelect(opt.id));
    buttons.appendChild(btn);
  });

  row.appendChild(header);
  row.appendChild(buttons);
  requestAnimationFrame(() => {
    if (shouldCenterActive) {
      centerButtonsOnActive(buttons);
    } else if (ROW_SCROLL[key] != null) {
      buttons.scrollLeft = ROW_SCROLL[key];
    }
  });
  return row;
}

function centerButtonsOnActive(buttons) {
  const active = buttons.querySelector("button.active");
  if (!active) return;
  const offset = active.offsetLeft - ((buttons.clientWidth - active.offsetWidth) / 2);
  buttons.scrollLeft = Math.max(0, offset);
  ROW_SCROLL[buttons.dataset.scrollKey] = buttons.scrollLeft;
}

function renderInputs() {
  const inputs = document.getElementById("inputs");
  inputs.innerHTML = "";

  if (state.category === "drill" && state.mode === "convert") {
    // no text input for drill convert
  }

  if (state.category === "drill" && state.mode === "tap") {
    // fixed at 75% thread
  }

  if (state.category === "torque") {
    // fixed at 75% proof load
  }

  if (state.category === "speeds") {
    const block = document.createElement("div");
    block.className = "input-block";
    block.innerHTML = `<label>Tool Diameter (in)</label>`;
    const row = document.createElement("div");
    row.className = "input-inline";
    const dia = document.createElement("input");
    dia.type = "number";
    dia.step = "0.001";
    dia.value = state.speedDia;
    dia.placeholder = "Dia (in)";
    dia.addEventListener("input", () => setLiveState({ speedDia: Number(dia.value) || 0.25 }));
    dia.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        setState({ speedDia: Number(dia.value) || 0.25 });
        dia.blur();
      }
    });
    dia.addEventListener("blur", () => setState({ speedDia: Number(dia.value) || 0.25 }));
    const feed = document.createElement("input");
    feed.type = "number";
    feed.step = "0.001";
    feed.value = state.speedFeed;
    feed.placeholder = state.mode === "drill" ? "Feed/rev" : "Feed/tooth";
    feed.addEventListener("input", () => setLiveState({ speedFeed: Number(feed.value) || 0.005 }));
    feed.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        setState({ speedFeed: Number(feed.value) || 0.005 });
        feed.blur();
      }
    });
    feed.addEventListener("blur", () => setState({ speedFeed: Number(feed.value) || 0.005 }));
    row.appendChild(dia);
    row.appendChild(feed);
    block.appendChild(row);
    inputs.appendChild(block);
  }

  if (state.category === "convert") {
    // conversion value input is rendered with the button rows
  }

  inputs.style.display = inputs.children.length ? "flex" : "none";
}

function createInputBlock(label, type, value, onInput, className = "") {
  const block = document.createElement("div");
  block.className = "input-block";
  if (className) block.classList.add(className);
  const lab = document.createElement("label");
  lab.textContent = label;
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  input.placeholder = label;
  input.addEventListener("focus", () => input.select());
  input.addEventListener("input", () => onInput(input.value, true));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      onInput(e.target.value, false);
      input.blur();
    }
  });
  input.addEventListener("blur", () => onInput(input.value, false));
  block.appendChild(lab);
  block.appendChild(input);
  return block;
}


function renderPanel() {
  const body = document.getElementById("panelBody");

  body.innerHTML = "";

  if (state.category === "drill") {
    body.appendChild(renderDrillPanel());
  }

  if (state.category === "torque") {
    body.appendChild(renderTorquePanel());
  }

  if (state.category === "speeds") {
    body.appendChild(renderSpeedPanel());
  }

  if (state.category === "materials") {
    body.appendChild(renderMaterialPanel());
  }

  if (state.category === "convert") {
    body.appendChild(renderConversionPanel());
  }
}

function renderDrillPanel() {
  const wrapper = document.createElement("div");
  wrapper.className = "panel-section";

  if (state.mode === "convert") {
    const parsed = parseDrillInput(state.drillInput);
    const grid = document.createElement("div");
    grid.className = "result-grid";
    const info = parsed || { label: "#7", inches: DRILL_DATA.numbers["7"], mm: DRILL_DATA.numbers["7"] * 25.4 };
    const prefer = info.type === "metric" ? UNIT_PREF.si : UNIT_PREF.imp;

    grid.appendChild(kpi("Input", info.label));
    grid.appendChild(kpi("Diameter", formatDual(info.inches, "in", info.mm, "mm", prefer, 4, 3)));
    wrapper.appendChild(grid);

    wrapper.appendChild(renderDrillTable());
  }

  if (state.mode === "tap") {
    const selection = state.tapSystem.startsWith("metric")
      ? METRIC_THREADS.find((t) => t.size === state.tapSize)
      : UNC_UNF_SIZES.find((s) => s.size === state.tapSize);

    let pitch = null;
    if (selection) {
      if (state.tapSystem === "metric-coarse") pitch = selection.coarse;
      if (state.tapSystem === "metric-fine") pitch = selection.fine[0] || selection.coarse;
    }

    let drill = null;
    let drillLabel = "";
    if (selection) {
      if (state.tapSystem.startsWith("metric")) {
        const tapData = METRIC_TAP_DRILLS[selection.size];
        const drillMm = state.tapSystem === "metric-fine" ? (tapData?.fine || tapData?.coarse) : tapData?.coarse;
        if (drillMm) {
          drill = drillMm;
          drillLabel = `${toFixedTrim(drillMm, 2)} mm`;
        }
      } else {
        const tpi = state.tapSystem === "unc" ? selection.unc : selection.unf;
        const key = `${selection.size}-${tpi}`;
        const drillCode = state.tapSystem === "unc" ? UNC_TAP_DRILLS[key] : UNF_TAP_DRILLS[key];
        if (drillCode) {
          drillLabel = drillCode;
          const inches = DRILL_DATA.numbers[drillCode.replace("#", "")]
            || DRILL_DATA.letters[drillCode]
            || DRILL_DATA.fractions[drillCode.replace(" ", "")]
            || null;
          drill = inches;
        }
      }
    }

    const nearest = drill ? findNearestDrill(state.tapSystem.startsWith("metric") ? drill / 25.4 : drill) : null;

    const grid = document.createElement("div");
    grid.className = "result-grid";
    grid.appendChild(kpi("Thread", `${state.tapSize} ${state.tapSystem.toUpperCase()}`));

    if (state.tapSystem.startsWith("metric")) {
      const tpi = pitch ? 25.4 / pitch : null;
      grid.appendChild(kpi("Pitch", pitch ? formatDual(tpi, "TPI", pitch, "mm", UNIT_PREF.si, 1, 2) : "—"));
      if (drill) {
        const drillIn = drill / 25.4;
        grid.appendChild(kpi("Tap Drill", formatDual(drillIn, "in", drill, "mm", UNIT_PREF.si, 4, 2)));
      } else {
        grid.appendChild(kpi("Tap Drill", "—"));
      }
    } else {
      const tpi = selection ? (state.tapSystem === "unc" ? selection.unc : selection.unf) : null;
      const pitch = tpi ? 25.4 / tpi : null;
      grid.appendChild(kpi("Pitch", tpi ? formatDual(tpi, "TPI", pitch, "mm", UNIT_PREF.imp, 1, 2) : "—"));
      if (drill) {
        const primary = drillLabel ? `${drillLabel} (${toFixedTrim(drill, 4)} in)` : `${toFixedTrim(drill, 4)} in`;
        grid.appendChild(kpi("Tap Drill", { primary, secondary: `${toFixedTrim(drill * 25.4, 2)} mm` }));
      } else {
        grid.appendChild(kpi("Tap Drill", "—"));
      }
    }

    wrapper.appendChild(grid);
    wrapper.appendChild(renderTapTable());
  }

  if (state.mode === "clearance") {
    if (state.clearanceSystem === "metric") {
      const size = METRIC_CLEARANCE.find((s) => s.size === state.clearanceSize) || METRIC_CLEARANCE[5];
      const grid = document.createElement("div");
      grid.className = "result-grid";
      grid.appendChild(kpi("Bolt", size.size));
      grid.appendChild(kpi("Close", formatDual(size.close / 25.4, "in", size.close, "mm", UNIT_PREF.si, 4, 2)));
      grid.appendChild(kpi("Normal", formatDual(size.normal / 25.4, "in", size.normal, "mm", UNIT_PREF.si, 4, 2)));
      grid.appendChild(kpi("Loose", formatDual(size.loose / 25.4, "in", size.loose, "mm", UNIT_PREF.si, 4, 2)));
      wrapper.appendChild(grid);
    } else {
      const size = UNC_UNF_SIZES.find((s) => s.size === state.clearanceSize) || UNC_UNF_SIZES[10];
      const major = size.major;
      const close = major + 1 / 64;
      const normal = major + 1 / 32;
      const loose = major + 1 / 16;
      const grid = document.createElement("div");
      grid.className = "result-grid";
      grid.appendChild(kpi("Bolt", formatDual(major, "in", major * 25.4, "mm", UNIT_PREF.imp, 4, 2)));
      grid.appendChild(kpi("Close", formatDual(close, "in", close * 25.4, "mm", UNIT_PREF.imp, 4, 2)));
      grid.appendChild(kpi("Normal", formatDual(normal, "in", normal * 25.4, "mm", UNIT_PREF.imp, 4, 2)));
      grid.appendChild(kpi("Loose", formatDual(loose, "in", loose * 25.4, "mm", UNIT_PREF.imp, 4, 2)));
      wrapper.appendChild(grid);
    }

    wrapper.appendChild(renderClearanceTable());
  }

  return wrapper;
}

function renderTorquePanel() {
  const wrapper = document.createElement("div");
  wrapper.className = "panel-section";
  const grid = document.createElement("div");
  grid.className = "result-grid";

  const k = NUT_FACTORS.find((n) => n.id === state.torqueK)?.k || 0.2;
  const isMetric = state.mode.startsWith("metric");
  const threadFactor = THREAD_MATERIAL_FACTORS[state.torqueThreadMaterial] ?? 1;

  if (!isMetric) {
    const size = UNC_UNF_SIZES.find((s) => s.size === state.torqueSize) || UNC_UNF_SIZES[14];
    const tpi = state.mode === "unf" ? size.unf : size.unc;
    const torque = applyThreadFactor(calcTorqueInch({
      major: size.major,
      tpi,
      grade: state.torqueGrade,
      k,
      preloadPct: 75
    }), threadFactor);

    grid.appendChild(kpi("Bolt", `${size.size}-${tpi}`));
    const boltLabel = BOLT_MATERIALS.inch.find((b) => b.id === state.torqueGrade)?.label || state.torqueGrade;
    grid.appendChild(kpi("Bolt Material", boltLabel));
    const threadLabel = THREAD_MATERIALS.find((t) => t.id === state.torqueThreadMaterial)?.label || state.torqueThreadMaterial;
    grid.appendChild(kpi("Thread Material", threadLabel));
    grid.appendChild(kpi("Proof", formatDual(torque.proofPsi, "psi", torque.proofPsi * 0.006894757, "MPa", UNIT_PREF.imp, 0, 1)));
    grid.appendChild(kpi("Clamp", formatDual(torque.clamp, "lbf", torque.clamp * 4.448221615, "N", UNIT_PREF.imp, 0, 0)));
    grid.appendChild(kpi("Torque", formatDual(torque.torqueFtLb, "ft·lbf", torque.torqueFtLb * 1.35582, "N·m", UNIT_PREF.imp, 1, 1)));
    grid.appendChild(kpi("Torque", formatDual(torque.torqueInLb, "in·lbf", torque.torqueInLb * 0.113, "N·m", UNIT_PREF.imp, 0, 1)));
    grid.appendChild(kpi("Tensile area", formatDual(torque.area, "in²", torque.area * 645.16, "mm²", UNIT_PREF.imp, 4, 1)));
  } else {
    const size = METRIC_THREADS.find((s) => s.size === state.torqueSize) || METRIC_THREADS[14];
    const pitch = state.mode === "metric-fine" ? (size.fine[0] || size.coarse) : size.coarse;
    const torque = applyThreadFactor(calcTorqueMetric({
      major: size.major,
      pitch,
      propertyClass: state.torqueGrade,
      k,
      preloadPct: 75
    }), threadFactor);

    grid.appendChild(kpi("Bolt", `${size.size}x${pitch}`));
    const boltLabel = BOLT_MATERIALS.metric.find((b) => b.id === state.torqueGrade)?.label || state.torqueGrade;
    grid.appendChild(kpi("Bolt Material", boltLabel));
    const threadLabel = THREAD_MATERIALS.find((t) => t.id === state.torqueThreadMaterial)?.label || state.torqueThreadMaterial;
    grid.appendChild(kpi("Thread Material", threadLabel));
    grid.appendChild(kpi("Proof", formatDual(torque.proof / 0.006894757, "psi", torque.proof, "MPa", UNIT_PREF.si, 0, 0)));
    grid.appendChild(kpi("Clamp", formatDual(torque.clamp / 4.448221615, "lbf", torque.clamp, "N", UNIT_PREF.si, 0, 0)));
    grid.appendChild(kpi("Torque", formatDual(torque.torqueNm / 1.35582, "ft·lbf", torque.torqueNm, "N·m", UNIT_PREF.si, 1, 1)));
    grid.appendChild(kpi("Torque", formatDual(torque.torqueFtLb, "ft·lbf", torque.torqueFtLb * 1.35582, "N·m", UNIT_PREF.si, 1, 1)));
    grid.appendChild(kpi("Tensile area", formatDual(torque.area / 645.16, "in²", torque.area, "mm²", UNIT_PREF.si, 4, 1)));
  }

  wrapper.appendChild(grid);

  return wrapper;
}

function renderSpeedPanel() {
  const wrapper = document.createElement("div");
  wrapper.className = "panel-section";
  const variant = getVariant(state.speedFamily, state.speedVariant);
  const sfm = (variant.sfm[0] + variant.sfm[1]) / 2;
  const rpm = rpmFromSfm(sfm, state.speedDia);
  const feed = rpm * state.speedFeed;
  const prefer = UNIT_PREF.imp;
  const sfmMin = variant.sfm[0];
  const sfmMax = variant.sfm[1];
  const mpmMin = sfmMin * 0.3048;
  const mpmMax = sfmMax * 0.3048;

  const grid = document.createElement("div");
  grid.className = "result-grid";
  grid.appendChild(kpi("Material", `${MATERIAL_LIBRARY[state.speedFamily].label} ${variant.name}`));
  grid.appendChild(kpi("Cut speed", {
    primary: `${toFixedTrim(sfmMin, 0)}–${toFixedTrim(sfmMax, 0)} SFM`,
    secondary: `${toFixedTrim(mpmMin, 0)}–${toFixedTrim(mpmMax, 0)} m/min`
  }));
  grid.appendChild(kpi("RPM", formatRpmDual(rpm, prefer)));
  grid.appendChild(kpi("Feed rate", formatDual(feed, "IPM", feed * 25.4, "mm/min", prefer, 2, 1)));
  grid.appendChild(kpi("Diameter", formatDual(state.speedDia, "in", state.speedDia * 25.4, "mm", prefer, 3, 2)));
  grid.appendChild(kpi(state.mode === "drill" ? "Feed / rev" : "Feed / tooth", formatDual(state.speedFeed, state.mode === "drill" ? "in/rev" : "in/tooth", state.speedFeed * 25.4, state.mode === "drill" ? "mm/rev" : "mm/tooth", prefer, 4, 3)));
  wrapper.appendChild(grid);

  return wrapper;
}

function renderMaterialPanel() {
  const wrapper = document.createElement("div");
  wrapper.className = "panel-section";
  const mat = getVariant(state.materialFamily, state.materialVariant);
  const prefer = UNIT_PREF.imp;
  const densityLbIn = mat.density * 0.0361273;
  const modulusMsi = mat.modulus * 0.1450377377;
  const yieldKsi = mat.yield * 0.1450377377;
  const tensileKsi = mat.tensile * 0.1450377377;

  const grid = document.createElement("div");
  grid.className = "result-grid";
  grid.appendChild(kpi("Material", `${MATERIAL_LIBRARY[state.materialFamily].label} ${mat.name}`));
  grid.appendChild(kpi("Density", formatDual(densityLbIn, "lb/in³", mat.density, "g/cm³", prefer, 4, 3)));
  grid.appendChild(kpi("Modulus", formatDual(modulusMsi, "Msi", mat.modulus, "GPa", prefer, 2, 1)));
  grid.appendChild(kpi("Yield", formatDual(yieldKsi, "ksi", mat.yield, "MPa", prefer, 1, 0)));
  grid.appendChild(kpi("Tensile", formatDual(tensileKsi, "ksi", mat.tensile, "MPa", prefer, 1, 0)));
  wrapper.appendChild(grid);

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Family</th>
        <th>Material</th>
        <th>Density (g/cm³)</th>
        <th>Modulus (GPa)</th>
        <th>Yield (MPa)</th>
        <th>Tensile (MPa)</th>
      </tr>
    </thead>
    <tbody>
      ${getAllVariants().map((m) => `
        <tr class="${m.id === state.materialVariant ? "row-highlight" : ""}">
          <td>${m.family}</td>
          <td>${m.name}</td>
          <td class="table-cell">${formatDualCell(m.density * 0.0361273, "lb/in³", m.density, "g/cm³", UNIT_PREF.imp, 4, 3)}</td>
          <td class="table-cell">${formatDualCell(m.modulus * 0.1450377377, "Msi", m.modulus, "GPa", UNIT_PREF.imp, 2, 1)}</td>
          <td class="table-cell">${formatDualCell(m.yield * 0.1450377377, "ksi", m.yield, "MPa", UNIT_PREF.imp, 1, 0)}</td>
          <td class="table-cell">${formatDualCell(m.tensile * 0.1450377377, "ksi", m.tensile, "MPa", UNIT_PREF.imp, 1, 0)}</td>
        </tr>`).join("")}
    </tbody>`;
  enforceSingleHighlight(table);
  const scroll = document.createElement("div");
  scroll.className = "table-scroll";
  scroll.appendChild(table);
  requestAnimationFrame(() => centerScrollOnHighlight(scroll));
  wrapper.appendChild(scroll);

  return wrapper;
}

function renderConversionPanel() {
  const wrapper = document.createElement("div");
  wrapper.className = "panel-section";
  const type = state.mode;
  const funcs = CONVERSION_FUNCS[type];
  const fromUnit = state.convertFrom;
  const toUnit = state.convertTo;
  const value = state.convertValue;
  const result = funcs && funcs[fromUnit] && funcs[toUnit]
    ? funcs[toUnit].fromBase(funcs[fromUnit].toBase(value))
    : 0;
  const prefer = UNIT_CONVERTERS[fromUnit]?.toSI ? UNIT_PREF.imp : UNIT_PREF.si;
  const preferTo = UNIT_CONVERTERS[toUnit]?.toSI ? UNIT_PREF.imp : UNIT_PREF.si;

  const grid = document.createElement("div");
  grid.className = "result-grid";
  grid.appendChild(kpi("From", formatFromUnit(value, fromUnit, prefer, 4, 4)));
  grid.appendChild(kpi("To", formatFromUnit(result, toUnit, preferTo, 4, 4)));
  grid.appendChild(kpi("Base", funcs ? funcs.base : "—"));
  wrapper.appendChild(grid);

  const table = document.createElement("table");
  const units = CONVERSION_UNITS[type] || [];
  const base = funcs ? funcs.base : "";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Unit</th>
        <th>To ${base || "base"}</th>
      </tr>
    </thead>
    <tbody>
      ${units.map((u) => `
        <tr class="${u.id === state.convertTo ? "row-highlight" : ""}">
          <td>${u.label}</td>
          <td class="table-cell">${funcs && funcs[u.id] ? toFixedTrim(funcs[u.id].toBase(1), 6) : "formula"}</td>
        </tr>`).join("")}
    </tbody>`;
  enforceSingleHighlight(table);
  const scroll = document.createElement("div");
  scroll.className = "table-scroll";
  scroll.appendChild(table);
  requestAnimationFrame(() => centerScrollOnHighlight(scroll));
  wrapper.appendChild(scroll);

  return wrapper;
}

function renderDrillTable() {
  const table = document.createElement("table");
  const parsed = parseDrillInput(state.drillInput);
  const selected = parsed && parsed.type !== "metric"
    ? findNearestDrill(parsed.inches)
    : (!parsed ? findNearestDrill(DRILL_DATA.numbers["7"]) : null);
  const metricRows = DRILL_BUTTONS.metric.map((m) => {
    const mm = parseFloat(m);
    const inches = mm / 25.4;
    return {
      label: `${m} mm`,
      inches,
      mm,
      type: "metric"
    };
  });
  let selectedMetricLabel = "";
  if (parsed && parsed.type === "metric") {
    let nearest = metricRows[0];
    let best = Math.abs(parsed.mm - nearest.mm);
    metricRows.forEach((row) => {
      const delta = Math.abs(parsed.mm - row.mm);
      if (delta < best) {
        best = delta;
        nearest = row;
      }
    });
    selectedMetricLabel = nearest.label;
  }
  const allRows = [...drillCatalog, ...metricRows].sort((a, b) => a.inches - b.inches);
  const rows = allRows.map((d) => `
    <tr class="${(selected && d.label === selected.label) || d.label === selectedMetricLabel ? "row-highlight" : ""}">
      <td>${d.label}</td>
      <td class="table-cell">${toFixedTrim(d.inches, 4)}</td>
      <td class="table-cell">${toFixedTrim(d.mm, 2)}</td>
    </tr>`).join("");

  table.innerHTML = `
    <thead>
      <tr>
        <th>Drill</th>
        <th>Inch</th>
        <th>mm</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>`;
  enforceSingleHighlight(table);
  const scroll = document.createElement("div");
  scroll.className = "table-scroll";
  scroll.appendChild(table);
  requestAnimationFrame(() => centerScrollOnHighlight(scroll));
  return scroll;
}

function renderTapTable() {
  const table = document.createElement("table");
  if (state.tapSystem.startsWith("metric")) {
    const rows = METRIC_THREADS.map((t) => {
      const pitch = state.tapSystem === "metric-fine" ? (t.fine[0] || t.coarse) : t.coarse;
      const drillMm = state.tapSystem === "metric-fine"
        ? (METRIC_TAP_DRILLS[t.size]?.fine || METRIC_TAP_DRILLS[t.size]?.coarse)
        : METRIC_TAP_DRILLS[t.size]?.coarse;
      const drillIn = drillMm ? drillMm / 25.4 : null;
      const label = `${t.size} x ${pitch}`;
      const highlight = t.size === state.tapSize;
      return `
        <tr class="${highlight ? "row-highlight" : ""}">
          <td>${label}</td>
          <td class="table-cell">${drillMm ? `${toFixedTrim(drillMm, 2)} mm` : "—"}</td>
          <td class="table-cell">${drillIn ? toFixedTrim(drillIn, 4) : "—"}</td>
          <td class="table-cell">${drillMm ? toFixedTrim(drillMm, 2) : "—"}</td>
        </tr>`;
    }).join("");

    table.innerHTML = `
      <thead>
        <tr>
          <th>Tap</th>
          <th>Drill</th>
          <th>Inch</th>
          <th>mm</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>`;
  } else {
    const rows = UNC_UNF_SIZES.map((s) => {
      const tpi = state.tapSystem === "unc" ? s.unc : s.unf;
      const key = `${s.size}-${tpi}`;
      const drillCode = state.tapSystem === "unc" ? UNC_TAP_DRILLS[key] : UNF_TAP_DRILLS[key];
      const drill = drillCode
        ? (DRILL_DATA.numbers[drillCode.replace("#", "")] || DRILL_DATA.letters[drillCode] || DRILL_DATA.fractions[drillCode.replace(" ", "")])
        : null;
      const label = `${s.size}-${tpi}`;
      const highlight = s.size === state.tapSize;
      return `
        <tr class="${highlight ? "row-highlight" : ""}">
          <td>${label}</td>
          <td class="table-cell">${drillCode || "—"}</td>
          <td class="table-cell">${drill ? toFixedTrim(drill, 4) : "—"}</td>
          <td class="table-cell">${drill ? toFixedTrim(drill * 25.4, 2) : "—"}</td>
        </tr>`;
    }).join("");

    table.innerHTML = `
      <thead>
        <tr>
          <th>Tap</th>
          <th>Drill</th>
          <th>Inch</th>
          <th>mm</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>`;
  }
  enforceSingleHighlight(table);
  const scroll = document.createElement("div");
  scroll.className = "table-scroll";
  scroll.appendChild(table);
  requestAnimationFrame(() => centerScrollOnHighlight(scroll));
  return scroll;
}

function renderClearanceTable() {
  const table = document.createElement("table");
  if (state.clearanceSystem === "metric") {
    table.innerHTML = `
      <thead>
        <tr>
          <th>Size</th>
          <th>Close</th>
          <th>Normal</th>
          <th>Loose</th>
        </tr>
      </thead>
      <tbody>
        ${METRIC_CLEARANCE.map((s) => `
          <tr class="${s.size === state.clearanceSize ? "row-highlight" : ""}">
            <td>${s.size}</td>
            <td class="table-cell">${s.close}</td>
            <td class="table-cell">${s.normal}</td>
            <td class="table-cell">${s.loose}</td>
          </tr>`).join("")}
      </tbody>`;
  } else {
    table.innerHTML = `
      <thead>
        <tr>
          <th>Size</th>
          <th>Close</th>
          <th>Normal</th>
          <th>Loose</th>
        </tr>
      </thead>
      <tbody>
        ${UNC_UNF_SIZES.map((s) => {
          const close = s.major + 1 / 64;
          const normal = s.major + 1 / 32;
          const loose = s.major + 1 / 16;
          return `
            <tr class="${s.size === state.clearanceSize ? "row-highlight" : ""}">
              <td>${s.size}</td>
              <td class="table-cell">${toFixedTrim(close, 4)}</td>
              <td class="table-cell">${toFixedTrim(normal, 4)}</td>
              <td class="table-cell">${toFixedTrim(loose, 4)}</td>
            </tr>`;
        }).join("")}
      </tbody>`;
  }
  enforceSingleHighlight(table);
  const scroll = document.createElement("div");
  scroll.className = "table-scroll";
  scroll.appendChild(table);
  requestAnimationFrame(() => centerScrollOnHighlight(scroll));
  return scroll;
}

function kpi(label, value) {
  const box = document.createElement("div");
  box.className = "kpi" + (label === "Material" ? " material" : "");
  if (value && typeof value === "object" && "primary" in value) {
    const secondary = value.secondary ? `<div class="kpi-value-secondary">${value.secondary}</div>` : "";
    box.innerHTML = `<div class="kpi-label">${label}</div><div class="kpi-value-primary">${value.primary}</div>${secondary}`;
    return box;
  }
  box.innerHTML = `<div class="kpi-label">${label}</div><div class="kpi-value-primary">${value}</div>`;
  return box;
}

function enforceSingleHighlight(table) {
  if (!table) return;
  const rows = Array.from(table.querySelectorAll("tbody tr.row-highlight"));
  if (rows.length <= 1) return;
  rows.slice(1).forEach((row) => row.classList.remove("row-highlight"));
}

function centerScrollOnHighlight(scroll) {
  const row = scroll.querySelector(".row-highlight");
  if (!row) return;
  const rowRect = row.getBoundingClientRect();
  const scrollRect = scroll.getBoundingClientRect();
  const offset = row.offsetTop - (scrollRect.height / 2 - rowRect.height / 2);
  scroll.scrollTop = Math.max(0, offset);
}


render();

window.__app = {
  state,
  setState,
  render,
  formatFromUnit,
  formatDual,
  UNIT_PREF,
  UNIT_CONVERTERS,
  CONVERSION_FUNCS,
  CONVERSION_UNITS,
  toFixedTrim
};
