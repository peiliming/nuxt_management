import express = require('express')
import fs = require('fs')
const app: express.Express = express()
import * as mysql from "promise-mysql";
import config from "../config/";
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CROS対応（というか完全無防備：本番環境ではだめ絶対）g
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(3000, () => {
    console.log("Start on port 8888.")
})

const myFunction = () => {
    return new Promise((resolve) => {
        resolve('new world')
    })
}
// const myFunction = new Promise( (resolve) => {
//     resolve('new world') 
// })
myFunction()
.then( (data) => { console.log(data) })

const connection = async () => {
    //return await mysql.createConnection(config.db);
    return await mysql.createConnection({
        host: 'mysql',
        user: 'root',
        password: 'bai',
        database: 'kouka_db'
    });
};
// products一覧取得
app.get('/product', (req: express.Request, res: express.Response) => {
    const data = req.body;
    connection()
      .then((connection) => {
        const result = connection.query("SELECT * FROM PRODUCT");
        connection.end();
        return result;
      })
      .then(function (rows) {
        res.send(rows);
      });
  });

app.post('/product', (req: express.Request, res: express.Response) => {
    const data = req.body;
    connection()
      .then((connection) => {
        const result = connection.query("INSERT INTO PRODUCT SET ?", data);
        connection.end();
        return result;
      })
      .then(function (rows) {
        res.send(rows);
      });
});

app.put('/product/:id', (req: express.Request, res: express.Response) => {
 const data = req.body;
 connection()
    .then((connection) => {
      // "UPDATE `table` SET `value` = {$value} WHERE `id` = {$id}"
      const result = connection.query("UPDATE PRODUCT SET ? WHERE id = " + req.params.id, data);
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});

type User = {
    id: number
    name: string
    email: string
};

const users: User[] = [
    { id: 1, name: "User1", email: "user1@test.local" },
    { id: 2, name: "User2", email: "user2@test.local" },
    { id: 3, name: "User3", email: "user3@test.local" },
    { id: 4, name: "User4", email: "user4@test.local" },
    { id: 5, name: "User5", email: "user4@test.local" }
]

//一覧取得
app.get('/users', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
})

