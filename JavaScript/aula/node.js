var notaAluno = 50;
const Min_Aprovacao = 60;

if(notaAluno >= Min_Aprovacao){                                                                                                                                     
console.log('Aluno aprovado'); 
}else{                                                                                                                                                                                          
console.log('Aluno reprovado'); 
}



var avaliacoes = ["PROVA 1", "PROVA 2", "TRABALHO FINAL"];

var cont = 0;         
while (cont < avaliacoes.length){                
    console.log (avaliacoes[cont]);               
    cont++;                              
}   
    



var avaliacoes =["PROVA 1", "PROVA 2", "TRABALHO FINAL"];
                    
for (let x = 0; x < avaliacoes.length; x++){         
    console.log(avaliacoes[x]);              
   }



var avaliacoes =["PROVA 1", "PROVA 2", "TRABALHO FINAL"];
                    
var notaAluno = [35,20,15];
var somaAluno = 0; 

for(let x=0; x< avaliacoes.length; x++) {     
    console.log('A nota para a ${avaliacoes[x]} foi ${notaAluno[x]}');  
     somaAluno += notaAluno[x];      
 }   
 
 if(somaAluno >= 60){      
    console.log('Aluno APROVADO');      

} else{
     console. log('Aluno REPROVADO'); 
     
    }



 function soma(x,y){                                                                      var total = x +y;                                                                    return total;                                                                      }
 var x = soma(2,3);    

x
5
    console.log(' O total da soma de 5 e 7 é: ' + soma(5,7));
    //O total da soma de 5 e 7 é: 12