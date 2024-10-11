const fs = require('fs')
const path = require('path')
/*
Sync方法是同步方法，会阻塞代码执行不推荐使用,通常在程序启动的时候执行有限次数
支持promise await async
在node中使用路径尽量使用path模块进行路径转化，不要直接使用字符串拼接,因为直接使用字符串是基于cmd的路径，而path转化后的路径是绝对路径*/
const a  =fs.readFileSync(path.resolve(__dirname, './test.txt'), 'utf-8')

async function test() {
    const a = await fs.promises.writeFile(path.resolve(__dirname, './test.txt'), 'LYC',{
        encoding:'utf-8',
        //append追加不会覆盖原有内容
        flag:'a',
    })
}
/* fs.stat获取文件状态信息可以使用newDate对文件信息进行转化*/
async function status(){
   const a =  await fs.promises.stat(path.resolve(__dirname, './test.txt'))
   console.log(new Date(a.birthtime).toLocaleString()); 
   //判断是否是文件和目录
   console.log(a.isFile(),a.isDirectory());
}
status()
require('./tools')