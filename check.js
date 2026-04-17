const fs = require('fs'); const lines = fs.readFileSync('src/index.css', 'utf-8').split('\n'); lines.forEach((l, i) => { if (l.includes(':') && !l.match(/[a-zA-Z-]/)) console.log(i + 1, l); })
