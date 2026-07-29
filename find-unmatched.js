const fs = require('fs');
const content = fs.readFileSync('custom-cart-sync.js', 'utf8');

const stack = [];
let line = 1;
let col = 1;

let inString = false;
let stringChar = '';
let inSingleComment = false;
let inMultiComment = false;

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  const nextChar = content[i+1];
  
  if (char === '\n') {
    line++;
    col = 1;
    inSingleComment = false;
    continue;
  } else {
    col++;
  }
  
  if (inSingleComment) continue;
  if (inMultiComment) {
    if (char === '*' && nextChar === '/') {
      inMultiComment = false;
      i++;
      col++;
    }
    continue;
  }
  
  if (!inString && char === '/' && nextChar === '/') {
    inSingleComment = true;
    i++;
    col++;
    continue;
  }
  
  if (!inString && char === '/' && nextChar === '*') {
    inMultiComment = true;
    i++;
    col++;
    continue;
  }
  
  if (inString) {
    if (char === '\\') {
      i++;
      col++;
    } else if (char === stringChar) {
      inString = false;
    }
    continue;
  }
  
  if (char === '"' || char === "'" || char === '`') {
    inString = true;
    stringChar = char;
    continue;
  }
  
  if (char === '(' || char === '{' || char === '[') {
    stack.push({ char, line, col });
  } else if (char === ')' || char === '}' || char === ']') {
    const last = stack.pop();
    if (!last) {
      console.log(`Unmatched closing ${char} at line ${line}:${col}`);
    } else {
      let expected = '';
      if (last.char === '(') expected = ')';
      if (last.char === '{') expected = '}';
      if (last.char === '[') expected = ']';
      if (expected !== char) {
        console.log(`Mismatched closing ${char} at line ${line}:${col}, expected ${expected} from line ${last.line}:${last.col}`);
        break; // stop on first error
      }
    }
  }
}

if (stack.length > 0) {
  console.log('Unclosed tokens:');
  stack.forEach(s => console.log(`${s.char} at line ${s.line}:${s.col}`));
} else {
  console.log('All matched!');
}
