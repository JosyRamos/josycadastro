function bancoSalvo(nome, idade, sexo) {
  for (var i = 0; i < this.cadastros.rows.length; i++) {
    cadastros.rows[i].onclick = function () {
      index = this.rowIndex;
      document.getElementById('tbCadastros').value = localStorage.bancoDados;
    }
  }
}