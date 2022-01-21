//1 - crie uma função que exiba uma mensagem no console 

function BoaTarde(){
    console.log("tenha uma boa tarde")
   }
   BoaTarde()
  
  //2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
  
  let nomeDinamico = "jefferson"
  
  function mostrarNome(nome){
    console.log("meu nome é Jefferson")
  }
  mostrarNome(nomeDinamico)
  
  
  //3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
  
  function mostra(nome, idade, musica){
    console.log(`meu nome é ${nome}, minha idade é ${idade}, minha musica é ${musica}`)
   }
   mostra("Jefferson", 23, "evangelica")
  
  
  //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
  
  function mostra(filme, musica){
    console.log(`meu filme é ${filme}, minha musica é ${musica}`)
   }
   mostra("Gente grande 2", "Furioso Oceano")