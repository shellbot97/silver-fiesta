/**
 * turn first into red after 1 s
 * turn second into green after 2 s
 * turn third into blue after 3 s
 * all in sync
 */
const btn = document.querySelector('#color-changer');
btn.addEventListener('click', () => {
    addColor('.first', 1000, 'red', 'changed to red').then((data) => {
        addColor('.second', 3000, 'green', data).then((data) => {
            console.log(data);
            addColor('.third', 3000, 'blue', data)
        })
    }).catch((error) => {
        console.log(error);
    })
})

function addColor(selector, time, color, data) {
    const element = document.querySelector(selector)
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
            }, time)
            resolve(data) // need to do this because you want the it to move to the next promise in the chain
        }else{
            reject(`element does not exist ${selector}`)
        }
    })
}