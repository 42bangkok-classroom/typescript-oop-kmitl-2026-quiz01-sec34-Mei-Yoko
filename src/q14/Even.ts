const input = process.argv[2];

if (input === undefined || isNaN(Number(input))) {
    process.exit(0);
}

const n = Number(input);

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
