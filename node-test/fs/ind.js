const fs=require('fs');
//fs.writeFileSync("./abes.txt","hello abes college")
const res=fs.readFileSync("./abes.txt","utf-8");
console.log(res);
