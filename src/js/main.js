import criarDiv from "./criarDiv.js"
import addClickBt from "./addClickBt.js"

const BTADDTAREFA = document.querySelectorAll('button')[0]
const LISTA_TAREFAS = document.getElementById('lista-tarefas')
let btDelete = LISTA_TAREFAS.querySelectorAll('button.delete')
let btEdit = LISTA_TAREFAS.querySelectorAll('button.edit')
let btCheck = LISTA_TAREFAS.querySelectorAll('input.check')
let tarefas = LISTA_TAREFAS.querySelectorAll('div.tarefa')

function refresh(){
    btCheck = LISTA_TAREFAS.querySelectorAll('input.check')
    btDelete = LISTA_TAREFAS.querySelectorAll('button.delete')
    btEdit = LISTA_TAREFAS.querySelectorAll('button.edit')
    tarefas = LISTA_TAREFAS.querySelectorAll('div.tarefa')
    addClickBt(btCheck, checkTarefa)
    addClickBt(btDelete, removerTarefa)
    addClickBt(btEdit, editTarefa)
}

BTADDTAREFA.addEventListener('click', () => {
    const INPUT_TAREFA = document.querySelector('input')
    if(!INPUT_TAREFA.value){
        window.alert('digite um nome para a tarefa')
    }
    else {
        const NOVA_DIV = criarDiv(INPUT_TAREFA.value)
        INPUT_TAREFA.value = ''
        LISTA_TAREFAS.appendChild(NOVA_DIV)
        refresh()
    }
})

function checkTarefa(id){
    let risco = 'none'
    const CHECKBOX_SELECIONADA = tarefas[id].querySelector('input')
    CHECKBOX_SELECIONADA.checked ? risco = 'line-through' : risco = 'none'
    const PARAGRAFO_PARA_EDITAR = tarefas[id].querySelector('p')
    PARAGRAFO_PARA_EDITAR.style.textDecoration = risco
    refresh()
}

function removerTarefa(id){
    if(tarefas.length == 1){
        id = 0
    }
    LISTA_TAREFAS.removeChild(tarefas[id])
    refresh()
}

function editTarefa(id){
    const NOVO_NOME_TAREFA = window.prompt('Digite o novo nome para a tarefa')
    const PARAGRAFO_PARA_EDITAR = tarefas[id].querySelector('p')
    PARAGRAFO_PARA_EDITAR.innerText = NOVO_NOME_TAREFA
    refresh()
}