class Alimento{
    constructor(nome, cor, peso, tipo)  {
      this.nome = nome;
      this.cor = cor;
      this.peso = peso;
      this.tipo =  tipo;
    }
    descricao(){
      console.log("O alimento é "+ this.nome, "e da cor " +this.cor, "com o peso de " +this.peso,"e é "  +this.tipo)
    }
  
  }
  const maçã = new Alimento("maçã","vermelha", 25, "fruta")
  const brócolis = new Alimento("brócolis","verde", 26, "verdura")
  const abacaxi = new Alimento("Abacaxi","amarelo", 100, "fruta")
  const beterraba = new Alimento("beterraba","roxa", 60, "legume")
  const banana = new Alimento("banana","amarelo", 50, "fruta")
  var pergunta = prompt("Digite um alimento")
  if(pergunta == maçã.nome){
  maçã.descricao()
  }
  if(pergunta == brócolis.nome){
     brócolis.descricao()
    }
 if(pergunta == abacaxi.nome){
     maçã.descricao()
    }
  if(pergunta == beterraba.nome){
     beterraba.descricao()
            }
  if(pergunta == banana.nome){
     banana.descricao()
                }
  
