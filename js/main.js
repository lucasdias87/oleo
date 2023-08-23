

  



var  m1=   localStorage.getItem("km");
var  m2=   localStorage.getItem("tipooleo");
var  m3=   localStorage.getItem("data");




document.getElementById('mostrar1').innerHTML=  m1;
document.getElementById('mostrar2').innerHTML=   m2;
document.getElementById('mostrar3').innerHTML=   m3;
   







function Deletar(){
    
   
  
    localStorage.removeItem("km");
    localStorage.removeItem("tipooleo");
    localStorage.removeItem("data");


   
}

 


        
  


function Calcular(){
  
    
    const diario = document.getElementById('kmdia').value;
    const mil = document.getElementById('mil').value;
    const doismil = document.getElementById('doismil').value;
    const kmatual = document.getElementById('kmatual').value;
   

    
   
   



    
    if(document.getElementById("mil").checked)
    {
      
        const data = new Date() ;
       
      const resultado= mil/diario;
      const pxkm = parseInt(mil)+parseInt(kmatual); 
      data.setDate(data.getDate() +parseInt( resultado));
      const tipool = document.getElementById('oleo').value;

      const  year = data.getFullYear();
      const  month = data.getMonth() + 1;
      const   dia = data.getDate();
      
       
    
       const array_dt=[dia,month,year];
       
    document.getElementById('resultado').innerHTML = " Sua proxima troca sera em "+resultado.toFixed()+" dias aproximadamente";
    
    document.getElementById('date').innerHTML= "Dia" +" " +dia + "/"+  month+ "/" +  year;
    document.getElementById('toleo').innerHTML= "tipo de oleo" +" "+  tipool;
    document.getElementById('km').innerHTML= "KM" +" "+  pxkm;

   
    localStorage.setItem("km",pxkm );
    localStorage.setItem("tipooleo",tipool)
    localStorage.setItem("data",array_dt)
   
   
    

    }
   if (document.getElementById("doismil").checked)
    {
        
        const data = new Date() ;
        const  resultado= doismil/diario ;
        const pxkm = parseInt(mil)+parseInt(kmatual); 
        data.setDate(data.getDate() +parseInt( resultado));
        const tipool = document.getElementById('oleo').value;

    
        year = data.getFullYear();
        month = data.getMonth() + 1;
         dia = data.getDate();

         
         const array_dt=[dia,month,year];
         document.getElementById('resultado').innerHTML = " Sua proxima troca sera em "+resultado.toFixed()+" dias aproximadamente"
    
        document.getElementById('date').innerHTML= "Dia" +" " +dia + "/"+  month+ "/" +  year;
        document.getElementById('toleo').innerHTML= "tipo de oleo" +" "+  tipool;
        document.getElementById('km').innerHTML= "KM" +" "+  pxkm;
       

       
        localStorage.setItem("km",pxkm );
        localStorage.setItem("tipooleo",tipool)
        localStorage.setItem("data",array_dt)



    }

    }