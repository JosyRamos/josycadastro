function adcionarLocal(nome,idade,sexo){    

    var dadosSalvos= [
        nome,
        idade,
        sexo
    ]

    localStorage.setItem('dadosCadastros', JSON.stringify(dadosSalvos));
}
 
 function VisulLocal(){
     document.getElementById("TxtNome").value=localStorage.getItem("nome");
     document.getElementById("TxtIdade").value=localStorage.getItem("idade");
     document.getElementById("slSexo").value=localStorage.getItem("sexo");
 }