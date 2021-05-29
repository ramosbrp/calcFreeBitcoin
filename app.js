/// Funções ///
const multi = (valor) => valor * 3;

const somarValor = (valor) => Math.round(valor * 1.4);

const somarI = (i) => (i += 1);

const somarApostas = (n1, n2) => n1 + n2 ;

const calcGanhoReal = (n1, n2) => n1 - n2;
/// --- ///

function myFunction() {
  //Declaração de variáveis
  let num = Number.parseInt(document.querySelector("#entrada").value);
  let contagem = 1;
  var total = num;
  let ganha = multi(num);
	let ganhoReal = ganha
  let list = [];
  let i = 0;


	list.push(total)
	
	let html = ''

	html += '<p>'+'Aposta atual: '+num+'</p>'
	html += '<p>'+'Número de apostas: '+contagem+'</p>'
	html += '<p>'+'Total apostado: '+total+'</p>'
	html += '<p>'+'Se ganhar: '+ganha+'</p>'
	html += '<p>'+'Ganho real: '+ganhoReal+'</p>'
	html += '<hr/>'
	 document.getElementById('lista').innerHTML = html
		rodar ()
  //Laço while para execução do programa
  function rodar () {

    const apostado = num = somarValor(num);
	html += '<p>'+'Aposta atual: '+apostado+'</p>'

	const contagem2 = somarI(contagem)
	html += '<p>'+'Número de apostas: '+contagem2+'</p>'

	const total2 = somarApostas(total, apostado)
	html += '<p>'+'Total apostado: '+total2+'</p>'
	list.push(total2)
console.log(list[list.length-1])
	const ganhar = multi(apostado)
	html += '<p>'+'Se ganhar: '+apostado+'</p>'
	html += '<p>'+'Ganho real: '+calcGanhoReal(ganhar, list[i])+'</p>'
	html += '<hr/>'
	document.getElementById('lista').innerHTML = html
	i++;
		while (list[list.length-1]<=100){
				rodar()
		}
  } 

}
