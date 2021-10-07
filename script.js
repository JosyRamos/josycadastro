
const cadastro = [];

const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const sexo = document.querySelector('#sexo');
const table = document.querySelector('#table');
var i = 0;

function cadastrar() {
    cadastro.push({

        nome: nome.value,
        idade: idade.value,
        sexo: sexo.value

    });

    while (i < cadastro.length) {

        document.querySelector('#table').innerHTML += ` </tr><td><strong>${i}=${cadastro[i].nome}</strong></td><td> ${cadastro[i].idade}</td><td> ${cadastro[i].sexo}</td></tr></p.`;
        const nome = document.querySelector('#nome').value=null;
        const idade = document.querySelector('#idade').value=null;
        const sexo = document.querySelector('#sexo').value=null;
        i++;
    }
    window.alert("cadastro realizar com sucesso!");
};

function excluir() {

    var cd1 = Number(window.prompt("qual cadastro deseja deletar?"));
    var cd2 = Number(window.prompt("até que cadastro deseja deletar?"));

    for (var i = 0; i < cadastro.length; i++) {
        cadastro.push({

            nome: nome.value,
            idade: idade.value,
            sexo: sexo.value

        });
        var outro = cadastro.splice(cd1, cd2);

        document.querySelector('#table').innerHTML += ` </tr><td><strong>${i}=${cadastro[i].nome}</strong></td><td> ${cadastro[i].idade}</td><td> ${cadastro[i].sexo}</td></tr></p.`;

    }
};

    function editar() {
      
    var posic= Number(window.prompt("Digite a linha que deseja editar"));

    let nome = document.querySelector('#nome');
    let idade = document.querySelector('#idade');
    let sexo = document.querySelector('#sexo');
    let table = document.querySelector('#table');

    
    let cadastro=[];

    cadastro.length;
    cadastro.push({

        nome: nome.value,
        idade: idade.value,
        sexo: sexo.value

    });

    document.querySelector('#table').innerHTML += `</tr><td><strong>${i}=${cadastro[i].nome}</strong></td><td> ${cadastro[i].idade}</td><td> ${cadastro[i].sexo}</td></tr></p.`;


}




























