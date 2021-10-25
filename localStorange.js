function adcionarLocal(){
   
        let cadastros = JSON.parse(localStorage.getItem('cadastros'));

        cadastros.push(
            {
                txtNome: nome.value,
                txtIdade: idade.value,
                slSexo: sexo.value


            }
        )
        localStorage.setItem('cadastros',JSON.stringify(cadastros));
    }
 
 function VisulLocal(){
     document.getElementById("TxtNome").value=localStorage.getItem("nome");
     document.getElementById("TxtIdade").value=localStorage.getItem("idade");
     document.getElementById("slSexo").value=localStorage.getItem("sexo");
 }