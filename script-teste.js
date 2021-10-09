let cadastro = {
    pessoas: [],

    cadastrar() {
        this.pessoas.push(this.getData())
        this.listarPessoas()
    },

    getData() {
        return {
            nome: document.getElementById('nome').value,
            idade: document.getElementById('idade').value,
            sexo: document.getElementById('sexo').value
        }
    },

    listarPessoas() {
        console.table('pessoas', this.pessoas)
        var tbodyRef = document.getElementById('tbody');
        let linhas  = ''

        this.pessoas.forEach((pessoa, index) => {
            linhas += this.newLine(index, pessoa);
        })

        tbodyRef.innerHTML = linhas
    },

    newLine(id, pessoas){
        return `<tr>
        <th>
            ${id}
        </th>
        <th>
            ${pessoas.nome}
        </th>
        <th>
            ${pessoas.idade}
        </th>
        <th>
            ${pessoas.sexo}
        </th>
        <th>
            <h3>opçoes</h3>
        </th>
    </tr>` 
    }

}