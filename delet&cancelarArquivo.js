function deleteCadastro() { 
   
      for (var i = 0; i < this.cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;

            let bancoDados = localStorage.getItem('bancoDados');
            bancoDados = JSON.parse(bancoDados);
            let del = bancoDados.indexOf(bancoDados[index-1])
       
           bancoDados.splice(del,1)
      
           document.getElementById("txtNome").value = "";
           document.getElementById("txtIdade").value = "";
           document.getElementById("slSexo").value = "";
        
           localStorage.setItem('bancoDados', JSON.stringify(bancoDados))

        }
    }

}

function cacelarCadastro() {

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    this.fechar();

}