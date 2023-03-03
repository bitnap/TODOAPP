const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


// const app2 = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

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
});
