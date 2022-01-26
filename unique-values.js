const menu = [
    {
        name: "Pizza",
        type:"Dinner"
    },
    {
        name: "Pasta",
        type:"Dinner"
    },
    {
        name: "Omelette",
        type:"breakfast"
    },
    {
        name: "toast",
        type:"breakfast"
    },
    {
        name: "salad",
        type:"lunch"
    }
]
/**
 * get all the categories from the menu object
 */
const categories = menu.map((item)=> {
    return item.type
})
/**
 * get all the UNIQUE categories from menu object using set function
 * spread those values to array since Set by-default return object
 * and add a new category to thos
 */
const UniqueCategories = ['all',...new Set(categories)]
console.log(UniqueCategories)
/**
 * add those values in the form of a button on html page
 */
document.querySelector("#manu").innerHTML = UniqueCategories.map((category) => {
    return `<button>${category}</button>`
}).join("<br/>")