const fs = require('fs');
const path = require('path');
const readline = require('readline');
const fullPaht = path.join(__dirname, 'outtext.txt');
const writeStream = fs.createWriteStream(fullPaht);
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(
  'Welcome! Enter the text to write to the file. To exit, type "exit" or press Ctrl + C.',
);
readlineInterface.on('line', (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    console.log('It is all written down. Goodbye!');
    readlineInterface.close();
  } else {
    writeStream.write(input + '\n');
    console.log(
      'The text is recorded! Enter the following text or "exit" to exit.',
    );
  }
});
readlineInterface.on('SIGINT', () => {
  console.log('It is all written down. Goodbye!');
  readlineInterface.close();
});
readlineInterface.on('close', () => {
  writeStream.end();
  process.exit();
});
