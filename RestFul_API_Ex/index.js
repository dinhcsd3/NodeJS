var express = require('express');
var app = express();
var bodyParser = require('body-parser');

let movieStore = require('./moviestore');
let movieData = new movieStore();

app.use(bodyParser.json({
    type : 'application/json'
}));

app.get('/movies', (req, res) => {
    return res.send(movieData.allMovie());
});

app.get('/', (req, res) => {
    return res.redirect('/movies');
});

app.get('/movies/:title', (req, res) => {
    //console.log(req.params);

    // console.log(req.query); Lay tat ca tham so duoc truyen vao tren URL voi Express

    let findMovie = movieData.find(req.params.title);

    if(findMovie.length < 1){
        res.statusCode = 404;
        return res.send({
            message : 'Not found movies match'
        });
    }
    return res.send({
        message : 'Movies founded with' + ' ' + req.params.title,
        payload : findMovie.pop()
    });
});

app.post('/movies', (req, res) => {
    // console.log(req.body);
    // Check input of client
    if (!req.body.title || req.body.title.trim().length < 1) {
        res.statusCode = 400 // bad input
        return res.send({
            message : "Input missing or invalid"
        });
    }
    // check movies was exist in database
    if(movieData.has(req.body.title)){
        return res.send({
            message : "Movie already existed!"
        })
    }

    movieData.add(req.body);

    return res.send({
        message : 'Added the new movies'
    })

});

app.put('/movies/:title', (req, res) => {
 
    if(!movieData.update(req.params.title, req.body)){
        res.statusCode = 500 // Internal server error
        return res.send({
            message : 'Update movies error!'
        });
    }
    return res.send({
        message : 'Movies update successfully!',
    });
});

app.delete('/movies/:title', (req, res) => {
 
    if(!movieData.has(req.params.title)){
        res.statusCode = 404 // Internal server error
        return res.send({
            message : 'Movie not found!'
        });
    }

    movieData.remove(req.params.title);
    return res.send({
        message : 'Movies remove successfully!',
    });
});


app.listen(8080, () => {
    console.log('Server started...');
});
