const ogg = 
{ 
    name: "John",
    age: 30 
};
const ogg2=null;
function fetchDataFromAPI(data) {
    console.log("recupero dati in corso... ");
    
            return new Promise((resolve,reject) => {
            setTimeOut(()=>{
                if(data){
                    resolve(data);
                }else{
                    reject('ko');
                }
            },1000);   
        });
  }
fetchDataFromAPI(ogg)   .then((data)=>{console.log(data)})
                        .catch((error)=>{console.log(error)});
fetchDataFromAPI(ogg2)   .then((data)=>{console.log(data)})
                        .catch((error)=>{console.log(error)});
