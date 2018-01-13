const http = require("http");
const fs = require("fs");
const url = require("url");
var index = 0;
const gbk=require("gbk");
const JSDOM=require('jsdom').JSDOM;
// 载入模块
var Segment = require('segment');

function GetUrl(urlstr, success) {
    index++;
    var urlObj = url.parse(urlstr);
    var http = '';
    if (urlObj.protocol == 'http:') {
        http = require('http');
    } else {
        http = require('https');
    }
    let req = http.request({
        'hostname': urlObj.hostname,
        'path': urlObj.path
    }, res => {
        if (res.statusCode == 200) {
            var arr = [];
            // var str = "";
            res.on("data", buffer => {
                arr.push(buffer);
                // str += buffer;
            });
            res.on("end", () => {
                let b = Buffer.concat(arr);
                success && success(b);
            });
        } else if (res.statusCode == 302 || res.statusCode == 301) {
            console.log(`我是第${index}重定向`, res.headers.location);
            // console.log(res.headers.location);
            GetUrl(res.headers.location, success);
        }

    });
    req.end();
    req.on('error', function () {
        console.log("出错了");
    })
}
//https://detail.tmall.com/item.htm?id=560516988038&ali_refid=a3_430582_1006:1102515942:N:phonex%E6%89%8B%E6%9C%BA:11342902947ae44e7297f59a64884608&ali_trackid=1_11342902947ae44e7297f59a64884608&spm=a230r.1.14.1&sku_properties=10004:709990523;5919063:6536025
GetUrl('https://item.jd.com/5696154.html', function (b) {
    console.log("我终于走出来了");
    // fs.writeFile("download.html", b, "utf-8");
    // console.log(b);
    var html=gbk.toString("utf-8",b);
    // console.log(html);
    let DOM=new JSDOM(html);
    let document=DOM.window.document;
    console.log(document.querySelector('.dd').innerHTML);
});
// let req = http.request({
//     'hostname': 'nodejs.cn',
//     'path': "/download/"
// }, res => {
//     // console.log(1);
//     var arr = [];
//     var str = "";
//     res.on("data", buffer => {
//         arr.push(buffer);
//         str += buffer;
//     });
//     res.on("end", () => {
//         console.log(arr, str);
//         fs.writeFile("download.html", arr, "utf-8");
//     });
// });
// req.end();

// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

// 开始分词
console.log(segment.doSegment('这是一个基于Node.js的中文分词模块。'));