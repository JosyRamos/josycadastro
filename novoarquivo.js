var cadastros, index;
function soltar() {
    this.modal();
    this.cacelarAbrir();
    this.fecharSalvar();
    this.adcionar();
};

function gravar(){
    var txtNome=document.getElementById("txtNome").value;
    var txtIdade = document.getElementById("txtIdade").value;
   var slSexo=  document.getElementById("slSexo").value;

    localStorage.nome=txtNome;
    localStorage.idade=txtIdade;
    localStorage.sexo=slSexo;

}