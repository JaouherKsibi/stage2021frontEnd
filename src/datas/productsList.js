var res1=[];
fetch('http://localhost:3001/api/getAllProducts').then(
        res=>res.text()
    ).then((res)=>{
            res1=JSON.parse(res);        
       });
       console.log(res1);
       export const productsList=res1;