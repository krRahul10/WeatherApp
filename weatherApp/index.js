let api = `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a8e163bc0b34c412cb3cb3aff29558b2`;

const http = require("http");

const fs = require("fs");

const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {

}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a8e163bc0b34c412cb3cb3aff29558b2`,)
      .on("data", (chunk) =>{
        let objData = JSON.parse(chunk)
        let arrData = [objData]
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData.map((val) => {
            replaceVal(homeFile,val);
        })
      })
      .on("end", (err) =>{
        if (err) return console.log("connection closed due to errors", err);

        console.log("end");
      });
  }
});

server.listen(8000)
