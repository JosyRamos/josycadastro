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

function editarCadastros(nome, idade, sexo, opcoes,) {

    cadastros.rows[index].cells[1].innerHTML = nome;
    cadastros.rows[index].cells[2].innerHTML = idade;
    cadastros.rows[index].cells[3].innerHTML = sexo;


    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";
    this.fechar();
  

}

function teste(){

window.alert('iniciando a função!!!')
}