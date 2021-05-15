function myFunction(){	

//Declaração de variáveis
let num = Number.parseInt(document.querySelector('#entrada').value)
let contagem = 1
let total = num
let ganha = multi(num)
let ganhoReal = ganha
let list=[]
let i=0

list.push(total)

//Ganhos e perda iniciais declaradas aqui
document.write('Aposta atual: ', num, '<br>')
document.write('Número de apostas: ', contagem, '<br>')
document.write('Total: ', total, '<br>')
document.write('Ganhar: ', ganha, '<br>')
document.write('Ganho real: ', ganhoReal, '<br>', '<br>')

//Laço while para execução do programa
while (total<=1700000){

	const apostado = num=somarValor(num)	

	document.write('Aposta atual: ', apostado, '<br>')
 	document.write('Número de apostas: ', contagem = somarI(contagem), '<br>')
 	document.write('Total: ', total = somarApostas(total), '<br>')
 	list.push(total)

 	const ganhar = multi(apostado)

 	document.write('Ganhar: ', ganhar, '<br>')
 	document.write('Ganho real: ', calcGanhoReal(ganhar, list[i]), '<br>', '<br>')
 	i++
}

//Funções
function multi(valor){
	return valor*3
}
function somarValor(valor){
 	return Math.round (valor*1.4) 
}
function somarI(i){
	return i += 1
}
function somarApostas(n1){
	return n1+num
}
function calcGanhoReal(n1, n2){
	return n1-n2
}


/*function diminuirValor(n2){
	return Math.round(n2/1.4)
}*/

//Alteração do corpo após clicar
var corpo = document.body

corpo.style.background= 'rgb(0, 122, 92)'
corpo.style.color= '#ffb13d'

}
