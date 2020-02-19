// This only specifies the folder name, which means it will automatically pull the index.js file
const controllers = require('./controllers');

//order matters, 404 is last
const router = (app) => {
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);
    app.get('/', controllers.index);

    app.get('/getName', controllers.getName);

    app.get('/*', controllers.notFound);

    //because post request it wont check the gets only the posts
    app.post('/setName', controllers.setName);
};

// export the router function
module.exports = router;
