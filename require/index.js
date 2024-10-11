/*
使用require导入模块如果不是node_modules文件夹下的模块，需要使用相对路径
若果是node_modules文件夹下的模块，直接使用模块名即可
require查找顺序:
1.node内置核心模块 
2.当前文件所处目录下的node_modules文件夹
3.逐级向上查找node_modules文件夹 
最终转化为绝对路径后加载资源
require导入会自动补全后缀名,顺序为.js,.json,.node,.mjs
若导入的目录只有路径则会去找最后一层的文件夹中的index.js
*/
require('./moduleA')
/*
    //以下为伪代码
    //当使用require导入模块时候Node会将路径转化为绝对路径然后进行缓存判断 
    if(require.cache[modulePath]){
    console.log('this is moduleA',__dirname,__filename) 
    return require.cache[modulePath].exports
    }
*/
// function _temp(module,exports,require,__dirname,__filename){

//     //若没有缓存则开始读取模块内容并将模块内容包裹到一个运行函数中
//     console.log('this is moduleA',__dirname,__filename)
//     module.exports.a=1
//     module.exports.b=2
//      //创建module对象
//      module.exports = {}
//      const exports = module.exports
//     //执行函数改变this
//     _temp.call(module.exports,exports,module,require,__dirname,__filename,module.path)
// }
