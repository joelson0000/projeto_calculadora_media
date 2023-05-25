const form = document.getElementById('form-atvidade');
const imgAprovado = '<img src="./images/aprovados.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovados =<span class="resultado aprovado">Aprovado</span>;
const spanReprovado =<span class="resultado reprovado">Reprovado</span>;
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicinaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicinaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividades.push(inputNomeAtividade);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovados : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas = notas[i];
    }

    return somaDasNotas / notas.length
}