function cadastrar(nome, idade, sexo, opcoes) {


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
  

    let imgEdit = document.createElement("img");
    imgEdit.src = 'img/editar.svg.svg';
    imgEdit.setAttribute(`onclick`, `editCadastros(` + index + `)`);
    let imgDelet = document.createElement("img");
    imgDelet.src = 'img/excluir.svg.svg';
    imgDelet.setAttribute(`onclick`, `deleteCadastro(` + index + `)`);

    let imgVisualizar = document.createElement("img");
    imgVisualizar.src = 'img/visualizar.svg.svg';
    imgVisualizar.setAttribute(`onclick`, `visulCadastro(` + index + `)`)


    cellOpcoes.appendChild(imgEdit);
    cellOpcoes.appendChild(imgDelet);
    cellOpcoes.appendChild(imgVisualizar);

    

    this.adcionarLocal();


    

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    preencheCamposForm();
    
    

    this.fechar();
}
function preencheCamposForm() {
    for (var i = 0; i < this.cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;

        }


    }
}