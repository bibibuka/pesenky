import fs from 'fs'; const lines = fs.readFileSync('src/index.css', 'utf-8').split('\n'); lines.forEach((l, i) => { if (l.match(/^\s*[^{}]+\s+[^{}]*\s*:/)) console.log(i + 1, l); })
