

  

var db = openDatabase("myTb", "2.0", "troca",4048);


db.transaction(function(criar) {
    //tx.executeSql("DROP TABLE myTable" );
    criar.executeSql("CREATE TABLE  troca ( id  PRIMARY KEY,pxtroca TEXT,resultado TEXT, data TEXT)" );
//       tx.executeSql('INSERT INTO myTable (pxtroca, km, dia,mes, ano)VALUE(?,?,?,?,?)',{resultado,pxkm,dia,month,year});

});



   
var mostrar = document.getElementById('mostrar');

db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM troca ', [], function (tx, mostra) {
       
        var rows = mostra.rows;
        var tr = '';
        for(var i = 0; i < rows.length; i++){
        tr += '<tr>';
       
        tr += '<th>' + rows[i].pxtroca + ' O KM da proxima troca'+" ";
       
        tr += '<th>' + rows[i].data +" "+ ' Data da proxima troca '+" ";
        
        tr += '<th>' + rows[i].resultado  + ' Tipo de oleo';
       
        
        tr += '</tr>';              
        
        
        
        }
        mostrar.innerHTML = tr; 
},null 
);
});
   




function Deletar(){
    
   
  
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM troca WHERE data ");
      
    });
   
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
       
    document.getElementById('resultado').innerHTML = " Sua proxima troca sera em "+resultado.toFixed()+" dias aproximadamente"
    
    document.getElementById('date').innerHTML= "Dia" +" " +dia + "/"+  month+ "/" +  year;
    document.getElementById('toleo').innerHTML= "tipo de oleo" +" "+  tipool;
    document.getElementById('km').innerHTML= "KM" +" "+  pxkm;

    db.transaction(function(armazenar){
            
        armazenar.executeSql("INSERT INTO  troca  (pxtroca,resultado,data) VALUES (?,?,?)",[pxkm,tipool,array_dt ]);
});
   
   
    

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
       
        db.transaction(function(armazenar){
            armazenar.executeSql("INSERT INTO  troca  (pxtroca,resultado,data)VALUES(?,?,?)",[pxkm,tipool,array_dt]);
        });
 
    }

    }