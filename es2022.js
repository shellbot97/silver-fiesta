/**
 * at()
 */
const values = [1,2,3,4,5]
const myStr = 'hitesh'
// old
console.log(values[values.length - 1]);
//new
console.log(values.at(-1));
console.log(myStr.at(0));

/**
 * top level await (only for module)
 */
// old
fetch('https://www.course-api.com/react-tours-project')
    .then((data) => data.json())
        .then((actualData) => console.log(actualData))
// or
const fetchData = aync() =>{
    const resp = await fetch('https://www.course-api.com/react-tours-project')
    const data = await resp.json()
    console.log(data);
}
fetchData()
// new (no function wrapping await)
const resp = await fetch('https://www.course-api.com/react-tours-project')
const data = await resp.json()
console.log(data);