function deleteCadastro() {

    bancoDados = JSON.parse(localStorage.getItem('bancoDados'))
    localStorage.getItem('bancoDados',index)

    for (var i = 0; i < cadastros.rows.length; i++) {
        if (index == i) {
           /* bancoDados.splice.delete(bancoDados,index)
        /*   cadastros.deleteRow(index);*/
       localStorage.removeItem('bancoDados')

           /*  cad.splice(index);*/

            document.getElementById("txtNome").value = "";
            document.getElementById("txtIdade").value = "";
            document.getElementById("slSexo").value = "";

          
          return;
          if (onclick == deleteCadastro){

            for (var i = 0; i < cadastros.rows.length; i++) {
           if (index == i) {

               bancoDados.splice(index,1)

           }
       }

   }
        }
    }

}


function cacelarCadastro() {

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    this.fechar();

}