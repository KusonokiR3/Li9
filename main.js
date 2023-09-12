//let fruta = {
 //   nome: "Melão",
  //  cor: " amarelo",
  //  peso: 100,
//}
//console.log(fruta.peso)
//console.log(fruta["cor"])
//fruta.cor = "roxo"
//fruta["peso"] = 200
//console.log(fruta["peso"])
//console.log(fruta.cor)//

//function fruta(cor, forma, peso, sabor){
 //   this.cor= cor;
  //  this.forma = forma;
  //  this.peso = peso;
  //  this.sabor = sabor;
//}
//const fruta1 = new fruta("amarela","cilindrica",50,"doce")
//const fruta2 = new fruta("vermelha","redonda",25,"citrico")
//console.log(fruta1)
//console.log(fruta2)
//console.log(fruta1.forma.length)
//console.log(fruta1.cor.toLowerCase())
//console.log(fruta1.sabor.toUpperCase())
//for(const propriedade in fruta1){
//    console.log(fruta1[propriedade])
//}
class Alimento{
  constructor(nome, cor, peso, tipo)  {
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
    this.tipo =  tipo;
  }
  descricao(){
    console.log("O "+ this.nome, "e da cor " +this.cor, "com o peso de " +this.peso,"e é "  +this.tipo)
  }

}
const alimento1 = new Alimento("maçã","vermelha", 25, "fruta")
const alimento2 = new Alimento("brócolis","verde", 26, "verdura")
alimento1.descricao()
alimento2.descricao()