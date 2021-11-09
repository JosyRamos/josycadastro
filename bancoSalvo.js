function inicia(){
   
  let bancoDados = localStorage.getItem('bancoDados');
  //bancoDados = JSON.parse(bancoDados);
  bancoDados = JSON.parse(localStorage.getItem('bancoDados'))
 

  bancoDados.forEach(bancoDados =>{
    cadastros = document.getElementById('thcadastro');
    var qtdLinhas = cadastros.rows.length;
    var linha = cadastros.insertRow(qtdLinhas);
  
    var cellNumero = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellSexo = linha.insertCell(3);
    var cellOpcoes = linha.insertCell(4);

    cellNumero.innerHTML = qtdLinhas;
    cellNome.innerHTML = bancoDados.txtNome;
    cellIdade.innerHTML = bancoDados.txtIdade;
    cellSexo.innerHTML = bancoDados.slSexo;


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
 });
}




