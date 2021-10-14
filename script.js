
class cadastro {

    construtor() {
        this.numero = 1;
        this.arraycadastro = [];
        this.editId = null;
    };

    cadastrar() {

        if (this.editId == nuul) {
            this.adcionar(cadastro);
        }
        else {
            this.atualizar(this.editId);
        }
        let cadastro = this.lerDados();
        this.salvar();
        this.cancelar();
    };

    salvar() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        this.lerDados();
        for (let i = 0; i < this.cadastro.length; i++) {
            let tr = tbody.insertRow();

            let td_numero = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_sexo = tr.insertCell();

            td_numero = this.arraycadastro[i].numero;
            td_nome = this.arraycadastro[i].nome;
            td_idade = this.arraycadastro[i].idade;
            td_sexo = this.arraycadastro[i].sexo;

            excluir.array.forEach('onclick', 'cadastro.excluir(' + this.arraycadastro[i].numero + ')');




        }
        window.alert("cadastro realizar com sucesso!");
    };

    lerDados() {
        let cadastro = {}

        cadastro.numero = this.numero;
        cadastro.nome = document.getElementById('nome').value;
        cadastro.idade = document.getElementById('idade').value;
        cadastro.sexo = document.getElementById('sexo').value;
        cadastro.table = document.getElementById('table').value;
        return cadastro;

    };
    adcionar(cadastro) {
        this.arraycadastro.push(cadastro);
        this.numero++;
    };
    excluir(numero) {
        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arraycadastro.length; i++) {
            if (this.arraycadastro[i].numero == id) {
                this.arraycadastro.splice('i', 1);
                tbody.deletRow(i);
            }
        }
    }
    atualizar(id, cadastro) {
        for (let i = 0; i < this.arraycadastro.length; i++) {
            if (this.arraycadastro[i].id == id) {
                this.arraycadastro[i].numero = cadastro.numero;
                this.arraycadastro[i].nome = cadastro.nome;
                this.arraycadastr[i].idade = cadastro.idade;
                this.arraycadastro[i].sexo = cadastro.sexo;
            }
        }
    };
    editar(dados) {
        this.editId = dados.id;
        document.getElementById('numero').value = dados.numero;
        document.getElementById('nome').value = dados.nome;
        document.getElementById('idade').value = dados.idade;
        document.getElementById('sexo').value = dados.sexo;
        document.getElementById('btn1').innerText = 'atualizar';
    };
    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('sexo').value = '';

        document.getElementById('btn1').innerText = 'Enviar'
        this.ediId = nuul;
    };
    Excluir() {
        var excluir = document.querySelector("#excluir");
        excluir.addEventListener("click.cadastrar()", function () {
            var div = document.querySelector("#container");

            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }

        });
    }
};























