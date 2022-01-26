console.log('height', window.innerHeight);
console.log('width', window.innerWidth);
document.querySelector('.btn').addEventListener('click', () => {
    const dimensions = document.querySelector('.box').getBoundingClientRect()
    console.log(dimensions);
})
