/**
 * OS Module
 * Provides different properties and methods to interact with OS
 */
const os = require('os') // notice that we are not using ./ this indicates we are looking for the build-in modules

/**
 * info about current user
 * {
 * uid: -1,
 *  gid: -1,
 *  username: 'hitesh.i',
 *  homedir: 'C:\\Users\\hitesh.i',
 *  shell: null
 * }
 */
const currentUser = os.userInfo()
console.log(currentUser);

/**
 * how long has the computer is been running (in seconds)
 * 303846
 */
console.log(`The system updatime is ${os.uptime()}`);

/**
 * setting methods in the object as values
 */
const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);