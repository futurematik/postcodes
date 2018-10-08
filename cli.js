let lib = require('./index');

let arg = process.argv[2];

if (/^[A-Za-z]+$/.test(arg)) {
  console.log('Looking up area ' + arg);
  console.log(lib.getPostcodeArea(arg));
} else {
  console.log('Looking up district ' + arg);
  console.log(lib.getPostcodeDistrict(arg));
}
