
const temperature = Number(process.argv[2]);

if (isNaN(temperature)) {
    console.log("Invalid temperature input");
    process.exit(1);
}

if (temperature > 30) {
    console.log("Hot");
} else {
    console.log("Normal");
}
