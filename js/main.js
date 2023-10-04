




let  m1=   JSON.parse(localStorage.getItem("km"));

let  m2=   JSON.parse(localStorage.getItem("tipooleo"));
let  m3=   JSON.parse(localStorage.getItem("data"));



  
    document.getElementById('mostrar1').innerHTML=  m1;
    document.getElementById('mostrar2').innerHTML=   m2;
    document.getElementById('mostrar3').innerHTML=   m3;

  
  
   
       
   





function Deletar(){
    
   
  
    localStorage.removeItem("km");
    localStorage.removeItem("tipooleo");
    localStorage.removeItem("data");
    localStorage.removeItem("troca");
    Toastify({

        text: " Aguarde deletando !",
        
        duration: 4000,
        newWindow: true,
       avatar:"img/load.gif",
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        style: {
            background: "#fe6543",
            font:"Fira Sans, sans-serif",
          }
          
        }).showToast();
       
        setTimeout(function(){
            window.location.reload(1);
         }, 4190);
}

 


        
  


function Calcular(){
  
    
    const diario = document.getElementById('kmdia').value;
    const mil = document.getElementById('mil').value;
    const doismil = document.getElementById('doismil').value;
    const kmatual = document.getElementById('kmatual').value;
   const dialog = document.getElementById("dialog");
   
    dialog.showModal();

    const fecharmodal=document.getElementById("fechar-modal"); 

    fecharmodal.addEventListener('click',()=>{
      dialog.close();
    })
   
   



    
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
       
    document.getElementById('resultado').innerHTML = " Sua proxima troca sera em "+
    +resultado.toFixed()+" dias aproximadamente";
    
    document.getElementById('date').innerHTML= "Dia" +" " +dia + "/"+  month+ "/" +  year;
    document.getElementById('toleo').innerHTML= "tipo de oleo" +" "+  tipool;
    document.getElementById('km').innerHTML= "KM" +" "+  pxkm;

   
    
    localStorage.setItem("tipooleo",JSON.stringify(tipool));
    localStorage.setItem("data",JSON.stringify(array_dt));
   
    localStorage.setItem('km', JSON.stringify(pxkm)); 
   
   
    



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
       

       //salvando no local storage
        localStorage.setItem("tipooleo",JSON.stringify(tipool));
        localStorage.setItem("data",JSON.stringify(array_dt));
       
        localStorage.setItem('km', JSON.stringify(pxkm));



    }

    }