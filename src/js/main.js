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

function criarDiv(nomeTarefa){
    //criar a div de class tarefa
    const TAREFA_NOVA = document.createElement('div')
    TAREFA_NOVA.classList.add('tarefa')

    //parágrafo novo
    const P_NOVO = document.createElement('p')
    P_NOVO.innerText = nomeTarefa
    //div onde ficará os novos botões
    const BTS_NOVOS = document.createElement('div')
    BTS_NOVOS.classList.add('bts')
    
    TAREFA_NOVA.appendChild(P_NOVO)
    TAREFA_NOVA.appendChild(BTS_NOVOS)

    //adiciona os botões
    //checkbox
    const CHECKBOX_NOVA = document.createElement('input')
    CHECKBOX_NOVA.setAttribute('type', 'checkbox')
    CHECKBOX_NOVA.classList.add('check')
    
    //delete tarefa
    const DELETE_BT_NOVO = document.createElement('button')
    DELETE_BT_NOVO.classList.add('delete')
    const IMG_DELETE_BT = document.createElement('img')
    IMG_DELETE_BT.setAttribute('src', 'src/img/trash.png')
    DELETE_BT_NOVO.appendChild(IMG_DELETE_BT)
    //edit tarefa
    const EDIT_BT_NOVO = document.createElement('button')
    EDIT_BT_NOVO.classList.add('edit')
    const IMG_EDIT_BT = document.createElement('img')
    IMG_EDIT_BT.setAttribute('src', 'src/img/write.png')
    EDIT_BT_NOVO.appendChild(IMG_EDIT_BT)
    
    BTS_NOVOS.appendChild(CHECKBOX_NOVA)
    BTS_NOVOS.appendChild(DELETE_BT_NOVO)
    BTS_NOVOS.appendChild(EDIT_BT_NOVO)

    return TAREFA_NOVA
}

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
    const NOVO_NOME_TAREFA = window.prompt('digite o novo nome')
    const PARAGRAFO_PARA_EDITAR = tarefas[id].querySelector('p')
    PARAGRAFO_PARA_EDITAR.innerText = NOVO_NOME_TAREFA
    refresh()
}