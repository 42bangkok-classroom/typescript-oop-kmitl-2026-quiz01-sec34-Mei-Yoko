const args =process.argv[2];

if (args.length === 0){
    console.log('Provide Number');
}
else {
    const input = args[0];
    const reversed = reverseString(input);
    console.log(reversed);
}