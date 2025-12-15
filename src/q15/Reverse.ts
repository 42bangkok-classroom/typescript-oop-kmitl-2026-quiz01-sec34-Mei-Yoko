
const input = process.argv[2];

if (input) {
    let reversed = '';
    
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    
    console.log(reversed);
} else {
    console.log('Please provide  string to reverse');
}
