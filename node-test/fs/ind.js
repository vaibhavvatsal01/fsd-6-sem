const fs=require('fs');
//fs.writeFile("./abes.txt","helina ne ki rab se fariyad",()=>{});

fs.readFile("./abes.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(res);
    }
});

