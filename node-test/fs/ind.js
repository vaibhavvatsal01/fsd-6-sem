const fs=require('fs');
//fs.writeFile("./abes.txt","helina ne ki rab se fariyad",()=>{});

// fs.readFile("./abes.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(res);
//     }
// )
// fs.appendFileSync("./abes.txt",`aur wo rab se fariyad karne laga`);
// fs.appendFile("./abes.txt",`\n aur wo rab se fariyad karne laga`,(err)=>{
//     if(err){
//         console.log("error",err);
//     } else{
//         console.log("file appended successfully");
//     }
// });       
fs.cpSync("./abes.txt","./aa1.txt");