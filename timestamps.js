console.log(new Date());

/**
 * getting the timestamps
 */
console.log(Date.now());
console.log(new Date().getTime());
console.log(new Date().valueOf());
/**
 * notice the difference of 1000 in above and below Timestamps
 */
setTimeout(() =>{
    console.log(Date.now());
}, 1000)

/**
 * create unique ids
 */
let people = []
people = [...people, {id: Date.now(), name: "peter"}]
setTimeout(() => {
    people = [...people, {id: Date.now(), name: "john"}]
    console.log(people);
}, 1000)

/**
 * create dates from timestamp
 */
console.log(new Date(1043136735342));
/**
 * expiring a cookie after 1 minute
 */
const now = Date.now()
const futureDate = new Date(now + 1000 * 60)
console.log(futureDate);
console.log(new Date());
/**
 * difference between dates
 */
const firstDate = (new Date()).getTime()
const secondDate = (new Date(2021, 8, 28)).getTime()

const delta = (firstDate - secondDate)

console.log(delta);

