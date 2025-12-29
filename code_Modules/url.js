const url = require('url');

const result = url.parse('https://example.com/test?user=aswathi', true);
console.log(result.hostname);
console.log(result.pathname);
console.log(result.href);
console.log(result.search);
console.log(result.query.user);
console.log(result.protocol);