/**
 * OS Module
 * Provides different properties and methods to interact with OS
 */
const os = require('os') // notice that we are not using ./ this indicates we are looking for the build-in modules

/**
 * info about current user
 */
const currentUser = os.userInfo()

console.log(currentUser);