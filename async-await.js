/**
 * example of async syntax
 */
 const example = async () => {
    return 'hellow'
}
console.log(example());
/**
 * setting traditional function as async
 * using await for synchronousity in async function 
 */
async function someFunc() {
    const result = await example()
    console.log(result);
    console.log('this executed after awaited promise');
}
someFunc()
/**
 * real world example
 */
const users = [
    {id: 1, name: "hitesh"},
    {id: 2, name: "ramesh"},
    {id: 3, name: "ingale"},
]
const articles = [
    {userID: 1, articles: ['one', 'two', 'three']},
    {userID: 2, articles: ['four', 'five']},
    {userID: 3, articles: ['siz', 'seven', 'eight']}
]

getUser('hitesh')
    .then( (user) => getArticles(user.id) )
        .then((userData) => console.log(userData) )
    .catch((err) => console.log(err) )

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name == name)
        if (user) {
            resolve(user)
        }else{
            reject(`no such users names${name}`)
        }
    })
}

function getArticles(userID) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((article) => article.userID == userID)
        if (userArticles) {
            resolve(userArticles)
        }else{
            reject(`wrong id ${userID}`)
        }
    })
}

/**
 * refactoring above code using async await
 */
const getData = async () => {
    try {
        const user = await getUser('hitesh')
        const articles = await getArticles(user.id)
        console.log(articles);
    } catch (error) {
        console.log(error);
    }
}
getData()