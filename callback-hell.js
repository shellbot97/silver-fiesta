const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('#color-changer')
/**
 * traditional approach
 */
btn.addEventListener('click', () =>{
    setTimeout(() => {
        first.style.color = 'red'
        setTimeout(() => {
            second.style.color = 'green'
            setTimeout(() => {
                third.style.color = 'blue'
            }, 3000);
        }, 2000);
    }, 5000);
})
/**
 * use promises and asyn await
 */