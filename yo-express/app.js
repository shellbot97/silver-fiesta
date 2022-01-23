const express = require('../npm-tut/node_modules/express')
const app = express();
/**
 * listen to the port 9000 and once the server starts running notify the user in console  
 */
app.listen(9000, function() {
    console.log('Running..')
})
/**
 * add a route at /
 */
app.get('/', function (request, response) {
    response.send("hello my first route, may I find all the intricacies of express and nodes from this route!")
})
/**
 * add a route at /watches
 */
 app.get('/watches', function (request, response) {
    response.send("Welcome to the home page for all the watches I'm considering to buy")
})
/**
 * add a route at /watches/{watch-slug}?action=get_link
 */
 app.get('/watches/:slug', function (request, response) {
    const slug = request.params.slug
    const action = request.query.action
    response.send("Right now You are viewing "+action+" for "+slug)
})


