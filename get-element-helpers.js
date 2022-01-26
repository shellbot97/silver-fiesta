/**
 * traditional appraoch
 */
const heading = document.querySelector('.heading');
console.log(heading);
const listItems = document.querySelectorAll('.listItems')
console.log(listItems);
/**
 * helper approach
 */
const getElement = (selector, isList) => {
    if (isList) {
        const el = [...document.querySelectorAll(selector)]
        if (el.length < 1) {
            throw new Error(`no elementsss exist ${el}`)
        }else{
            return el
        }
    }
    const el = document.querySelector(selector)
    if (el) {
        return el
    }else{
        throw new Error(`plz check selector ${selector}`)
    }
}
console.log(getElement('.listItems', true));
/**
 * refactored above code
 */

const getElement2 = (selector, isList) => {
    const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector)
    if ((!isList && el) || (isList && el.length > 0)) return el
    throw new Error(`plz check selector!! ${selector}`)
    
} 
console.log(getElement2('.listItems', true))