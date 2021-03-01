const  express = require("express");
const ejs = require("ejs");
const multer = require("multer");
const path = require("path");
const port = 2000;

const app = express();


//set storage Engine
const  storage = multer.diskStorage({
  destination : './public/uploads/',  
  filename : function(req, file, cb){
    cb (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
});

// init upload

var uploaded = multer({storage : storage }).array('myImage',5);


// EJS 
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get("/",   (req, res)=> res.render('index'));

app.post("/upload", (req, res)=>{
  
  uploaded( req, res, (err)=>{
    console.log(req.files);
    res.send("upload done")
  })
});
 


app.listen(port, (req, res)=>{ console.log("The Server Started On Port "+ port);})














































































































// const path = require('path');
// const http = require("http");
// const https = require('https');
// const multer = require("multer");
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// // const server = http.createServer(app);
// const port = process.env.PORT || 4000;
// var fs = require('fs');

// const publicDirectoryPath = path.join(__dirname,'src/app/app.module.ts')
// app.use(express.static(publicDirectoryPath));


 
// const server = http.createServer(app);
// // var httpsServer = https.createServer(https_options, app);
// // httpsServer.listen(3000);

// server.listen(port,()=>{
//   console.log('API server started on: ' + port);
// });

// const mysql = require('mysql');
// // connection configurations
// const mc = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   // password : 'sadfs4as56',
//   database : 'empolyees'
// });

// // connect to database
// mc.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
 
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//    next();
// });


// app.post('/register', function (req, res) {
 
  
//     console.log("++++++++++++++++++++++++++++"+JSON.stringify(req.body))
//     mc.query("INSERT INTO `employeedata` (`logo`, `Name`, `Surname`, `Nationality`, `Contact`) VALUES (   '"+req.body.logo+"','"+req.body.Name+"',  '"+req.body.Surname+"', '"+req.body.Nationality+"', '"+req.body.Contact+"')",  function (err, res1) {
//         if(err) {
//              console.log("[mysql error]",err);
//              console.log("error: ", err);
//              res.json({
//               "message":  "",
//               "status":  "0",
//               "data": null
//             });
        
//             }else{
//               res.json({
//                 "message":  req.body.Name,
//                 "status":  "1",
//                 "data": res1
//               });
//             }
//           });
 
// })
// // var routes = require('./app/routes/approutes'); //importing route
// // routes(app); //register the route

// app.get('/getdata', function (req, res){

//   console.log("++++++++++++++++" + JSON.stringify(req.body));
 
//   mc.query("SELECT * FROM `employeedata`" , function (err, res1) {
//     if(err) {
//       console.log(SELECT * FROM `employeedata`)
//       console.log("[mysql error]", err);
//       console.log("error: ", err);
//      // result(err,null); 
//      res.json({
//       "message":  "",
//       "status":  "0",
//       "data": null
//     });

//     }else{
//       res.json({
//         "message":  "",
//         "status":  "1",
//         "data": res1
//       });
//       console.log(res);
//      // result(null, res);

//     }
//   });

// })



// app.put('/updatedata', function (req, res){


// // var mysql = "UPDATE empolyeedata SET Name = ?, Surname = ?, Nationality = ?, Contact = ? WHERE Sr = ?"

// //   mc.query(mysql,records,(err,result)=>{

// //     if(err){
// //       res.json({
// //         status:400,
// //         message:err
// //       })
// //     }

// //     else{
// //       res.json({
// //         status:200,
// //         message:result
// //       })
// //     }

// //   })



  
//  mc.query("UPDATE `employeedata` SET `logo` = '"+req.body.logo+"', `Name` = '"+req.body.Name+"', `Nationality` = '"+req.body.Nationality+"', `Contact` = '"+req.body.Contact+"', `Surname` = '"+req.body.Surname+"'  WHERE `employeedata`.`Sr` = '"+req.body.Sr+"' ", function(err, response){
//    if(err){

//       console.log(SELECT * FROM  `employeedata`);
//       console.log("[mysql error]",err);
//       console.log("error: ", err);

//       res.json({
//         "msg": "",
//         "status": "0",
//         "data": ""
//       })
//    }
//    else{
//      res.json({
//        "msg": "",
//        "status": 1,
//        "data": response
//      })
//    }
//  })







//   // console.log("++++++++++++++++" + JSON.stringify(req.body));
 
//   // mc.query("UPDATE `employeedata` SET `Nationality` = '"+req.body.Nationality+"', `Name`= '"+req.body.Name+"' , `Surname`= '"+req.body.Surname+"' , `Contact`= '"+req.body.Contact+"' WHERE `employeedata`.`Sr` = `"+req.body.Sr+"`;" , function (err, res1) {
//   //   if(err) {
//   //     console.log(UPDATE `employeedata`)
//   //     console.log("[mysql error]", err);
//   //     console.log("error: ", err);
//   //    // result(err,null); 
//   //    res.json({
//   //     "message":  "",
//   //     "status":  "0",
//   //     "data": null
//   //   });

//   //   }else{
//   //     res.json({
//   //       "message":  "",
//   //       "status":  "1",
//   //       "data": res1
//   //     });
//   //     console.log(res);
//   //    // result(null, res);

//   //   }
//   // });

// })