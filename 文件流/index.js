//流的概念,数据的流动,从一端流动到另一端,就像水管中的水一样,这样可以避免我们内存中同时出现大量数据,造成内存溢出
//文件上传和下载就是采用流的形式逐步上传和下载
//文件流,就是将文件看做是一个数据流,通过流的方式读取文件或者写入文件
//文件流分为可读流,可写流,双工流
//可读流,就是可以从文件中读取数据,比如fs.createReadStream
const fs =require('fs')
const path =require('path')
//创建一个可读流
const readStream = fs.createReadStream(path.resolve(__dirname,'./index.txt'),{
    encoding:'utf-8', //若不配置则创建的流是buffer类型
    highWaterMark:3 //每次读取的字节数,默认是64kb
})

//可写流,就是可以向文件中写入数据,比如fs.createWriteStream
const writeStream = fs.createWriteStream(path.resolve(__dirname,'./index.txt'),{
    flags:'w', //写入模式,默认是w,表示写入,如果文件存在则覆盖,如果文件不存在则创建
    encoding:'utf-8', //若不配置则创建的流是buffer类型
    highWaterMark:64, //每次写入的字节数,默认是64kb   ,
    autoClose:true //自动关闭流,默认是true
})
//写入一个10mb的文件
let i = 0
let time = 0
//这种写法容易产生背压问题,因为内存传输速度远远高与磁盘写入速度,所以会造成大量数据堵塞在内存中,导致内存溢出
//当我们在进行文件复制操作的时候就可以采取可读可写流这样能够大大降低我们内存的开销
//使用pipe管道辅助函数完成
function write(){
    let flag =true
    setInterval(() => {
        time+=1
    }, 1000);
    while(i<1024*1024*10 && flag){
      flag =  writeStream.write('LYC')
      i++
     }
}
write()
//监听流的开启和关闭
writeStream.on('open',()=>{
    console.log('流开启')
})
writeStream.on('finish',()=>{
    console.log(time,'流关闭');
})
writeStream.on('error',(err)=>{
    console.log(err)
})
writeStream.on('drain',()=>{
    write()
})