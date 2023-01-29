const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const maria = require('./database/connect/maria');
maria.connect();


// 서버 시작
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// 게시글 생성
router.get('/board/create', (req, res) => {
    const query = 
    `insert into board (
        board_no
        ,title
        ,writer
        ,content
        ,reg_date
        ) values (
        count(BOARD_NO)+1
        , 'test'
        , 'tester'
        , 'testcontent'
        , now()
            )`;

    maria.query(query, (err, rows, fileds)=>{
                if(!err) {
                    res.send(rows);
            } else {
                console.log(`err >> ${err}`)
                res.send(err);
            };
    });
});

