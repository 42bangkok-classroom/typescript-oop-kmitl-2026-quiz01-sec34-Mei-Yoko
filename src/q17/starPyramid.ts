
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: ts-node starPyramid.ts <size>");
    process.exit(1);
}

const size = parseInt(args[0]);

if (isNaN(size) || size <= 0) {
    console.log("Error: Size must be a positive integer");
    process.exit(1);
}


for (let i = 1; i <= size; i++) {
    
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}
