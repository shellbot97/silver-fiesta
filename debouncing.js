let counter = 1;
const getData = () => {
    // calls api and get data
    console.log("Fetching Data", counter++);
}

const betterGetData = (fn, d) => {
    // call api when difference between two key press > 300 ms
    return function () {
        setTimeout(() => {
            fn
        }, timeout);
    }
}