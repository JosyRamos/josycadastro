var cadastros, index;
const bancoDados = JSON.parse(localStorage.getItem('bancoDados', bancoDados)||'[]');
function soltar() {
    this.modal();
    this.cacelarAbrir();
    this.fecharSalvar();
    this.adcionar();
};