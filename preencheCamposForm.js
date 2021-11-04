function preencheCamposForm(nome, idade, sexo, opcoes) {
    for (var i = 0; i < this.cadastros.rows.length; i++) {
        cadastros.rows[i].onclick = function () {
            index = this.rowIndex;

          /*  let bancoDados = JSON.parse(localStorage.getItem('bancoDados') || '[]')
            bancoDados.push(
                {
                    txtNome: nome,
                    txtIdade: idade,
                    slSexo: sexo

                }
            )

            localStorage.setItem('bancoDados', JSON.stringify(bancoDados))
            bancoDados = JSON.parse(localStorage.getItem('bancoDados'))*/

            //bancoDados=linha.insertCell(index);
            //bancoDados.innerHTML[index]



        }


    }
}