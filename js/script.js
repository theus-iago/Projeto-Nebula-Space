

function pulo(){

   document.querySelector('.personagem').classList.add('teste')

    setTimeout(function(){

    document.querySelector('.personagem').classList.remove('teste')


    },500)

}

var contador  = 0;





var testeC = setInterval(function(){

var topo = parseInt(
   window.getComputedStyle(document.querySelector('.personagem')).getPropertyValue('top')
)
var esqP = parseInt(
    window.getComputedStyle(document.querySelector('#bloco')).getPropertyValue('left')
 )

    if(esqP < 30 && esqP > 0 && topo >= 350){
        
         document.getElementById("counter").innerText = 0

        if(window.confirm("VOLTAR A JOGAR?")){

           
            location.href = 'index.html'
        }else{
           
        location.href = "telainicial.html"

        }
         
     

    }
    
   

},10)


const pont6 = setInterval(function(){

   var topo = parseInt(
      window.getComputedStyle(document.querySelector('.personagem')).getPropertyValue('top')
   )


   if(topo <= 350){
      document.getElementById("counter").innerText = ++contador

    }

},500)





    




    
  





