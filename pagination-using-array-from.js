/**
 * make an array of numbers range(0,120)
 */
const items = Array.from({length:120},(_, index) => {
    return index
})
console.log(items);
/**
 * pagination
 * 10 records each page
 */
const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage)
console.log(pages);
const newItems = Array.from({length:pages}, (_, index) => {
    const start = index * itemsPerPage;
    const pageItems = items.slice(start, start+itemsPerPage);
    return pageItems
})
console.log(newItems);