// const targetPath = require.resolve('./target.js');

// console.log(require.cache[targetPath]);
// const target = require('./target');
// console.log(require.cache[targetPath]);

// target.example();

const targetPath = require.resolve('./target.js');
require.cache[targetPath] = {
  loaded: true,
  id: targetPath,
  exports: {
    example: () => console.log("I'm mocked"),
  },
};

const target = require('./target');
console.log(require.cache[targetPath]);

target.example();