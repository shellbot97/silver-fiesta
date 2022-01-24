const name = "Hitesh"
/**
 * turns string in array
 * with every letter being on a different index
 */
console.log(Array.from(name));
/**
 * converting html node list to arrays 
 * once converted find a particular node with Hello text inside
 */
const text = document.querySelectorAll('.text')
console.log(text);
const newText = Array.from(text).find((item) => item.textContent == 'Hello')
console.log(newText)
