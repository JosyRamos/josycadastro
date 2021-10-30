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


function cacelarCadastro() {

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    this.fechar();

}