
var cadastro,index;

function cadastrar(numero,nome, idade,sexo,opcoes){

    var cadastro=document.getElementById('tbcadastro');
    var qtdLinhas = cadastro.rows.length;
    var linha = cadastro.insertRow(qtdLinhas);
    var linhaParam;


    var cellnumero = linha.insertCell(0);
    var cellnome = linha.insertCell(1);
    var cellidade = linha.insertCell(2);
    var cellsexo = linha.insertCell(3);
    var cellopcoes = linha.insertCell(4);

    cellnumero.innerHTML = qtdLinhas;
    cellnome.innerHTML = nome;
    cellidade.innerHTML = idade;
    cellsexo.innerHTML = sexo;
    cellopcoes.innerHTML = opcoes;

    preenchCamposForm();

}