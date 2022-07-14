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
    console.log('refresh')
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

function criarDiv(nomeTarefa){
    //criar a div de class tarefa
    const tarefaNova = document.createElement('div')
    tarefaNova.classList.add('tarefa')

    //parágrafo novo
    const pNovo = document.createElement('p')
    pNovo.innerText = nomeTarefa
    //div onde ficará os novos botões
    const btsNovos = document.createElement('div')
    btsNovos.classList.add('bts')
    
    tarefaNova.appendChild(pNovo)
    tarefaNova.appendChild(btsNovos)

    //adiciona os botões
    //checkbox
    const checkboxNova = document.createElement('input')
    checkboxNova.setAttribute('type', 'checkbox')
    checkboxNova.classList.add('check')
    
    //delete tarefa
    const deleteBtNovo = document.createElement('button')
    deleteBtNovo.classList.add('delete')
    const imgDeleteBt = document.createElement('img')
    imgDeleteBt.setAttribute('src', 'src/img/trash.png')
    deleteBtNovo.appendChild(imgDeleteBt)
    //edit tarefa
    const editBtNovo = document.createElement('button')
    editBtNovo.classList.add('edit')
    const imgEditBt = document.createElement('img')
    imgEditBt.setAttribute('src', 'src/img/write.png')
    editBtNovo.appendChild(imgEditBt)
    
    btsNovos.appendChild(checkboxNova)
    btsNovos.appendChild(deleteBtNovo)
    btsNovos.appendChild(editBtNovo)

    return tarefaNova
}

//-------Criar funções dos botões das tarefas-------
function addClickBt(listaBotoes, func){
    listaBotoes.forEach((bt, index) => {
        if(!bt.classList.contains('click')){
            bt.addEventListener('click', () => {
                func(index)
            })
            bt.classList.add('click')
        }
    })
}
// Checkbox
//criar função de checkbox
function checkTarefa(id){
    console.log('checkbox clicada')
    refresh()
}

// Delete
function removerTarefa(id){
    if(tarefas.length == 1){
        id = 0
    }
    LISTA_TAREFAS.removeChild(tarefas[id])
    refresh()
}

// Edit
function editTarefa(id){
    const NOVO_NOME_TAREFA = window.prompt('digite o novo nome')
    const PARAGRAFO_PARA_EDITAR = tarefas[id].querySelector('p')
    PARAGRAFO_PARA_EDITAR.innerText = NOVO_NOME_TAREFA
    refresh()
}