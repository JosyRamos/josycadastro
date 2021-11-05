function visulCadastro() {

    this.editCadastros();
    this.cacelaFechar();
    this.fecharAdcionar();
    this.fecharSalvar();
    this.desabilitar(true);

}

function desabilitar(disabled) {

    document.getElementById("txtNome").disabled = disabled;
    document.getElementById("txtIdade").disabled = disabled;
    document.getElementById("slSexo").disabled = disabled;


}