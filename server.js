const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://admin:admin1234@cluster0.hwfu4h5.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
    if (에러) return console.log(에러);

    app.listen(8080, function(){
        console.log('listening on 8080');
    });

});



// const app2 = express();


// app2.listen(8000, function(){
//     console.log('listening on 8000');
// });
// app2.get('/beauty', function(req, res){
//     res.send('뷰티용품 쇼핑하는 페이지');
// });


app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑하는 페이지');
});

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑 페이지');
});

app.get('/home', function(req, res){
    res.send('홈페이지');
});

/**
 * get요청 후 html파일 보내주기
 */
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/write', function(req, res){
    res.sendFile(__dirname+'/write.html');
});


app.post('/add', function(req, res){
    res.send('전송완료');
    console.log(req.body.date);
    console.log(req.body.title);
    console.log(req.body);
});
