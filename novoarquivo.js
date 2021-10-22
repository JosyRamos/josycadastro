var cadastros, index;
function soltar() {
    this.modal();
    this.cacelarAbrir();
    this.fecharSalvar();
    this.adcionar();
}

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

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";

    preencheCamposForm();

    this.fechar();
}
function editCadastros(nome, idade, sexo, opcoes) {
    this.modal();
    this.fecharAdcionar();
    this.salvar();
    this.cacelarAbrir();
    for (var i = 0; i < this.cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtNome").value = cadastros.rows[index].cells[1].innerText;
            document.getElementById("txtIdade").value = cadastros.rows[index].cells[2].innerText;
            document.getElementById("slSexo").value = cadastros.rows[index].cells[3].innerText;


        }

    }
}

function editarCadastros(nome, idade, sexo, opcoes) {

    cadastros.rows[index].cells[1].innerHTML = nome;
    cadastros.rows[index].cells[2].innerHTML = idade;
    cadastros.rows[index].cells[3].innerHTML = sexo;

    document.getElementById("txtNome").value = "";
    document.getElementById("txtIdade").value = "";
    document.getElementById("slSexo").value = "";
    this.fechar();

}
function preencheCamposForm() {
    for (var i = 0; i < this.cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;

        }


    }
}


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
function modal() {
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
}
function fechar() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
}
function salvar() {
    let salvar = document.querySelector(".editarCadastros")
    salvar.style.display = "block";
}
function fecharSalvar() {
    let salvar = document.querySelector(".editarCadastros")
    salvar.style.display = "none";
}
function adcionar() {
    let cadastrar = document.querySelector(".cadastrar");
    cadastrar.style.display = "block";
}
function fecharAdcionar() {
    let cadastrar = document.querySelector(".cadastrar");
    cadastrar.style.display = "none";

}
function cacelaFechar(){
    let cacelar = document.querySelector(".cacelar");
    cacelar.style.display = "none";
}
function cacelarAbrir(){
    let cacelar = document.querySelector(".cacelar");
    cacelar.style.display = "block";
}

function visulCadastro() {
    
   this.modal();
   this.desabilitar();
   this.editCadastros();
   this.cacelaFechar();
   this.fecharAdcionar();
   this.fecharSalvar();

}

function desabilitar(nome,idade,sexo){

    document.getElementById("#txtNome").desabled=true;
    document.getElementById("#txtIdade").desabled=true;
    document.getElementById("#slSexo").desabled=true;
}

