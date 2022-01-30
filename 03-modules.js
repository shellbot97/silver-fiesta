// Modules
/**
 * used for modularizing the code (split the code into multiple files)
 */

const myName = "Hitesh";
const myFriend = "Rohit";

const seHi = (name) => {
    console.log(`hello ${name}`);
} 

seHi(myName)
seHi(myFriend)

/**
 * suppose this function is going to be required for different friends and each friend
 * has his own class
 * In this case It will be easier to modularize this into a separate file and include
 * that file at multiple places
 * That is why we use Modules
 */