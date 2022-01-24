/**
 * using spread with string
 */
 const yo = 'Yo!'
 const letters = [...yo]
 console.log(letters);
 /**
  * using spread with arrays
  */
  const boys = ['Bob', 'Charlie', 'Dick']
  const girls = ['Alice', 'Ellie', 'Fiona']
 const bestFriend = 'Gillian'
 
 const friends = [...boys, bestFriend, ...girls]
 console.log(friends);
 /**
  * when variable is equated with another variable, any changes in the original variable changes the value in another variable
  */
 friends[0] = 'nancy'
 const newFriends = friends
 console.log(newFriends);
 /**
 * to avoid this do the following
*/
  const newFriends2 = [...friends]
  friends[1] = 'steve'
  console.log(newFriends2);
/**
 * ES2019
 * spread in objects
 */
const person = {name:"john", lastNAme:"doe"}
const newPerson = {...person}
console.log(newPerson);
/**
 * adding a new property
 */
 const newPerson2 = {...person, city:"chicago"}
 console.log(newPerson2);
 /**
  * updating the prop
  */
const newPerson3 = {...person, name:"steve"}
console.log(newPerson3);