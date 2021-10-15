var cadastros, index;

function cadastrar(nome, idade, sexo) {

    cadastros = document.getElementById('thcadastro');
    var qtdLinhas = cadastros.rows.length;
    var linha = cadastros.insertRow(qtdLinhas);

    var cellNumero = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellSexo = linha.insertCell(3);

    cellNumero.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellIdade.innerHTML = idade;
    cellSexo.innerHTML = sexo;

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";



    preencheCamposForm();
}
function editarCadastros(nome, idade, sexo) {

    cadastros.rows[index].cells[1].innerHTML = nome;
    cadastros.rows[index].cells[2].innerHTML = idade;
    cadastros.rows[index].cells[3].innerHTML = sexo;

}
function preencheCamposForm() {
    for (var i = 0; i < cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtNome").value = cadastros.rows[index].cells[1].innerText;
            document.getElementById("txtIdade").value = cadastros.rows[index].cells[2].innerText;
            document.getElementById("slSexo").value = cadastros.rows[index].cells[3].innerText;
        }


    }
}

function deleteCadastro() {
    for (var i = 0; i < cadastros.rows.length; i++) {
        if (index == i) {
            cadastros.deleteRow(index);

            document.getElementById("txtNome").value = "";
            document.getElementById("txtIdade").value = "";
            document.getElementById("slSexo").value = "";

            return;
        }
    }


}
