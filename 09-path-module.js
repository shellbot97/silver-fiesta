const path = require('path')

/**
 * platform specific separator
 */
console.log(path.sep);

/**
 * joins a sequence of path segments using platform specific separator
 * also returns a normalized resulting path
 */
const filePath = path.join('/subFolder', 'text.txt')
console.log(filePath);

/**
 * last portion of a path
 */
const base = path.basename(filePath);
console.log(base);

/**
 * returns an absolute path
 */
const absolute = path.resolve(__dirname, 'subFolder', 'test.txt');
console.log(absolute);