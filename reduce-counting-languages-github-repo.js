const fetch = require("node-fetch");
const url = 'https://api.github.com/users/shellbot97/repos?per_page=100'
const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total, Repo) => {
        const {language} = Repo;
        if (language) {
            total[language] = total[language] + 1 || 1
        }
        return total
    }, {})
    console.log(newData);
}
fetchRepos()