/*
获取操作系统架构
os.arch()
获取操作系统cpu核心信息 
os.cpus()
获取操作系统主机名
os.hostname()
获取操作系统操作系统平台
os.platform()
获取操作系统内存信息
os.totalmem()
获取操作系统空闲内存信息
os.freemem()
获取操作系统临时目录
os.tmpdir()
 */
const os = require('os')
const path = require('path')
console.log(os.arch())
console.log(os.cpus())
console.log(os.hostname())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem()/2**30)
console.log(os.tmpdir());
/**
 * path模块 都不会检测文件是否存在
 * path.basename() 获取文件名   传入文件路径和文件后缀若匹配则返回忽略文件后缀的路径,不匹配则返回完整文件名
 * path.dirname() 获取文件目录
 * path.extname() 获取文件后缀
 * path.isAbsolute() 判断是否是绝对路径
 * path.join() 拼接路径
 * path.resolve() 拼接路径,返回绝对路径
 * path.parse() 解析路径
 * path.format() 格式化路径
 */
console.log(path.basename('D:/Node/内置模块/index.js','.js'))
console.log(path.dirname('D:/Node/内置模块/index.js'))
console.log(path.extname('D:/Node/内置模块/index.js'))
console.log(path.isAbsolute('D:/Node/内置模块/index.js'))
console.log(path.join('D:/Node/内置模块/index.js'))
console.log(path.resolve('D:/Node/内置模块/index.js'))
console.log(path.parse('D:/Node/内置模块/index.js'))
console.log(path.format(path.parse('D:/Node/内置模块/index.js')))


