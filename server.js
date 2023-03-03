const express = require('express');
const app = express();
const app2 = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

app2.listen(8000, function(){
    console.log('listening on 8000');
});


app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑하는 페이지');
});

app2.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑하는 페이지');
});