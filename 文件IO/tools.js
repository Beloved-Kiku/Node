const fs = require('fs')
const path = require('path')
async function readFile(dirname) {
    const data = await fs.promises.readdir(dirname)
    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const info = await fs.promises.stat(path.resolve(dirname, item))   
        if (info.isDirectory()) {
        } else {
     }
 }  
}
async function  readFloder(dirname){ 
     const floder =  await fs.promises.readdir(dirname)
     while(floder.isDirectory()){
    
     }
     return floder
}
readFile(path.resolve(__dirname))