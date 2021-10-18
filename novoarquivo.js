var cadastros, index;

function cadastrar(nome, idade, sexo,opcoes) {

    cadastros = document.getElementById('thcadastro');
    var qtdLinhas = cadastros.rows.length;
    var linha = cadastros.insertRow(qtdLinhas);

    var cellNumero = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellSexo = linha.insertCell(3);
    var cellOpcoes = linha.insertCell(4);

    cellNumero.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellIdade.innerHTML = idade;
    cellSexo.innerHTML = sexo;
     
    let imgEdit= document.createElement("img");
    imgEdit.src='img/editar.svg.svg';
    let imgDelet = document.createElement("img");
    imgDelet.src = 'img/excluir.svg.svg';
    imgDelet.setAttribute(`onclick`,`deleteCadastro(`+qtdLinhas+`)`);
    cellOpcoes.appendChild(imgEdit);
    cellOpcoes.appendChild(imgDelet);   

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    console.log(this.cadastros);


    //preencheCamposForm();
}
function editarCadastros(nome, idade, sexo,opcoes) {

    cadastros.rows[index].cells[1].innerHTML = nome;
    cadastros.rows[index].cells[2].innerHTML = idade;
    cadastros.rows[index].cells[3].innerHTML = sexo;

}
//function preencheCamposForm() {
   // for (var i = 0; i < cadastros.rows.length; i++) {
       // cadastros.rows[i].onclick = function () {
           // index = this.rowIndex;
           // document.getElementById("txtNome").value = cadastros.rows[index].cells[1].innerText;
            //document.getElementById("txtIdade").value = cadastros.rows[index].cells[2].innerText;
            //document.getElementById("slSexo").value = cadastros.rows[index].cells[3].innerText;
//}


    // }
//}

function deleteCadastro() {
   for (var i = 0; i < cadastros.rows.length; i++) {
       cadastros.rows[i].onclick = function(imgDelet){

        //if( this.cadastros[i].index == index){
            //this.splice(i,1);
        //}
        if (index== i) {
            cadastros.deleteRow(index);

             document.getElementById("txtNome").value = "";
            document.getElementById("txtIdade").value = "";
            document.getElementById("slSexo").value = "";
        }
            return;
       }
    //}


}
 //function cancelarCadastro(nome,idade,sexo){

    //document.getElementById("txtNome").value = "";
    //document.getElementById("txtIdade").value = "";
   // document.getElementById("slSexo").value = "";
   // return;

 }
