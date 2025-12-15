const color = process.argv[2];

const colorLower = color.toLowerCase();

let light: string;

if (colorLower === 'red') {
    light = 'Stop';
} else if (colorLower === 'yellow') {
    light = 'Caution';
} else if (colorLower === 'green') {
    light = 'Go';
} else {
    light = 'Unknown';
}

console.log(light);
