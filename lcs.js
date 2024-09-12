let a = process.argv.slice(2);
if (!a.length) return console.log('');
let s = a[0], l = s.length, r = '';
for (let i = 0; i < l; i++) 
  for (let j = i + 1; j <= l; j++) 
    if (a.every(e => e.includes(s.slice(i, j))) && j - i > r.length) 
      r = s.slice(i, j);
console.log(r);