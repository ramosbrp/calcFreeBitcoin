/// Funções ///
const multi = (valor) => valor * 3;

const somarValor = (valor) => Math.round(valor * 1.4);

const somarI = (i) => (i += 1);

const somarApostas = (n1, n2) => n1 + n2;

const calcGanhoReal = (n1, n2) => n1 - n2;
/// --- ///

function myFunction() {
  //Declaração de variáveis
  let num = Number.parseInt(document.querySelector("#entrada").value);
  let contagem = 1;
  let total = num;
  let { ganha, ganhoReal } = multi(num);
  let list = [];
  let i = 0;

  const list1 = (lista, total) => (list = [...lista, total]);

  list1(list, total);

  //Ganhos e perda iniciais declaradas aqui
  document.write("Aposta atual: ", num, "<br>");
  document.write("Número de apostas: ", contagem, "<br>");
  document.write("Total: ", total, "<br>");
  document.write("Ganhar: ", ganha, "<br>");
  document.write("Ganho real: ", ganhoReal, "<br>", "<br>");

  //Laço while para execução do programa
  while (total <= 1700000) {
    const apostado = (num = somarValor(num));

    document.write("Aposta atual: ", apostado, "<br>");
    document.write(
      "Número de apostas: ",
      (contagem = somarI(contagem)),
      "<br>"
    );
    document.write("Total: ", (total = somarApostas(total, num)), "<br>");
    list1(list, total);

    const ganhar = multi(apostado);

    document.write("Ganhar: ", ganhar, "<br>");
    document.write(
      "Ganho real: ",
      calcGanhoReal(ganhar, list[i]),
      "<br>",
      "<br>"
    );
    i++;
  }

  /*function diminuirValor(n2){
	return Math.round(n2/1.4)
}*/

  //Alteração do corpo após clicar
  var corpo = document.body;

  corpo.style.background = "rgb(0, 122, 92)";
  corpo.style.color = "#ffb13d";
}
