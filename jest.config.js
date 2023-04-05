/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  rootDir: 'src',
  testEnvironment: 'node',
  verbose: true,
};