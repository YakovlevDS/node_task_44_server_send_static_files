const http = require("http");
const fs = require("fs");
  
http.createServer((req, res)=>{
      
    console.log(`Запрошенный адрес: ${req.url}`);
    // получаем путь после слеша
    const filePath = req.url.substring(1);
    // смотрим, есть ли такой файл
    fs.access(filePath, fs.constants.R_OK, e => {
        // если произошла ошибка - отправляем статусный код 404
        if(e){
            res.statusCode = 404;
            res.end("Resourse not found!");
        }
        else{
            fs.createReadStream(filePath).pipe(res);
        }
      });
}).listen(3000, ()=>{
    console.log("Server started at 3000");
});



// solution 2

// const http = require("http");
// const fs = require("fs");
  
// http.createServer((req, res)=>{
//     console.log(`Запрошенный адрес: ${req.url}`);
//     // получаем путь после слеша
//     const filePath = req.url.substring(1);
//     fs.readFile(filePath, (e, data)=>{
//         if(e){
//             res.statusCode = 404;
//             res.end("Resourse not found!");
//         }   
//         else{
//             res.end(data);
//         }
//     });
// }).listen(3000, ()=>{
//     console.log("Server started at 3000");
// });