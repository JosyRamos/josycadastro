function editCadastros(nome, idade, sexo, opcoes) {
    this.desabilitar(false);
    this.modal();
    this.fecharAdcionar();
    this.salvar();
    this.cacelarAbrir();

    for (var i = 0; i < this.cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;

            document.getElementById("txtNome").value = cadastros.rows[index].cells[1].innerText;
            document.getElementById("txtIdade").value = cadastros.rows[index].cells[2].innerText;
            document.getElementById("slSexo").value = cadastros.rows[index].cells[3].innerText;
        }
    }
}

function editarCadastros(nome, idade, sexo) {


    cadastros.rows[index].cells[1].innerHTML = nome;
    cadastros.rows[index].cells[2].innerHTML = idade;
    cadastros.rows[index].cells[3].innerHTML = sexo

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";


    atualizarBD(index, nome, idade, sexo);

    this.fechar();

}

function atualizarBD(index, nome, idade, sexo){
    let bancoDados = localStorage.getItem('bancoDados');
    bancoDados = JSON.parse(bancoDados);
    let indice = bancoDados.indexOf(bancoDados[index-1])
    bancoDados[indice] = {
        txtNome: nome, 
        txtIdade: idade, 
        slSexo: sexo
    }
//  console.log("teste",bancoDados[indice]);
 localStorage.setItem('bancoDados', JSON.stringify(bancoDados))
}
