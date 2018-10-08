const fs = require('fs');
const path = require('path');

const areas = require('./areas.json').reduce(
  (a, x) => ({
    ...a,
    [x.key]: x.name,
  }),
  {},
);
const districts = require('./districts.json').reduce(
  (a, x) => ({
    ...a,
    [x.key]: x.name,
  }),
  {},
);

const ex = { areas, districts };
const js = 'module.exports=' + JSON.stringify(ex);

fs.writeFileSync(path.join(__dirname, '../data.js'), js);
