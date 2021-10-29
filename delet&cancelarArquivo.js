function deleteCadastro(pos) {


    bancoDados.splice(pos,1)
   // cad();
    adcionarLocal();



   /* bancoDados = JSON.parse(localStorage.getItem('bancoDados'))
    localStorage.getItem('bancoDados',index)

    for (var i = 0; i < cadastros.rows.length; i++) {
        if (index == i) {


            index =localStorage.removeItem(qtdLinha);
            if (index>-1){
                bancoDados.splice(index,1);
                
                console.log(bancoDados)*/
           // }

           

          // bancoDados= localStorage.removeItem('bancoDados[index]');

          //bancoDados.indexOf(localStorage,[index,1])

         // bancoDados.indexOf(index);

      // var ld=  bancoDados.indexOf(index);

        // localStorage.removeItem(index,ld+1);

           //console.log(bancoDados);

          
        //}

           // console.log(bancoDados.findIndex(1))
           // consol.log(index)

            

         /*   bancoDados.indexOf(localStorage,[index,1])*/
           /* bancoDados.splice.delete(bancoDados,index)*/
       /*  cadastros.deleteRow(bancoDados[index]);*/
     /* localStorage.removeItem('bancoDados')*/
   /*  cadastros.splice(length,index)*/

        /* cadastros.removeItem(index)

           /*  cad.splice(index);*/

          //  document.getElementById("txtNome").value = "";
          //  document.getElementById("txtIdade").value = "";
           // document.getElementById("slSexo").value = "";

          
          //return;
         // if (onclick == deleteCadastro){

           // for (var i = 0; i < cadastros.rows.length; i++) {
          // if (index == i) {

            //   bancoDados.splice(index,1)

           
      // }

 //  }

 document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    this.fechar();
    //    }
  //  }

}


function cacelarCadastro() {

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    this.fechar();

}