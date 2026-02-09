// Script to find duplicate code sections
const fs = require('fs');
const content = fs.readFileSync('c:\\FeB\\valentine.html', 'utf8');
const lines = content.split('\n');

console.log('Total lines:', lines.length);
console.log('Line 668:', lines[667]);
console.log('Line 669:', lines[668]);
console.log('Line 1163:', lines[1162]);
console.log('Line 1164:', lines[1163]);
