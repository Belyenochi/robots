var AipNlpClient = require("baidu-aip-sdk").nlp;

// 设置APPID/AK/SK
var APP_ID = "10416391";
var API_KEY = "gsNTSalS22T9WwZI0lQEAzu1";
var SECRET_KEY = "tz8zWXF4gBmLvKW6gScKtLioX2d4nULT";

var client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY);

client.lexer('朱天琦真帅').then(function(result) {
  console.log(JSON.stringify(result));
});